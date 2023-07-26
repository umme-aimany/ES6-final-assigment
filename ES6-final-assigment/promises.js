  // 1. Function to return a promise that resolves with the square of a number after 1 second
  function squareNumber(number) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (typeof number !== 'number') {
          reject(new Error('Invalid input. Please provide a number.'));
        } else {
          const square = number * number;
          resolve(square);
        }
      }, 1000);
    });
  }
  
 squareNumber(5)
    .then(result => {
      document.getElementById('squareResult').textContent = `Square: ${result}`;
    })
    .catch(error => {
      console.error(error);
    });
  

  // 2. Function to return a promise that resolves with an array of resolved values of promises
  
  function resolvePromises(promises) {
    return Promise.all(promises);
  }
  const promises = [promise1, promise2, promise3];
  resolvePromises(promises)
    .then(resolvedValues => {
      console.log(resolvedValues); // Array of resolved values
    })
    .catch(error => {
      console.error(error); // Handle error if any of the promises reject
    });
    







  // 3. Function to fetch data from a URL and parse it as JSON
 
  function addNumbers() {
    const number1 = parseFloat(prompt("Enter the first number:"));
    const number2 = parseFloat(prompt("Enter the second number:"));
  
    if (isNaN(number1) || isNaN(number2)) {
      return "Invalid input. Please enter valid numbers.";
    }
  
    const sum = number1 + number2;
    return sum;
  }
  const result = addNumbers();
  alert(result); // Print the sum of the two numbers
    


















  // 4. Function to return a promise that resolves with the sum of resolved values of two promises
  const sumOfPromises = (promise1, promise2) => {
    return Promise.all([promise1, promise2]).then((values) => {
      const sum = values.reduce((acc, value) => acc + value, 0);
      return sum;
    });
  };

  // 5. Function to return a promise that rejects with an error if the original promise does not resolve within the timeout
  const timeoutPromise = (promise, timeout) => {
    return Promise.race([
      promise,
      new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(new Error('Promise timed out'));
        }, timeout);
      }),
    ]);
  };

  // 6. Function to create a counter using Promises
  const startCounter = () => {
    new Promise((resolve) => resolve('Start Counting'))
      .then((value) => {
        counter(value);
        return 1;
      })
      .then((value) => {
        counter(value);
        return 2;
      })
      .then((value) => {
        counter(value);
        return 3;
      });
  };

  // Helper function to output the value in the console
  const counter = (value) => {
    alert(value);
    document.getElementById("counterOutput").textContent += `${value}\n`;
  };