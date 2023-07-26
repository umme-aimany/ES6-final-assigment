function ques1() {
    function calculateSum(numbers) {
        const [num1, num2] = numbers;
        const sum = num1 + num2;
        return sum;
    }

    let numbersArray = [];
    alert("Start Entering Array 2 Elments:");
    for (let maxlength = 2; maxlength > 0; maxlength--) {
        numbersArray.push(parseInt(prompt("Enter of Array")));
    }
    const result = calculateSum(numbersArray);
    alert(`Sum of Given Array ${numbersArray} is   ${result}`);

}

function ques2() {
    function createPersonInfo(person) {
        const { name, age, occupation } = person;
        const personInfo = `Person Name: ${name} is ${age} years old, occupation is ${occupation}`;
        return personInfo;
    }

    const person = {
        name: prompt("Enter Your Name:"),
        age: parseInt(prompt("Enter Your Age:")),
        occupation: prompt("Enter Your Occupation:"),
    };

    const personInfoString = createPersonInfo(person);
    alert(personInfoString);

}

function ques3() {
    function findPersonWithHighestScore(people) {
        const [firstPerson, ...restOfPeople] = people;
        let highestScore = firstPerson.score;
        let personWithHighestScore = firstPerson.name;

        for (let i = 0; i < restOfPeople.length; i++) {
            const { name, score } = restOfPeople[i];
            if (score > highestScore) {
                highestScore = score;
                personWithHighestScore = name;
            }
        }

        return personWithHighestScore;
    }
    let maxlength = parseInt(prompt("Enter max length of Person Array,\nYou want to process:"));
    let peopleArray = [], name, score;

    if (maxlength > 0) {
        alert("Start Entering Persons Details:");
        for (let ind = 0; ind < maxlength; ind++) {
            //   console.log(`${ind+1}`);
            name = prompt(`Enter Person${ind + 1} Name`);
            score = parseInt(prompt(`Enter Person${ind + 1} Score`));

            peopleArray.push({ name: name, score: score },);

        }
        console.log("peopleArray recorded ==== ", peopleArray);

        let personWithHighestScore = findPersonWithHighestScore(peopleArray);
        alert(`Person ${personWithHighestScore} has Highest Score.`);
    }
    else {
        alert("Array Length must be Greater than 0!");
    }
}

function ques4() {
    function getInitials(person) {
        const { firstName = '', middleName = '', lastName = '' } = person;
        const initials = `${firstName.charAt(0)}${middleName.charAt(0)}${lastName.charAt(0)}`;
        return initials.toUpperCase();
    }

    alert("Start Entering Persons Details:");
    let person = {
        firstName: prompt(`Enter Person firstName`),
        middleName: prompt(`Enter Person middleName`),
        lastName: prompt(`Enter Person lastName`)
    };

    console.log("person recorded ==== ", person);
    let personInitials = getInitials(person);
    alert(`Person Initial is   ${personInitials}`);

}

function ques5(){
    function createObjectWithFirstAndLast(array) {
        const [first,,, last] = array;
        console.log(`last element array === after destruction ${array}`);

        return `{${first},${last}}`;
    }
    
    const stringsArray = ["apple", "banana", "cherry", "date"];
    const resultObject = createObjectWithFirstAndLast(stringsArray);
    console.log(`first and last element === after destruction ${resultObject}`);
    alert(`Given array is:${stringsArray}\nfirst and last element is\n${resultObject}`);
    // Output: { first: "apple", last: "date" }
      
}
