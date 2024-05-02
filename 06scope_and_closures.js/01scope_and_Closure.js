// Scope and Closures In Javascript!.

// Closures Is The Combination of function bundled together With reference to It's  Surrounding states(It's lexical environment).
// Or closure along with IT's scope forms a Closure!.

// A function gives you an access of outer function with it's Inner Function.

// This Is What Closure Is.
function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  y();
}
x();

// Functions are like heart of js!.

// We can also define the javascript!.
// Or you can pass the function like that!.
function x3(y3) {
  y3();
}
var a = 8;
x3(function y3() {
  console.log(a);
});

// Function to Its lexical environment!.
function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  a = 100;
  return y;
}
var z = x();
console.log(z);

// ............... (Thousands of Line Of Code Here.....).

/*
function y(){

}
*/
z();

function z3() {
  var b = 900;
  function x() {
    var a = 7;
    function y() {
      console.log(a, b);
    }
    a = 100;
    y();
  }
  return x;
}
var v = z3();
v();

// Uses of Closures:-
// -> Module Design Pattern!.
// -> Currying!.
// -> Functions like Once!.
// -> Memoize!.
// -> maintaining statee in async world!.
// -> SetTimeouts !.
// -> Iterators !.
// -> And many more.... !.

// Closures are EveryWhere!.

// setTimeOut function In javascript!.

// Javascript scope!.

// Scope Determines the accessiblity (visibility) of variables.

// Javascript variables have 3 types of scope:-
// 1. Block scope.
// 2. Function scope.
// 3. Global scope.

// Block scope
// Before ES6 (2015), Javascript variables have only Global scope and Function scope/

// Let and const keyword provide Block scope in javascript!.

// Variables declared inside a {} block cannot be accessed from outside the block.

// Example:-
{
  let x = 2;
}
// X can Not be used here.

// Variables declared with the var keyword can Not have block scope.
// Variables declared inside a {} block can be accessed from outside the block.

// Example:-
{
  var x = 2;
}
// x CAn be used here

// Local scope
// Varaibles declared within a javascript function, are LOCAL to the function:-

// Example:-
// code here can Not use carName.

function myFunction() {
  let carName = "Volvo";
  // code here can Use carName
}
// code here can Not access carName.

// Local variable have Function scope.

// They Can Only Be Accessed From Within The Function.

// Function scope.

// Javascript has Function Scope :- Each function creates a new scope.

// Variables defined inside a function are not accessible outSide the function.

// variables defines inside the function using let, const and var are behaves quite similar!.

//They all have function Scope:-
function myFunction() {
  var carNAme = "Volvo"; // Function Scope!.
}

function myFunction() {
  let carNAme = "Volvo"; // Function Scope!.
}

function myFunction() {
  const carNAme = "Volvo"; // Function scope!.
}

// Global Javascript variable.

// A variable declared outside a function,becomes Global.

// Example:-
let carName = "volvo";
// code here can use carName

function myFunction() {
  // code here can also use carName
}

// The Lifetime of JavaScript Variables!.
// The lifetime of a javascript variables start when it is declared.

// Function(local) vairables are deleted when the function is completed.

// In a web browser, global variables are deleted when you close the browser window(or tab).

// In a web browser global variables are deleted when you close the browser window (or tab).

// Function Arguments.

// Function arguments (parameters) work as local variables inside funtions.
