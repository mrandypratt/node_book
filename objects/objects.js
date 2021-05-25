//Inheritance, Prototypes & for...in loops
let obj1 = { a: 1, b: 2 }
let obj2 = Object.create(obj1);
obj2.c = 3;
obj2.d = 4;

console.log(obj2)

for (let prop in obj1) {
   obj2[prop] = "nothing"
} 

console.log(obj1)
console.log(obj2)

//Object.keys & forEach loops
let person = {name: 'bob', age: 30, height: '6ft'};
let personKeys = Object.keys(person);
personKeys.forEach((property, index) => {
  console.log(`${index + 1}. Bob's ${property} is ${person[property]}`)
})

//Extract Keys
let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let arr = Object.keys(obj);
let answer = arr.map(key => key.toUpperCase());
arr = answer;
console.log(`Array: ${arr} - Objects: ${obj.a}, ${obj.b}, ${obj.c}`);

//Prototypes
let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myNewObject = Object.create(myProtoObj)
console.log(myNewObject.foo)

//Copying Objects (can also use Object.assign(destObj, sourceObj) as alternative)
const copyObj = (obj, keys=Object.keys(obj)) => {
  let returnObject = {};
  for (let i = 0; i < keys.length; i++) {
     returnObject[keys[i]] = obj[keys[i]]
  };
  return returnObject;
}

let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 }

//Accessing Nested Objects
let nestedObj = {
  foo: { a: "hello", b: "world" },
  bar: ["example", "mem", null, { xyz: 6 }, 88],
  qux: [4, 8, 12]
};

console.log(nestedObj.foo.a)