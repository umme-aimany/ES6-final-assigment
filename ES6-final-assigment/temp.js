function ques1(){
    function createGreeting(obj) {
      var message = `Hello,${obj.name} ! You are ${obj.age} years old.`;
      return message;
    }
    
    
    var person = {
      name: prompt("Enter Your Name:"),
      age: parseInt(prompt("Enter Your Age:")),
    };
    
    var greeting = createGreeting(person);
    alert(greeting); // Output: Hello, John! You are 25 years old.
    
  }
  
  function ques2(){
    function calculateSumAndAverage(numbers) {
      let sum = 0;
      for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
      }
      const average = sum / numbers.length;
      return `Sum: ${sum}, Average: ${average}`;
    }
    
   
    
    
    let maxlength = parseInt(prompt("Enter max length of Array,\nYou want to process:"));
    let numbersArray =[];
    
    if (maxlength > 0) {
      alert("Start Entering Arrays Elments:");
      for(maxlength ; maxlength > 0 ; maxlength-- ){
        numbersArray.push(parseInt(prompt("Enter of Array")) );
      }
      const result = calculateSumAndAverage(numbersArray);
      console.log(result); // Output: Sum: 30, Average: 6
      alert(result); // Output
    }
    else{
      alert("Array Length must be Greater than 0!");
    }
    
  }
  
  function ques3(){
    function createHTMLElement(tagName, text) {
      const htmlElement = `<${tagName}>${text}</${tagName}>`;
      return htmlElement;
    }
    
    const tagName = prompt("Enter HTML TagName,\nYou want to process:");
    const text = prompt("Enter HTML Text,\nYou want to Display:");;
    
    const htmlElement = createHTMLElement(tagName, text);
    document.write(htmlElement);
    
  }
  
  function ques4(){
    function createProductInfo(product) {
      const { name, price, quantity } = product;
      const productInfo = `Record of Product ${name}, having Price ${price}, with Quantity: ${quantity} has been stored in Database.`;
      return productInfo;
    }
    
    const product = { 
      name: prompt("Enter Product Name:"),
      price: parseInt(prompt("Enter One Piece Price:")),
      quantity: parseInt(prompt("Enter Quantity:")),
    };
    
    const productInfoString = createProductInfo(product);
    alert(productInfoString);
    // Output: Product: iPhone, Price: $999, Quantity: 3
    
  }
  

  function ques5(){
    function formatDate(date) {
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = String(date.getFullYear());
      const formattedDate = `${day}/${month}/${year}`;
      return formattedDate;
    }
    
    const dateObject = new Date();
    const formattedDateString = formatDate(dateObject);
    alert(formattedDateString);
    // Output: Current date formatted as dd/mm/yyyy
    
  }
  