### rchain-web

**Up to date with rnode 0.12.0**

rchain-web is a general purpose javascript/typescript library to interact with the RChain blockchain from the browser, it is the alter ego of [rchain-toolkit](https://github.com/fabcotech/rchain-toolkit) that has been built for nodeJS.

**Warning**: This library does not use keccak256 and/or blake2. It is not able to generate hashes and signature necessary for deploying rholang. In order to do that you can use nodeJS rchain-toolkit, or metamask (see example).

#### Examples

**Instanciate RChainWeb**

You will need an instance of RChainWeb for all the HTTP operations.

```
const rchainWeb = new RChainWeb.http({
  readOnlyHost: "https://observer.bm.testnet.rchain.coop",
  validatorHost: "https://node0.bm.testnet.rchain.coop",
});
```

**deploying with metamask**

```
const main = async () => {
  const vab = await rchainWeb.validAfterBlockNumber();
  const deployData = {
    term: `new x in { x!("hello") }`,
    timestamp,
    validAfterBlockNumber: vab,
    phloLimit: 100000000,
    phloPrice: 1,
  };

  const dds = RChainWeb.utils.getDeployDataToSign(deployData);

  const sig = await window.ethereum
    .request({
      method: "personal_sign",
      params: [
        [...dds],
        METAMASK_ETH_ADDRESS // ETH address of metamask account
      ],
    })

  const optionsDeploy = {
    data: deployData,
    deployer: PUBLIC_KEY, // RChain public key
    signature: RChainWeb.utils.encodeBase16(
      RChainWeb.utils.decodeBase16(sig)
    ),
    sigAlgorithm: "secp256k1:eth",
  };

  const result = await rchainWeb
    .deploy(
      optionsDeploy,
      120000 * 10 // will try to get value on x during 20 minutes
    )
    .then((a) => {
      resolve(a);
    })

  console.log(result)
}
main();
```

**explore deploy**

```
const main = async () => {
  const result = await rchainWeb
    .exploreDeploy(
      {
        term: `new x in { x!("hello") }`
      }
    );

  const value = RChainWeb.utils.rhoValToJs(result.expr[0])
}
main();
```

**explore deploys (many at a time)**

```
const main = async () => {
  const result = await rchainWeb
    .exploreDeploys(
      [
        `new x in { x!("hello") }`,
        `new x in { x!("world") }`,
      ]
    );

  const value1 = RChainWeb.utils.rhoValToJs(results[0].expr[0])
  const value2 = RChainWeb.utils.rhoValToJs(results[1].expr[0])
}
main();
```

**prepare deploy**

```
const main = async () => {
  const pd = await rchainWeb
    .prepareDeploy(
      {
        deployer: "abcdef", // RChain public key
        timestamp: new Date().getTim(),
        nameQty: 1,
      }
    );

  console.log(pd)
}
main();
```

**data at name**

```
const main = async () => {
  const result = await rchainWeb
    .dataAtName(
      {
        name: {
          UnforgPrivate: { data: pd.names[0] },
        },
        depth: 3
      }
    );

  console.log(RChainWeb.utils.rhoValToJs(result.exprs[0].expr))
}
main();
```

#### List of methods

**Utils**

- RChainWeb.utils.rhoValToJs
- RChainWeb.utils.rhoExprToVar
- RChainWeb.utils.decodePar
- RChainWeb.utils.getDeployDataToSign
- RChainWeb.utils.decodeBase16
- RChainWeb.utils.encodeBase16

**HTTP (after instanciated)**

- RChainWeb.http.dataAtName
- RChainWeb.http.deploy
- RChainWeb.http.exploreDeploy
- RChainWeb.http.exploreDeploys
- RChainWeb.http.prepareDeploy
- RChainWeb.http.validAfterBlockNumber
- RChainWeb.http.blocks
