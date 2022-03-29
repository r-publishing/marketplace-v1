import * as rchainToolkit from 'rchain-toolkit';

import hashGenerator from './generateHashFromDocument';

export default signatureGenerator = (folder, privateKey) => {
  const blake2bHash = hashGenerator(folder);
  const signature = rchainToolkit.utils.signSecp256k1(blake2bHash, privateKey);
  const signatureHex = Buffer.from(signature).toString('hex');

  return signatureHex;
};
 