function ques1() {
    function calculateSum(num1 = 0, num2 = 0) {
        const sum = num1 + num2;
        return sum;
    }

    alert("Sum of Two Numbers with Default:");
    let num1 = parseInt(prompt("Enter of Number 1 Value:"));
    let num2 = parseInt(prompt("Enter of Number 2 Value:"));

    const result = calculateSum(num1 , num2);
    alert(`Sum of ${num1} and ${num2} is   ${result}`);

}
function ques2(){
    function arrayReturn(...args) {
        console.log(args);
        return args;
    }
    
    const result = arrayReturn("red","blue","orange","green","yellow");
    alert("Return Array of Colors Name Using Rest:" );
    alert(result);
    console.log("Return Array of Colors Name Using Rest:" );
    console.log(result);
}

function ques3(){
    function findMaxValue(numbers) {
        console.log("Array numbers in Max Fun. ==== ", ...numbers);
        return Math.max(...numbers);
      }
      
    let maxlength = parseInt(prompt("Enter max length of Array,\nYou want to process:"));
      let numbersArray =[];

      if (maxlength > 0) {
        alert("Start Entering Arrays Elments:");
          for(maxlength ; maxlength > 0 ; maxlength-- ){
            numbersArray.push(parseInt(prompt("Enter of Array")) );
          }
          const maxValue = findMaxValue(numbersArray);
          alert(`Maximum Value is ${maxValue}`); // Output
      }
      else{
        alert("Array Length must be Greater than 0!");
      }
}
////////////////////////////////////////////////////////////
