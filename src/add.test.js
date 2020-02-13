import add from './add';

describe('add', () => {
  test('returns the sum of the arguments', () => {
    expect(add(1, 4, 5, 7)).toBe(17);
  });
});