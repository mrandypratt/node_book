// Find highest value in list - Can be done with Math.max()
const list = [1, 6, 3, 2];
let highestValue = list[0]
for (let i = 0; i < list.length; i++) {
  if (list[i] > highestValue) {
    highestValue = list[i];
  }
}
console.log(highestValue)

// Find 'lab' in words array
const matches = [];
const allMatches = (array, regex) => {
  array.forEach(word => {
    if (regex.test(word)) {
      matches.push(word)
    }
  })
  return matches;
}

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']

//Put more concisely...
const betterMatches = (words, pattern) => {
  return words.filter((word) => pattern.test(word));
}

console.log(betterMatches(words, /lab/))