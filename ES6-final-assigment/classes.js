 // 2. Person class and friends
 class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }

  function createFriends() {
    const friend1 = new Person('John', 'Doe');
    const friend2 = new Person('Jane', 'Smith');
    console.log(`Hello, ${friend1.firstName} ${friend1.lastName}!`);
    console.log(`Hello, ${friend2.firstName} ${friend2.lastName}!`);
    document.getElementById('friendsNames').textContent = `Friends' names printed in the console`;
  }

  // 3. Person class with introduction
  class PersonWithIntroduction {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    introduction() {
      return `My name is ${this.name} and I am ${this.age} years old.`;
    }
  }

  function introducePerson() {
    const person = new PersonWithIntroduction('Alice', 25);
    const introduction = person.introduction();
    document.getElementById('personIntroduction').textContent = introduction;
  }

  // 4. Rectangle class with area and perimeter
  class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }

    area() {
      return this.width * this.height;
    }

    perimeter() {
      return 2 * (this.width + this.height);
    }
  }

  function calculateRectangle() {
    const rectangle = new Rectangle(4, 6);
    const area = rectangle.area();
    const perimeter = rectangle.perimeter();
    document.getElementById('rectangleResult').textContent = `Area: ${area}, Perimeter: ${perimeter}`;
  }

  // 5. Circle class with diameter, circumference, and area
  class Circle {
    constructor(radius) {
      this.radius = radius;
    }

    diameter() {
      return 2 * this.radius;
    }

    circumference() {
      return 2 * Math.PI * this.radius;
    }

    area() {
      return Math.PI * this.radius * this.radius;
    }
  }

  function calculateCircle() {
    const circle = new Circle(5);
    const diameter = circle.diameter();
    const circumference = circle.circumference();
    const area = circle.area();
    document.getElementById('circleResult').textContent = `Diameter: ${diameter}, Circumference: ${circumference}, Area: ${area}`;
  }

  // 6. Student class inheriting from Person class
  class Student extends Person {
    constructor(name, age, course) {
      super(name, age);
      this.course = course;
    }

    introduction() {
      return `My name is ${this.firstName} ${this.lastName}, I am ${this.age} years old, and I am studying ${this.course}.`;
    }
  }

  function introduceStudent() {
    const student = new Student('aiman', 20, 'Computer Science');
    const introduction = student.introduction();
    document.getElementById('studentIntroduction').textContent = introduction;
  }

  // 7. Square class inheriting from Rectangle class
  class Square extends Rectangle {
    constructor(side) {
      super(side, side);
      this.side = side;
    }

    area() {
      return this.side * this.side;
    }

    perimeter() {
      return 4 * this.side;
    }
  }

  function calculateSquare() {
    const square = new Square(4);
    const area = square.area();
    const perimeter = square.perimeter();
    document.getElementById('squareResult').textContent = `Area: ${area}, Perimeter: ${perimeter}`;
  }