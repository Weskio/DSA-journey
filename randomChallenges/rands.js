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

//mode of an array
const mode = (arr) => {
  let arrMap = new Map();
  let maxCount = 0;
  let modeVal = 0;

  for (val of arr) {
    arrMap.set(val, (arrMap.get(val) || 0) + 1);
  }

  for (const [val, count] of arrMap.entries()) {
    if (count > maxCount) {
      maxCount = count;
      modeVal = val;
    }
  }

  return modeVal;
};

console.log("mode", mode(arrF));

//2nd largest item of arr
const secArr = [10, 20, 4, 45, 99, 99, 20];
const secondLargest = (arr) => {
  const orderedArr = arr.sort((a, b) => a - b);
  const noDup = [...new Set(orderedArr)];

  return noDup[noDup.length - 2];
};
console.log(secondLargest(secArr));

//two arrays equal
const arr1 = [1, 2, 3, 4];
const arr2 = [4, 3, 2, 1];
// Output: true

const equalArr = (arr1, arr2) => {
  const orderedArr1 = arr1.sort((a, b) => a - b);
  const orderedArr2 = arr2.sort((a, b) => a - b);

  for (let i = 0; i < orderedArr1.length; i++) {
    if (orderedArr1[i] === orderedArr2[i]) return true;
  }

  return false;
};
console.log(equalArr(arr1, arr2));

//no duplicates without set
const arrDup = [3, 5, 7, 3, 7, 8, 9, 5];
// Output: [3, 5, 7, 8, 9]

const noDuplicate = (arr) => {
  let newArr = [];
  let seen = {};

  for (let i = 0; i < arr.length; i++) {
    if (!seen[arr[i]]) {
      newArr.push(arr[i]);
      seen[arr[i]] = true;
    }
  }

  return newArr;
};
console.log(noDuplicate(arrDup));

const arrOcc = [1, 2, 2, 3, 5, 4, 8, 2, 1, 5];

const occurenceVal = (arr, val) => {
  return arr.reduce((acc, curr) => {
    if (curr === val) {
      acc++;
    }

    return acc;
  }, 0);
};

console.log(occurenceVal(arrOcc, 1));

const str = "hello";
// Output: "olleh"

const reverseStr = (str) => {
  return str.split("").reverse().join("");
};

console.log(reverseStr(str));

const paliStr = "racecar";
// Output: true

const palindrome = (str) => {
  const reverse = str.split("").reverse().join("");
  if (!reverse === str) {
    return false;
  }
  return true;
};

console.log(palindrome(paliStr));


