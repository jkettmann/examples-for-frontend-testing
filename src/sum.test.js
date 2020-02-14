import sum from './sum';

describe('sum', () => {
  test('returns the sum of the arguments', () => {
    expect(sum(1, 4, 5, 7)).toBe(17);
  });
});