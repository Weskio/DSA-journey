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

//MORE OPTIMIZED SOLUTION Time complexity: O(n) Space complexity: O(n)
const twoSumOptimized = (nums, target) => {
  let numMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];

    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }

    numMap.set(nums[i], i);
  }

  return [];
};

console.log("optimized two sum:", twoSumOptimized(nums, target));

//PS: i feel dumb for feeling happy my solution worked😪

//Given a string s, return the longest palindromic substring in s.

// Time complexity: O(n^3)
const longestPalindrome = (s) => {
  let longest = "";

  function isPalindrome(str) {
    return str === str.split("").reverse().join("");
  }

  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      const substring = s.slice(i, j);
      if (isPalindrome(substring) && substring.length > longest.length) {
        longest = substring;
      }
    }
  }

  return longest;
};

console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));

//Time complexity: O(n^2)
const longestPalindrome2 = (s) => {
  let longest = "";

  const expandAroundCenter = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return s.slice(left + 1, right);
  };

  for (let i = 0; i < s.length; i++) {
    const palindrome1 = expandAroundCenter(i, i);
    const palindrome2 = expandAroundCenter(i, i + 1);

    if (palindrome1.length > longest.length) longest = palindrome1;
    if (palindrome2.length > longest.length) longest = palindrome2;
  }

  return longest;
};

console.log(longestPalindrome2("babad"));
console.log(longestPalindrome2("cbbd"));
