 // 1. Delayed greeting with async/await
 async function delayedGreeting(name) {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return `Hello, ${name}!`;
}

document.getElementById('greetingButton').addEventListener('click', async function() {
  const greeting = await delayedGreeting('John');
  document.getElementById('greetingOutput').textContent = greeting;
});

// 2. Simulating an asynchronous API call with async/await
async function fetchData() {
  await new Promise(resolve => setTimeout(resolve, 3000));
  return { data: 'Some data' };
}

document.getElementById('fetchDataButton').addEventListener('click', async function() {
  const data = await fetchData();
  document.getElementById('fetchDataOutput').textContent = JSON.stringify(data);
});

// 3. Fetching users from an API with async/await
async function fetchUsers() {
  await new Promise(resolve => setTimeout(resolve, 4000));
  return ['John', 'Jane', 'Joe'];
}

document.getElementById('fetchUsersButton').addEventListener('click', async function() {
  const users = await fetchUsers();
  document.getElementById('fetchUsersOutput').textContent = JSON.stringify(users);
});

// 4. Fetching data by ID from an API with async/await
async function fetchDataById(id) {
  await new Promise(resolve => setTimeout(resolve, 5000));
  return { id, data: 'Some data' };
}

document.getElementById('fetchDataByIdButton').addEventListener('click', async function() {
  const data = await fetchDataById(123);
  document.getElementById('fetchDataByIdOutput').textContent = JSON.stringify(data);
});

// 5. Counter using setTimeout and async/await
let counterValue = 0;

async function counter(argument) {
  await new Promise(resolve => setTimeout(resolve, 1000));
  counterValue++;
  console.log(`Counter: ${counterValue}, Argument: ${argument}`);
  return counterValue;
}

document.getElementById('counterButton').addEventListener('click', async function() {
  for (let i = 0; i < 10; i++) {
    const result = await counter(i);
    document.getElementById('counterOutput').textContent += `Counter: ${result}, Argument: ${i}<br>`;
  }
});