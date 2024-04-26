// Basics Of Javascript!.
// An array is a special variable, which can holds more than one values:

let cars = ["BMW", "AUDI", "FERRARI"];
console.log(cars);

// Why Use Array?

// If, You Have a List Of Items (a list of car names, for example), Storing the cars in single variables could look like this:
let car1 = "BMW";
let car2 = "AUDI";
let car3 = "FERRARI";

// However, if there are not only 3 cars? If there 250 cars? and you have to find a specific one ? how can you do that?

// Simple In That Case We Use Array?.

// The Area Store the Multiple Values In a Single Variable, Which We can access using an index number! Later on.

// And You Can Access The Values by Referring to an Index Number.

// 1. Creating an Array.

// You Can Create An Array Using Simple Array Literal!.
// let array_literal = ["name1","Name2","Name3",...];

// It is a common practice to declare arrays with the const keyword.

// Example:- Of array defined with const object.
const name1 = ["shivam", "rahul", "pankaj"];

// There are no matter of spaces and spans in javascript!.

// We can also define a array like that.
// First Initiazed The Array.
console.log("New values inside an array!");
const array1 = [];
(array1[0] = "cars"), (array1[1] = "Bikes"), (array1[2] = "Trucks");
console.log(array1[0], array1[1], array1[2]);

// Third Way To Define Array using New Array() keyword!.
let valuesArray = new Array("apple1", "apple2", "apple3");
// Now printing the values.
console.log(valuesArray[0], valuesArray[1], valuesArray[2]);

// Like Above to methods are doing the same thing!.
// No Need To Use New Array();
// For Simplicity, Or Maintainibility Use the array literal methods!.

// Accessing array Elements.
let cars3 = ["shivam1", "shakya2", "rahul2"];
let cr1 = cars3[0];
let cr2 = cars3[1];
let cr3 = cars3[2];

console.log(cr1, cr2, cr3);

// updating the array elements

cars3[1] = "shivam";
console.log(cars3[1]);

// Note:- Array indexing starts with 0,
// [0] is the first element, and second [1] points to the second element.

// We can convert the whole array into string using toString() methods.

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById("demo").innerHTML = fruits.toString();

// Notes:- Arrays, Are Basically An Object, When You Check Its type it gives us an "Objects". Js array are just called it as array.

// "We Can Access JavaScript Arrays Values Using Numbers!".
