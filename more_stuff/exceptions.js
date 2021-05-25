//Try - Catch statements run the program without letting errors stop progress
let names = ['bob', 'joe', 'steve', undefined, 'frank'];

names.forEach(name => {
  try {
    console.log(`${name}'s name has ${name.length} letters in it.`);
  } catch (exception) {
    console.log('Something went wrong');
  }
}); // => bob's name has 3 letters in it.
    //    joe's name has 3 letters in it.
    //    steve's name has 5 letters in it.
    //    Something went wrong
    //    frank's name has 5 letters in it.

// Throw keyword allows you to create your own Error
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
function foo(number) {
  if (typeof number !== "number") {
    throw new TypeError("expected a number");
  } else {
    console.log(`The number is ${number}`);
  }
  // we're guaranteed to have a number here
}
var number = 4;
foo(number);
number = "string";
foo(number);