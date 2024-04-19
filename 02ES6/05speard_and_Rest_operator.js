// spread and rest operator in javascript.
// In modern JavaScript, the spread and rest operators are indispensable tools for simplifying array manipulation and function parameters.

// First we explore about spread operator.
// The spread operator, denoted by three consecutive dots (...), is primarily used for expanding iterables like arrays into individual elements.

// Original array.
const arr = [1, 2, 3, 4];
console.log("original array:- ", arr);

// Before array spread operator.
const newArrayBeforeSpread = [1, 2, arr[0], arr[1], arr[2], arr[3]];
console.log("New array (before spread operator):- ", newArrayBeforeSpread);

// After array spread operator.
const newArrayAfterSpread = [1, 2, ...arr];
console.log("New array (after spread operator):- ", newArrayAfterSpread);

// In this example, we seamlessly integrate the contents of arr into newArr using the spread operator. No manual indexing or looping is required, making the code more readable and maintainable.

// combining Arrays
// The spread operator provides an elegant solution for combining multiple arrays into a single array.

const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];
const newThirdArray = [...arr1, ...arr2];
console.log("New third combined array!", newThirdArray);

// passing arguments to function.
// The spread operator simplifies the process of passing variable-length arguments to functions.

function sum(a, b, c) {
  return a + b + c;
}

const nums = [1, 2, 3];
const newResult = sum(...nums);
console.log("result:- ", newResult);

// Copying arrays.
// If We Change Anything In The Copied array. It will do not change or affect in the original array.

let oldArray = [1, 2, 3, 4, 5];
let CopiedArray = [...oldArray];
CopiedArray.push("5");
console.log(CopiedArray);

// Second We explore about rest operator.

// The Rest Operator.

// While the spread operator expands elements, the rest operator condenses them into a single entity within function parameters or array destructuring. It collects remaining elements into a designated variable, facilitating flexible function definitions and array manipulation.

// Before the Rest Operator.
// Now assume a scenario where you want to store the first element of the array into one element and the rest element into one element , how you gonna do that.

let num2 = [1, 2, 3, 4];
let first = arr[0];
let second = num2.splice(1);
console.log(first, " ", second);

// now after the rest operator.
// Here comes the concept of destructuring.
let num3 = [1, 2, 3, 4, 5];
let [first1, ...rest] = num3;
console.log("first element of array :- ", first);
console.log("After destructuring rest elements are:- ", rest);

//In this example, first captures the initial element (1), while  rest encapsulates the remaining elements ([2, 3, 4, 5]). The rest operator empowers us to handle variable-length inputs with ease.

// Rest Operator Use Cases.
// The rest operator simplifies the handling of variable-length arguments in functions. It allows functions to accept an indefinite number of arguments without explicitly specifying each one.

function sum(...args) {
  return args.reduce((total, num) => total + num, 0);
}
console.log("sum of all elements are:- ", sum(1, 2, 3, 4, 5));

// The ...numbers syntax collects all passed arguments into an array named numbers, enabling flexible function definitions.

// Array Destructuring
// The rest operator is commonly used in array destructuring to capture remaining elements into a separate array variable.

const [first3, second3, ...rest3] = [1, 2, 3, 4, 5];
console.log("First element:", first3); // First3 element: 1
console.log("Second element:", second3); // Second3 element: 2
console.log("Rest of the elements:", rest3); // Rest3 of the elements: [3, 4, 5]

// That's it! These operators simplify array manipulation and function handling, making your code more efficient and readable.
