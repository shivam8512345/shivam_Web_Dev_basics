// Asynchronus Javascript

// "I will finish later!"

// Functions, Running In Parallel With Other Functions Are Called Aysnchronus. A good Example Is javascript setTimeout()

// Asynchronus javascript!.
// function myDisplayer(something) {
//   //   document.getElementById("demo").innerHTML = something;
//   console.log(something);
// }

// function myCalculator(num1, num2, myCallback) {
//   let sum = num1 + num2;
//   myCallback(sum);
// }
// myDisplayer(5, 5, myDisplayer);

// Waiting for a Timeout!.
// you can pass a callback function, when It is executed on the basis of Timeout.

// Example:-
// setTimeout(myFunction, 3000);
// function myFunction() {
//   console.log("I like you guyz!");
// }

// Here myfunction is passed as an callback functions
// myFunction is passed to setTimeout() as an argument.

// 3000 is the number of milliseconds before time-out,so myFunction willl be called after 3 seconds.

// Instead Of Passing a name of the function, pass the whole function name with its programming language.

// setTimeout(function () {
//   myFunction("I love you!!!");
// }, 3000);

// function myFunction(value) {
//   console.log(value);
// }

// Here In the above example!, we pass the whole function as an callBack. It is a completer function. The complete function is passed as an argment.

// 3000 Is the number of milliseconds before time-out, so myFunction will be called after 3 seconds.

//Waiting for intervals(SetInterval)
// When using the js!.

// setInterval(myFunction, 1000);

// function myFunction() {
//   console.log("Shivam");
// }

// In the example above, myFunction is used as callback.

// myFunction is passed to setInterval() as an argument.

// 1000 is the number of milliseconds between intervals, so myFunction will be called every second.

// Callback Functions, In the example above, MyFunction is used as a callback.

// Callback alternatives!.

// With asynchronus programming, Javascript programs can start long-running tasks, and continue running other tasks in parallel.

// Asynch programes are difficult to write and difficult to bebug!.

// Because of this, most modern async js methods don't use callback. Instead, in js, async programming in solved using promisses in javascript.

// Promises in javascript!.

// The promise object represents the eventual completion (or failure) of an asynchronus operation and its resulting value!.

// A Promise Is a Promise of Code execution. It's code Will be be either get's compelte or get to failed.
// Promises are used to handle async operation

// Before Promises

// Suppose we create an amazon website!.

// const cart = ["shoes!", "pants!", "kruta!", "Pajama"];

// createOrder(card); // OrderId

// proceedToPayment(orderId); // this will take you to the payment section.

// They both are createOrder and proceedTOPayment() are asynchronus , we here use callback to handle is created!.

//
// const promise = createOrder(cart);

// {data: "Mydata!"};
// const promise = createOrder(cart);

// {data: undfined}

// This createOrder(cart); Api Will return As An promise!.

// Promises Have Three States....
// 1. Pending ........:- Initail state, netither  fullfilled or nor rejected.
// 2. Resolve ....... :- Normally, means the promises is fully completed!.
// 3. Reject ........:- Normally,means the operation is fullfilled!.

// The solution to the callback hell is promises

// callback hell

// callback hell in javascript occurs when multiple callbacks are nested inside each other, leads to create a complex and hard-to-manage code.

// what is callback in js?

// The callback In js Is a Type of function that is passed as an argument to some other function.In javascript every enetity is treated as Object!.Thus The user is able to pass function as an argument!.

//Let us now see a simple example to understand the callback function better.

// callbacks
function printHello() {
  console.log("Hello Ninjas!");
}
function printMessage() {
  console.log("Print Message!");
}

function hello(callbacks) {
  callbacks();
}
// first Call!.
hello(printHello);
// second Call!.
hello(printMessage);

// Callback hell in js

// Callback hell is a phenomenon where a callback is called inside another callback. Is is nesting of multiple Callbaks inside a function. IF you look at the design of the code, it seems like a Pyramid!.thus the callback hell is also referred to as 'Pyramid of Dom!'.

// function print(i) {
//   console.log("This is call number" + i);
// }

