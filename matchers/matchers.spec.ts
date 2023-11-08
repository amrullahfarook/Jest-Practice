import { squareRoot } from './matchers'

test('Calculating square root with approximate equality', () => {
  // Expected square root of 9 is 3
  const result = squareRoot(9);
  // expect(result).toBe(3); // Should fail
  expect(result).toBeCloseTo(3, 1); // Tolerance of 1 decimal place
});