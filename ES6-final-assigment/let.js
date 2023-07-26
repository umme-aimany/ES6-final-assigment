function ques1() {
    const pi = 3.14159;
    try {
      // Trying to reassign a value to a constant will throw an error
      // Corrected the assignment statement to avoid the error
      const newPi = 3.142;
      console.log(newPi); // Output: 3.142
    } catch (e) {
      alert(e);
    }
  }
  
  function ques2() {
    function sumOfSquares(numbers) {
      if (!Array.isArray(numbers)) {
        throw new TypeError("Input must be an array of numbers");
      }
      let sum = 0;
  
      for (let i = 0; i < numbers.length; i++) {
        const square = numbers[i] ** 2;
        sum += square;
      }
  
      return sum;
    }
  
    const numbersArray = [1, 2, 3, 4, 5];
    const result = sumOfSquares(numbersArray);
  
    alert(
      `Given Array is: ${numbersArray}\nSum of Squares of given array is ${result}`
    );
    console.log(result); // Output: 55
  }
  
  function ques3() {
    const stringsArray = ["apple", "banana", "cherry", "date", "elderberry"];
  
    for (let i = 0; i < stringsArray.length; i++) {
      const firstLetter = stringsArray[i].charAt(0);
      console.log(firstLetter);
    }
  }
  
  function ques4() {
    function createAsteriskString(n) {
      const asterisk = "*";
      return asterisk.repeat(n);
    }
  
    const n = parseInt(prompt("Enter number to print * N times:"));
    const result = createAsteriskString(n);
    console.log(result); // Output: *****
  }
  
  function ques5() {
    function createGreeting(obj) {
      const message = `Hello, ${obj.name}! You are ${obj.age} years old.`;
      return message;
    }
  
    const person = {
      name: prompt("Enter Your Name:"),
      age: parseInt(prompt("Enter Your Age:")),
    };
  
    const greeting = createGreeting(person);
    alert(greeting); // Output: Hello, John! You are 25 years old.
  }
  
  function ques6() {
    function findMaxValue(numbers) {
      if (numbers.length > 0) {
        const max = Math.max(...numbers);
        return max;
      }
      // If the array is empty, returning undefined as there is no maximum value
      return undefined;
    }
  
    const maxLength = parseInt(prompt("Enter max length of Array,\nYou want to process:"));
    const numbersArray = [];
  
    if (maxLength > 0) {
      alert("Start Entering Array Elements:");
      for (let i = 0; i < maxLength; i++) {
        numbersArray.push(parseInt(prompt("Enter value of Array")));
      }
      const maxValue = findMaxValue(numbersArray);
      if (maxValue !== undefined) {
        alert(`Maximum Value is ${maxValue}`);
      } else {
        alert("Array is empty!");
      }
    } else {
      alert("Array Length must be greater than 0!");
    }
  }
  