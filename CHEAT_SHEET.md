# 📚 DSA Interview Prep - Quick Reference Cheat Sheet

## ⚡ Quick Lookup Table

| Problem | File | Pattern | Time | Space | Key Insight |
|---------|------|---------|------|-------|-------------|
| Kadane's Algorithm | kadanes.js | DP/Greedy | O(n) | O(1) | Track max ending here |
| Max Frequency | maxFrequency.js | Sliding Window | O(n log n) | O(1) | Sorted + window check |
| Fibonacci | fibonacci.js | Recursion | O(2^n) | O(n) | Memoization optimization |
| Power Function | power.js | Recursion | O(log n) | O(log n) | Binary exponentiation |
| Combination Sum | combinationSum.js | Backtracking | O(2^n) | O(n) | Include/exclude choices |
| Subsets | subsets.js | Backtracking | O(2^n) | O(n) | Decision tree for each element |
| Hashing Numbers | hashingNumbers.js | Hashing | O(n) | O(n) | Map/frequency count |
| Two Sum | twosum.js | Two Pointers | O(n) | O(1) | Sorted array approach |
| Longest Substring | longest_substring.js | Sliding Window | O(n) | O(m) | Character tracking |
| Tree Traversals | tree_traversals.js | DFS | O(n) | O(h) | Inorder/Preorder/Postorder |
| Array to LinkedList | arrayToLinkedList.js | LinkedList | O(n) | O(n) | Sequential node linking |
| Traverse LinkedList | traverseLinkedList.js | LinkedList | O(n) | O(1) iter/O(n) rec | Iterative preferred |
| Search LinkedList | searchLinkedList.js | LinkedList | O(n) | O(1) iter/O(n) rec | Check all occurrences |
| Fibonacci DP | memoization-fibonacci.js | DP | O(n) | O(n) | Top-down with memo |
| Buy & Sell Stock | buyAndSellStocks.js | Greedy | O(n) | O(1) | Track min price |
| Good Numbers | GoodNumber.js | Math/Recursion | O(log n) | O(log n) | Fast exponentiation |
| Stack Reverse | stackReverseUsingRecursion.js | Recursion | O(n²) | O(n) | Two-level recursion |

---

## 📌 ARRAYS

### 1. Kadane's Algorithm (Maximum Subarray Sum)
**File**: `arrays/kadanes.js`

**Problem**: Find contiguous subarray with largest sum

**Example**:
```
Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4]
Output: 6 (subarray [4, -1, 2, 1])
```

**Algorithm**:
```javascript
let maxSoFar = arr[0], maxEndingHere = arr[0];
for (let i = 1; i < arr.length; i++) {
    maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
}
return maxSoFar;
```

**Time**: O(n) | **Space**: O(1)

**Key Insights**:
- At each position, decide: start fresh or extend previous sum
- Reset when current element alone is better
- Works with negative numbers

**Edge Cases**:
- All negative numbers → return max element
- Single element → return that element
- Empty array → handle separately

**Variations**:
- Return actual subarray (track indices)
- Circular array (check wraparound)
- With constraint k (max length)

---

### 2. Maximum Frequency (Increment at most k times)
**File**: `arrays/maxFrequency.js`

**Problem**: Find max frequency after incrementing elements at most k times total

**Example**:
```
Input: [1,2,4], k=5
Output: 3 (make all equal to 4: +3, +2, +0 = 5 total)
```

**Algorithm**:
```javascript
nums.sort((a,b) => a-b);
let left=0, maxFreq=0, sum=0;
for (let right=0; right<nums.length; right++) {
    sum += nums[right];
    while (sum + k < nums[right] * (right - left + 1)) {
        sum -= nums[left++];
    }
    maxFreq = Math.max(maxFreq, right - left + 1);
}
```

**Time**: O(n log n) | **Space**: O(1)

**Key Insights**:
- Sort to make elements equal
- Sliding window to find valid range
- Check if we have enough k to make all equal to max

**Pattern**: Sliding Window on sorted array

---

## 🔄 RECURSION & BACKTRACKING

### 1. Fibonacci
**File**: `recursion/fibonacci.js`

**Simple Recursion**:
```javascript
function fib(n) {
    if (n <= 1) return n;
    return fib(n-1) + fib(n-2);
}
```
**Time**: O(2^n) | **Space**: O(n)

**With Memoization**:
```javascript
function fib(n, memo={}) {
    if (n in memo) return memo[n];
    if (n <= 1) return n;
    memo[n] = fib(n-1, memo) + fib(n-2, memo);
    return memo[n];
}
```
**Time**: O(n) | **Space**: O(n)

**Key**: Avoid recalculating same values

---

### 2. Power Function (x^n)
**File**: `recursion/power.js`

