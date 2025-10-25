 function subsets(nums) {

    const results = [];
    const subset = [];

    function createAndPushSubset(index) {
        if(index >= nums.length) {
            results.push([...subset]);
            return;
        }
        subset.push(nums[index]);
        createAndPushSubset(index + 1);
        subset.pop();
        createAndPushSubset(index + 1);
    }
    createAndPushSubset(0);
    return results;

}

// Test case
console.log(subsets([1,2,3]));
// Expected Output: [[], [1], [1,2], [1,2,3], [1,3], [2], [2,3], [3]]
