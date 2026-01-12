Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

 

Example 1:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
Example 2:

Input: nums = [0,1]
Output: [[0,1],[1,0]]
Example 3:

Input: nums = [1]
Output: [[1]]


/**
 * @param {number[]} nums
 * @return {number[][]}
 */

 var backTrack = function(nums,used,current,result) {
      // If current permutation is complete
        if (current.length === nums.length) {
            result.push([...current]);
            return;
        }

        // Iterate over all elements
        for (let i = 0; i < nums.length; i++) {
            // Skip already used elements
            if (used[i]) continue;

            // Include this element
            used[i] = true;
            current.push(nums[i]);

            // Recurse for next element
            backTrack(nums, used, current, result);

            // Backtrack: remove element and mark unused
            current.pop();
            used[i] = false;
        }
};

var permute = function(nums) {
        const result = [];
        const used = new Array(nums.length).fill(false);
        backTrack(nums, used, [], result);
        return result;
};

