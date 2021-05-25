factorial = (number) => {
  let answer = 1;
  while (number > 0) {
    answer *= number;
    number -= 1;
  }
  return answer;
}

let rlSync = require('readline-sync');
let number = rlSync.question("Enter a Number: ");
console.log(factorial(number));
if (Number(number) > 0) {
  console.log(`The Factorial of ${number} is ${factorial(Number(number))}`);
} else {
  console.log("Please put in a valid positive number.");
}