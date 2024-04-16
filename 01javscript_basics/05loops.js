// Loops are used to do a task repeateadly.
// For ex:- If you want to print a number from 1 to n. can  you write manually no it is very hectic for us if the number n is 10000.

// so we use here loops.
//There are many types of loops are present in js for different purpose we use them.

//1. for loop.

// syntax:
/*
for(initialization; condition; increment){
    console.log("Condition is great!");
}
*/
for (let i = 0; i < 10; i++) {
  console.log(i);
}

//2. while loops.
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

//3. do - while loop.
let j = 1;
do {
  console.log(j);
  j++;
} while (j < 10);

// Do while loops are very similar to while loop. But there is a condition it can runs atleast once!.

// for in loops.

// for of loops.
