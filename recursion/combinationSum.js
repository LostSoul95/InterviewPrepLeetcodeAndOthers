// Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

// The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

// The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

 

// Example 1:

// Input: candidates = [2,3,6,7], target = 7
// Output: [[2,2,3],[7]]
// Explanation:
// 2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
// 7 is a candidate, and 7 = 7.
// These are the only two combinations.
// Example 2:

// Input: candidates = [2,3,5], target = 8
// Output: [[2,2,2,2],[2,3,3],[3,5]]
// Example 3:

// Input: candidates = [2], target = 1
// Output: []
 

// Constraints:

// 1 <= candidates.length <= 30
// 2 <= candidates[i] <= 40
// All elements of candidates are distinct.
// 1 <= target <= 40

var combinationSum = function(candidates, target) {
    const res = [];

    function makeCombination(idx, comb, total, depth = '') {
        // Visualize current state
        console.log(`${depth}Exploring: idx=${idx}, current=${comb}, total=${total}`);

        // Base case 1: Found a valid combination
        if (total === target) {
            console.log(`${depth}✅ Found valid combination: ${comb}`);
            res.push([...comb]);
            return;
        }

        // Base case 2: Invalid path
        if (total > target || idx >= candidates.length) {
            console.log(`${depth}❌ Invalid path: total=${total}, idx=${idx}`);
            return;
        }

        // Decision 1: Include current number
        console.log(`${depth}→ Including ${candidates[idx]}`);
        comb.push(candidates[idx]);
        makeCombination(idx, comb, total + candidates[idx], depth + '  ');
        
        // Backtrack: Remove the number
        let removed = comb.pop();
        console.log(`${depth}← Backtrack: removed ${removed}`);

        // Decision 2: Skip current number
        console.log(`${depth}→ Skipping ${candidates[idx]}`);
        makeCombination(idx + 1, comb, total, depth + '  ');
    }

    console.log('Starting combination sum with:', candidates, 'target:', target);
    makeCombination(0, [], 0);
    return res;    
};

// Test with a smaller example first
console.log('\nTest Case 1: [2,3], target = 5');
console.log('Result:', combinationSum([2,3], 5));

console.log('\nTest Case 2: [2,3,6,7], target = 7');
console.log('Result:', combinationSum([2,3,6,7], 7));
 
