var countGoodNumbers = function(n) {
    const MOD = 1000000007n;
    
   
    
    // Calculate even positions (5 choices: 0,2,4,6,8)
    // round it down 
    const evenCount = BigInt(Math.floor((n + 1) / 2));
    
    
    // Calculate odd positions (4 choices: 2,3,5,7)
    // round it down
    const oddCount = BigInt(Math.floor(n / 2));
    
    // Calculate results using simple power function
    const evenResult = simplePower(5n, evenCount);
    const oddResult = simplePower(4n, oddCount);
    
    // Final multiplication with modulo
    return Number((evenResult * oddResult) % MOD);
};

 // Function to calculate power with simple recursion
    function simplePower(base, exponent) {
        if (exponent === 0n) return 1n;
        
        let result = base;
        let exp = exponent;
        
        // Recursive call reducing exponent by 1 each time
        while (exp > 1n) {
            result = (result * base) % MOD;
            exp--;
        }
        
        return result;
    }

// Test cases
console.log(countGoodNumbers(1));  // 5
console.log(countGoodNumbers(4));  // 400
console.log(countGoodNumbers(10)); // Try with a smaller number first as this is less efficient