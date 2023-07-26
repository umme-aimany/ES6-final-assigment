function ques1() {
    // Create a simple object with three items in it
    const myObject = {
      name: 'John',
      age: 30,
      city: 'New York'
    };
  
    // Using the for...in loop, get the properties' names and values from the object and output them into the console
    for (const key in myObject) {
      console.log(`${key}: ${myObject[key]}`);
      alert(`${key}: ${myObject[key]}`);
    }
  
    // Create an array containing the same three items
    const myArray = ['John', 30, 'New York'];
  
    // Using the for loop, output the values from the array into the console
    for (let i = 0; i < myArray.length; i++) {
      console.log(myArray[i]);
      alert(myArray[i]);
    }
  }
/////////////////////////////////////////////////////////////////////////////  
function ques2() {
    // Create an object called `person` with properties like `name`, `age`, and `country`
    const person = {
      name: 'John Doe',
      age: 30,
      country: 'USA'
    };
  
    // Use a `for...in` loop to iterate over the object and log each property name
    for (const property in person) {
      console.log(property);
      alert(property);
    }
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////////////
  function ques3() {
    // Create an array called `numbers` with some numeric values
    const numbers = [1, 2, 3, 4, 5];
  
    // Use a `for...in` loop to iterate over the array and log each index
    for (const index in numbers) {
      console.log(index);
      alert(index);
    }
  }
  //////////////////////////////////////////////////////////////////////////////////
  function ques4() {
    // Create a string called `message` with some text
    const message = "Hello, World!";
  
    // Use a `for...in` loop to iterate over the characters of the string and log each character
    for (const index in message) {
      const character = message[index];
      console.log(character);
      alert   (character);
    }
  }
  ////////////////////////////////////////////////////
  function ques5() {
    // Create a Set called `colors` with some color names
    const colors = new Set(['red', 'green', 'blue']);
  
    // Use a for...of loop to iterate over the Set and log each color
    for (const color of colors) {
      console.log(color);
      alert(color);
    }
  }
  ////////////////////////////////////////////////////////////////////////
  function ques6() {
    // Create an object called `car` with properties like `brand`, `model`, and `year`
    const car = {
      brand: 'BMW',
      model: 'lancrouser',
      year: 2022,
    };
  
    // Use a for...in loop to iterate over the object and log each property value
    for (const key in car) {
      console.log(car[key]);
      alert(car[key]);
    }
  }
  
  
  
  
  