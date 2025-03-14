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

//FOR LEARNING REASONS HERE ARE SOME OPTIONAL WAYS TO IMPLEMENT THESE RECURSSIONS WITH TAIL CALL OPTIMIZATION(FEATURE REMOVED FROM SOME JS ENGINES LIKE V8)

//TCO Implementation (Memory Complexity: O(1), Time complexity: O(n))
const factorial3 = (n, acc = 1) => {
  if (n <= 1) {
    return acc;
  }
  return factorial3(n - 1, n * acc); // Tail-recursive call
};

console.log(factorial3(8))

//TCO Implementation (Memory Complexity: O(1), Time complexity: O(n))
const fibonacci3 = (n, prev = 0, curr = 1) => {
  if (n === 0) return prev;
  if (n === 1) return curr;
  return fibonacci3(n - 1, curr, prev + curr);
};

console.log(fibonacci3(8))
//FUN FACT ABOUT TCO: Tail Call Optimization (TCO) is not widely implemented in most JavaScript engines due to its complexity and
// potential trade-offs in debugging and performance. While TCO can reduce stack usage and improve recursion efficiency, it complicates
// stack trace debugging, making error tracking harder. Additionally, many engines prioritize just-in-time (JIT) optimizations that favor
// execution speed over memory savings. JavaScript’s flexibility, including features like closures and dynamic function calls, further
// complicates reliable TCO implementation. As a result, despite its benefits, TCO remains uncommon in modern JavaScript engines—**notably,
// V8 (Chrome, Node.js), SpiderMonkey (Firefox), and JavaScriptCore (Safari)** do not support it.
