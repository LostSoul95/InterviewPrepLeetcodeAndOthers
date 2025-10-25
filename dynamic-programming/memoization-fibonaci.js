/**
 * Fibonacci using Dynamic Programming with Memoization
 * Time Complexity: O(n) - each value calculated only once
 * Space Complexity: O(n) - for memoization cache
 * 
 * @param {number} n - nth Fibonacci number to calculate
 * @returns {number} - The nth Fibonacci number
 */

// Top-down approach (Memoization)
function fibMemo(n, memo = new Map()) {
    // Add visualization for understanding memoization
    console.log(`Calculating fib(${n})`);
    
    // Base cases
    if (n <= 1) {
        console.log(`Base case: fib(${n}) = ${n}`);
        return n;
    }
    
    // Check if value exists in memo
    if (memo.has(n)) {
        console.log(`Cache hit! fib(${n}) = ${memo.get(n)}`);
        return memo.get(n);
    }
    
    // Calculate new value and store in memo
    console.log(`Computing fib(${n-1}) + fib(${n-2})...`);
    const result = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
    memo.set(n, result);
    
    console.log(`Memoized: fib(${n}) = ${result}`);
    return result;
}

// Alternative bottom-up approach (Tabulation)
function fibTab(n) {
    // Base cases
    if (n <= 1) return n;
    
    // Initialize table
    const dp = new Array(n + 1).fill(0);
    dp[1] = 1;
    
    console.log('Building table bottom-up:');
    // Fill table
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
        console.log(`dp[${i}] = ${dp[i-1]} + ${dp[i-2]} = ${dp[i]}`);
    }
    
    return dp[n];
}

// Test cases
console.log('\nTesting Memoization (Top-down):');
console.log('fibMemo(5):', fibMemo(5));
console.log('\nMemoization call tree for n=5:');
console.log('                 fib(5)');
console.log('              /         \\');
console.log('          fib(4)        fib(3)');
console.log('         /      \\      /     \\');
console.log('    fib(3)    fib(2) fib(2)  fib(1)');
console.log('    /    \\    /    \\');
console.log('fib(2) fib(1) fib(1) fib(0)');

console.log('\nTesting Tabulation (Bottom-up):');
console.log('fibTab(5):', fibTab(5));
console.log('\nComparison for larger numbers:');
const n = 10;
console.time('Memoization');
console.log(`fibMemo(${n}):`, fibMemo(n));
console.timeEnd('Memoization');

console.time('Tabulation');
console.log(`fibTab(${n}):`, fibTab(n));
console.timeEnd('Tabulation');

// Performance comparison
function comparePerformance(n) {
    console.log(`\nPerformance comparison for n = ${n}:`);
    
    // Test memoization
    const memoStart = Date.now();
    const memoResult = fibMemo(n);
    const memoTime = Date.now() - memoStart;
    
    // Test tabulation
    const tabStart = Date.now();
    const tabResult = fibTab(n);
    const tabTime = Date.now() - tabStart;
    
    console.log('Results:');
    console.log('Memoization:', {
        result: memoResult,
        time: `${memoTime}ms`,
        spaceComplexity: 'O(n) - recursion stack + memo table'
    });
    console.log('Tabulation:', {
        result: tabResult,
        time: `${tabTime}ms`,
        spaceComplexity: 'O(n) - just the table'
    });
}

// Compare performance for a larger number
comparePerformance(20);
