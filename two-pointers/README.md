# Two Pointers Problems

This section covers problems that use the two-pointer technique, a common pattern in array manipulation problems.

## 1. Two Sum Problem
**Files**: 
- `twosum.js` (JavaScript implementation)
- `twosum.cs` (C# implementation)

### Problem:
Find two numbers in an array that add up to a target sum.

### Approaches:

1. **Two Pointers (Sorted Array)**
   ```javascript
   let left = 0, right = arr.length - 1;
   while (left < right) {
       let sum = arr[left] + arr[right];
       if (sum === target) return [left, right];
       else if (sum < target) left++;
       else right--;
   }
   ```
   - Time Complexity: O(n)
   - Space Complexity: O(1)

2. **Hash Table**
   ```javascript
   const seen = new Map();
   for (let i = 0; i < arr.length; i++) {
       if (seen.has(target - arr[i])) {
           return [seen.get(target - arr[i]), i];
       }
       seen.set(arr[i], i);
   }
   ```
   - Time Complexity: O(n)
   - Space Complexity: O(n)

## Common Two Pointer Patterns:

1. **Opposite Ends**
   - Start from both ends, move inward
   - Used for sorted arrays
   - Example: Two Sum, Container With Most Water

2. **Fast and Slow**
   - One pointer moves faster
   - Used for cycle detection
   - Example: Floyd's Cycle Detection

3. **Sliding Window**
   - Both pointers move in same direction
   - Window size may vary
   - Example: Maximum Sum Subarray

## Implementation Tips:

1. **When to Use**:
   - Sorted array problems
   - Palindrome problems
   - Reverse array in-place
   - Finding pairs with conditions

2. **Common Variations**:
   - Fixed distance between pointers
   - Variable distance based on conditions
   - Multiple pointers

## Interview Strategies:

1. **Problem Analysis**
   - Is array sorted?
   - Can we sort without affecting complexity?
   - Are there duplicates?
   - What about negative numbers?

2. **Optimization Opportunities**
   - Can we solve in-place?
   - Can we avoid extra space?
   - Can we do it in one pass?

3. **Edge Cases**
   - Empty array
   - Array with one element
   - No solution exists
   - Multiple solutions

## Space-Time Trade-offs:
- Two pointers usually give O(n) time complexity
- Usually constant space O(1)
- Consider hash table if sorting not allowed
- Balance between readability and efficiency

## Common Mistakes to Avoid:
1. Forgetting to check pointer bounds
2. Incorrect pointer movement
3. Not handling duplicates properly
4. Unnecessary sorting
5. Not considering edge cases