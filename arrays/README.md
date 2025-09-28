# Array Problems

This section contains common array manipulation problems and their solutions.

## 1. Kadane's Algorithm
**Problem**: Find the contiguous subarray with the largest sum.

**File**: `kadanes.js`

### Approach:
1. Keep two variables: 
   - `maxEndingHere`: maximum sum ending at current position
   - `maxSoFar`: maximum sum found so far
2. For each element:
   - Update `maxEndingHere` = max(current element, maxEndingHere + current element)
   - Update `maxSoFar` if `maxEndingHere` is greater
3. Return `maxSoFar`

**Time Complexity**: O(n)
**Space Complexity**: O(1)

## 2. Maximum Frequency
**Problem**: Find the maximum frequency of elements in an array.

**File**: `maxFrequency.js`

### Approach:
1. Use a hash map to store frequency counts
2. Iterate through array once to build frequency map
3. Find maximum frequency from the map

**Time Complexity**: O(n)
**Space Complexity**: O(n)

## Common Patterns in Array Problems:

1. **Two Pointers**
   - Useful for sorted arrays
   - Finding pairs with sum
   - Partitioning arrays

2. **Sliding Window**
   - Fixed or variable size window
   - Subarrays with specific properties
   - Continuous sequence problems

3. **Hash Table**
   - Frequency counting
   - Finding duplicates
   - Element tracking

## Interview Tips for Array Problems:

1. Always clarify:
   - Are elements sorted?
   - Can there be duplicates?
   - Any constraints on array size?
   - Special handling for empty arrays?

2. Consider edge cases:
   - Empty array
   - Single element
   - All negative numbers
   - Duplicate elements

3. Optimization techniques:
   - Can you solve in-place?
   - Can you reduce space complexity?
   - Can you do it in one pass?