// What is a promise? What are promises used for?  
// What are pro/cons to using a promise?  
// Please code some examples of promises to show to the class. 
// Make sure to go into detail as you explain your code to the class.

//ANSWER:

// Pros of using promises:

// Readability: Promises provide a more readable and sequential way of writing asynchronous code compared to nested callbacks.
// Error handling: Promises have built-in error handling through the catch method, allowing you to handle errors in a centralized manner.
// Chaining: Promises can be easily chained together using the then method, which allows you to perform sequential operations on the resolved value.
// Asynchronous control flow: Promises enable you to control the flow of asynchronous operations, such as waiting for multiple promises to resolve using methods like Promise.all or Promise.race.

// Cons of using promises:

// Browser support: Older browsers may not support promises natively, requiring the use of polyfills or transpilers like Babel.
// Learning curve: Understanding promises and working with asynchronous code can be challenging for beginners.
// Debugging: Debugging promises can be more difficult compared to synchronous code due to their asynchronous nature.


// Creating a promise
const fetchData = new Promise((resolve, reject) => {
    // Simulating an asynchronous operation
    setTimeout(() => {
      const data = { id: 1, name: 'John Doe' };
      // Resolving the promise with the data
      resolve(data);
      // Rejecting the promise (comment out the resolve line above and uncomment the line below to see the rejection)
      // reject(new Error('Failed to fetch data.'));
    }, 2000);
  });
  
  // Using the promise
  fetchData
    .then((data) => {
      console.log('Fetched data:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

//Example 2: Chaining Promises

    const getData = () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            const data = { id: 1, name: 'John Doe' };
            resolve(data);
          }, 2000);
        });
      };
      
      const processData = (data) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            const processedData = { ...data, age: 25 };
            resolve(processedData);
          }, 2000);
        });
      };
      
      getData()
        .then((data) => {
          console.log('Fetched data:', data);
          return processData(data);
        })
        .then((processedData) => {
          console.log('Processed data:', processedData);
        })
        .catch((error) => {
          console.error('Error:', error);
        });