// Problem: Find the maximum sum of a contiguous subarray
// Time Complexity: O(n)
// Space Complexity: O(1)

function kadanesAlgorithm(arr) {
    let maxSoFar = arr[0];
    let maxEndingHere = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }
    
    return maxSoFar;
}

// Test cases
console.log(kadanesAlgorithm([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Output: 6
console.log(kadanesAlgorithm([1])); // Output: 1
console.log(kadanesAlgorithm([-1, -2, -3])); // Output: -1