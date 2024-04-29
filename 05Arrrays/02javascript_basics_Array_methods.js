// Javascript Basics Array methods In.
const cars = ["BMW", "HYUNDAI", "AUDI", "VOLVO", "DORS"];

// 1.Length():- Length Methods Are Used To Define Length Of The Array's.
let size = cars.length;
console.log("Length of the car arrays is:- ", size);

// 2. toString(), It Converts the values into (,) Separated Values and convert an Array Into strings.

let fruits = ["Apple", "Banana", "Orange", "Papaya"];
console.log(fruits.toString());

// It's Result Will Be:-
// Apple, Banana, Orange, Papaya.

// 3. at() value at javasript!.
// ES2022 Introduced 2022.

// Get the Third Element From Javascript!.
console.log("Fruits at 2:- ", fruits.at(2));

// Get the Access of Third Element of Javascript! From "New KeyWord!".
// At Method Is Same As []. This Method Is Same As at() Keyword.

// 4. Array join() javascript methods!.
// Join methods Is Also Used To Join The Arrays Elements Into Strings. It Behaves Same like toString(), But In That Case You Define The (*) separater methods to separate arrays elements.

let arrayStr = ["STR#1", "STR#2", "STR#3", "STR#4"];
console.log(arrayStr.join("--"));

// ------------------------------------------------------------------------- //

// Popping and Pushing Array Elements.

// When You Work With Array, It Is Easy To Remove And Adds New Element In The Array.
// i.e What We Called Popping And Pushing In Javascript1.
// Pushing Means Adding New Element In the Arrays, and Popping Means Remove New element From The Arrays!.

let transPort = ["cars", "trucks", "buses", "bikes", "Eagle!"];

// 1. Push() :- It Pushes The New Element From Behind The Array.
transPort.push("Jaguar!");
console.log(transPort);

// 2. Pop() :- It removes the last element from the array.
transPort.pop();
console.log("After removing the last Element!");
console.log(transPort);

// 3. Shift():- It Removes Element From start of The Array!.
transPort.shift();
console.log(transPort);

// 4. UnShift() :- It Adds the new Element in the start of the Array!.
transPort.unshift("Cars1");
console.log(transPort);

// 5. Changing Array Elements:-
// [0] points to the first element of the Arrays.
// [1] points to the second Element of the Arrays.
// [2] ponts to the third ................. Arrays.

// example:-
let bikes = ["Hero", "Honda", "splender", "FZS", "CVShine"];
bikes[0] = "bullet";
console.log(bikes);

// Adding New element to the array.
// We Can Add New Element To The Arrays, Using Arrays method length
console.log(
  "Adding New Element To The End Of The Arrays By Using Length Property!"
);
bikes[bikes.length] = "Hero";
console.log(bikes);

// 6. JavaScript Array delete().
// The Delete Elements Leave the UnDefined whole inside the arrays.

// so instead of it use pop() or shift() instead.

// Length Will Remains Same After deleting the elements.
delete bikes[0];
console.log(bikes);
console.log(bikes[0]);
console.log(bikes.length);

// 7. Merging Arrays (Concatenation).
// In Programming Language, concatenation means joining string end-to-end.

// Snow and Fall combines us give Snowfall.

// Same Concepts Occurs In The case of Merging of arrays.

// Javascript Array concat(). Means combining OF Arrays.

// The concat() Array Creates a New Array, by merging Two array and creates a new array.
let myGirls = ["Neha", "Pinky"];
let CarGirls = ["deepti", "jungri"];
let myNewGirls = myGirls.concat(CarGirls);
console.log(myNewGirls);

// Concat Does Not Change The Existing Arrays It creates the new array after merging them.

// We can pass any number of arguments inside it.

// 8. Flatting An Array!.

// Flattening An Array is the process of reducing the dimensionality of an array.
// Flattening Of An Array Is Used When You Want to reduce Two-dimentionality array into One Dimentional array.

// ES2019 Introduces the flat() array Operation.
const TwoArray = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const AfterPerformingFlat = TwoArray.flat();
console.log(AfterPerformingFlat);

// 9. Splicing and Slicing Arrays.
// Splice() Methods Are used to add new element in the Array.
// slice() Methods Used To Slice() Out The Some Elements From The Arrays.

// 9. Javascript splice() Method.
// The Splice() Methods Can Be Used To Add New Element In The Array.

let SpliceArray = ["Banana!", "Apple!", "Orange!", "Papaya!"];
SpliceArray.splice(2, 0, "Guava!", "Anzeer!");
console.log(SpliceArray);

// There are three arguments in splice.
// First, Poistion(2) defines, Where The New Element Should be Added!.
// Second (0) defines, Where how many elements should be remove from the array!.
// And The Rest Of The Others Arguments ("Guava!", "Anzeer!") Would be added to the Arrays!.

// The splice() Method Returns An array With the deleted items:

// Using slice to Remove the Elements from the array!.
// By Setting Parameters In Splice() You Can Use It As to remove the elements from the array's,
let RemoveProperties = [
  "shivam!",
  "Shakya!",
  "AGE21",
  "Address:- Deepak@gmail.com",
];
RemoveProperties.splice(0, 1);
console.log(RemoveProperties);

// First Property(0) From Where You Want To Add The Property!.
// second Position, (1) From Where You Want TO Add the property!.

// 10. JavaScript Array slice(). Methods!.
// Javascript slice Method.
//The slice(), Methods Is Slice Out A Piece Of An Array Into a New Array!.

const fruits1 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits1.slice(3);
console.log(fruits1);
console.log(citrus);
// The Slice() Methods Creates A New Array.
// The slice() Methods Does Not Remove A Single Element From The Source Array!.

// Slice Method Can Take Two arguments (1,4)!.
// Slice Method's Arguments (1), From Where You Have To Remove The Element ,and second till where you want To Remove The Array's (4) but not including the last arguments!.

const FruitsArray = [
  "BikesApple!",
  "GuavaHero!",
  "BikesLearning!",
  "BikesBoost!",
  "LearningFaltuThings!",
];
let NewFruitsArray = FruitsArray.slice(1, 4);
console.log(FruitsArray);
console.log(NewFruitsArray);
