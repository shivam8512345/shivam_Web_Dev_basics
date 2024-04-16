// conditional in javascript.

// There are some scenarios's when we have to take decision's.

// Like if (this) else (this).

//.1 if
var age = 21;
if (age > 18) console.log("You can drive!");

//2. if else

var age1 = 34;
if (age > 18) console.log("You can drive!");
else console.log("You cannot drie!");

let num = 4;
if (num % 2 == 0) console.log("number is even");
else console.log("number is odd!");

// 3. if else if condition.
if (num > 0) {
  console.log("Number is positive!");
} else if (num == 0) {
  console.log("Number is zero!");
} else {
  console.log("Number is negative!");
}

// swithc statement.
// The switch statement is used to perform different actions based on different conditions.
let dayNum = 1;
switch (dayNum) {
  case 1:
    console.log("Monday!");
    break;

  case 2:
    console.log("Tuesday!");
    break;

  case 3:
    console.log("Wednesday!");
    break;

  case 4:
    console.log("Thursday!");
    break;

  case 5:
    console.log("Friday!");
    break;

  case 6:
    console.log("Saturday!");
    break;

  case 7:
    console.log("Sunday!");
    break;

  default:
    console.log("Please Enter number b/w 1-7 ");
}

// shorthand conditionals.
var a = 2,
  b = 3;
a == 0 || b == 0 ? console.log("Hey zeroes") : console.log("No zeroes");

// it will not print anything!.
(a == 0 || b == 0) && console.log("Hey zeroes");

// difference b/w if else and ternary operators.

// The ternary operator can't be used to call a void function or a list of statements. It must be used to assign/return a value.

// ? (question mark) : (colon) these are called ternary operators.
