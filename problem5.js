// What is a async/await? Why is async/await useful?  
// What are pro/cons to using async/await?  
// Please code some examples of async/await to show to the class. 
// Make sure to go into detail as you explain your code to the class.



// Fetching data from an API using async/await

async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log('Error:', error);
  }
}

fetchData();


// Example 2: Simulating asynchronous operations with setTimeout()

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function performTasks() {
  console.log('Task 1');
  await delay(2000);
  console.log('Task 2');
  await delay(1000);
  console.log('Task 3');
}

performTasks();