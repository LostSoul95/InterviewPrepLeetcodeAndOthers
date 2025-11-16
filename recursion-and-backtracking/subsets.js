function subsets(nums) {
    const results = [];
    const subset = [];

    function createAndPushSubset(index, depth = '') {
        // Base case: when we've processed all numbers
        if (index >= nums.length) {
            console.log(`${depth}Found subset: [${subset}]`);
            results.push([...subset]);
            return;
        }

        // Decision 1: Include current number
        console.log(`${depth}Including ${nums[index]}`);
        subset.push(nums[index]);
        createAndPushSubset(index + 1, depth + '  ');

        // Decision 2: Exclude current number (backtrack)
        console.log(`${depth}Excluding ${nums[index]}`);
        subset.pop();
        createAndPushSubset(index + 1, depth + '  ');
    }

    console.log('Generating subsets for array:', nums);
    console.log('\nRecursion Tree:');
    createAndPushSubset(0);

    console.log('\nAll Subsets:', results);
    return results;
}

// Test with small example to see the recursion tree
console.log('Test with [1,2]:');
subsets([1,2]);

/*
Here's the recursion tree visualization for [1,2]:

                        []
                   /          \
                [1]           []
              /     \      /     \
           [1,2]    [1]   [2]    []

Decision tree at each level:
Level 0 (start): []
Level 1 (number 1):
  - Include 1 -> [1]
  - Exclude 1 -> []
Level 2 (number 2):
  - From [1]: Include 2 -> [1,2]
  - From [1]: Exclude 2 -> [1]
  - From []: Include 2 -> [2]
  - From []: Exclude 2 -> []
*/
