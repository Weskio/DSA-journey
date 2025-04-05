const jsonFixer = {
  fixJson: function (partialJson) {
    let stack = [];
    let i = 0;
    let result = "";

    while (i < partialJson.length) {
      const char = partialJson[i];

      if (char === "{") {
        stack.push("{");
        result += char;
      } else if (char === "}") {
        if (stack.length > 0 && stack[stack.length - 1] === "{") {
          stack.pop();
        }
        result += char;
      } else if (char === '"') {
        let j = i + 1;
        while (j < partialJson.length && partialJson[j] !== '"') {
          j++;
        }
        if (j < partialJson.length) {
          result += partialJson.substring(i, j + 1);
          i = j;
        } else {
          const isKey =
            result.trim().endsWith("{") || result.trim().endsWith(",");
          if (isKey) {
            result += '"UNKNOWN_KEY"';
          } else {
            result += '"VALUE"';
          }
          i = partialJson.length;
        }
      } else if (char === ":") {
        result += char;
        let j = i + 1;
        while (
          j < partialJson.length &&
          (partialJson[j] === " " ||
            partialJson[j] === "\n" ||
            partialJson[j] === "\r" ||
            partialJson[j] === "\t")
        ) {
          j++;
        }
        if (j >= partialJson.length) {
          result += '"VALUE"';
          i = partialJson.length;
        } else {
          i = j - 1;
        }
      } else if (char === ",") {
        result += char;
      } else {
        result += char;
      }

      i++;
    }

    while (stack.length > 0) {
      result += "}";
      stack.pop();
    }

    return result;
  },
};

// Given a string s, find the length of the longest substring without duplicate characters.

// sliding window technique
const lengthOfLongestSubstring = (s) => {
  const charSet = new Set();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left++;
    }
    charSet.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};

console.log(lengthOfLongestSubstring("abcabcbb"));

// Given a string s, return the longest palindromic substring in s
const s = "babad";
const longestPalindrome = (s) => {
  const stringArr = s.split("");
  const reveresArr = s.split("").reverse();
  let palindromeArr = [];

  for (let i = 0; i < stringArr.length; i++) {
    if (stringArr[i] === reveresArr[i]) {
      palindromeArr.push(stringArr[i]);
    }
  }

  return palindromeArr.join("");
};

console.log(longestPalindrome(s));

//Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the
// value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
const reverse = (x) => {
  const sign = x < 0 ? -1 : 1;
  const xAbs = Math.abs(x);
  const reversedStr = xAbs.toString().split("").reverse().join("");
  const reversedNum = sign * parseInt(reversedStr, 10);

  if (reversedNum < Math.pow(-2, 31) || reversedNum > Math.pow(2, 31) - 1) {
    return 0;
  }
  return reversedNum;
};

console.log(reverse(2001));
