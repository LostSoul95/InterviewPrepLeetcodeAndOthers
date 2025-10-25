/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    // Handle edge cases
    if (n === 0) return 1;
    if (x === 0) return 0;
    
    // Handle minimum integer case
    if (n === -2147483648) {
        if (Math.abs(x) === 1) return 1;
        return 0;
    }

    // Get absolute value for negative powers
    let absN = Math.abs(n);
    
    // Calculate power using fast power algorithm
    let result = fastPower(x, absN);
    
    // Return reciprocal for negative powers
    return n < 0 ? 1 / result : result;
};

function fastPower(x, n) {
    if (n === 0) return 1;
    
    // Calculate half power
    let half = fastPower(x, Math.floor(n / 2));
    
    // If power is odd, multiply by x one extra time
    if (n % 2 === 1) {
        return half * half * x;
    }
    
    // If power is even, just square the half
    return half * half;
}

// Test cases
console.log(myPow(2.00000, 10));  // 1024.00000
console.log(myPow(2.10000, 3));   // 9.26100
console.log(myPow(2.00000, -2));  // 0.25000
console.log(myPow(2.00000, -2147483648));  // 0