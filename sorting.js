const messedArr = [2, 8, 11, 6, 9, 1, 5, 17];

//Insertion Sorting
//Time complexity Best case: O(n) Worst Case: O(n^2) Space complexity: O(1)
const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;

    while (j >= 0 && arr[j + 1] < arr[j]) {
      let tmp = arr[j + 1];
      arr[j + 1] = arr[j];
      arr[j] = tmp;
      j--;
    }
  }
  return arr;
};

console.log("Ordered Array:", insertionSort(messedArr));

//Merge Sorting
//Time complexity: O(nlogN) Space complexity: O(n)
const mergeSort = (arr, start, end) => {
  if (end - start <= 1) return;

  let mid = Math.floor((start + end) / 2);
  mergeSort(arr, start, mid);
  mergeSort(arr, mid + 1, end);
  merge(arr, start, mid, end);

  return arr;
};

// Merges two subarrays of arr[].
// First subarray is arr[l..m]
// Second subarray is arr[m+1..r]
function merge(arr, l, m, r) {
  let length1 = m - l + 1;
  let length2 = r - m;

  let L = new Array(length1);
  let R = new Array(length2);

  for (let i = 0; i < length1; i++) {
    L[i] = arr[l + i];
  }

  for (let j = 0; j < length2; j++) {
    R[j] = arr[m + 1 + j];
  }
  let i = 0;
  let j = 0;
  let k = l;
  while (i < length1 && j < length2) {
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    k++;
  }
  while (i < length1) {
    arr[k] = L[i];
    i++;
    k++;
  }
  while (j < length2) {
    arr[k] = R[j];
    j++;
    k++;
  }
}

console.log("merge sort:", mergeSort(messedArr, 0, messedArr.length - 1));

//Quick sort algorithm. by far the only unstable sorting algorithm. Time complexity: O(n^2)
const quickSort = (arr, start, end) => {
  if (end - start + 1 <= 1) return null;

  let pivot = arr[end];
  let left = start;

  for (let i = start; i < end; i++) {
    if (arr[i] < pivot) {
      // let temp = arr[left];
      // arr[left] = arr[i];
      // arr[i] = temp;
      [arr[i], arr[left]] = [arr[left], arr[i]];
      left++;
    }
  }
  arr[end] = arr[left];

  quickSort(arr, start, left - 1);
  quickSort(arr, left + 1, end);

  return arr;
};

console.log("quick sort:", quickSort(messedArr, 0, messedArr.length - 1));

const arrB = [0, 1, 0, 2, 4, 5, 0, 1, 3];
const bucketSort = (arr) => {
  let minValue = Math.min(...arr);
  let maxValue = Math.max(...arr);

  let bucketSize = 1;
  let bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;

  let bucketArr = new Array(bucketCount);

  for (let i = 0; i < arr.length; i++) {
    bucketArr[arr[i]] = [];
  }

  for (let i = 0; i < arr.length; i++) {
    const bucketIndex = Math.floor((arr[i] - minValue) / bucketSize);
    bucketArr[bucketIndex].push(arr[i]);
  }

  return bucketArr.flat();
};

console.log(bucketSort(arrB));

// Summary Table:

// Algorithm	          Best Case Time   	Average Case Time	     Worst Case Time     	Space Complexity
// Iteration sort       O(n)               O(n^2)                O(n^2)               O(1)
// Merge sort           O(nlogn)           O(nlogn)              O(nlogn)             O(n)
// Quick sort           O(nlogn)           O(nlogn)              O(n^2)               O(logn)
// Bucket sort          O(n + k)           O(n + k)              O(n^2)               O(n + k)
