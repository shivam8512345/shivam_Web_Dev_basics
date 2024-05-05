// Async And Await In javascript.

// Call stack in javascript!.

console.log(a);
function a() {
  console.log(a);
}
a();
console.log("End");

// Javascript Asnchronus code!!!.
// Javascript .

// Synchronus!!.
// Single threaded languages!!!.

// Exectution Context!!.

// -> Execute one line of code at a time!!.
// -> console.log -> 1.
// -> console.log -> 2

// call stack|   |   Memory stack

// Each operation watis for the last one to complete before executing.

// Blocking Code         vs      Non Blocking code.
//Block the flow of Program. Does not block the execution
// Read file sync            // read file async

// Async await

// sync in js
// Synchronus means the code runs in a praticular sequence of instuctions given in the program.each instuctions waits for the previous instruction to complete its execution.

// Asynchronus programming.
// asynchronus Code execution allows to execute next instructions immediately and doen't block the flow.

// example of sync

console.log("One!");
console.log("Two!");
console.log("Three!");

// Async programming!.
// delhi request ---> API's ----> data.

// when you call a Api.

// run code1.
// run code2.
// aPI -> run Paralley
// run code3.
// run code4.

// ex:-
console.log("Start!!");
function hello() {
  console.log("Hello!!");
}
setTimeout(hello, 1000); // this is a asynchronus programig 2s -> 2000ms
console.log("End!!");

// Callback

// A callback is a function passed into another function as an argument to another function
// function sum(a, b) {
//   console.log(a + b);
// }
function myCalculator(a, b, sumCallback) {
  sumCallback(a, b);
}

myCalculator(1, 2, (a, b) => {
  console.log(a + b);
}); // don't pass with paranthesis.

// callback Hell :-

// callback hell:-Nested callbacks stacked below another forming a pyramid structure.

//this style of programming becomes difficult to understand & manage.

// Nesting means condition inside condition
for (let i = 0; i < 5; i++) {
  let str = "";
  for (let j = 0; j < 5; j++) {
    str = str + j;
  }
  console.log(i, " = ", str);
}

// When the callbacks code gets in deeper level then occur the problem of callback hell

// We Don't Want Data!
function getData(dataID, getNextdData) {
  // 2s
  setTimeout(() => {
    console.log("data", dataID);
    if (getNextdData) {
      getNextdData();
    }
  }, 2000);
}

// This is very complex. (Pyramid of Dom).
getData(1, () => {
  console.log("getting data2....");
  getData(2, () => {
    console.log("getting data3....");
    getData(3, () => {
      console.log("getting data4....");
      getData(4, () => {
        console.log("getting data5....");
        getData(5, () => {
          console.log("getting data6....");
          getData(6, () => {
            console.log("getting data7....");
            getData(7, () => {
              console.log("getting data8....");
              getData(8, () => {
                console.log("getting data9....");
                getData(9, () => {
                  console.log("getting data10....");
                  getData(10, () => {
                    console.log("getting data11....");
                    getData(11);
                  });
                });
              });
            });
          });
        });
      });
    });
  });
}); // 2s.

//Promises (measn bada);
// promise is for "eventual" completion of task. It is an object in js.
// It is a solution to callback hell.

// let promise = new Promise((resolve,reject)=>{...});
// function with two handlers.

// Resolve and Reject two callbacks in javascript!.

function getD(dataId, getNextD) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("succeess");
      if (getNextD) {
        getNextD();
      }
    }, 5000);
  });
}

getD(1, () => {
  getData(2);
});
