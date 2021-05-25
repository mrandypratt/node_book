let names = ['Andy', 'Coburn', 'Elizabeth', 'Sam'];
let upperNames = [];
let index = 0;

//While Loop
while (index < names.length) {
  let upperCaseName = names[index].toUpperCase();
  upperNames.push(upperCaseName);
  index += 1;
}

console.log(upperNames);

//Do While Loop
index = 0
upperNames = [];
do {
  let upperCaseName = names[index].toUpperCase();
  upperNames.push(upperCaseName);
  index += 1;
} while (index < names.length)

console.log(upperNames);

//For Loop
upperNames = [];
for (index = 0; index < names.length; index++) {
  let upperCaseName = names[index].toUpperCase();
  upperNames.push(upperCaseName);
}

console.log(upperNames);

//Continue Statement (Skip Iteration)
upperNames = [];
for (index = 0; index < names.length; index++) {
  if (names[index] === 'Coburn') continue;
  let upperCaseName = names[index].toUpperCase();
  upperNames.push(upperCaseName);
}
  
console.log(upperNames);

//Break Statement (Stop Iterating)
for (index = 0; index < names.length; index++) {
  if (names[index] === 'Coburn') {
    console.log(`Coburn is the ${index + 1}nd person on the list`);
    break;
  }
}

