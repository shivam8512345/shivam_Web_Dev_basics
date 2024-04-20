// object literals.

// what is javascript object literals?

// JavaScript Object Literal is a data type used to define objects in JavaScript. It is a syntax for creating an object in JavaScript that is composed of key-value pairs. It is a lightweight and efficient way to create and store data. It is a great way to store related data in an organized manner.

// Why should you use it?

// -> Object literals are easy to read and uderstand
// -> Object literals are most efficient than other data types.
// -> Object literals are versatile and can store any can store any type of data.

// Object literals are one of the most commonly used data structures in javascript. They are used to store colletions of data, and can be used to represent complext data structures like arrays,funtions and objects and even regular expressions. Object literals are also used to store information about a particular instance of an object, such as its state or behavior.

// Object literals are literally the pairs of key-value pair in javascript. Key is always a string and the value is any valid data types.

// example of Object literal.

// object literals can store any other literals and the any other function, for ex:- Here ,this object literals contains functions which sends the greeting.

const mySyb = Symbol("myKey1");

const personDetails = {
  name: "shivam",
  age: 17,
  [mySyb]: "myKey1",
  occupation: "Student",
  address: "Faridabad, Haryana!",
  jackGreeting: function () {
    console.log("Hi, good morning something!", this.name);
  },
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

console.log(personDetails.name);
console.log(personDetails.age);

// We can also update the property of javascript like here i give the wrong age so to make it correct you can update its value.

personDetails.age = 22;
console.log(personDetails.age);
personDetails.jackGreeting();

//Other ways to access properties
console.log(personDetails["name"]);

//accessing symbol
console.log(typeof personDetails[mySyb]);

// we can also freeze the object so no one can change its value

// Object.freeze(personDetails);

personDetails.name = "Deepak";

console.log(personDetails);

// Function is treated as type 1 citizen in javascript! It means you can consider javascript function as an variable there is no descrimination!

personDetails.greeting3 = function () {
  console.log("Hello Shivam sir!");
};

personDetails.greeting3();

// It will return reference!.
console.log(personDetails.greeting3);

personDetails.greetingFour = function () {
  console.log(`Hello shivam sir Four times! ${this.name}`);
};

personDetails.greetingFour();

console.log("shivam User!");
