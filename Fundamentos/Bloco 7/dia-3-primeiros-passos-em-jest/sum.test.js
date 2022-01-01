const sum = require('./soma'); // puxa a função de outro arquivo para esse.

it('sums two values', () => {
  expect(sum(2, 3)).toEqual(5);
});