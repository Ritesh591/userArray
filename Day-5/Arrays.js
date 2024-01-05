// Arrays

// storing data without using Array

const friend1 = "Harshal";
const friend2 = "Aarti";
const friend3 = "Janki";

/* if we have 10 friend then we will have to create 10 variables!

Then to bundle all these values togather in bigger container, we have Data Structures

that are Arrays and Objects That are most important ones*/

// Let's create a Array with literal syntax

const friends = ["Harshal", "Janki", "Aarti", "Vaibhav", "Nishant"];
console.log(friends);

// Another way to create an array is by array function with new keyword

const year = new Array(2002, 2001, 2003, 2005, 2004);
console.log(year);

// to ACCESS the Array elements

console.log(friends[0]);

// to find the LENGTH of Array

console.log(friends.length);

// if we want to get the last element of array.

console.log(friends[friends.length - 1]); // Here friends.length-1 returns the last element's index

// to UPDATE the element of array at particular index

friends[4] = "Umesh";
console.log(friends);

/* !! Note: if we have declared the Array as "const" then how the updation is happening?
  -> That's because only primitive data values immutable with const
  -> An array is not a primitive value

  => Although we can update elenents of array, But we cannot change the entire Array..!
  ex. friends = ['rahul','modi']; //error
*/

// Array can hold values of different kinds.

const firstName = "Ritesh";

const ritesh = [firstName, "Vaghela", 2023 - 2002, "developer", friends]; // also array inside array
console.log(ritesh);

// An Array exercise that shows why arrays are useful

function ageCalc(birthYear) {
  return 2023 - birthYear;
}

const years = [2002, 2001, 2003, 2005, 2004];

console.log(ageCalc(years)); // this won't be useful

console.log(ageCalc(years[0]));

// this FOR LOOP will generate ages for all values inside the array

for (i = 0; i < years.length; i++) {
  console.log(ageCalc(years[i]));
}

// We can also place function calls into an array(as functions are just an expression that produces a value)

const ages = [
  ageCalc(years[0]),
  ageCalc(years[1]),
  ageCalc(years[years.length - 1]),
];

console.log(ages); //[21,22,19]

/* ===== Basic Array Methods(Operations) ============*/

// Let's create an array first

const phones = ["apple", "samsung", "OnePlus"];

// ----- PUSH method (adds element at the end of array) -------

const arrayNewLength = phones.push("Nothing"); // push is basically a function that is taking an arument and it returns the length of array
console.log(arrayNewLength);

// ----- UNSHIFT method (adds element at the beginning of array) ------

phones.unshift("vivo");

// ----- POP method (Removes element from the end of array) ------

phones.pop(); // it also returns the popped element

// ------ SHIFT method (Removes element from the start of array) ------

phones.shift();

// ------- IndexOf method (returns the index of element) -----

console.log(phones.indexOf("samsung")); //1

// ------ INCLUDES method (Checks if the element exists in array or not) -----

console.log(phones.includes("OnePlus")); //true
console.log(phones.includes("Vivo")); //false

// it is helpful to write conditional methods

if (friends.includes("Harshal")) {
  console.log("you have a friend called harshal");
}
console.log(phones);
