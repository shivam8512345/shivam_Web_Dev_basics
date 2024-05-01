// Array Iterator in javascript!.

// I have To Be Give My 100%, Then You Can Say That You Will have to be best in everything!.

// Simple Iteration Over Array Using. Numbers.

let Numbers = [45, 4, 9, 16, 25];
function printNumbers(Numbers) {
  for (let i = 0; i < Numbers.length; i++) {
    console.log(Numbers[i] << " ");
  }
}

printNumbers(Numbers);

// Foreach Method in javascript.
// ForEach method call each element for once.
console.log("This is the value of our Arrays By using forEach!");

const Arrayvalues = [12, 11, 10, 4, 5, 3];

const output1 = Arrayvalues.map(myForEachValue);

function myForEachValue(value, index, arr) {
  console.log(value);
}

// The Map Function Will Not Execute The Array Value.

// Javascript Array map().
// The map() method creates a new array by performing a function on each array element.

// The map() method does not execute the function for array elements without values.

// The map() method does not change the original array.

//This example multiplies each array values by 5;

//it also take three values.
// value of the array.
// index of the array.
// Array itself

const mapArray = [10, 14, 12, 11, 9, 7];
const myFiveTimeValue = mapArray.map(myThreeValues);

function myThreeValues(value, index, array) {
  return value * 5;
}
console.log(myFiveTimeValue);

// Filter method we clear before

// Array methods is also covered before in previous chapter.

// Javascript Array Reduce().

// The reduce() method runs a function on each array element to produce (reduce it to) a single value.

// The reduce() method works from left-to-right in the array. See also reduceRight().

// The reduce() method does not reduce the original array.

// The map function which maps The values to the array elments.

// The Reduce Function Will Takes The Four Argument's.

// 1. the total (the initial value/ previously returned value).
// The item value.
// The item index.
// The array itself.

const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction, 0);

function myFunction(total, value, index, array) {
  total = total + value;
  return total;
}
console.log(sum);

// 2. Now every();
// The every() method checks all the array elements of the array.

// This example checks if all array values are larger than 18.

// Example:-
const numbersEvery = [45, 4, 9, 16, 25];
const answers = numbersEvery.every(checkIfThisGreaterThenEighteen);

// No, There Is Not All Over values Are False.
function checkIfThisGreaterThenEighteen(value, index, array) {
  return value > 18;
}
console.log(answers);

// reduceRight() :-
// ReduceRight() :- reduceRight() is an similar to reduce but it start runs from right-to-left.

// 3. Some() :- Arrays are passed the test or Not!.
// Some array elements are passing the test or not.

let numbers5 = [13, 15, 34, 35, 12, 6, 9];
let answers3 = numbers5.some(SomeFunction);

function SomeFunction(value, index, array) {
  return value > 18;
}
console.log(answers3);

// 4. JavaScript Array.from()
// Create an Array from a String:
console.log(Array.from("ABCDEFGFHIJKLMNOPQRSTUVWXYZ"));

// 5. JavaScript Array keys().
// Javascript array method or Keys.

// The Array.keys() method returns an Array Iterator object with the keys of an array.

const fruits = ["Banana!", "Apple!", "Papaya!", "Guava!"];
let keys = fruits.keys();

for (let x of keys) {
  console.log(fruits[x]);
}

// 6. Entries().
// Over the years of hardwork.

// Create An Array Iterator, then iterate over Key/value pair.

// The entries() Method does not change the original array.

const Bikers = ["pankaj!", "Deepak!", "Rahul!", "Partik!"];
const bikers = fruits.entries();

// Some Values!.
for (let x of bikers) {
  console.log("Keys:- " + x[0] + " ", "Values:-" + " " + x[1]);
}

// Javascript with() array method!.
// ES2022 Introduced With() Method To Modify The Original Array without changing the Original array.
const months = [
  "january",
  "Febrauary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
];

// const AFterWith = months.copyWithin

// JavaScript Array Spread (...).

// The ... operator Expands elments (like an array) over an aray.
const q1 = ["jan", "feb", "Mar"];
const q2 = ["Apr", "May", "jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "Dec"];

const year = [...q1, ...q2, ...q3, ...q4];
console.log("Year With all the quants:- ", year);

// In, 2015 Javascript Introduced an Important keyword Named:- 2025!.
// From, Then It Becomes Common Practice to declare array using const.

//Example :- ["Saab!","Cars!","Volvo!"];

// An Array Declared With Const Cannot Be Reassigned!.
// const huddles = ["shivam", "shakya", "pankaj", "Deepak"];
// huddles = ["shivam", "shakya", "pankaj", "Deepak"];
// console.log(huddles);

// Arrays are Not Constants
// The keyword const is a little misleading.

// It does NOT define a constant array. It defines a constant reference to an array.
// Because of this We Can Still Modifies The Array Elements!.

// You Can Change The Values of an array elements!.
const port = ["port1", "port3", "port5", "port6", "port10"];
port[2] = "port9";
console.log(port);

// Assigned when declared!.
// The Const Stay's That When you Define A Variable With Const please initiliazed It There!.
// const ports;
// ports = ["shimva"];
// console.log(ports);

// Const Block Scope.

// Const Have Block Scope Of The Array!.

// A  array declared inside an array Is a Block scoped

const cars = ["shivam", "shakya", "Delhi", "Public", "school"];
// cars[0] is shivam!.

{
  const cars = ["Toyoto", "Bajaj", "Delhi"];
  // Here cars[0] is "Toyoto" Here!.
}

// cars[0] is shivam Here!.

// Redeclaration with an array!.

// Array Redeclaration.

// When an array Defined With Var keyword can re-declared
var kilos = ["1KG's", "2KG's", "3KG's", "4KG's"];
var paanch = ["1", "2", "3", "4", "5"];
paanch = ["14", "15"];
console.log(paanch);
