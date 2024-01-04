/* ES6 Features & comparison */

// ==== Template Literals ====

// Let's create a sentense in normal way

const firstName = "Ritesh";
const job = "Developer";
const birthYear = 2002;
const currentYear = 2024;

const ritesh =
  "I'm " +
  firstName +
  ", a " +
  (currentYear - birthYear) +
  " Years old " +
  job +
  "!";
console.log(ritesh);

// Now let's create the same thing with template literals
const riteshNew = `I'm ${firstName}, a ${
  currentYear - birthYear
} year old ${job}!`;
console.log(riteshNew);

// ====== Arrow Functions ======

// let's make a Normal function

function CalcAge3(currentYear) {
  return 2023 - currentYear;
}

const age3 = CalcAge3(2002);

// Now let's make the arrow function

const CalcAge4 = (birthYear) => 2023 - currentYear;

const age4 = CalcAge4(2000);
