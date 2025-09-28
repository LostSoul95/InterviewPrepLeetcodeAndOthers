function maxFrequncy(nums, k) {
    let maxFrequency = 0; // Initialize the maximum frequency
    let currentSum = 0; // Initialize the current sum of the subarray

    nums.sort((a, b) => a - b); // Sort the array in ascending order

    for (let left = 0, right = 0; right < nums.length; ++right) {
        currentSum += nums[right]; // Include the current element in the subarray sum

        //console.log(currentSum);

        // Check if the current subarray violates the condition (sum + k < nums[right] * length)
        while (currentSum + k < nums[right] * (right - left + 1)) {
            currentSum -= nums[left]; // Adjust the subarray sum by removing the leftmost element
            left++; // Move the left pointer to the right
        }

        //console.log(left);
        //console.log(right);

        // Update the maximum frequency based on the current subarray length
        maxFrequency = Math.max(maxFrequency, right - left + 1);
        //console.log(maxFrequency);
    }

    return maxFrequency;
};

var inputArr = [1,2,4]
var frequency  = 5 

console.log( maxFrequncy(inputArr,frequency));