// OBJECTS

// this is an Array

const riteshArray = [
  "Ritesh",
  "Vaghela",
  2023 - 2002,
  "developer",
  ["Harshal", "Janki", "Aarti"],
];

// there is no way to giving these elements a NAME!
// We can only reference them by their order No.

// To solve this problem we have objects, where we define key:value pair inside the curly braces{}

const riteshObject = {
  firstName: "Ritesh",
  lastName: "Vaghela",
  age: 2023 - 2002,
  job: "developer",
  friends: ["Harshal", "Janki", "Aarti"],
};

// there are many ways of creating an objects. Above one is the easiest one that's called "Object literals"

// The main difference b/w objects and Arrays are Orders of access. In Arrays the order of accessing values matters a lot because are accessing data from array based on it's order number but in object, the order doesn't matter because we can access the value from it's key.

// --- Accessing elements of Object ---

// Using . (dot) operator

console.log(riteshObject.lastName); // vaghela

// Using [] (bracket) operator

console.log(riteshObject["lastName"]);

// in brackets we can also pass an Expression

// ---- adding new element in Object ----

// we can use both . and [] method to add elements

riteshObject.location = "Ahmedabad";

riteshObject["instagram"] = "ritesh_rv";

// Exercise

const r1 = `${riteshObject.firstName} has ${riteshObject.friends.length} friends, and his Best friend is called ${riteshObject.friends[0]}`;

console.log(r1);

/* ---- Methods of Objects ------ */

// As a function is generating a value so we can write function as key:value pair, that means we can add function inside an object

const riteshObj = {
  firstName: "Ritesh",
  lastName: "Vaghela",
  birthYear: 2002,
  job: "developer",
  friends: ["Harshal", "Janki", "Aarti"],
  hasDriversLicence: true,

  // function written in key:value format

  // calcAge: function(){

  //   // if we want to use any value from inside our object we can use this keyword, that will be reffering to the current object
  //   return 2023 - this.birthYear;
  // }

  // Above function will be performing the calculation every time it gets called, instead we can calculate it once and store it into a variable

  calcAge: function () {
    // this will first calculate the age and store it in a variable and return it.
    this.age = 2023 - this.birthYear;
    return this.age;
  },

  summary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriversLicence ? "a" : "no"} driving licence.`;
  },
};

console.log(riteshObj.calcAge());
console.log(riteshObj.age);

console.log(riteshObj.summary());
