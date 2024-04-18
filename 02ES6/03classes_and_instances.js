// classes and Inheritance In javasript.

// --> Classes comes in ES6 version of javascript.
// --> Before that we use objects contuctor function to perform the functinality of classes.

// Syntax of classes.
// class User {
//   // it is not compulsory to write constructor always
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }
//   encryptPassword() {
//     return `${this.password}abc`;
//   }
//   changeUsernameInUpperCase() {
//     return `${this.username.toUpperCase()}`;
//   }
//   changeUsernameInLowerCase() {
//     return `${this.username.toLowerCase()}`;
//   }
// }

// let chai = new User("chai", "chai@gmail.com", "123");

// console.log(chai.encryptPassword());
// console.log(chai.changeUsernameInUpperCase());
// console.log(chai.changeUsernameInLowerCase());

// // As soon as an object is initialized from the classes (as you use the new keyword) then it automatically calls the new keyword.

// // behind the scene.
// function User1(username, email, password) {
//   this.username = username;
//   this.email = email;
//   this.password = password;
// }

// // function is behaves like an object.
// User1.prototype.encryptPassword = function () {
//   return `${this.password}abc`;
// };

// User1.prototype.changeUsernameInUpperCase = function () {
//   return `${this.username.toUpperCase()}`;
// };

// let chai2 = new User1("chai", "chai@gmail.com", "123");

// console.log(chai2.encryptPassword());
// console.log(chai2.changeUsernameInUpperCase());

// Inheritance in javascript

class User3 {
  constructor(username) {
    this.username = username;
  }

  LogMe() {
    console.log(`USERNAME IS ${this.username}`);
  }
}

class Teacher extends User3 {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }
  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}

const chai = new Teacher("chai", "chai@teacher.com", "123");
chai.addCourse();
const masalaChai = new User3("MasalaChai");

// There is no excess of masala chai for user3
// masalChai.addCourse();

// but you have access masala Chai
masalaChai.LogMe();

chai.LogMe();

// console.log(chai === masalaChai);
console.log(chai instanceof Teacher);
console.log(chai instanceof User3);

// Static property in javascript.
class User4 {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username: ${this.username}`);
  }
  // static means not for everyone.means you do not wants access outside of the classes.
  static createID() {
    return `123`;
  }
}

const shivam = new User4("shivam");
shivam.logMe();
// we can only access static properties and function using class name.
console.log(User4.createID());

class Teacher4 extends User4 {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const iphone = new Teacher4("iphone", "I@phone,com");
iphone.logMe();

// Static will not give access to the object of the same class and the class which inherits the User4 class also.
