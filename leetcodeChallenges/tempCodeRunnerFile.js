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

console.log(reverse(2001))