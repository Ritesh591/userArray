"use strict";

// ===== 'this' keyword/variable =====

// => it's a special variable that is created for every execution context.

// => it takes the value of the 'Owner' of function in which the 'this' keyword is used.

// => 'this' is NOT static. it depends on how function is called

// => it's value is only assigned when function is actually called.

// this keyword outside any function(Global scope) will return the global object.

console.log(this);

// inside any function when we use "only" this keyword. it will be UNDEFINED, that's because of strict mode. Unless we would get the global object in return

const calcAge = function (birthYear) {
  console.log(2023 - birthYear);
  console.log(this);
};

calcAge(2002);

// an Arrow function doesn't get it's own 'this' keyword. it uses lexical this keyword(paret's scope). that would be global object

const calcAgeArrow = (birthYear) => {
  console.log(2023 - birthYear);
  console.log(this); // simply points to global object
};

calcAgeArrow(2023);

// "this" keyword inside method(function inside an object) :

const ritesh = {
  year: 2002,
  calcAge: function () {
    console.log(this); // this keyword inside of a method will be the object that is calling the method, that means "ritesh" object.
    return 2023 - this.year;
  },
};

console.log(ritesh.calcAge(2002));

// ====== Method Borrowing =======

const harshal = {
  year: 2005,
};

harshal.calcAge = ritesh.calcAge; // this will copy the function from ritesh to harshal.

console.log(harshal.calcAge());

// here this keyword inside ritesh object is pointing to the harshal object

// "This keyword always points to the object that is calling the methods"
