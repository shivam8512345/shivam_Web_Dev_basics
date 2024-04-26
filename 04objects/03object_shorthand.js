// Object shorthand in javascript.

// Object property shorthand values are a newer, simpler way to define properties and functions in an object. Today, we’re going to learn how they work.

// Let’s dig in!.

// If you want to define a property In an object, and that key name already exists as a variable within the object’s scope, you don’t have to explicitly assign a value. You can use just the key name, and that variable’s value is used automatically.

// ES6 versions of javascript!.
let Name = "wizard";
let age = "21";
let work = "age";

let wizard = {
  Name: Name, // old way of javascript,
  age, // ES6 versions,
  work, // ES6 Versions,
};

// ES6 versions of javascript!.
console.log(wizard.Name);
console.log(wizard.age);
console.log(wizard.work);

// Before ES6 Methods!.  we do like that name:name ,but after ES6 we do not have to include (:) colon ,if the value of variable is same as key

// Object function shorthands.
// Let’s Imagine We Wanted To add a few functions to our wizard object. ES6 provides a simpler way to do that as well.

// Before ES6 We Define Our Function Like That key name followed by a function() {},but after ES6 you can direct assign the function name.Instead of writing function() {},

let wizard2 = {
  Name: Name, // old way of javascript,
  age, // ES6 versions,
  work, // ES6 Versions,

  // The old way of adding functions
  summons: function () {
    console.log(
      `older version of javascrip! to define a method inside a object!`
    );
  },

  // The ES6 Newer Functions.
  vanish() {
    console.log(`ES6 versions of javascript! to define the methods`);
  },
};

// Wizard(older functions)
wizard2.summons();

// Wizard newer function
wizard2.vanish();
