//  1 Function to map each number to its square
 const mapNumbersToSquares = (numbers) => {
    return new Map(numbers.map((number) => [number, number * number]));
  };



  // 2. Function to map each name to its corresponding age
  const mapNamesToAges = (people) => {
    return new Map(people.map((person) => [person.name, person.age]));
  };

  // 3. Function to check if a key exists in a map
  const checkKeyInMap = (map, key) => {
    return map.has(key);
  };

  // 4. Function to filter a map based on a callback function
  const filterMapByKeyValue = (map, callback) => {
    return new Map([...map].filter(([key, value]) => callback(key, value)));
  };

  // 5. Function to merge two maps, with values from the second map overwriting values from the first map
  const mergeMaps = (map1, map2) => {
    return new Map([...map1, ...map2]);
  };

  // Execute functions and display results
  const displayResult = (elementId, result) => {
    document.getElementById(elementId).textContent = JSON.stringify(result);
  };

  document.getElementById('squaredNumbers').textContent = 'Click here';
  document.getElementById('nameToAgeMap').textContent = 'Click here';
  document.getElementById('keyExists').textContent = 'Click  here';
  document.getElementById('filteredMap').textContent = 'Click here';
  document.getElementById('mergedMap').textContent = 'Click here';

  document.getElementById('squaredNumbers').addEventListener('click', () => {
    const numbers = [1, 2, 3, 4, 5];
    const squaredMap = mapNumbersToSquares(numbers);
    displayResult('squaredNumbers', Array.from(squaredMap.entries()));
  });

  document.getElementById('nameToAgeMap').addEventListener('click', () => {
    const people = [
      { name: 'Alice', age: 25 },
      { name: 'Bob', age: 30 },
      { name: 'Charlie', age: 35 },
    ];
    const nameToAgeMap = mapNamesToAges(people);
    displayResult('nameToAgeMap', Array.from(nameToAgeMap.entries()));
  });

  document.getElementById('keyExists').addEventListener('click', () => {
    const map = new Map([
      ['a', 1],
      ['b', 2],
      ['c', 3],
    ]);
    const keyExists = checkKeyInMap(map, 'b');
    displayResult('keyExists', keyExists);
  });

  document.getElementById('filteredMap').addEventListener('click', () => {
    const map = new Map([
      ['a', 1],
      ['b', 2],
      ['c', 3],
    ]);
    const filteredMap = filterMapByKeyValue(map, (key, value) => value > 1);
    displayResult('filteredMap', Array.from(filteredMap.entries()));
  });

  document.getElementById('mergedMap').addEventListener('click', () => {
    const map1 = new Map([
      ['a', 1],
      ['b', 2],
    ]);
    const map2 = new Map([
      ['b', 3],
      ['c', 4],
    ]);
    const mergedMap = mergeMaps(map1, map2);
    displayResult('mergedMap', Array.from(mergedMap.entries()));
  });