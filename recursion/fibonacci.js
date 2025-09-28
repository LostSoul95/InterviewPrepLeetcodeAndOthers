// Problem: Write a function to generate the nth Fibonacci number using recursion
// Time Complexity: O(2^n) without memoization, O(n) with memoization
// Space Complexity: O(n)

// Solution 1: Simple recursion
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Solution 2: With memoization
function fibonacciMemo(n, memo = {}) {
    if (n <= 1) return n;
    if (n in memo) return memo[n];
    
    memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
    return memo[n];
}

// Test cases
console.log(fibonacci(7));  // Output: 13
console.log(fibonacciMemo(7));  // Output: 13