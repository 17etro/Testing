const { BinaryFlag } = require('../binaryFlag');
const errors = require('../constants');

test('[initial] length < 2', () => {
  try {
    const newFlag = new BinaryFlag(1, true);
  } catch (err) {
    const errorIncludesString = err.toString().includes(errors.length_1);
    expect(errorIncludesString).toBe(true);
  }
});

test('[init] length > 17179868704', () => {
  try {
    const newFlag = new BinaryFlag(17179868705, true);
  } catch (err) {
    const errorIncludesString = err.toString().includes(errors.length_2);
    expect(errorIncludesString).toBe(true);
  }
});

test('[ compare toString ] 1 time', () => {
  const newFlag = new BinaryFlag(3, true);

  expect(newFlag.ToString()).toBe('{}');
});

test('[ setFlag pos val ] position incorrect (1)', () => {
  try {
    const newFlag = new BinaryFlag(3, true);
    newFlag.SetFlag(4, true);
  } catch (err) {
    const errorIncludesString = err.toString().includes(errors.position_1);
    expect(errorIncludesString).toBe(true);
  }
});

test('[ setFlag pos val ] position incorrect (2)', () => {
  try {
    const newFlag = new BinaryFlag(3, true);
    newFlag.SetFlag(-10, true);
  } catch (err) {
    const errorIncludesString = err.toString().includes(errors.position_2);
    expect(errorIncludesString).toBe(true);
  }
});

test('[ setFlag pos val ] value incorrect', () => {
  try {
    const newFlag = new BinaryFlag(3, true);
    newFlag.SetFlag(2, 'incorrect data');
  } catch (err) {
    const errorIncludesString = err.toString().includes(errors.boolean);
    expect(errorIncludesString).toBe(true);
  }
});

test('[ compare toString ] 2 time', () => {
  const newFlag = new BinaryFlag(3, true);
  newFlag.SetFlag(2, false);
  expect(newFlag.ToString()).toBe('{"2":false}');
});

test('[ dispose flag ] position incorrect (1)', () => {
  try {
    const newFlag = new BinaryFlag(3, true);
    newFlag.DisposeFlag(4);
  } catch (err) {
    const errorIncludesString = err.toString().includes(errors.position_1);
    expect(errorIncludesString).toBe(true);
  }
});

test('[ dispose flag ] position incorrect (2)', () => {
  try {
    const newFlag = new BinaryFlag(3, true);
    newFlag.DisposeFlag(-10);
  } catch (err) {
    const errorIncludesString = err.toString().includes(errors.position_2);
    expect(errorIncludesString).toBe(true);
  }
});

test('[ dispose flag | compare toString ] normal', () => {
  const newFlag = new BinaryFlag(3, true);
  newFlag.SetFlag(2, false);
  newFlag.DisposeFlag(2);

  expect(newFlag.ToString()).toBe('{}');
});

test('[ get flag ] position incorrect (1)', () => {
  try {
    const newFlag = new BinaryFlag(3, true);
    newFlag.GetFlag(4);
  } catch (err) {
    const errorIncludesString = err.toString().includes(errors.position_1);
    expect(errorIncludesString).toBe(true);
  }
});

test('[ get flag ] position incorrect (2)', () => {
  try {
    const newFlag = new BinaryFlag(3, true);
    newFlag.GetFlag(-10);
  } catch (err) {
    const errorIncludesString = err.toString().includes(errors.position_2);
    expect(errorIncludesString).toBe(true);
  }
});

test('[ get flag ] normal', () => {
  const newFlag = new BinaryFlag(3, true);
  expect(newFlag.GetFlag(2)).toBe(true);
});
