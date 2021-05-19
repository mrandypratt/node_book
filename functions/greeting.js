

function greetPeople() {
  function innerGreet() {
    console.log(greetingMessage);
  }
  let greetingMessage = "something else"
  innerGreet();
}

let greetingMessage = "Good Morning!";
greetPeople();
console.log(greetingMessage);