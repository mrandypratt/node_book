const superArray = {arr1: [2, 4, 3, 6, 8], arr2: [1, 3, 5, 7, 9, 11], arr3: []}

for (const subArray in superArray) {
  let isThree = superArray[subArray].filter(arr =>
    arr === 3)
  if(isThree[0] !== undefined) {
    console.log(`Three is in ${subArray}`)
  }
}

///OR
for (const subArray in superArray) {
  if(superArray[subArray].includes(3)) {
    console.log(`Three is in ${subArray}`)
  }
}

