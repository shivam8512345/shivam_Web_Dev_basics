// Function declaration and expression in javascript.

// Function is basically a block of code That is used to do a particular task. Function helps us to follow the concept of Dry. ("Don't repeat yourself" (DRY)).
// Function improves the readablity and mantainability of your code very easy.

// A JavaScript function is executed when "something" invokes it (calls it).

// Javascript function syntax;

// (Function declaration).

// Function is Created by using function keyword, and followed by a name "anything",
// There are also some rules to give name of function (same as variable).

// The parentheses may include parameter names separated by commas:
// (parameter1, parameter2, ...)

// Function definition. (function declaration)
function name(parameter1, parameter2, parameter3) {
  // code to be executed.
}

// Function parameters are listed inside the parentheses () in the function definition.

// Function arguments are the values received by the function when it is invoked.

// example:-
function square(number) {
  return number * number;
}

// Difference B/w function definition and function expression..

// Description. A function expression is very similar to, and has almost the same syntax as, a function declaration. The main difference between a function expression and a function declaration is the function name, which can be omitted in function expressions to create anonymous functions.

// function expression

let square1 = function (num) {
  return num * num;
};
console.log("Squared number is:- ", square(4));

// We can also assign names of to the function expression in case of when a function is calling itself? (or refer itself).
// examle:-
const factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};

console.log(factorial(3)); // 6

// Function expressions are convenient when passing a function as an argument to another function.

// example:-
function map1(func, a) {
  const result = new Array(a.length);
  for (let i = 0; i < a.length; i++) {
    result[i] = func(a[i]);
  }
  return result;
}

const cube = function (x) {
  return x * x * x;
};

const numbers = [0, 1, 2, 5, 10];
console.log(map1(cube, numbers));

// Calling functions.
// Calling function is going to execute the code inside function in javascript!.
