// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

//MY SOLUTION Time complexity: O(n^2) Space complexity: O(1)
const twoSum = (nums, target) => {
  let targetArr = [];

  for (let x = 0; x < nums.length; x++) {
    nums.filter((y) => {
      if (y + nums[x] === target && nums.indexOf(y) != x) {
        return (targetArr = [x, nums.indexOf(y)]);
      }
    });
  }

  return targetArr;
};

(nums = [2, 7, 11, 15]), (target = 9);
console.log(twoSum(nums, target));
