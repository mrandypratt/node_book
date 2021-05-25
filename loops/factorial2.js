factorial = (number) => {
  if (number > 1) {
    number *= factorial(number - 1);
  }
  return number;
}

let rlSync = require('readline-sync');
let number = rlSync.question("Enter a Number: ");
console.log(factorial(number));
if (Number(number) > 0) {
  console.log(`The Factorial of ${number} is ${factorial(Number(number))}`);
} else {
  console.log("Please put in a valid positive number.");
}