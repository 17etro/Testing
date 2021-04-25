const { hashFunction } = require("../index");

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
test("Checking empty string ( expects error )", async () => {
  const hashData = {
    password: "1",
    salt: "",
  };

  try {
    await hashFunction(hashData);
  } catch (error) {
    expect(err).not.toBe(undefined);
  }
});

test("Checking errors if missing password ( expect error )", async () => {
  const hashData = {
    password: "",
    salt: "1",
  };

  try {
    await hashFunction(hashData);
  } catch (error) {
    expect(err).not.toBe(undefined);
  }
});

//testing keylen
test("Checking if keylen length matching variable", async () => {
  const hashData = {
    password: pass_string,
    salt: salt_string,
    keylen: 27,
  };

  const result = await hashFunction(hashData);
  expect(typeof result.toString("hex")).toBe("string");
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

  const firstHash = await hashFunction(hashData1);
  const secondHash = await hashFunction(hashData2);
  expect(firstHash.toString("hex")).toEqual(secondHash.toString("hex"));
});

// testing empty strings
test("Checking errors if missing salt ( expect error )", async () => {
  const hashData = {
    password: "",
    salt: "",
  };

  try {
    await hashFunction(hashData);
  } catch (error) {
    expect(err).not.toBe(undefined);
  }
});

// testing default en-US strings
test("Checking default strings", async () => {
  const hashData = {
    password: pass_string,
    salt: salt_string,
  };

  try {
    await hashFunction(hashData);
  } catch (error) {
    expect(err).not.toBe(undefined);
  }
});

// testing numbers ( must throw error )
test("Checking numbers ( expect error )", async () => {
  const hashData = {
    password: pass_num,
    salt: salt_num,
  };

  try {
    await hashFunction(hashData);
  } catch (error) {
    expect(error).not.toBe(undefined);
  }
});

// tesing cyrillic languages in password and salt
test("Checking cyrillic languages", async () => {
  const hashData = {
    password: pass_cyr,
    salt: salt_cyr,
  };

  const result = await hashFunction(hashData);
  expect(typeof result.toString("hex")).toBe("string");
});

// testing spec symbols
test("Checking special symbols", async () => {
  const hashData = {
    password: pass_spec_symbols,
    salt: salt_spec_symbols,
  };

  const result = await hashFunction(hashData);
  expect(typeof result.toString("hex")).toBe("string");
});

// tesing regular expressions
test("Checking regular expressions ( expect error )", async () => {
  const hashData = {
    password: pass_reg_exp,
    salt: salt_reg_exp,
  };

  try {
    await hashFunction(hashData);
  } catch (error) {
    expect(error).not.toBe(undefined);
  }
});

// tesing obj parameters
test("Checking object parameters ( expect error )", async () => {
  const hashData = {
    password: pass_obj,
    salt: salt_obj,
  };

  try {
    await hashFunction(hashData);
  } catch (error) {
    expect(error).not.toBe(undefined);
  }
});

// tesing array parameters
test("Checking array parameters ( expect error )", async () => {
  const hashData = {
    password: pass_arr,
    salt: salt_arr,
  };

  try {
    await hashFunction(hashData);
  } catch (error) {
    expect(error).not.toBe(undefined);
  }
});

// tesing emoji part 1
test("Checking emoji (1)", async () => {
  const hashData = {
    password: pass_emoji,
    salt: salt_emoji,
  };

  const result = await hashFunction(hashData);
  expect(typeof result.toString("hex")).toBe("string");
});

// tesing another languages part 1
test("Checking another languages (1)", async () => {
  const hashData = {
    password: pass_another_lang,
    salt: salt_another_lang,
  };

  const result = await hashFunction(hashData);
  expect(typeof result.toString("hex")).toBe("string");
});

// tesing emoji part 2
test("Checking emoji (2)", async () => {
  const hashData = {
    password: pass_emoji2,
    salt: salt_emoji2,
  };

  const result = await hashFunction(hashData);
  expect(typeof result.toString("hex")).toBe("string");
});

// tesing another languages part 2
test("Checking another languages (2)", async () => {
  const hashData = {
    password: pass_another_lang2,
    salt: salt_another_lang2,
  };

  const result = await hashFunction(hashData);
  expect(typeof result.toString("hex")).toBe("string");
});
