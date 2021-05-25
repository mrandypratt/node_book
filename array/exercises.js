//Nested Arrays
let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0]
];

let evenArray = [];
myNewArray = myArray.map(nestedArray => {
  nestedArray.map(number =>{
    if (number % 2 === 0) {
      evenArray.push(number);
    }
  })
})

console.log(`Here is an Even Array: ${evenArray}`);

//Mapping Array (Replacement)
myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];
let evenOdd = myArray.map(number => {
  if (number % 2 === 0) {
    return "even";
  } else {
    return 'odd';
  }
})

console.log(evenOdd)

