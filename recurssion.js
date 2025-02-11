//One-branch recurssion example with a factorial function

//Recurssive implementation(Memory Complexity: O(n), Time complexity: O(n))
const factorial = (n) => {
  if (n <= 1) {
    return 1;
  }

  return n * factorial(n - 1);
};

console.log("result of 8!:", factorial(8));

//Iterative Implementation (Memory Complexity: O(1), Time complexity: O(n))
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

//Two-branch recurssion example with a fibonacci function

//Recurssive implementation(Memory Complexity: O(n), Time complexity: O(2^n))
const fibonacci = (n) => {
  if (n <= 1) return n;

  return fibonacci(n - 1) + fibonacci(n - 2);
};

console.log("fibonacci of 5:", fibonacci(8));

//Iterative Implementation (Memory Complexity: O(1), Time complexity: O(n))
const fibonacci2 = (n) => {
  if (n <= 1) return n;

  let prev = 0;
  curr = 1;

  for (let i = 2; i <= n; i++) {
    let next = prev + curr;
    prev = curr;
    curr = next;
  }

  return curr;
};

console.log("fibonacci of 5:", fibonacci2(5));
