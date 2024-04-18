// var, let and const.

var a1 = 5;
var a1 = 4;
console.log(a1);

// using var
// We can access the var to its nearest function . but,in case of let we cannot access it outside the var.
// function Typing() {
//   function newFunc() {
//     if (true) {
//       var b = 5;
//     }
//     console.log(b);
//   }
//   newFunc();
// }
// Typing();

// now in case of let and const
// In Case of let and const (they are only accessable inside the block) not outside the block becasue they are blocked scope.
// we can access the value to its nearest value.

// function Type() {
//   if (true) {
//     let a = 5;
//   }
//   console.log(a);
// }

// Type();

// var is global scoped and let and const is block scope.

// var can re-declare and we can also update its value.
// let cannot re-declare ,but its value can be changed.
// const can be re-declare but its value can not be changed.

// const must be initialized during declaration unlike let and const.
var a3;
let a4 = undefined;
const a5 = undefined;
console.log([a3, a4, a5]);
