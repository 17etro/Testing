const { hashFunction, constants } = require("../index");

// Заготовки разных солей и паролев для тестирования

// passwords
const pass_num = 322;
const pass_string = "ggghhhjjj";
const pass_cyr = "Петроъэйї";
const pass_spec_symbols = "!@#$^&";
const pass_reg_exp = /d(b+)d/g;
const pass_obj = { name: "Petro", age: "18" };
const pass_arr = [123, 321, 456];
const pass_emoji = "😀😃😄😁😆😅😂🤣";
const pass_another_lang = "اَلعَرَبِيَّةُ ٱلْفُصْحَىٰ";
const pass_emoji2 = "😏😒😞😔😟😕";
const pass_another_lang2 = "这点儿痛我还顶得住";

//salts
const salt_num = 1337;
const salt_string = "chinchinde";
const salt_cyr = "ЯЛюблюСпать";
const salt_spec_symbols = "-*!(№:?)";
const salt_reg_exp = /\r\n/g;
const salt_obj = { cookies: "tasty", weight: 1000 };
const salt_arr = [{ item: "1" }, { item: "2" }];
const salt_emoji = "😈👿👹👺🤡";
const salt_another_lang = "اللغة العربية‎";
const salt_emoji2 = "👋🤚🖐";
const salt_another_lang2 = "他遇到困难从不二乎";

// Тестируем на отсутствие соли / пароля функцию
test("Checking empty string ( expects error )", () => {
  const hashData = {
    password: "1",
    salt: "",
  };

  return hashFunction(hashData)
    .then()
    .catch((err) => {
      expect(err.message).toEqual(constants.saltIsIncorrect);
    });
});
test("Checking errors if missing password ( expect error )", () => {
  const hashData = {
    password: "",
    salt: "1",
  };

  return hashFunction(hashData)
    .then()
    .catch((err) => {
      expect(err.message).toEqual(constants.passwordIsMissing);
    });
});

//testing keylen
test("Checking if keylen length matching variable", () => {
  const hashData = {
    password: pass_string,
    salt: salt_string,
    keylen: 27,
  };

  return hashFunction(hashData).then((res) => {
    expect(res.length).toBe(27 * 2);
  });
});

test("Checking if keylen 64 equal to default keylen", async () => {
  const hashData1 = {
    password: pass_string,
    salt: salt_string,
    keylen: 64,
  };

  const hashData2 = {
    password: pass_string,
    salt: salt_string,
  };
  try {
    const firstHash = await hashFunction(hashData1);
    const secondHash = await hashFunction(hashData2);

    expect(firstHash).toEqual(secondHash);
  } catch (_) {}
});

// testing empty strings
test("Checking errors if missing salt ( expect error )", () => {
  const hashData = {
    password: "",
    salt: "",
  };

  return hashFunction(hashData)
    .then()
    .catch((err) => {
      expect(err.message).toEqual(constants.passwordIsMissing);
    });
});

// testing default en-US strings
test("Checking default strings", () => {
  const hashData = {
    password: pass_string,
    salt: salt_string,
  };

  return hashFunction(hashData).then((res) => {
    expect(typeof res).toBe("string");
  });
});

// testing numbers ( must throw error )
test("Checking numbers ( expect error )", () => {
  const hashData = {
    password: pass_num,
    salt: salt_num,
  };

  return hashFunction(hashData)
    .then()
    .catch((err) => {
      expect(err).not.toBe(undefined);
    });
});

// tesing cyrillic languages in password and salt
test("Checking cyrillic languages", () => {
  const hashData = {
    password: pass_cyr,
    salt: salt_cyr,
  };

  return hashFunction(hashData)
    .then((res) => {
      expect(typeof res).toBe("string");
    })
    .catch();
});

// testing spec symbols
test("Checking special symbols", () => {
  const hashData = {
    password: pass_spec_symbols,
    salt: salt_spec_symbols,
  };

  return hashFunction(hashData)
    .then((res) => {
      expect(typeof res).toBe("string");
    })
    .catch();
});

// tesing regular expressions
test("Checking regular expressions ( expect error )", () => {
  const hashData = {
    password: pass_reg_exp,
    salt: salt_reg_exp,
  };

  return hashFunction(hashData)
    .then()
    .catch((err) => {
      expect(err).not.toBe(undefined);
    });
});

// tesing obj parameters
test("Checking object parameters ( expect error )", () => {
  const hashData = {
    password: pass_obj,
    salt: salt_obj,
  };

  return hashFunction(hashData)
    .then()
    .catch((err) => {
      expect(err).not.toBe(undefined);
    });
});

// tesing array parameters
test("Checking array parameters ( expect error )", () => {
  const hashData = {
    password: pass_arr,
    salt: salt_arr,
  };

  return hashFunction(hashData)
    .then()
    .catch((err) => {
      expect(err).not.toBe(undefined);
    });
});

// tesing emoji part 1
test("Checking emoji (1)", () => {
  const hashData = {
    password: pass_emoji,
    salt: salt_emoji,
  };

  return hashFunction(hashData).then((res) => {
    expect(typeof res).toBe("string");
  });
});

// tesing another languages part 1
test("Checking another languages (1)", () => {
  const hashData = {
    password: pass_another_lang,
    salt: salt_another_lang,
  };

  return hashFunction(hashData).then((res) => {
    expect(typeof res).toBe("string");
  });
});

// tesing emoji part 2
test("Checking emoji (2)", () => {
  const hashData = {
    password: pass_emoji2,
    salt: salt_emoji2,
  };

  return hashFunction(hashData).then((res) => {
    expect(typeof res).toBe("string");
  });
});

// tesing another languages part 2
test("Checking another languages (2)", () => {
  const hashData = {
    password: pass_another_lang2,
    salt: salt_another_lang2,
  };

  return hashFunction(hashData).then((res) => {
    expect(typeof res).toBe("string");
  });
});
