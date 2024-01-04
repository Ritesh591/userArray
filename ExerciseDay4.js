/* Strict Mode */

"use strict";

// it makes easier to write more secure code for us and to avoid accidental error

/*Assignment Operator */

// "=" - assigning the value
// "==" - Loose Equal (comparing the values with type coersion)
// "===" - Strict Equal (doesn't do type coersion)

const myAge = 18;

if (myAge === 18) console.log("You just became an adult");

console.log(18 == "18"); // this will give "true" because double equal does type coersion and convert the type to match the values

console.log(18 === "18"); // this will be "false" because it strctly checks the types and values

/* ============= Functions ===============*/

// a piece of code to be reused over and over

function logger() {
  // Function Body

  console.log("My name is Ritesh");
}

// Calling / Running / Invoking function
logger();
logger();
logger();

// function with arguments
function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);

  const juice = `juice with ${apples} apples and ${oranges} oranges.`;

  // returns the juice string back to where we called the function
  return juice;
}

fruitProcessor(5, 2); // this will not show the returned value, we have to store it in a variable

const juice = fruitProcessor(3, 8);
console.log(juice); //juice with 3 apples and 8 oranges.

// ----- Function Declaration  -------

function calcAge1(birthYear) {
  //const age = 2023 - birthYear;
  //return age;

  // instead of above code we can do this..

  return 2024 - birthYear;
}

const age1 = calcAge1(2002);
console.log(age1);

// ----- Function Expression  -------

const calcAge2 = function (birthYear) {
  return 2024 - birthYear;
};

const age2 = calcAge2(2005);
console.log(age2);

// the main difference between these two is that
// we can use function declaration before they are defined in the code but not in function expression because of hoisting
// because at the end a function is a value and we are assigning it to the variable

/* --- Arrow Function ---- */

// Arrow functions are one liner functions

const CalcAge = (birthYear) => 2023 - currentYear;

const age = CalcAge(2000);

// arrow function with multiple arguments

const calcRetirement = (birthYear, firstName) => {
  const age = 2023 - birthYear;
  const retirement = 60 - age;
  return `${firstName} retires after ${retirement} years.`;
};

console.log(calcRetirement(2002, "Ritesh"));

// ------ Function calling another function -----

function cutFruits(fruit) {
  return fruit * 4;
}

function fruitProcessor1(apples, oranges) {
  const applePieces = cutFruits(apples);
  const orangePieces = cutFruits(oranges);

  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pices of oranges. `;
  return juice;
}

console.log(fruitProcessor1(5, 2));
