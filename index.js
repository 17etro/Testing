const { scrypt } = require("crypto");

// hashData = {
//     password: '',
//     salt: '',
// };

const passwordIsMissing = "password is missing...";
const saltIsIncorrect = "salt is incorrect...";

const hashFunction = (hashData) => {
  return new Promise((resolve, reject) => {
    if (!hashData.password) {
      reject({ message: passwordIsMissing });
    }
    if (!hashData.salt) {
      reject({ message: saltIsIncorrect });
    }

    const { salt, password } = hashData;

    scrypt(password, salt, 64, options, (err, readyKey) => {
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
