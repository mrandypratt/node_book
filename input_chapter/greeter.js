let rlSync = require('readline-sync');

function greeter(firstName, lastName) {
  console.log(`Hello, ${firstName} ${lastName}`);
}

let firstName = rlSync.question("What is your first name? ");
let lastName = rlSync.question("What is your last name? ");

greeter(firstName, lastName);

