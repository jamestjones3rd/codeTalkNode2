// The “this” keyword works differently in arrow functions vs regularly declared functions.  
// Explain how the “this” keyword works differently in arrow functions vs normal functions.  
// Write some code that shows that you understand the difference between how the “this” keyword is used.  
// Make sure to go into detail as you explain your code to the class.


// the this keyword is used to refer to the current execution context or the object on which a method is invoked. 
// However, the behavior of the this keyword differs between arrow functions and regular functions. 
// Let's delve into the differences and then illustrate them with some code examples.

// Arrow Functions:
// Arrow functions were introduced in ES6 and have a concise syntax. 
// The key difference is that arrow functions do not have their own this value. 
// Instead, they lexically capture the this value of the enclosing scope.

// Example 1: Arrow Function
// const person = {
//     name: 'John',
//     sayName: () => {
//       console.log(this.name); // 'this' refers to the global scope (e.g., window object in a browser)
//     }
//   };
  
//   person.sayName(); // Output: undefined


//   // Example 2: Regular Function
// const person = {
//     name: 'John',
//     sayName: function() {
//       console.log(this.name); // 'this' refers to the 'person' object
//     }
//   };
  
//   person.sayName(); // Output: John