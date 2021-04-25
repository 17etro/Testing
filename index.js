const { scryptSync } = require("crypto");

// hashData = {
//     password: '',
//     salt: '',
//     keylen: '',
// };

const defaultKeyLen = 64;

const hashFunction = (hashData) => {
  const { salt, password } = hashData;
  const keylen = hashData.keylen ? hashData.keylen : defaultKeyLen;

  return scryptSync(password, salt, keylen);
};

module.exports = {
  hashFunction
};
