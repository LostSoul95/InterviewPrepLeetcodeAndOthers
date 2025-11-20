/**
 * Best Time to Buy and Sell Stock
 * 
 * Problem: Given an array of integers representing stock prices, 
 * find the maximum profit from buying and selling once.
 * 
 * Approach: Single pass with tracking minimum price seen so far
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

function maxProfit(arr) {
    let maxPro = 0;
    let minPrice = Infinity;
    
    for (let i = 0; i < arr.length; i++) {
        // Track the minimum price seen so far
        minPrice = Math.min(minPrice, arr[i]);
        
        // Calculate profit if we sell at current price
        maxPro = Math.max(maxPro, arr[i] - minPrice);
    }
    
    return maxPro;
}

// Example test cases
console.log("Test Case 1:");
let arr1 = [7, 1, 5, 3, 6, 4];
console.log("Prices:", arr1);
console.log("Max profit:", maxProfit(arr1)); // Output: 5 (buy at 1, sell at 6)

console.log("\nTest Case 2:");
let arr2 = [7, 6, 4, 3, 1];
console.log("Prices:", arr2);
console.log("Max profit:", maxProfit(arr2)); // Output: 0 (decreasing prices, no profit)

console.log("\nTest Case 3:");
let arr3 = [2, 4, 1, 7, 5, 11];
console.log("Prices:", arr3);
console.log("Max profit:", maxProfit(arr3)); // Output: 10 (buy at 1, sell at 11)
