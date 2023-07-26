function ques1() {
    const fruits = ['Apple', 'Banana', 'Orange', 'Mango'];
  
    for (const fruit of fruits) {
      alert(fruit);
    }
  }
  
  ques1(); // Output: Apple, Banana, Orange, Mango
  ////////////////////////////////////////////////////////////////////////////////////////////
  function ques2() {
    const message = "Hello, world!";
  
    for (const char of message) {
      alert(char);
    }
  }
  
  ques2(); // Output: H, e, l, l, o, ,,  , w, o, r, l, d, !
  ////////////////////////////////////////////////////////////////////////////////////////
  function ques3() {
    const person = {
      name: "John Doe",
      age: 30,
      country: "USA"
    };
  
    for (const property of Object.values(person)) {
      alert(property);
    }
  }
  
  ques3(); // Output: John Doe, 30, USA
  ////////////////////////////////////////////////////////////////////////////////////////////////////
  function ques4() {
    const person = {
      name: "John Doe",
      age: 30,
      country: "USA"
    };
  
    for (const value of Object.values(person)) {
      alert(value);
    }
  }
  
  ques4(); // Output: John Doe, 30, USA
  /////////////////////////////////////////////////////////////////////
  function ques5() {
    // Create a Set called `colors` with some color names
    const colors = new Set(['red', 'green', 'blue']);
  
    // Use a `for...of` loop to iterate over the Set and log each color
    for (const color of colors) {
      alert(color);
    }
  }
  /////////////////////////////////////////////////////////////////////////////////////////
  function ques6() {
    // Create an empty array
    const arr = [];
  
    // Run a loop 10 times, adding a new incrementing value to the array
    for (let i = 0; i < 10; i++) {
      arr.push(i);
    }
  
    // Log the array into the console
    alert(arr);
  
    // Use the for loop to iterate through the array and output into the console
    for (let i = 0; i < arr.length; i++) {
      alert(arr[i]);
    }
  
    // Use the for...of loop to output the value into the console from the array
    for (const value of arr) {
      alert(value);
    }
  }
  
  
  
  