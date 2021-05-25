//Using Date Module
function getDayOfWeek(date) {  //Function to turn day of week number (0-6) into String
  let daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  return daysOfWeek[date.getDay()]; // date.getDay() returns number 0-6
}

let date = new Date('December 25, 2012');
console.log(getDayOfWeek(date)); // => Tuesday