const { scrypt } = require("crypto");

// hashData = {
//     password: '',
//     salt: '',
//     keylen: '',
// };

const passwordIsMissing = "password is missing...";
const saltIsIncorrect = "salt is incorrect...";
const defaultKeyLen = 64;

const hashFunction = (hashData) => {
  return new Promise((resolve, reject) => {
    if (!hashData.password) {
      reject({ message: passwordIsMissing });
    }
    if (!hashData.salt) {
      reject({ message: saltIsIncorrect });
    }

    const { salt, password } = hashData;

    const keylen = hashData.keylen ? hashData.keylen : defaultKeyLen;

    scrypt(password, salt, keylen, (err, readyKey) => {
      if (err) reject(err);
      resolve(readyKey.toString("hex"));
    });
  });
};

module.exports = {
  hashFunction,
  constants: {
    passwordIsMissing,
    saltIsIncorrect,
  },
};
