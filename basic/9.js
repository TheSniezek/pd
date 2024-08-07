//  Write a JavaScript program to create a new string from a given string changing the position of first and last characters.
// The string length must be greater than or equal to 1.
// Test Data :
// console.log(rewerseLetters('Hakuna'));
// console.log(rewerseLetters('ab'));
// console.log(rewerseLetters('a'));
// console.log(rewerseLetters());
// console.log(rewerseLetters('turbopompowtryskiwacz'));
// Expected Output :
// aakunH
// ba
// undefined
// undefined
// zurbopompowtryskiwact

const rewerseLetters = (str) => {
  if (str?.length >= 1) {
    return str.slice(-1) + str.slice(1, -1) + str[0];
  }
};

console.log(rewerseLetters('Hakuna'));
console.log(rewerseLetters('ab'));
console.log(rewerseLetters('a'));
console.log(rewerseLetters());
console.log(rewerseLetters('turbopompowtryskiwacz'));