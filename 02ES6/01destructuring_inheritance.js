// Destructuring assignment
// The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

// Array destructuring and object destructuring assignment.
// rest operators

let arr1 = [1, 3, 4, 5, 5];
const [a, b, ...rest] = arr1;
console.log(a);
console.log(b);
console.log(rest);

//spread operators.
function add(...rest) {
  return rest.filter((res) => {
    return res > 4;
  });
}

let ans = add(1, 2, 3, 4, 45, 5);

console.log(ans);

// onbect desturcturing
const obj = { a1: 1, b1: 2 };
const { a1, b1 } = obj;
console.log(a1, b1);

// is equivalent to:
// const a1 = obj.a1;
// const b1 = obj.b1;

// const [a = 1] = []; // a is 1.
// Each Destructured property can have destructured value.
// The default value is used when the property is not present, or has value undefined. It is not used if the property has value null.

// Array destructuring.
let foo = ["car", "cycle", "bike"];
const [car, cycle, bike] = foo;
console.log(car);
console.log(cycle);
console.log(bike);

// it is helpful in case when we return an array from a function.
function returnArray() {
  return [1, 2, 3, 4, 5];
}
const [value1, value2, ...values] = returnArray();
// value1 stores 1 and value2 stores 2 and the rest values are present in ...rest (which consist 3,4,5);

console.log(value1);
console.log(value2);
console.log(values);

// We can also swap values using array desturcturing;
let x1 = 5;
let x2 = 6;
[x1, x2] = [x2, x1];
console.log(x1, x2);

let nums = [19, 23, 24];

[nums[0], nums[2]] = [nums[2], nums[1]];
console.log(nums);

// Ignoring some returned values
// You can ignore return values that you're not interested in:

function f() {
  return [1, 2, 3];
}

const [a3, , b3] = f();
console.log(a3); // 1
console.log(b3); // 3

const [c3] = f();
console.log(c3); // 1
