const computePrefixSum = (arr) => {
  const prefixArr = new Array(arr.length);

  prefixArr[0] = arr[0];
  for (let i = 1; i < arr.length; i++) {
    prefixArr[i] = prefixArr[i - 1] + arr[i];
  }

  return prefixArr;
};

const arr = [10, 20, 10, 5, 15];

console.log(computePrefixSum(arr));

// more use cases for this algo concept to follow


// subarray sum Equals K
const subarraySum = (nums, k) => {
  const prefixSumMap = { 0: 1 }; 
  let currentSum = 0;
  let count = 0;

  for (const num of nums) {
      currentSum += num; 

      if (prefixSumMap[currentSum - k]) {
          count += prefixSumMap[currentSum - k];
      }

      prefixSumMap[currentSum] = (prefixSumMap[currentSum] || 0) + 1;
  }

  return count;
}

console.log(subarraySum([1, 1, 1], 2));