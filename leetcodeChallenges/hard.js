// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
// The overall run time complexity should be O(log (m+n)).

let nums1 = [1, 3];
let nums2 = [2];

const findMedianSortedArrays = (nums1, nums2) => {
  const combinedArr = [...nums1, ...nums2].sort((a, b) => a - b);
  let n = combinedArr.length;
  let median = 0;

  if (n % 2 === 0) {
    median = combinedArr[Math.floor(n / 2)];
  } else {
    median = (combinedArr[n / 2 - 1] + combinedArr[n / 2]) / 2;
  }

  console.log(combinedArr);
  return median;
};

console.log(findMedianSortedArrays(nums1, nums2));
