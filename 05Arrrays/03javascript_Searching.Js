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
