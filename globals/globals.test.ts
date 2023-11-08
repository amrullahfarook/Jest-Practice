import { isPalindrome } from "./globals";

describe.each([
    {number: 121, expected: true},
    {number: 12345, expected: false},
    {number: 1331, expected: true},
]) ('check if number is a palindrome', ({number, expected}) => {
  test(`returns ${expected}`, () => {
    expect(isPalindrome(number)).toBe(expected);
  });
})