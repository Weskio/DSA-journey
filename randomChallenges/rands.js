//average of an array

const arr = [2, 23, 7, 9, 11, 8, 10, 400];

const avgArr = (arr) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  return total / arr.length;
};

console.log(avgArr(arr));

const reduceArr = (arr) => {
  return (
    arr.reduce((curr, acc) => {
      return (curr += acc);
    }, 0) / arr.length
  );
};

console.log("reduce arr", reduceArr(arr));

//unique item
const repeatingArr = [1, 1, 3, 2, 2, 4, 3, 7, 4, 5, 5, 1, 4, 1];

const uniqueItem = (arr) => {
  const numMap = new Map();

  for (num of arr) {
    numMap.set(num, (numMap.get(num) || 0) + 1);
  }

  for (const [num, count] of numMap.entries()) {
    if (count === 1) return num;
  }

  return null;
};

console.log(uniqueItem(repeatingArr));

//fibonacci sequence
const fibonacci = (n) => {
  if (n <= 1) return n;

  return fibonacci(n - 1) + fibonacci(n - 2);
};

console.log(fibonacci(8));

const occurence = (arr, val) => {
  let indexes = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      indexes.push(i);
    }
  }

  return indexes.length;
};

console.log("occurence", occurence(repeatingArr, 1));

// Find the Most Frequent Item in an Array
const arrF = [1, 2, 3, 2, 4, 2, 5, 1, 3, 3, 3];
// Output: 3 (appears 4 times)

const mostFrequent = (arr) => {
  const freqMap = new Map();

  let maxValue = 0;
  let freqVal;

  for (val of arr) {
    freqMap.set(val, (freqMap.get(val) || 0) + 1);
  }

  for (const [key, value] of freqMap.entries()) {
    if (value > maxValue) {
      maxValue = value;
      freqVal = key;
    }
  }

  return freqVal;
};

console.log("most frequent", mostFrequent(arrF));

//median of array
const medArr = [5, 2, 9, 3, 7];
// Output: 5 (Sorted: [2, 3, 5, 7, 9] -> Middle: 5)

const median = (arr) => {
  const orderedArr = arr.sort((a, b) => a - b);
  let length = orderedArr.length;

  if (length % 2 === 1) {
    const medIndex = Math.floor(length / 2);
    return orderedArr[medIndex];
  }
  return (orderedArr[length / 2] + orderedArr[length / 2 - 1]) / 2;
};

console.log(median(medArr));
