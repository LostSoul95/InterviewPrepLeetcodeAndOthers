// Problem: Generate all possible subsets of an array using recursion
// Time Complexity: O(2^n)
// Space Complexity: O(n)

function generateSubsets(arr) {
    const subsets = [];
    
    function backtrack(curr = [], index = 0) {
        subsets.push([...curr]);
        
        for (let i = index; i < arr.length; i++) {
            curr.push(arr[i]);
            backtrack(curr, i + 1);
            curr.pop();
        }
    }
    
    backtrack();
    return subsets;
}

// Test case
const arr = [1, 2, 3];
console.log(generateSubsets(arr));
// Output: [[], [1], [1,2], [1,2,3], [1,3], [2], [2,3], [3]]