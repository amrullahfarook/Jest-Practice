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

// checks wether a given date range is more than a month
export function isMultipleMonths(startDate: Date, endDate: Date): boolean {
    const difference: number = Math.abs(startDate.getTime() - endDate.getTime())
    const totalDays: number = difference / 1000/60/60/24

    if(totalDays < 60) {
        return false
    }

    return true
}