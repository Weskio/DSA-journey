//One-branch recurssion example with a factorial function

const factorial = (n) => {
  if (n <= 1) {
    return 1;
  }
  
  return n * factorial(n - 1);
};

console.log('result of 8!:',factorial(8))