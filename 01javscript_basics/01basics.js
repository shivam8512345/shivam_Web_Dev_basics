// JAVASCRIPT BASICS
// 1. LEARNING ABOUT BASICS.

// What is javascript?

// Ans:- Javasript is a general purpose scripting language, which is basically used to create webpages dynamic.
// by reading js documentation, you learn how to use a scripting language.

// we follows some rules to write any programming language, just like we follow some grammer rules in english.In programming these rules are called syntax.

// 1. what is variables in js.

// ans:- variables are like container which is used to store a value.

// ex:-
// variable to store int value.
var a = 5;
console.log(a); // console.log(a) // the output will reflect in the console.

// variable to store string value.
var name = "shivam";
console.log(name);

// There are some rules to define variables.
var a1 = 5; // it is redeclare and its value can be changed.
let a2 = 5; // it is not redeclare but its value can be changed.
const a3 = 5; // it is not declare and its value is not changed.

//Data types in javascipt.

// Define the data type that a variable can store.

// There are two types of Data types present in javascript
//1. premitive data types and non -premitive data types

// 1. premitive data types.
// there are 7 types of premitive data types

//1. NULL. // It Is Supposed to that does not exist.
//2. NUMBER.
//3. SYMBOL.
//4. STRING.
//5. BOOLEAN.
//6. BIGINT.
//7. UNDEFINED.

// ex:-
var a = null;
var b = 5;
var c = "shivam";
var d = BigInt("564") + BigInt("6");
var e = true;
var f = Symbol("4"); // it returns everytime new value.
var g = undefined;
console.log(a, b, c, d, e, f, g);
console.log(typeof f);

// 2. Two types of non-premitive data types.
// 1. Arrays.
// 2. Objects.

//1. array example
// Arrays are used to store more than one values.
let array = ["BMW", "HYUNDAI", "JAGUAR"];
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);

//.2 objects
// In JavaScript, objects are king. If you understand objects, you understand JavaScript.

// In javascript alomost everything is an object.

// ex:-
const myObj = {
  name: "shivam",
  age: 21,
};

// object stores the value in the form of key -value pair

// Commnets in javascript.
// Commnets are ignored by the compiler they are not executable.
// Two types.

//1. single line.
/*2. Multi line */
