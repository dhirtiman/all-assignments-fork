/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  str = str.toUpperCase().replace(/[^\w]/g,'');
  let str2 = '';
  for (i = str.length-1; i >= 0; i--) {
    str2 += str[i];
  }
  return str === str2;
}

module.exports = isPalindrome;
