
// 1. Counter using closures
function counter() {
  let count = 0;

  return function() {
    count++;
    console.log(count);
  };
}

const incrementCounter = counter();

document.getElementById('counterButton').addEventListener('click', function() {
  incrementCounter();
});

// 2. Create multiplier using closures
function createMultiplier(number) {
  return function(multiplier) {
    return number * multiplier;
  };
}

const multiplyByTwo = createMultiplier(2);

document.getElementById('multiplierButton').addEventListener('click', function() {
  const result = multiplyByTwo(5);
  document.getElementById('multiplierOutput').textContent = result;
});

// 3. Secret message using closures
function secretMessage(string) {
  return function() {
    console.log(`Secret message: ${string}`);
  };
}

const revealSecret = secretMessage('Open sesame');

document.getElementById('secretMessageButton').addEventListener('click', function() {
  revealSecret();
  document.getElementById('secretMessageOutput').textContent = 'Secret message logged in the console';
});

// 4. Calculate using closures
function calculate(num1, num2) {
  return {
    add: function() {
      return num1 + num2;
    },
    multiply: function() {
      return num1 * num2;
    }
  };
}

const calculator = calculate(3, 4);

document.getElementById('calculateButton').addEventListener('click', function() {
  const sum = calculator.add();
  const product = calculator.multiply();
  document.getElementById('calculateOutput').textContent = `Sum: ${sum}, Product: ${product}`;
});