**Problem**: Calculate x^n efficiently

**Algorithm** (Binary Exponentiation):
```javascript
function power(x, n) {
    if (n === 0) return 1;
    let half = power(x, Math.floor(n/2));
    if (n % 2 === 1) return half * half * x;
    return half * half;
}
```

**Time**: O(log n) | **Space**: O(log n)

**Key Insight**: Divide exponent by 2, not multiply by x repeatedly

**Edge Cases**:
- n = 0 → return 1
- Negative exponents → return 1/result
- x = 0 → return 0 (except 0^0)

---

### 3. Combination Sum
**File**: `recursion-and-backtracking/combinationSum.js`

**Problem**: Find all unique combinations that sum to target

**Example**:
```
Input: candidates=[2,3,6,7], target=7
Output: [[2,2,3], [7]]
```

**Algorithm**:
```javascript
function combinationSum(candidates, target) {
    const result = [];
    function backtrack(comb, target, start) {
        if (target === 0) {
            result.push([...comb]);  // ← SPREAD OPERATOR!
            return;
        }
        if (target < 0) return;
        
        for (let i = start; i < candidates.length; i++) {
            comb.push(candidates[i]);
            backtrack(comb, target - candidates[i], i);  // ← Same i (reuse)
            comb.pop();  // ← Backtrack
        }
    }
    backtrack([], target, 0);
    return result;
}
```

**Time**: O(2^n) | **Space**: O(n)

**Why Spread Operator** `[...comb]`:
- Creates copy of current state
- Without it, all results reference same array
- Modifications affect already stored results

