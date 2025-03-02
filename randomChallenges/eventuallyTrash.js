// Find the Most Frequent Element in an Array
const arr0 = [1, 3, 2, 3, 4, 3, 2, 1];
// Output: 3 (appears 3 times)

const frequent = (arr) => {
  let arrMap = new Map();
  let maxCount = 0;
  let maxCountVal = 0;

  for (val of arr) {
    arrMap.set(val, (arrMap.get(val) || 0) + 1);
  }

  for ([val, count] of arrMap.entries()) {
    if (count > maxCount) {
      maxCount = count;
      maxCountVal = val;
    }
  }

  return maxCountVal;
};

console.log(frequent(arr0));

// Remove Duplicates from an Array
const arr1 = [1, 2, 2, 3, 4, 4, 5];
// Output: [1, 2, 3, 4, 5]

const noDuplicates = (arr) => {
  return [...new Set(arr)];
};

console.log(noDuplicates(arr1));

// OR

const noSetDuplicate = (arr) => {
  let newArr = [];
  let seen = {};

  for (i = 0; i < arr.length; i++) {
    if (!seen[arr[i]]) {
      newArr.push(arr[i]);
      seen[arr[i]] = true;
    }
  }

  return newArr;
};
console.log(noSetDuplicate(arr1));

//Calculate the Median of an Array
const arr2 = [5, 2, 9, 1, 8];
// Output: 5 (middle value after sorting)

const median = (arr) => {
  const orderedArr = arr.sort((a, b) => a - b);
  let length = arr.length;
  const midIndex = Math.floor(length / 2);

  if (length % 2 === 0) {
    return (orderedArr[midIndex] + orderedArr[midIndex - 1]) / 2;
  }

  return orderedArr[midIndex];
};

console.log(median(arr2));

// Find the Longest Word in a String
const str0 = "The quick brown fox jumps over the laziest dog";
// Output: "jumps"

const longestWord = (str) => {
  const strArr = str.split(" ");
  let wordCount = 0;
  let word;

  for (let i = 0; i < strArr.length; i++) {
    let currCount = strArr[i].split("").length;
    if (currCount > wordCount) {
      wordCount = currCount;
      word = strArr[i];
    }
  }

  return word;
};

console.log(longestWord(str0));

// Count Vowels in a String
const str1 = "Hello World";
// Output: 3 (e, o, o)

const vowelCount = (str) => {
  strArr = str.split("");
  let vowelArr = [];

  for (char of strArr) {
    if (
      char === "e" ||
      char === "o" ||
      char === "u" ||
      char === "i" ||
      char === "a"
    ) {
      vowelArr.push(char);
    }
  }

  return vowelArr.length;
};

console.log(vowelCount(str1));
