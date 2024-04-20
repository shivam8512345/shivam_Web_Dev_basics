// Higher Order function.
function salary(num) {
  return num * 0.7;
}

// setTimeout is a Higher Order Function.    Because We pass a function inside it and pass it as a argument and here also a timer after which the function gets triggered.

// You are passing a refrence, and gives you a timer. After that time do this.
setTimeout(salary, 300);

// When you Treat your function just like vairable it can be passed on and it can be returned. i.e A higher order function.

const mySalaries = [50, 40, 60, 20, 300, 400];
// Right now they are numbers , but they could be no's which comes from the databases.

const filterdNum = mySalaries.filter((num) => {
  return num > 50;
});
console.log(filterdNum);

// mySalaries.filter(salary).filter(tax).map().

// () => {};
// (func) => {};

// We are just passing it, Whatever is the output of func we passing into another function.

// (func1) => (func2) => {};

// (func) => async (func2) => {};

// const asyncHandler = (fn) => async(req,res,next) => {
//     try{
//         await fn(req,res,next);
//     }catch(error){

//     }
// }

// X is a callback function which is passes as an arguments inside another function.

function X() {
  console.log("Namaste Javascript ! With callback function.");
}

// // Higher order function :- Function which takes function as an parameter is called higher order function.

function y(X) {
  X();
  console.log("Higher Order function!");
}
y(X);

// example:-
// calculate area of all the circle.

const radius = [3, 1, 2, 4];

const calculateArea = function (radius) {
  const AreaRrr = [];
  for (let i = 0; i < radius.length; i++) {
    AreaRrr.push(Math.PI * radius[i] * radius[i]);
  }
  return AreaRrr;
};

console.log(calculateArea(radius));

// calcuate circumPherences.

const calculateCircumference = function (radius) {
  const outputCircPher = [];
  for (let i = 0; i < radius.length; i++) {
    outputCircPher.push(2 * Math.PI * radius[i]);
  }
  return outputCircPher;
};
console.log(calculateCircumference(radius));

// calculate diameter.
const calculateDiameter = function (radius) {
  const outputDiameter = [];
  for (let i = 0; i < radius.length; i++) {
    outputDiameter.push(2 * radius[i]);
  }
  return outputDiameter;
};
console.log(calculateDiameter(radius));

// This is not a Optimal Way it is good but not That much Optimal so we follow here moderate code.
// and optimal code we follow the principal of dry

// Calculate.

// Beauty of functional programming.
const area = function (radius) {
  return Math.PI * radius * radius;
};
const circumPherence = function (radius) {
  return 2 * Math.PI * radius;
};
const diameter = function (radius) {
  return 2 * radius;
};

// own implementation of map function here.

// phollyfills concept.
Array.prototype.calcuate = function (logic) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(logic(this[i]));
  }
  return output;
};

console.log(radius.calcuate(area));
console.log(radius.calcuate(circumPherence));
console.log(radius.calcuate(diameter));

// const calculateArea1 = function (radius) {
//   const AreaRrr = [];
//   for (let i = 0; i < radius.length; i++) {
//     AreaRrr.push(Math.PI * radius[i] * radius[i]);
//   }
//   return AreaRrr;
// };

// console.log(calculateArea1(radius));

// breaking down your logic into smaller functional Unit.

// This calculate function is now behave as a map function.

// Map is also a very common higher order function.and how it works and if we have radius over here.

console.log("map function!");
console.log(radius.map(area));
console.log(radius.calcuate(area));

// functions are first class cititzens in javacript.
