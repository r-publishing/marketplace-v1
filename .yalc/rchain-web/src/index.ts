import { rhoValToJs } from "rchain-toolkit/src/utils/rhoValToJs";
import { rhoExprToVar } from "rchain-toolkit/src/utils/rhoExprToVar";
import { decodePar } from "rchain-toolkit/src/utils/decodeParBrowser";
import { getDeployDataToSign } from "rchain-toolkit/src/utils/getDeployDataToSignBrowser";

const decodeBase16 = (hexStr) => {
  const removed0x = hexStr.replace(/^0x/, "");
  const byte2hex = ([arr, bhi], x) =>
    bhi ? [[...arr, parseInt(`${bhi}${x}`, 16)]] : [arr, x];
  const [resArr] = Array.from(removed0x).reduce(byte2hex, [[]]);
  return Uint8Array.from(resArr);
};

const encodeBase16 = (bytes) =>
  Array.from(bytes)
    .map((x) => (x & 0xff).toString(16).padStart(2, 0))
    .join("");

// ==============
// Deploy
// ==============

export interface DeployData {
  timestamp: number;
  term: string;
  phloPrice: number;
  phloLimit: number;
  validAfterBlockNumber: number;
}

export interface DeployOptions {
  data: DeployData;
  deployer: string;
  signature: string;
  sigAlgorithm: "secp256k1";
}
export interface DeployResponse {
  names: string[];
  blockNumber: number;
}

// ==============
// Exploratory deploy
// ==============

export interface ExploreDeployOptions {
  term: string;
}
export interface ExploreDeployResponse {
  names: string[];
  blockNumber: number;
}
// ==============
// Blocks by position
// ==============

export interface BlocksOptions {
  position: number;
}
export interface BlocksResponse {
  blocks: LightBlockInfo[];
}

// ==============
// PrepareDeploy
// ==============

export interface PrepareDeployOptions {
  deployer: string;
  timestamp: number;
  nameQty: number;
}
export interface PrepareDeployResponse {
  names: string[];
  blockNumber: number;
}

// data-at-name
type NameType = "UnforgPrivate" | "UnforgDeploy" | "UnforgDeployer";
export interface DataAtNameOptions {
  name: {
    [nameType: string]: {
      data: string;
    };
  };
  depth: number;
}

export interface DataAtNameReponse {
  exprs: {
    expr: { [type: string]: { data: any } };
    block: { blockHash: string; blockNumber: number };
  }[];
  blockNumber: number;
}

