 // 1. Function to demonstrate arrow function usage with forEach()
 function executeForEach() {
    const numbers = [1, 2, 3, 4, 5];
    let sum = 0;

    numbers.forEach((number) => {
      sum += number;
    });

    document.getElementById("forEachResult").textContent = `The sum of numbers is ${sum}.`;
  }

  // 2. Arrow function to calculate the length of a string
 
  function stringLength() {
    const string = prompt("Enter a string:"); 
    const length = (str) => str.length; // Arrow function that returns the length of the string
    const result = length(string); // Call the arrow function with the user-provided string
    alert("Length of the string: " + result);
     // Display the length of the string using an alert
  }



  // 3. Arrow function to calculate the product of two numbers
  
  function calculateProduct(a, b) {
    const product = (a, b) => a * b; // Arrow function that calculates the product of two numbers
    const result = product(a, b); // Call the arrow function with the provided arguments
    document.getElementById("productResult").innerText = "Product: " + result; // Display the result on the page
  }


  // 4. Arrow function to calculate the average of an array of numbers
  
  function calculateAverage(numbers) {
    const average = (arr) => {
      const sum = arr.reduce((acc, curr) => acc + curr, 0); // Calculate the sum of numbers in the array
      return sum / arr.length; // Return the average by dividing the sum by the length of the array
    };

    const result = average(numbers); // Call the arrow function with the provided array
    document.getElementById("averageResult").innerText = "Average: " + result; // Display the result on the page
  }

  // 5. Arrow function to generate a greeting message
  function generateGreeting(name) {
    const greeting = (name) => `Hello, ${name}!`; // Arrow function that generates a greeting message
    const result = greeting(name); // Call the arrow function with the provided name
    document.getElementById("greetingResult").innerText = result; // Display the result on the page
  }



  // 6. Arrow function to generate a random number between 0 and 1
 
  function generateRandomNumber() {
    const randomNumber = () => Math.random(); // Arrow function that generates a random number between 0 and 1
    const result = randomNumber(); // Call the arrow function
    document.getElementById("randomNumberResult").innerText = "Random Number: " + result; // Display the result on the page
  }

