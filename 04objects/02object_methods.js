// Object Methods in javascript.

// An object in JavaScript is a data type that is composed of a collection of names or keys and values, represented in name:value pairs. The name:value pairs can consist of properties that may contain any data type — including strings, numbers, and Booleans — as well as methods, which are functions contained within an object.

// Objects in JavaScript are standalone entities that can be likened to objects in real life. For example, a book might be an object which you would describe by the title, author, number of pages, and genre. Similarly, a car might be an object that you would  Describe by the color, make, model, and horsepower. JavaScript arrays are also a type of object.

// Creating an object.

// -> An object is a JavaScript data type, just as a number or a string is also a data type. As a data type, an object can be contained in a variable.

// There are two ways to construct an object in JavaScript:-

// 1. Object literalas using a {} (curly braces).
// 2. Object constructor function using a new keyword in javascript?.

// We can make an empty object example using both methods for demonstration purposes.

// 1. Using Object literals functions.
let objectLiterals = {};

// The object literals initializes the object using {} braces.

// 2. Using new Keyword in Object constructor funcitons.

// Initialize object constructor with new Object.

// The same data was created using the object constructor method that is initialized with new Object().

let objectConstructor = new Object();

// Both of these approaches will create an empty object. Using object literals is the more common and preferred method, as it has less potential for inconsistencies and unexpected results

// We can create an example of object. We create a variable name "gimli" to store object.
const gimli = {
  name: "johnX",
  race: "dwarfX",
  weapon: "bajuka",
  greet: function () {
    console.log(`Hello guyz this is a, ${this.name}`);
  },
};

// We created a new object name "gimli" which consist key value pair : keys are "name", "race", and "weapon" or greet, and the values are "JohnX", dwarfX, bajuka and  a method.

// Here method name is greet in Our object.
// We Can directly create a methods in javascript!.

// With Greet Object,You may notice it consist of "this" keyword in our greet function ,
// Which means it consist or refers to current object. in this case it is "gimli".

// console.log(gimli);

// Sending gimli to the console will print he entire object.
/*
{
    name: "shivam",
    race: "dwarfX",
    weapon: "bajuka",
    greet: [Function: greet]
}
*/

// Properties and Methods.

// Objects can have properties and methods.

// A property is the Association between a name (key) and Value within an object, and it can contain any datatype. A property generally refers to the characteristic of an object.

// A Method is a function that is the Value of an object property, and Therefore a task that an object can perform.

// We can assume property as a noun, like name, Race and Weapon and assume a methods as an verb.

// Name, Race and Weapon are all nouns associated with an object, and are properties. fight() or talk() are verbs that might be used as a method function definition.

// Two ways to access javascript property.

// 1. . Dot Notaion.
// 2. [] Bracket Notation.

const jimli = {
  name: "jimliX",
  race: "X",
  weapon: "Mouzer",
  greet: function () {
    console.log(`Hello guyz this is a, ${this.name}`);
  },
};

// If We Want to access the propery of Object jimli, So first takes the object variable name and followed (by the . notaion) and the name of the property (in this case it is) called Weapon.

console.log(jimli.name);
console.log(jimli.race);
console.log(jimli.weapon);

// We can Access the Same data with [] bracket notaion in javascript, but . notaion is faster then [] braket notaion in js .

console.log(jimli["name"]);
console.log(jimli["race"]);
console.log(jimli["weapon"]);

// Both Ways are Used to access the javascript property.

// Bracket notation allows access to property names stored in a variable, and must be used if an object’s property contains any sort of special character.

// You Can Access The Object Method by same way you call the Regular function followed by an object name and (.) Notation!.

jimli.greet();

// We Can Also Update And Insert New Properties Inside an Object.

// inserting new value properties inside an object

jimli.age = 136;

console.log(jimli.age);

// Adding a New method Inside a jimli object.
jimli.fight = function () {
  console.log(`Jimli attacks with a ${this.weapon}`);
};

jimli.fight();
// Removing object Properties.

// In order to delete an property from an object use a keyword called "delete" keyword. [delete] is an operator that removes a property from an object.

// Now The Property of jimli is deleted!.
// delete jimli.race;

// if you now try to print its property it will definetly prints "undefined", because the race property gets deleted.

// Iterating over the object.

// We Use the for in loop to iterate over the objects in javascript.
for (let values in jimli) {
  console.log(`${values} :- ${jimli[values]}`);
}

// Iterating Over The Objects.
console.log("Iterating over the Objects!");
function foo(...arguments) {
  for (const value of arguments) {
    console.log(value);
  }
}
foo(1, 2, 3);