export default {
  utils: {
    rhoValToJs: rhoValToJs,
    rhoExprToVar: rhoExprToVar,
    decodePar: decodePar,
    getDeployDataToSign: getDeployDataToSign,
    decodeBase16: decodeBase16,
    encodeBase16: encodeBase16,
  },
  http: function (config: { readOnlyHost: string; validatorHost: string }) {
    if (!config.readOnlyHost) {
      throw new Error("Please provide 1st argument readOnlyHost");
    }
    if (config.readOnlyHost.startsWith("https")) {
      console.log("warning: readOnlyHost does not start with https");
    }
    if (!config.validatorHost) {
      throw new Error("Please provide 1st argument validatorHost");
    }
    if (config.validatorHost.startsWith("https")) {
      console.log("warning: validatorHost does not start with https");
    }
    this.readOnlyHost = config.readOnlyHost;
    this.validatorHost = config.validatorHost;

    // ==============
    // Deploy
    // ==============

    this.deploy = async (
      options: DeployOptions,
      timeout: undefined | number = undefined
    ): Promise<string | DataAtNameReponse> => {
      let pd: undefined | PrepareDeployResponse = undefined;
      if (typeof timeout === "number") {
        pd = await this.prepareDeploy({
          deployer: options.deployer,
          timestamp: options.data.timestamp,
          nameQty: 1,
        });
      }

      return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        req.open("POST", this.validatorHost + "/api/deploy", true);
        req.setRequestHeader("Content-type", "application/json");

        req.onreadystatechange = () => {
          //Call a function when the state changes.
          if (req.readyState == 4) {
            if (req.readyState === 4) {
              if (req.status === 200) {
                try {
                  const b = req.responseText;
                  if (typeof timeout === "number") {
                    let s = new Date().getTime();
                    let ongoning = false;
                    const interval = setInterval(async () => {
                      if (ongoning) {
                        return;
                      }
                      ongoning = true;
                      if (new Date().getTime() - timeout > s) {
                        clearInterval(interval);
                        reject("TIMEOUT");
                      }
                      const dan = await this.dataAtName({
                        name: {
                          UnforgPrivate: { data: pd.names[0] },
                        },
                        depth: 3,
                      });
                      if (dan && dan.exprs && dan.exprs.length) {
                        resolve(dan);
                        clearInterval(interval);
                      }
                      ongoning = false;
                    }, 8000);
                  } else {
                    resolve(b);
                  }
                } catch (err) {
                  reject(err);
                }
              } else {
                reject(req.responseText);
              }
            }
          }
        };
        req.send(JSON.stringify(options));
      });
    };

    // ==============
    // Valid after block number
    // ==============

    this.validAfterBlockNumber = async (): Promise<number> => {
      const validAfterBlockNumberResponse = (
        await this.blocks({
          position: 1,
        })
      )[0].blockNumber;
      return validAfterBlockNumberResponse;
    };

    // ==============
    // Exploratory deploy
    // ==============

    this.exploreDeploy = (options: ExploreDeployOptions): Promise<any> => {
      return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        req.open("POST", this.readOnlyHost + "/api/explore-deploy", true);
        req.setRequestHeader("Content-type", "application/json");
        req.onreadystatechange = () => {
          if (req.readyState === 4) {
            if (req.status === 200) {
              try {
                resolve(JSON.parse(req.responseText));
              } catch (err) {
                reject(err);
              }
            } else {
              reject(req.responseText);
            }
          }
        };
        req.send(options.term);
      });
    };

    this.exploreDeploys = (terms: string[]) => {
      return Promise.all(terms.map((t) => this.exploreDeploy({ term: t })));
    };

    // ==============
    // Blocks by position
    // ==============

    this.blocks = (options: BlocksOptions): Promise<any> => {
      return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        req.open(
          "GET",
          this.readOnlyHost + "/api/blocks/" + options.position,
          true
        );
        req.setRequestHeader("Content-type", "application/json");
        req.onreadystatechange = () => {
          if (req.readyState === 4) {
            if (req.status === 200) {
              try {
                resolve(JSON.parse(req.responseText));
              } catch (err) {
                reject(err);
              }
            } else {
              reject(req.responseText);
            }
          }
        };
        req.send();
      });
    };

    // ==============
    // DataAtName
    // ==============
    this.dataAtName = (
      options: DataAtNameOptions
    ): Promise<DataAtNameReponse> => {
      return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        req.open("POST", this.readOnlyHost + "/api/data-at-name", true);
        req.setRequestHeader("Content-type", "application/json");
        req.onreadystatechange = () => {
          if (req.readyState === 4) {
            if (req.status === 200) {
              try {
                resolve(JSON.parse(req.responseText));
              } catch (err) {
                reject(err);
              }
            } else {
              reject(req.responseText);
            }
          }
        };
        req.send(JSON.stringify(options));
      });
    };

    // ==============
    // PrepareDeploy
    // ==============
    this.prepareDeploy = (
      options: PrepareDeployOptions
    ): Promise<PrepareDeployResponse> => {
      return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        req.open("POST", this.readOnlyHost + "/api/prepare-deploy", true);
        req.setRequestHeader("Content-type", "application/json");
        req.onreadystatechange = () => {
          if (req.readyState === 4) {
            if (req.status === 200) {
              try {
                resolve(JSON.parse(req.responseText));
              } catch (err) {
                reject(err);
              }
            } else {
              reject(req.responseText);
            }
          }
        };
        req.send(JSON.stringify(options));
      });
    };
  },
};
