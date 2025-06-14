/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const cleaned = str.toLowerCase();             
  const reversed = cleaned.split('').reverse().join(''); 
  return cleaned === reversed;                   
}

module.exports = isPalindrome;

console.log(isPalindrome("Nan"));     
console.log(isPalindrome("Racecar")); 
console.log(isPalindrome("hello"));   



