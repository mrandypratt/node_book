//".test()" Regex Method returns true or false if string is in other string
console.log(/o/.test('bobacat'))
console.log(/l/.test('bobcat'))

//".match()" String Method returns array descriging match
console.log("bobcat".match(/x/))         // No match: = null

console.log("bobcat".match(/[bct]/g))    // Global match: = [ 'b', 'b', 'c', 't' ]

console.log("bobcat".match(/b((o)b)/))   // Singular match with groups: = [ 'bob', 'ob', 'o', index: 0, input: 'bobcat', groups: undefined ]

console.log("bobcat".match(/[oal]/g));  // Brackets help you check multiple letters simultaneously

//Global flag breakdown
let regex = /b/g;
let str = "ababa";

console.log(regex.test(str)); // => true (this finds the first b)
console.log(regex.test(str)); // => true (this finds the second b)
console.log(regex.test(str)); // => false (all b's have been found so returns false)
console.log(str)              // => "ababa" (proof the string is not mutated)
//Loops to find the first again
console.log(regex.test(str)); // => true (this finds the first b)
console.log(str)              // => "ababa" (proof the string is not mutated)
console.log(regex.test(str)); // => true (this finds the second b)
console.log(regex.test(str)); // => false (all b's have been found so returns false)
