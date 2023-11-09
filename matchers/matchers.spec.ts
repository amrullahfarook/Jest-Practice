import { isMultipleMonths, squareRoot } from './matchers'

test('Calculating square root with approximate equality', () => {
  // Expected square root of 9 is 3
  const result = squareRoot(9);
  // expect(result).toBe(3); // Should fail
  expect(result).toBeCloseTo(3, 1); // Tolerance of 1 decimal place
});

test('Check wether a date range is more than one month', () => {
    const result = isMultipleMonths(new Date("2023-11-09T07:00:00"), new Date("2024-01-09T07:00:00"))

    expect(result).toBeTruthy()
})

test('Check wether a date range is not more than one month', () => {
    const result = isMultipleMonths(new Date("2023-01-09T07:00:00"), new Date("2023-02-09T07:00:00"))

    expect(result).toBeFalsy()
})