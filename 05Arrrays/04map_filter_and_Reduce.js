// Map, Filter and Reduce in javascript!.

//I've Got Functions Inside Functions.

// Inside Functions!.

// .map(), filter() and .reduce().

// 1. map() :- function is used to transform an Array.

const arr = [5, 1, 3, 2, 6];

// And if We Want To Transform IT.

// Double :- [10,2,6,4,12];

// Triple:- [15,3,9,6,18];

// Binary :- ["101","1","11","10","110"];

// 1.0 Map function.

// WE Will Have to double The values.

// const output1 = arr.map(function double(x) {
//   return x * 2;
// });
// console.log(output1);

// const output2 = arr.map(function triplet(x) {
//   return x * 3;
// });
// console.log(output2);

// // For binary array conversion.
// const output3 = arr.map(function binary(x) {
//   return x.toString(2);
// });
// console.log(output3);

// Shorter Way To Right Map Function If You Have Only One Input.

const output1 = arr.map((x) => x * 2);
const output2 = arr.map((x) => x * 3);
const output3 = arr.map((x) => x.toString(2));
console.log(output1, " ", output2, " ", output3);

// Map Function Basically Transform The Array and Return New Array by Performing Some Code!.

// In above examples, Basically The map, Is mapping To The each and every value of map and perform some operation , and returns the result Inside resultant array!.

// so Each And Every Value One, One by Converting To The new Element of the array!.

// ----------------- X --------------- X ------
// 2. Filter(), Filter Is Used To Filter The Values Inside An Array!.

// when we use this?.
// Suppose, when we have to filter out all the odd value.
// Suppose, When we have to filter out all the values greater then 4.

// Based On Some Condition. Then We Use Array?

// Filter out all the odd values inside this Array?

let newArray = [12, 20, 40, 20, 11];

// Filter Odd values.

const isOdd = newArray.filter((x) => {
  // Find All Odd Values.
  return x % 2 != 0;
});
console.log(isOdd);

// Filter Out all the even values
const isEven = newArray.filter((x) => {
  return x % 2 === 0;
});
console.log(isEven);

// filter out all the values which are greater then 4.

const IsGreaterTen = newArray.filter((x) => {
  return x > 15;
});
console.log(IsGreaterTen);

// ---------------------- X ------------------

// 3. Reduce Function():- Reduce Function IS Basically used at a place where, you have to Take All The Elements of An Array and Come Up With a Single Value Out of Them.

// Sum, Or Maximum No of that element.

let arr1 = [12, 14, 13, 11, 9, 7];

function findSum(arr1) {
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }
  return sum;
}
console.log(findSum(arr1));

// Now same function with the help oF Reduce.

// The function inside reduce, will traverse each and every value of an array!
const output = arr1.reduce(function (acc, curr) {
  // This curr value Is Going to Points to The current value!.
  // The Second part Is Going  to accumulator is used to acculamulate the values (means collect the Values).
  // Now, We Use accumulator to accumulate the Values of an array!.

  // Here This Acc Is acting like the Sum variable!.

  acc = acc + curr;
  return acc;
}, 10); // Here We Initialize our acc with 10.
console.log(output);

// This Reduce functio will takes two arguments ,first the function(acc,curr) and the second is the value for which you want To Initialize the Value of Accumulator!.

// Now, Find Maximum Value Inside The Array!.

// Maximum value!.
let arr2 = [10, 15, 9, 3, 2, 1];
function MaximumSum(arr2) {
  let max = 0;
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] > max) max = arr2[i];
  }
  return max;
}
console.log(MaximumSum(arr2));

// Now, Thing Using Reduce Function
console.log("Find Maximum Element Using Reduce Array!");

// We Use accumulator as a Generic term!
let Maxi = arr2.reduce(function (max, curr) {
  if (curr > max) max = curr;
  return max;
}, 0);
console.log(Maxi);

// --------------------- X -----------------------
// now some real world example of map,filter and reduce.
const users = [
  { firstName: "akshay", lastName: "saini", age: 26 },
  { firstName: "donald", lastName: "trump", age: 75 },
  { firstName: "elon", lastName: "musk", age: 50 },
  { firstName: "deepika", lastName: "padukone", age: 26 },
];

// This is coming from api's
// List of full name
["akshay saini", "donal trump...."];

const FullName = users.map((x) => x.firstName + " " + x.lastName);
console.log(FullName);

// How many users with same age:
//{26: 2, 75: 1, 50: 1};

// we use reduce
const output5 = users.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log(output5);
// This is the power of functional programming.

// Find out firstName of all the peoples whose name Is less Than 30.

const FilterName = users.filter((x) => x.age < 30).map((x) => x.firstName);
console.log(FilterName);

// Do The Same Thing, With The userName="shivam".
