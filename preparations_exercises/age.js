function declareAge(age) {
  console.log(`You are ${age} years old.`);
}

function agePrediction(age, lengthOfTime) {
  console.log(`In ${lengthOfTime} years, you will be ${age + lengthOfTime} years old.`)
}

let myAge = 28
declareAge(myAge);
for (let time = 1; time < 5; time++) {
  agePrediction(myAge, time * 10);
}
