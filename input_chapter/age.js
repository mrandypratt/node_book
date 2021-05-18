let rlSync = require('readline-sync');

//Function to print present age statement
function presentAge(age) {
  console.log(`You are ${age} years old.`);
}

//Function to print future age statement
function futureAge(age, lengthOfTime) {
  console.log(`In ${lengthOfTime} years, you will be ${age + lengthOfTime} years old.`)
}

let myAge = rlSync.question("What is your age? ")
presentAge(myAge);
for (let time = 1; time < 5; time++) {
  futureAge(Number(myAge), time * 10);
}
