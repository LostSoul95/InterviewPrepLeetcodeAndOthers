# Recursion Problems

This section covers various recursion problems and their solutions using different recursive approaches.

## 1. Fibonacci Series
**File**: `fibonacci.js`

### Problem:
Generate the nth Fibonacci number.

### Approaches:
1. **Simple Recursion**
   ```javascript
   if (n <= 1) return n;
   return fib(n-1) + fib(n-2);
   ```
   - Time Complexity: O(2ⁿ)
   - Space Complexity: O(n)

2. **Memoization**
   ```javascript
   if (n in memo) return memo[n];
   memo[n] = fib(n-1) + fib(n-2);
   ```
   - Time Complexity: O(n)
   - Space Complexity: O(n)

## 2. Subset Generation
**File**: `subsets.js`

### Problem:
Generate all possible subsets of an array.

### Approach:
- Use backtracking
- For each element, decide whether to include it or not
- Build solutions incrementally

**Time Complexity**: O(2ⁿ)
**Space Complexity**: O(n)

## 3. Palindrome Check
**File**: `recursionPalindrome.js`

### Problem:
Check if a string is palindrome using recursion.

### Approach:
- Compare first and last characters
- Recursively check inner substring
- Base case: string length ≤ 1

## Common Recursion Patterns:

1. **Base Case and Build**
   - Solve for smallest input
   - Build solution using smaller subproblems

2. **Backtracking**
   - Build solutions incrementally
   - Undo choices that don't work

3. **Divide and Conquer**
   - Split problem into subproblems
   - Combine subsolutions

## Tips for Recursive Problems:

1. **Identify Base Cases**
   - What's the simplest input?
   - When should recursion stop?

2. **Find Recursive Pattern**
   - How can problem be broken down?
   - What's the relationship between subproblems?

3. **Consider Optimization**
   - Can you use memoization?
   - Is there tail recursion opportunity?

4. **Watch for**:
   - Stack overflow
   - Duplicate computations
   - Unnecessary recursive calls

## Memory Management:
- Each recursive call adds to call stack
- Consider iterative solution for deep recursion
- Use tail recursion when possible
- Implement memoization for overlapping subproblems