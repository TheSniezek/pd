//  Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.
// Test Data:
// console.log(findValue(2, 50));
// console.log(findValue(2));
// console.log(findValue(45, 143));
// console.log(findValue(99, 101));
// console.log(findValue(99, 100));
// console.log(findValue(-99, 90));
// Expected Output:
// 50
// null
// 143
// 99 101
// 100
// 90

const findValue = (num1, num2) => {
  const num1abs = Math.abs(num1 - 100);
  const num2abs = Math.abs(num2 - 100);

  return num2 === undefined
    ? null
    : num1abs < num2abs
    ? num1
    : num2abs < num1abs
    ? num2
    : `${num1} ${num2}`;
};

console.log(findValue(2, 50));
console.log(findValue(2));
console.log(findValue(45, 143));
console.log(findValue(99, 101));
console.log(findValue(99, 100));
console.log(findValue(-99, 90));