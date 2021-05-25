let biggestArray = [
  ["hello", "world"],
  ["example", "mem", null, 6, 88],
  [4, 8, 12]
];

for (let innerArrayIndex = 0; innerArrayIndex < biggestArray.length; innerArrayIndex++) {
  for (let itemIndex = 0; itemIndex < biggestArray[innerArrayIndex].length; itemIndex++) {
    if (biggestArray[innerArrayIndex][itemIndex] === 6) {
      biggestArray[innerArrayIndex][itemIndex] = 606;
    }
  }
}

console.log(biggestArray)