# Sliding Window Problems

This section covers problems that use the sliding window technique, a common pattern in array/string problems.

## 1. Longest Substring Without Repeating Characters
**File**: `longest_substring.js`

### Problem:
Find the length of the longest substring without repeating characters.

### Approach:
1. Use two pointers (start, end) to maintain window
2. Use HashSet/Map to track characters in current window
3. Slide window and update max length
4. Handle duplicates by moving start pointer

**Time Complexity**: O(n)
**Space Complexity**: O(min(m,n)) where m is character set size

```javascript
Example:
"abcabcbb" → "abc" → length 3
"bbbbb" → "b" → length 1
"pwwkew" → "wke" → length 3
```

## Common Sliding Window Patterns:

1. **Fixed Window Size**
   - Window size remains constant
   - Example: Find max sum of k consecutive elements

2. **Variable Window Size**
   - Window size changes based on conditions
   - Example: Longest substring with k distinct characters

3. **Dynamic Window**
   - Window expands/contracts based on conditions
   - Example: Minimum window substring

## Implementation Techniques:

1. **Two Pointers**
   ```javascript
   let start = 0;
   for (let end = 0; end < array.length; end++) {
       // Process window
       while (condition) {
           // Contract window from start
           start++;
       }
       // Update result
   }
   ```

2. **Hash Table Tracking**
   ```javascript
   const seen = new Map();
   // Track frequencies or last positions
   ```

## Interview Tips:

1. **Window Identification**
   - Consecutive sequence problems
   - Substring/subarray problems
   - Problems involving min/max/optimal in sequence

2. **Common Use Cases**:
   - Maximum/minimum sum subarray
   - Longest/shortest substring with condition
   - Finding anagrams
   - String permutations

3. **Optimization**:
   - Can you reduce space complexity?
   - Can you avoid unnecessary window contractions?
   - Can you optimize the window movement?

## Edge Cases to Consider:
- Empty string/array
- Single element
- All identical elements
- No valid window exists
- Window size larger than input