# Hashing Problems

This section covers problems that use hashing techniques for efficient lookup and counting.

## 1. Character Frequency Counter
**File**: `hashingSmallCaseLetters.js`

### Problem:
Count frequency of lowercase letters in a string.

### Approach:
1. Create fixed-size array for lowercase letters
2. Use ASCII value difference for indexing
3. Count occurrences of each character

```javascript
// Example:
const hash = Array(26).fill(0);
// For each char: hash[char.charCodeAt(0) - 'a'.charCodeAt(0)]++
```

**Time Complexity**: O(n)
**Space Complexity**: O(1) [fixed size of 26]

## 2. Number Frequency Counter
**File**: `hashingNumbers.js`

### Problem:
Count frequency of numbers in an array.

### Approach:
1. Use Map or object for dynamic range
2. Iterate through array once
3. Store frequency counts

**Time Complexity**: O(n)
**Space Complexity**: O(k) where k is number of unique elements

## Common Hashing Patterns:

1. **Frequency Counting**
   ```javascript
   const freq = new Map();
   for (const num of array) {
       freq.set(num, (freq.get(num) || 0) + 1);
   }
   ```

2. **Two-Sum Pattern**
   ```javascript
   const seen = new Map();
   for (const num of array) {
       if (seen.has(target - num)) {
           // Found pair
       }
       seen.set(num, i);
   }
   ```

3. **Character Mapping**
   ```javascript
   const charMap = new Array(26).fill(0);
   for (const char of string) {
       charMap[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
   }
   ```

## Implementation Techniques:

1. **Hash Table Types**
   - Map/Set for dynamic keys
   - Array for fixed range
   - Object for string keys

2. **Collision Handling**
   - Chaining
   - Open addressing
   - Linear probing

## Interview Tips:

1. **When to Use Hashing**
   - Frequency counting
   - Quick lookup needed
   - Finding duplicates
   - Two-sum type problems

2. **Space-Time Trade-offs**
   - Usually O(n) space for O(1) lookup
   - Consider sorting if space is critical
   - Balance between memory and speed

3. **Edge Cases**
   - Empty input
   - Single element
   - All identical elements
   - Maximum possible value
   - Negative numbers

## Common Applications:

1. **String Problems**
   - Anagram detection
   - Character frequency
   - First unique character

2. **Array Problems**
   - Finding duplicates
   - Counting frequencies
   - Two-sum variations

3. **Set Operations**
   - Intersection
   - Union
   - Difference

## Best Practices:
1. Choose appropriate data structure
2. Consider key-type constraints
3. Handle collisions properly
4. Account for memory usage
5. Consider input range and constraints