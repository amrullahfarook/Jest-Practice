// calculate the square root of a number, using an iterative numerical approximation method
export function squareRoot(number: number) {
  const tolerance = 1e-6;
  const maxIterations = 100;
  let estimate = number / 2; // Initial estimate
  let iterations = 0;

  while (Math.abs(number - estimate * estimate) > tolerance && iterations < maxIterations) {
    estimate = 0.5 * (estimate + number / estimate);
    iterations++;
  }

  return estimate;
}