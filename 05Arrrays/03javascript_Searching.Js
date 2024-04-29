// Javascript searching Basics.
// Array Find and Search Methods.

// The IndexOf() Method Searches An Array For An Element Value And Returns Its position.
let fruits = ["Apple!", "Banana!", "SaraiDelhi!"];
let position = fruits.indexOf("Apple!") + 1;
console.log(position);

// 1. Array.indexOf(item, start).
// If indexOf() returns -1 the Array element is not present In the Array!.
// If Item Occur's More than Once In The Array!,Its return's the Occurrence of First position.

// 2. LastIndexOf() :- LastIndex() Is Same As IndexOf , But It's Searches From behind the Array!.
let PositionFrombehind = fruits.lastIndexOf("SaraiDelhi!");
console.log(PositionFrombehind);

// 3. Array.includes().
// In ES2022, It Introduces By the js, It helps Us to check whether it's present or not!(including NaN, unlike indexOf).
let Subjects = ["Maths!", "Science!", "Hindi!", "English!", "Panjabi!"];
let answer = Subjects.includes("Hindi!");
console.log(answer);

// Syntax :- Array.Includes(search-item);

// 4. JavaScript Array find().

// Find Method Return The First Value Which Passes The Test Case.

let MyArr = [1, 12, 4, 5, 7, 8, 10];
let first = MyArr.find(myfunction);

function myfunction(value, index, array) {
  return value > 10;
}
// note:- The function takes three arguments!.
// 1. Value Of the array!.
// 2. Index Of the array!.
// 3. The array itself!.

console.log(first);

// If The Function Is Not The Met The Condition! It returns the undefined!.

// 5. FindIndex():- FindIndex Return's The First index of the Element which satisfies the condition.

let findInX = MyArr.findIndex(myFunc);

function myFunc(value, Index, array) {
  return value > 9;
}
console.log(findInX);

// Note:- That The Functions Have Three Arguments!.
// 1. Value Of the array!.
// 2. Index Of the array!.
// 3. The Array Itself!.

// Same As We Have To Function findlast And findLastindex(), It Searches The Element From End Of The Array!.

// Sort the array Using Sort Method():-

// The Sort() Method sorts an array alphabetically:-
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.sort();
console.log(fruits2);

// Reversing an Array.
// Reverse The Array Using Reverse Method!.
const bikers = ["shivam!", "pankaj!", "Deepak!", "rahul!", "Eklavya!"];
bikers.reverse();
console.log(bikers);

// By Using Both Sort And Reverse You Can Sort The Array In Reverse Order!.
const Likes = ["Hindi!", "English!", "Panjabi!", "Apple!"];
Likes.sort();
bikers.reverse();
console.log(Likes);

// There Are Two New Methods Which Are Introduced In ES2023, toSorted(), and toReversed().
// 1. toSorted() :- which sort the array and return it in the new array , but it will not modify The Original Array!.

// 2. toReversed() :- Which Reverse The Array and Return It Inside Another Array, But It Will Not Modifies The Original Array!.

// Difference, Above In toSorted(), toReversed() and sort(),reverse(), Is That In Case of toSorted(),toReversed() They Creates New Array, But Not Changing Original Array unchanged!,while sort(),reverse() will alter() the array!.

// Sort the Function!.
// Numeric Sort.

// Sort function Sort The array as string".
// But We Can Fix IT!.
// By Using compare function.

let points = [10, 11, 23, 45, 23, 12];
// sort the array in acceseding Order!.
points.sort(function (a, b) {
  return a - b;
});

console.log(points);

// Sort the array in descending Order!.
points.sort(function (a, b) {
  return b - a;
});
console.log(points);

// The Compare Function Compares All The Values In The Array, Two Values At a time (a, b).

// Sorting an Array in Random Order!.
// Sorting The array in randome order!.

const PointArr = [12, 34, 55, 76, 786, 33, 445];
PointArr.sort(function () {
  return 0.5 - Math.random();
});

console.log(PointArr);

// The Fisher Yates Method.
const points3 = [12, 343, 53, 53, 54, 333];

for (let i = points3.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i + 1));
  let k = points3[i];
  points3[i] = points3[j];
  points3[j] = k;
}

// Find The Maximum And Minimum Element Of The Array!.

// Sorting a Whole Array Is a Very Inefficient Method If you only want To Find The highest (or lowest) value.

let marks = [343, 4, 23, 45, 67, 445];
// Using Math.min() on an Array!.
// function MyMarks(marks) {
//   return Math.min.apply(null, marks);
// }
// console.log(MyMarks(marks));

// Using Math.max() on an Array!.
// Similarly We Can find Math.max() Value!.
function MyMarks(marks) {
  return Math.max.apply(null, marks);
}
console.log(MyMarks(marks));

// Explicit Array Method to find its' array Length!.
let myArray = [34, 12, 11, 45, 67, 78, -1];

function mymin(myArray) {
  let len = myArray.length;
  let mini = Infinity;
  while (len--) {
    if (myArray[len] < mini) mini = myArray[len];
  }
  return mini;
}
console.log(mymin(myArray));

// Explicit Array Method to find maximum Inside The Array!.
let myMarks2 = [1, 34, 45, 2, 7, 9, 10];
function myMax(myMarks2) {
  let len = myMarks2.length;
  let maxi = -Infinity;
  while (len--) {
    if (myMarks2[len] > maxi) maxi = arr[len];
  }
  return maxi;
}

console.log(myMax(myMarks2));