// function func1(callback) {
//   setTimeout(() => {
//     let i = 1;
//     callback(i);
//     i++;
//     setTimeout(() => {
//       callback(i);
//       i++;
//       setTimeout(() => {
//         callback(i);
//         i++;
//         setTimeout(() => {
//           callback(i);
//           i++;
//         }, 800);
//       }, 700);
//     }, 600);
//   }, 300);
// }

// // Now Call The Function!.

// func1(print);

// // Another example!
// function callback(call) {
//   setTimeout(function callback(call) {
//     console.log("Hello World!" + call);
//     setTimeout(function callbacks(call) {
//       console.log("Hello world!" + call);
//       setTimeout(function callbacks(call) {
//         console.log("Hello world!" + call);
//         setTimeout(function callbacks(call) {
//           console.log("Time resolve!" + call);
//         }, 3000);
//       }, 2000);
//     }, 1000);
//   }, 0);
// }

// function call() {
//   console.log("Hello world!");
// }
// callback(call);

// Promises in javascript!.

// I promise a Result!

// Producing code is code that can take some time!.
// Consuming code is code that must wait for the result.
// A promise is an object that links producing code and Consuming code!.

// Js promise object

// A Promise contains both the producing code and calls to the consuming code:-

// Promise syntax:-

let myPromise = new Promise(function (myResolve, myReject) {
  // producing code may take some time.

  myResolve(); // When successful.
  myReject(); // When error.
});

// Consuming code (must wait for a fulfilled promise)

myPromise.then(
  function (value) {
    /* code if successfull */
  },
  function (error) {
    /* code if some error */
  }
);

// Wnen the producing code obtains the result, it should call one of the two callbacks:-

// When                   call
// Success              myResolve(result value)
// Error                myReject (error object)

// Promise object properties

// A js promise object can be:-

// -> Pending!.
// -> Fullfilled!.
// -> Rejected!.

// The promise object supports two properties:- state and result.

// While a Promise object is "pending" (working), the result is undefined.
// While a promise obj is fullfilled the result is value.
// whiel a promise obj is rejected the result is error obj

// MyPromise.state             myPromise.result
// Pending                      undefind
// Resolve                      value
// Reject                       Error object

// You cannot access the promise Properties state and result.

//you must use a promise method to handle promises.

// Promises.then() takes two arguments,a callback for success and other for failure.

//Both are optional, so you can add a callback for success or failure only.

// Example:-

function myDisplayer(some) {
  console.log(some);
}

let mypromise = new Promise(function (myResolve, myReject) {
  let x = 0;

  // if x = 0;
  if (x == 0) {
    myResolve("OK!");
  } else {
    myReject("ERROR!");
  }
});

mypromise.then(
  function (value) {
    /*if code is successfull*/
    myDisplayer(value);
  },
  function (error) {
    /*if code is rejected*/
    myDisplayer(error);
  }
);

// Javascript Promise Examples:-
// To demonstrate the use of Promises, we well use the callback examples from the previous chapter:-

// 1.Waiting for the Timeout
// 2. wating for the file

// usign callbck func

setTimeout(function () {
  myfunction("I LIKE YOU!!!!");
}, 3000);

function myfunction(value) {
  console.log(value);
}

// Using Promises.
let promise = new Promise(function (myResolve, myReject) {
  setTimeout(function () {
    myResolve("I LIKE YOU!!!!");
  }, 3000);
});

promise.then(function (value) {
  console.log(value);
});

// Waiting for a file.

// Example using callback!

// function getFile(myCallback) {
//   let req = new XMLHttpRequest();
//   req.open("GET", "mycar.html");
//   req.onload = function () {
//     if (req.status == 200) {
//       myCallback(req.responseText);
//     } else {
//       myCallback("Error:- " + req.status);
//     }
//   };
//   req.send();
// }

// getFile(myDisplayer);

//

// Example using promise
// let myPromise1 = new Promise(function (myResolve, myReject) {
//   let req = new XMLHttpRequest();
//   req.open("GET", "mycar.html");
//   req.onload = function () {
//     if (req.status == 200) {
//       myResolve(req.response);
//     } else {
//       myReject("File not Found!!");
//     }
//   };
//   req.send();
// });

// myPromise1.then(
//   function (value) {
//     myDisplayer(value);
//   },
//   function (error) {
//     myDisplayer(error);
//   }
// );


