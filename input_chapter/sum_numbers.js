let rlSync = require('readline-sync');

let num1 = rlSync.question('First Number:\n');
let num2 = rlSync.question('Second Number:\n');
let sum = Number(num1) + Number(num2);
console.log(`The numbers ${num1} and ${num2} add to ${sum}.`);