**Key Difference from Subsets**:
- Use same index i (can reuse elements)
- Subsets use i+1 (can't reuse)

---

### 4. Subsets (Power Set)
**File**: `recursion-and-backtracking/subsets.js`

**Problem**: Generate all 2^n subsets

**Example**:
```
Input: [1,2,3]
Output: [[], [1], [1,2], [1,2,3], [1,3], [2], [2,3], [3]]
```

**Algorithm** (Include/Exclude):
```javascript
function subsets(nums) {
    const result = [];
    function backtrack(index, current) {
        if (index === nums.length) {
            result.push([...current]);
            return;
        }
        // Include
        current.push(nums[index]);
        backtrack(index + 1, current);
        // Exclude
        current.pop();
        backtrack(index + 1, current);
    }
    backtrack(0, []);
    return result;
}
```

**Time**: O(2^n) | **Space**: O(n)

**Recursion Tree** for [1,2]:
```
       []
      /  \
    [1]  []
    / \   / \
[1,2][1][2][]
```

---

### 5. Stack Reverse Using Recursion
**File**: `recursion/stackReverseUsingRecursion.js`

**Problem**: Reverse a stack using only recursion (no extra space for storage)

**Key Functions**:
1. `reverseStack(stack)` - Empty the stack
2. `insertAtBottom(stack, val)` - Insert at bottom

**Algorithm**:
```javascript
function reverseStack(stack) {
    if (stack.length === 0) return;
    let top = stack.pop();
    reverseStack(stack);  // Recurse on remaining
    insertAtBottom(stack, top);  // Insert at bottom
}

function insertAtBottom(stack, val) {
    if (stack.length === 0) {
        stack.push(val);
        return;
    }
    let top = stack.pop();
    insertAtBottom(stack, val);  // Recurse to bottom
    stack.push(top);  // Restore
}
```

**Time**: O(n²) | **Space**: O(n) call stack

**Key Insight**: Two-level recursion - first empties stack, then rebuilds in reverse

---

### 6. Good Numbers (LeetCode 1922)
**File**: `recursion/GoodNumber.js`

**Problem**: Count n-digit numbers where even positions have even digits, odd positions have prime digits

**Solution**:
```javascript
// Even positions: 5 choices (0,2,4,6,8)
// Odd positions: 4 choices (2,3,5,7)
// Result = 5^(even_count) * 4^(odd_count) % MOD

function power(base, exp, MOD) {
    if (exp === 0n) return 1n;
    let half = power(base, exp / 2n, MOD);
    if (exp % 2n === 1n) return (half * half * base) % MOD;
    return (half * half) % MOD;
}
```

**Time**: O(log n) | **Space**: O(log n)

**Key**: Use BigInt for large numbers, modular exponentiation

---

## 🔍 HASHING

### 1. Hashing Numbers
**File**: `hashing/hashingNumbers.js`

**Problem**: Count frequency of numbers

**Algorithm**:
```javascript
const freq = new Map();
for (let num of arr) {
    freq.set(num, (freq.get(num) || 0) + 1);
}
```

**Time**: O(n) | **Space**: O(n)

**Variations**:
- Top k frequent elements
- Find all duplicates
- First non-repeating

---

### 2. Hashing Small Case Letters
**File**: `hashing/hashingSmallCaseLetters.js`

**Problem**: Count lowercase letter frequency using fixed-size array

**Algorithm**:
```javascript
const hash = new Array(26).fill(0);
for (let char of str) {
    hash[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
}
```

**Time**: O(n) | **Space**: O(1) [fixed 26]

**Key**: ASCII values for indexing

---

## ➡️ TWO POINTERS

### Two Sum
**File**: `two-pointers/twosum.js` (JavaScript), `two-pointers/twosum.cs` (C#)

**Problem**: Find two numbers that sum to target

**Approach 1**: Sorted Array (Two Pointers)
```javascript
function twoSum(arr, target) {
    arr.sort((a,b) => a-b);
    let left = 0, right = arr.length - 1;
    
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === target) return [left, right];
        else if (sum < target) left++;
        else right--;
    }
    return [-1, -1];
}
```

**Time**: O(n log n) | **Space**: O(1)

**Approach 2**: Hash Map
```javascript
const seen = new Map();
for (let num of arr) {
    if (seen.has(target - num)) return [seen.get(target-num), i];
    seen.set(num, i);
}
```

**Time**: O(n) | **Space**: O(n)

---

## 🪟 SLIDING WINDOW

### Longest Substring Without Repeating Characters
**File**: `sliding-window/longest_substring.js`

**Problem**: Find length of longest substring with no repeating chars

**Example**:
```
Input: "abcabcbb"
Output: 3 ("abc")
```

**Algorithm**:
```javascript
function lengthOfLongestSubstring(s) {
    const seen = new Map();
    let start = 0, maxLen = 0;
    
    for (let end = 0; end < s.length; end++) {
        if (seen.has(s[end])) {
            start = Math.max(start, seen.get(s[end]) + 1);
        }
        seen.set(s[end], end);
        maxLen = Math.max(maxLen, end - start + 1);
    }
    return maxLen;
}
```

**Time**: O(n) | **Space**: O(min(m,n)) where m=charset size

**Key Patterns**:
- Variable window size
- Two pointers (start, end)
- Hash for tracking

---

## 🌳 TREES

### Tree Traversals
**File**: `trees/tree_traversals.js`

**Inorder** (Left-Root-Right):
```javascript
function inorder(node) {
    if (!node) return;
    inorder(node.left);
    console.log(node.val);
    inorder(node.right);
}
```
**Use**: BST in sorted order

**Preorder** (Root-Left-Right):
```javascript
function preorder(node) {
    if (!node) return;
    console.log(node.val);
    preorder(node.left);
    preorder(node.right);
}
```
**Use**: Copy tree, serialize

**Postorder** (Left-Right-Root):
```javascript
function postorder(node) {
    if (!node) return;
    postorder(node.left);
    postorder(node.right);
    console.log(node.val);
}
```
**Use**: Delete tree, calculate height

**Time**: O(n) | **Space**: O(h)

---

## 🔗 LINKED LISTS

### 1. Array to LinkedList
**File**: `linked-lists/arrayToLinkedList.js`

```javascript
function arrayToLinkedList(arr) {
    const head = new Node(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new Node(arr[i]);
        current = current.next;
    }
    return head;
}
```

**Time**: O(n) | **Space**: O(n)

---

### 2. Traverse LinkedList
**File**: `linked-lists/traverseLinkedList.js`

**Iterative**:
```javascript
let current = head;
while (current) {
    process(current.val);
    current = current.next;
}
```
**Time**: O(n) | **Space**: O(1)

**Recursive**:
```javascript
function traverse(node) {
    if (!node) return;
    process(node.val);
    traverse(node.next);
}
```
**Time**: O(n) | **Space**: O(n) call stack

---

### 3. Search in LinkedList
**File**: `linked-lists/searchLinkedList.js`

**Iterative**:
```javascript
function search(head, target) {
    let current = head, pos = 0;
    while (current) {
        if (current.val === target) return pos;
        current = current.next;
        pos++;
    }
    return -1;
}
```

**Time**: O(n) | **Space**: O(1)

---

## 🔧 DYNAMIC PROGRAMMING

### 1. Fibonacci - Memoization vs Tabulation
**File**: `dynamic-programming/memoization-fibonacci.js` (JS), `memoization-fibonacci.cs` (C#)

**Top-Down (Memoization)**:
```javascript
function fib(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n <= 1) return n;
    memo[n] = fib(n-1, memo) + fib(n-2, memo);
    return memo[n];
}
```

**Bottom-Up (Tabulation)**:
```javascript
function fib(n) {
    const dp = [0, 1];
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n];
}
```

**Comparison**:
| Aspect | Top-Down | Bottom-Up |
|--------|----------|-----------|
| Intuitive | Yes | Less so |
| Space | O(n) memo+stack | O(n) table |
| Best for | Tree structure | Linear |
| Extensibility | Easy | Medium |

---

### 2. Buy and Sell Stock
**File**: `dynamic-programming/buyAndSellStocks.js`

**Greedy Approach** (NOT DP but optimal):
```javascript
function maxProfit(arr) {
    let maxPro = 0, minPrice = Infinity;
    for (let price of arr) {
        minPrice = Math.min(minPrice, price);
        maxPro = Math.max(maxPro, price - minPrice);
    }
    return maxPro;
}
```

**Time**: O(n) | **Space**: O(1)

**DP Approach** (Extendable for complex variations):
```javascript
function maxProfitDP(arr) {
    // dp[i][0] = max profit without stock
    // dp[i][1] = max profit with stock
    const dp = Array(arr.length).fill(null).map(() => [0,0]);
    dp[0][0] = 0;
    dp[0][1] = -arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + arr[i]);
        dp[i][1] = Math.max(dp[i-1][1], -arr[i]);
    }
    return dp[arr.length-1][0];
}
```

**Key**: Greedy works for 1 transaction, DP needed for multiple

---

## 📊 COMPLEXITY REFERENCE

### Time Complexities
```
O(1)      - Constant (array access, hash lookup)
O(log n)  - Binary search, balanced tree operations
O(n)      - Linear scan, simple traversal
O(n log n)- Sorting, merge operations
O(n²)     - Nested loops, bubble sort
O(2^n)    - Exponential (subsets, combinations)
O(n!)     - Factorial (permutations)
```

### Space Complexities
```
O(1)      - Constant (variables, pointers)
O(n)      - Arrays, hash maps, recursion depth
O(n log n)- Merge sort (temporary arrays)
O(2^n)    - All subsets storage
```

---

## 🎯 INTERVIEW TIPS

### Before Interview
1. **Master these patterns**:
   - Two pointers
   - Sliding window
   - Recursion/Backtracking
   - BFS/DFS
   - Dynamic Programming

2. **Practice edge cases**:
   - Empty input
   - Single element
   - Duplicates
   - Negative numbers
   - Boundary values

3. **Explain while coding**:
   - Talk through approach
   - State time/space complexity
   - Discuss trade-offs

### During Interview
1. **Clarify problem**:
   - Input constraints
   - Output format
   - Edge cases

2. **Plan before coding**:
   - Discuss approach
   - Compare alternatives
   - Choose best solution

3. **Code confidently**:
   - Write clean, readable code
   - Use meaningful variable names
   - Add comments for complex logic

4. **Test thoroughly**:
   - Walk through examples
   - Check edge cases
   - Verify correctness

---

## 🔄 PATTERN RECOGNITION

### Use **Sliding Window** when:
- ✅ Contiguous subarray/substring
- ✅ Maximum/minimum of sliding window
- ✅ Fixed or variable window size

### Use **Two Pointers** when:
- ✅ Sorted array
- ✅ Find pair with condition
- ✅ Partition array

### Use **Recursion/Backtracking** when:
- ✅ All permutations/combinations
- ✅ Decision tree (include/exclude)
- ✅ Tree/graph traversal

### Use **Dynamic Programming** when:
- ✅ Overlapping subproblems
- ✅ Optimal substructure
- ✅ Can memoize intermediate results

### Use **BFS** when:
- ✅ Shortest path
- ✅ Level-order traversal
- ✅ Minimum steps

### Use **DFS** when:
- ✅ All paths/solutions
- ✅ Tree/graph exploration
- ✅ Topological sort

---

## ⏱️ 10-WEEK LEARNING ROADMAP

**Week 1-2**: Arrays & Strings
- Kadane's, Two Sum, Sliding Window

**Week 3-4**: Recursion & Backtracking
- Fibonacci, Subsets, Combinations

**Week 5-6**: Data Structures
- LinkedLists, Trees, Hashing

**Week 7-8**: Advanced Patterns
- DP, Graphs, BFS/DFS

**Week 9-10**: Mixed Problems
- Medium/Hard, System Design basics

---

## ✅ PRE-INTERVIEW CHECKLIST

- [ ] Know Big O notation cold
- [ ] Master 5-7 core patterns
- [ ] Practice 50+ problems
- [ ] Write pseudocode first
- [ ] Test edge cases
- [ ] Explain trade-offs
- [ ] Code in 15-20 minutes
- [ ] Communicate clearly
- [ ] Ask clarifying questions
- [ ] Discuss optimizations

---

**Last Updated**: December 28, 2025
**Total Problems**: 20+
**Topics Covered**: 8
**Difficulty**: Beginner to Intermediate

Happy Revision! 🚀