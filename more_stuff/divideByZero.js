//Shows values of division by One (Using Negative and positive Infinity to determine sign of Zero)

function isNegativeZero(number) {
  if (1 / number === Infinity) {
    return 'Positive Zero';
  } else if (1 / number === -Infinity) {
    return 'Negative Zero';
  } else {
    return 'a non-zero number';
  }
}

let array = [Infinity, -Infinity, 0, -0, 1, -1, 100, -100];

for (let i = 0; i < array.length; i++) {
  console.log(`${array[i]} is ${isNegativeZero(array[i])}`);
}

//Shows values after dividing by Zero and Negative Zero

function dividePositiveZero(input) {
  return input / 0;
}

function divideNegativeZero(input) {
  return input / -0;
}

array = [Infinity, -Infinity, 0, -0, 1, -1, 100, -100];

for (let i = 0; i < array.length; i++) {
  console.log(`${array[i]} / +0 = ${dividePositiveZero(array[i])}`)
}

for (let i = 0; i < array.length; i++) {
  console.log(`${array[i]} / -0 = ${divideNegativeZero(array[i])}`)
}
