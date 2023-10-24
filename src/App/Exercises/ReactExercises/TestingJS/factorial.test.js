import { factorial } from './factorial';

test('multiplies factorial 5 to equal 120', () => {
  expect(factorial(5)).toBe(120);
});
