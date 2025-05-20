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
