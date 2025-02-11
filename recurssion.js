//One-branch recurssion example with a factorial function

//Recurssive implementation(Memory Complexity: O(n))
const factorial = (n) => {
  if (n <= 1) {
    return 1;
  }

  return n * factorial(n - 1);
};

console.log("result of 8!:", factorial(8));

//Iterative Implementation (Memory Complexity: O(1))
const factorial2 = (n) => {
  let result = 1;

  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
};

console.log("result of 8!:", factorial2(8));

// Explanation of the Iterative Implementation
// Initialization: Start with result = 1.

// Loop: Multiply result by each integer from 2 to n.

// Return: The final value of result is the factorial of n.

// This approach avoids the overhead of recursive calls and uses a constant amount of memory, making it more efficient for large values of n.
