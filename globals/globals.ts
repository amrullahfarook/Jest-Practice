export function isPalindrome(number: number) {
  // Convert the number to a string to work with its digits
  const numStr = number.toString();

  // Reverse the string
  const reversedStr = numStr.split('').reverse().join('');

  // Check if the original and reversed strings are the same
  return numStr === reversedStr;
}