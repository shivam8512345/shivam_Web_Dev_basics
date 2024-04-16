// functions in javascript.
// function are block of code that is used to perform a particular task in javascript, and we also uses functions to avoid writing mulitple lines of code again and again.
// It increases redablility and simplicity of our code.
// By using function we can define individual funciton or each funtionality in our program.

// function.
// 1. default function.
function add() {
  console.log("HEllo world!");
}
add();

//2. Function with paramenters.
function sum(a, b) {
  return a + b;
}
// These are called arguments.
let y = sum(3, 4); // fucntion invocation.
console.log(y);

var a4 = 4;
var a5 = 4;
function resultNum() {
  let a1 = 4;
  let b1 = 4;
  console.log(a1, b1);
}
resultNum();

let obj2 = {
  firstName: "shivam",
  lastName: "Shakya",

  fullName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};

console.log(obj2.firstName);
console.log(obj2.lastName);

obj2.fullName();

// Arrow function
// Arrow fucntion introduces in es6 version of javascript.
// It is a modern way of wriring js function.
// Arrow functions allow us to write shorter function syntax:

let myFunction = (a, b) => a * b;

console.log(myFunction(2, 3));
