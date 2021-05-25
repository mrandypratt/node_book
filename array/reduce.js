const finalAnswer = []

const reducer = (accumulator, currentValue) => { 
  if (currentValue.length % 2 !== 0) {
    finalAnswer.push(currentValue.length);
  } 
  return 0;
}

const oddLengths = arr => {
  console.log(`Original Array: ${arr.reduce(reducer, 0)}`);
  console.log(`Final Answer: ${finalAnswer}`);
  return(finalAnswer)
}

//let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'f', 'f']
let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

console.log(oddLengths(arr)); // => [1, 5, 3]



