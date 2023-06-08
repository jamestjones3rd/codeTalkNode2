// What is a callback? What is callback hell? 
// Why does callback hell occur and why should we avoid callback hell?  
// Please code an example of callback hell to show to the class. 
// Make sure to go into detail as you explain your code to the class.

//ANSWER:
// Callback hell refers to a situation where multiple nested callbacks are used in asynchronous code, 
// leading to code that is difficult to read, understand, and maintain. 
// Callback hell occurs when there are numerous asynchronous operations that depend on each other, 
// and each subsequent operation relies on the result of the previous one. 
// This can result in deeply nested callbacks, making the code hard to follow and prone to errors.

operation1(function(result1) {
    // Handle result1
    operation2(function(result2) {
      // Handle result2
      operation3(function(result3) {
        // Handle result3
        // More operations...
      });
    });
  });

  operation1()
  .then(function(result1) {
    // Handle result1
    return operation2();
  })
  .then(function(result2) {
    // Handle result2
    return operation3();
  })
  .then(function(result3) {
    // Handle result3
    // More operations...
  })
  .catch(function(error) {
    // Handle errors
  });