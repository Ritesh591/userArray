// Create an empty array to store the objects
const people = [];

// Get the user's input
const name = prompt("Enter your name:");
const age = prompt("Enter your age:");

// Create an object with the user's input
const person = {
  name,
  age,
};

// Add the object to the array
people.push(person);

// Display the array
console.log(people);

// Update an object in the array
const index = people.findIndex((person) => person.name === name);
people[index].age = age + 1;

// Display the updated array
console.log(people);

// Remove an object from the array
people.splice(index, 1);

// Display the updated array
console.log(people);
