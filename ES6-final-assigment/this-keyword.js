const person = {
    name: 'John',
    greet: function() {
      alert(`Hello, my name is ${this.name}.`);
    }
  };
  
  person.greet(); // Output: Hello, my name is John.



  function Car(brand) {
    this.brand = brand;
    this.speed = 0;
  
    this.accelerate = function(value) {
      this.speed += value;
    };
  
    this.printSpeed = function() {
      alert(`Current speed of the ${this.brand} car is ${this.speed} mph.`);
    };
  }
  
  // Create a new Car object
  const myCar = new Car("Toyota");
  
  // Call the accelerate method to increase speed
  myCar.accelerate(20);
  
  // Call the printSpeed method to log the current speed
  myCar.printSpeed(); // Output: Current speed of the Toyota car is 20 mph.
  
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////
  const calculator = {
    value: 0,
    add: function(number) {
      this.value += number;
    },
    subtract: function(number) {
      this.value -= number;
    },
    multiply: function(number) {
      this.value *= number;
    },
    printValue: function() {
      alert(`Current value: ${this.value}`);
    }
  };
  
  calculator.add(5); // Add 5 to the value (0 + 5)
  calculator.subtract(3); // Subtract 3 from the value (5 - 3)
  calculator.multiply(2); // Multiply the value by 2 (2 * 2)
  calculator.printValue(); // Output: Current value: 4
  ////////////////////////////////////////////////////////////
  const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: 218,
    printInfo: function() {
      alert(`Title: ${this.title}`);
     alert(`Author: ${this.author}`);
      alert(`Pages: ${this.pages}`);
    }
  };
  
  book.printInfo();
  ////////////////////////////////////////////////////////////////////////////
  function Person(name, age) {
    this.name = name;
    this.age = age;
  
    this.introduce = function() {
      alert(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    };
  }
  
  // Create a new Person object
  const person1 = new Person("John Doe", 25);
  
  // Call the introduce method
  person1.introduce();
  /////////////////////////////////////////////////////////////////
  const counter = {
    count: 0,
    increment: function() {
      this.count += 1;
    },
    reset: function() {
      this.count = 0;
    }
  };
  
  counter.increment(); // Increase count by 1
  alert(counter.count); // Output: 1
  
  counter.increment(); // Increase count by 1 again
 alert(counter.count); // Output: 2
  
  counter.reset(); // Reset count to 0
  alert(counter.count); // Output: 0
  /////////////////////////////////////////////////////////////////////////
  const product = {
    name: "Example Product",
    price: 100,
    discount: 0.2,
    calculateDiscountedPrice: function() {
      const discountedPrice = this.price - (this.price * this.discount);
      return discountedPrice;
    }
  };
  
  const discountedPrice = product.calculateDiscountedPrice();
  alert(discountedPrice); // Output: 80
  ////////////////////////////////////////////////////////////////////////////////
  const game = {
    play: function() {
      alert("Playing the game...");
    }
  };
  
  game.play(); // Output: Playing the game...
  
  
  