// Array callback functions in javascript.
const a = [4, 16, -2, -5, 3, 2, -8, 6, 7];

// const firstNeg = (num) => {
//   return num < 0;
// };
// // it will call function for each number
// const result = a.find(firstNeg);
// console.log(result);

// // It will help us to return findIndex value of javascript!.
// const result2 = a.findIndex(firstNeg);
// console.log(result2);

// ForEach :- for each number in an array we call a function.

a.forEach((element, index) => {
  console.log(
    "sqaures of Array number :- ",
    element * element,
    "index of each element:- ",
    index
  );
});
