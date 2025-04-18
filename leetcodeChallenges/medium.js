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

// string to integer

const myAtoi = (s) => {
  let index = 0;
  let sign = 1;
  let result = 0;
  const INT_MAX = Math.pow(2, 31) - 1;
  const INT_MIN = -Math.pow(2, 31);

  while (index < s.length && s[index] === " ") {
    index++;
  }

  if (index < s.length && (s[index] === "+" || s[index] === "-")) {
    sign = s[index] === "-" ? -1 : 1;
    index++;
  }

  while (index < s.length && s[index] >= "0" && s[index] <= "9") {
    const digit = s.charCodeAt(index) - "0".charCodeAt(0);

    if (
      result > Math.floor(INT_MAX / 10) ||
      (result === Math.floor(INT_MAX / 10) && digit > INT_MAX % 10)
    ) {
      return sign === 1 ? INT_MAX : INT_MIN;
    }

    result = result * 10 + digit;
    index++;
  }

  result *= sign;

  if (result > INT_MAX) return INT_MAX;
  if (result < INT_MIN) return INT_MIN;

  return result;
};

console.log(myAtoi("1337c0d3"));

// Integer to Roman numeral

const intToRoman = (num) => {
  const val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const sym = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];

  let roman = "";
  let i = 0;

  while (num > 0) {
    // Find the largest value that fits into num
    while (num >= val[i]) {
      roman += sym[i];
      num -= val[i];
    }
    i++;
  }

  return roman;
};

console.log(intToRoman(9))
