// callback functions in javascript.
// what is a callback functions in javascript?
// ans:- you can take a function and passess into another function.

// This function which you pass into another function is known as callback functions.

// Advance functions in javascript.

// Arrow function in javascript.

// The arrow function is one of the features introduced in the ES6 version of javascript. It allows you to create function in a cleaner way compared to regular functions. Here are some of the valid syntax for arrow function.

// syntax:-

/*
() => expression

(param1,paramN) => expression.

() => {
    statements
}

(param1,paramN) =>{
    statements
}

*/
// normal function in js
function greet1() {
  console.log("Hello world!");
}
greet1();

// Now we make it arrow function.

// Anonymous function.

// Function expression in javascript.
const greet2 = () => {
  console.log("Hello world!");
};
greet2();

// passing parameters inside a arrow funcion
const greet3 = (count1, count2) => {
  for (let i = 0; i < count1; i++) console.log("Hello world! 1");

  for (let i = 0; i < count2; i++) console.log("Hello world! 2");
};

greet3(2, 2);

// One liner.
const square = (num) => num * num;
console.log(square(3));

// If you want to right multiple statement then use curly braces.
// And you have to use return keyword to right something.

// Callback functions

// A callback function is a function passed as an argument to another function.which is then invoked inside the outer function to complete an action. Is called callback function.

// example of callback function

// function
function greet(name, callback) {
  console.log("HI" + " " + name);
  callback();
}

// callback function
function callMe() {
  console.log("I am callback function");
}

// Passing function as an argument.
greet("peter", callMe);

// Callback function.
function loadScript(src, callback) {
  // let script = document.createElement("script");
  // script.src = src;
  // script.onload = () => {
  //   console.log("script loaded" + src);
  //   callback(src);
  // };
  console.log("HEllo inside loadScript :- " + src);
  // document.head.appendChild(script);
}
function Hello(src) {
  console.log("Hello src:- ", src);
  // Hello source.
}

loadScript("https://www.google.com", Hello("https"));

// callback function
const calculate = (a, b, operation) => {
  return operation(a, b);
};

// method 1.
const addition = calculate(3, 4, function (num1, num2) {
  return num1 + num2;
});

console.log(addition);

// method 2.
const subtraction = (a, b) => a - b;

const subResult = calculate(8, 3, subtraction);
console.log(subResult);

// method 3.
function multiply(a, b) {
  return a * b;
}
const multResult = calculate(3, 2, multiply);
console.log(multResult);

//Array callback functions.

// find() :- return the first value of an array element that passes a test.
// FindIndex() :- return the first index of an arra element that passe a test.
// ForEach() :- calls a function for each element.

// map() :- create a new array with results of calling a function a function for every array element.

// filter() :- return a new array with all elements that pass the test defined by the given function.

// every() :- check whether all the elements of the array satisfy the given condition or not.

// some() :- check whether at least one of the element of the array satisfy the given condition or not.
