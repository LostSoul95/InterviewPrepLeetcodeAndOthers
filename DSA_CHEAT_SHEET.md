# 📚 DSA Interview Preparation Cheat Sheet

**Last Updated:** December 2025  
**Purpose:** Quick revision guide for interview preparation  
**Coverage:** Arrays, Recursion, Backtracking, Hashing, Two-Pointers, Sliding Window, Trees, Linked Lists, Dynamic Programming, Binary Search, Greedy Algorithms

---

## 🎯 Quick Reference Table

| Topic | Problem | Complexity | Approach |
|-------|---------|-----------|----------|
| **Arrays** | Kadane's Algorithm | O(n) / O(1) | Single Pass |
| **Arrays** | Max Frequency (Sliding Window) | O(n) / O(n) | Two Pointers |
| **Recursion** | Power Function | O(log n) / O(log n) | Divide & Conquer |
| **Recursion & Backtracking** | Combination Sum | O(2^n) / O(n) | DFS + Backtrack |
| **Recursion & Backtracking** | Subsets | O(2^n) / O(n) | DFS + Backtrack |
| **Hashing** | Count Frequency (Numbers) | O(n) / O(m) | Hash Array |
| **Hashing** | Count Frequency (Letters) | O(n) / O(26) | Hash Array |
| **Two-Pointers** | Two Sum | O(n) / O(1)* | Sorted + Two Pointers |
| **Sliding Window** | Longest Substring (Unique Chars) | O(n) / O(min(m,n)) | Hash Map + Window |
| **Trees** | Tree Traversals (3 types) | O(n) / O(h) | Recursive DFS |
| **Linked Lists** | Array to Linked List | O(n) / O(n) | Linear Conversion |
| **Linked Lists** | Traverse Linked List | O(n) / O(1)* | Iterative/Recursive |
| **Linked Lists** | Search in Linked List | O(n) / O(1)* | Linear Search |
| **Binary Search** | Binary Search | O(log n) / O(1)* | Divide & Conquer |
| **Dynamic Programming** | Fibonacci (Memoization) | O(n) / O(n) | Top-Down DP |
| **Dynamic Programming** | Fibonacci (Tabulation) | O(n) / O(n) | Bottom-Up DP |
| **Dynamic Programming** | Climbing Stairs | O(n) / O(n) | DP Recurrence |
| **Greedy** | Buy & Sell Stock (Once) | O(n) / O(1) | Min Tracking |
| **Greedy** | Buy & Sell Stock (Multiple) | O(n) / O(1) | Peak Capture |
| **Greedy** | Cookies Distribution | O(n log n) / O(1) | Two Pointers |

*Space without recursion stack

---

## 📖 DETAILED PROBLEM BREAKDOWNS

---

# 1️⃣ ARRAYS

## Problem 1.1: Kadane's Algorithm (Maximum Subarray Sum)

### 📌 Problem Statement
Find the maximum sum of a contiguous subarray in an array of integers (can contain negative numbers).

**Example:** `[-2, 1, -3, 4, -1, 2, 1, -5, 4]` → **6** (subarray: `[4, -1, 2, 1]`)

### 🧠 Approach
**Key Insight:** At each position, decide whether to:
- Continue the current subarray: `maxEndingHere + arr[i]`
- Start a new subarray: `arr[i]`
- Always choose the maximum of these two options

**Algorithm Steps:**
1. Initialize `maxSoFar = arr[0]` and `maxEndingHere = arr[0]`
2. For each element from index 1 to n:
   - `maxEndingHere = max(arr[i], maxEndingHere + arr[i])`
   - `maxSoFar = max(maxSoFar, maxEndingHere)`
3. Return `maxSoFar`

### 💻 Code Snippet
```javascript
function kadanesAlgorithm(arr) {
    let maxSoFar = arr[0];
    let maxEndingHere = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }
    
    return maxSoFar;
}
```

### ⏱️ Complexity Analysis
- **Time:** O(n) - single pass through array
- **Space:** O(1) - only using constant extra space

### 💡 Key Insights
- This is a **dynamic programming problem** (local optimum builds to global)
- The name "Kadane" comes from Joseph Kadane
- Works with arrays containing **all negative numbers** (returns the largest negative)
- Can be extended to track the actual subarray (not just sum)

### 🔄 Common Variations
1. **Return the actual subarray** - track start/end indices
2. **Maximum product subarray** - similar approach but track min product too
3. **Maximum circular subarray** - check `(total - minSubarray)` as well
4. **K-window maximum subarray** - sliding window with Kadane logic

---

## Problem 1.2: Max Frequency in Subarray

### 📌 Problem Statement
Given an array `nums` and integer `k`, find the maximum length of a subarray where `(frequency × max_element) + k ≥ sum`.

**Example:** `nums = [1,2,4], k = 5` → **Answer depends on condition**

### 🧠 Approach
**Key Insight:** Use **sliding window** with two pointers after sorting.

**Algorithm Steps:**
1. Sort the array in ascending order
2. Use two pointers: `left` and `right`
3. For each `right`, expand the window and add `nums[right]` to `currentSum`
4. While condition `(currentSum + k) < (nums[right] × length)` is violated, shrink window from left
5. Track maximum window size

### 💻 Code Snippet
```javascript
function maxFrequency(nums, k) {
    let maxFrequency = 0;
    let currentSum = 0;
    
    nums.sort((a, b) => a - b);
    
    for (let left = 0, right = 0; right < nums.length; ++right) {
        currentSum += nums[right];
        
        while (currentSum + k < nums[right] * (right - left + 1)) {
            currentSum -= nums[left];
            left++;
        }
        
        maxFrequency = Math.max(maxFrequency, right - left + 1);
    }
    
    return maxFrequency;
}
```

### ⏱️ Complexity Analysis
- **Time:** O(n log n) - dominated by sorting
- **Space:** O(n) - for sorting

### 💡 Key Insights
- **Sorting doesn't change validity** - we're looking at subarrays in sorted form
- Always use the **maximum element** in window (rightmost in sorted array)
- **Sliding window reduces redundant checks**
- Once window becomes invalid, only getting worse as we expand right

### 🔄 Common Variations
1. **Frequency of elements equal to k** - hashing approach
2. **Maximum frequency in array** - use Map or frequency array
3. **Element appearing > n/3 times** - requires O(1) space (Boyer-Moore voting)

---

# 2️⃣ RECURSION & RECURSION WITH BACKTRACKING

## Problem 2.1: Power Function (Fast Exponentiation)

### 📌 Problem Statement
Implement `x^n` efficiently for both positive and negative exponents.

**Examples:**
- `myPow(2.0, 10)` → `1024.0`
- `myPow(2.1, 3)` → `9.261`
- `myPow(2.0, -2)` → `0.25`

### 🧠 Approach
**Key Insight:** Use **divide and conquer** with **exponent halving**.

**Algorithm Steps:**
1. Handle edge cases: `n = 0 → 1`, `x = 0 → 0`, `n = MIN_INT`
2. Use `fastPower()` recursively:
   - Calculate `half = fastPower(x, n/2)`
   - If `n` is odd: return `half × half × x`
   - If `n` is even: return `half × half`
3. For negative exponents: return `1 / fastPower(x, |n|)`

### 💻 Code Snippet
```javascript
var myPow = function(x, n) {
    if (n === 0) return 1;
    if (x === 0) return 0;
    if (n === -2147483648) {
        if (Math.abs(x) === 1) return 1;
        return 0;
    }
    
    let absN = Math.abs(n);
    let result = fastPower(x, absN);
    return n < 0 ? 1 / result : result;
};

function fastPower(x, n) {
    if (n === 0) return 1;
    let half = fastPower(x, Math.floor(n / 2));
    
    if (n % 2 === 1) {
        return half * half * x;
    }
    return half * half;
}
```

### ⏱️ Complexity Analysis
- **Time:** O(log n) - exponent halves at each level
- **Space:** O(log n) - recursion stack depth

### 💡 Key Insights
- **Classic divide & conquer:** solve half then combine
- **Each level handles one bit** of the exponent (binary view)
- **Watch for overflow:** MIN_INT edge case in Java/C++
- **Optimization:** Can use iterative approach to save stack space

### 🔄 Common Variations
1. **Iterative version** - use bit operations
2. **Modular exponentiation** - (x^n) % mod
3. **Matrix exponentiation** - for Fibonacci, linear recurrences
4. **Complex numbers** - x can be complex

---

## Problem 2.2: Combination Sum (Backtracking)

### 📌 Problem Statement
Find all unique combinations where numbers sum to target. Can reuse the same number unlimited times.

**Example:** `candidates = [2,3,6,7], target = 7`  
**Output:** `[[2,2,3], [7]]`

### 🧠 Approach
**Key Insight:** **DFS with backtracking** - explore including/excluding each number.

**Algorithm Steps:**
1. Sort candidates (optional, helps pruning)
2. Use recursive helper: `makeCombination(idx, current_combo, current_sum)`
3. Base cases:
   - If `sum == target`: found valid combination, add to result
   - If `sum > target` or `idx == length`: invalid path, return
4. Recursive decisions:
   - **Include** candidates[idx], recurse with same idx (can reuse)
   - **Backtrack** and **Skip** candidates[idx], recurse with idx+1

### 💻 Code Snippet
```javascript
var combinationSum = function(candidates, target) {
    const res = [];

    function makeCombination(idx, comb, total) {
        // Found valid combination
        if (total === target) {
            res.push([...comb]);
            return;
        }
        
        // Invalid path
        if (total > target || idx >= candidates.length) {
            return;
        }

        // Decision 1: Include current number
        comb.push(candidates[idx]);
        makeCombination(idx, comb, total + candidates[idx]);
        comb.pop(); // Backtrack

        // Decision 2: Skip current number
        makeCombination(idx + 1, comb, total);
    }

    makeCombination(0, [], 0);
    return res;    
};
```

### ⏱️ Complexity Analysis
- **Time:** O(2^(T/M)) where T=target, M=min candidate (exponential)
- **Space:** O(T/M) - maximum recursion depth

### 💡 Key Insights
- **Backtracking pattern:** Explore → Backtrack → Explore alternative
- **Key difference from Subsets:** We can **reuse numbers** (same index)
- **Pruning helps:** Only explore if `total ≤ target`
- **Memoization won't help** - different parameters each time

### 🔄 Common Variations
1. **Combination Sum II** - each number used at most once
2. **Combination Sum III** - use numbers 1-9, exactly k numbers
3. **Combination Sum IV** - count number of combinations (DP)
4. **Letter Combinations of Phone** - similar backtracking approach

---

## Problem 2.3: Subsets (Backtracking)

### 📌 Problem Statement
Generate all subsets (power set) of an array.

**Example:** `nums = [1,2]`  
**Output:** `[[], [1], [2], [1,2]]`

### 🧠 Approach
**Key Insight:** For each element, we have 2 choices: **include or exclude**.

**Algorithm Steps:**
1. Use recursive helper: `createAndPushSubset(index, current_subset)`
2. Base case: `if index == length`, we've processed all numbers → add subset to result
3. Recursive decisions:
   - **Include** nums[index]: add to subset, recurse with index+1
   - **Exclude** nums[index]: remove from subset (backtrack), recurse with index+1

### 💻 Code Snippet
```javascript
function subsets(nums) {
    const results = [];
    const subset = [];

    function createAndPushSubset(index) {
        // Base case: processed all numbers
        if (index >= nums.length) {
            results.push([...subset]);
            return;
        }

        // Decision 1: Include current number
        subset.push(nums[index]);
        createAndPushSubset(index + 1);

        // Decision 2: Exclude current number (backtrack)
        subset.pop();
        createAndPushSubset(index + 1);
    }

    createAndPushSubset(0);
    return results;
}
```

### ⏱️ Complexity Analysis
- **Time:** O(2^n) - 2^n subsets, each takes O(n) to copy
- **Space:** O(n) - recursion depth (excluding result storage)

### 💡 Key Insights
- **2^n subsets** for array of size n (including empty set)
- **Simpler than combination sum** - we always process all elements
- **Two different recursive calls:** Include then Exclude (or vice versa)
- **Can also use iterative approach** or **bit manipulation**

### 🔄 Common Variations
1. **Subsets II** - with duplicates in array
2. **Subsets with constraint** - must have exactly k elements
3. **All permutations** - similar structure, different order handling
4. **Power set of string** - same logic

---

# 3️⃣ HASHING

## Problem 3.1: Hash Frequency of Numbers

### 📌 Problem Statement
Count frequency/occurrences of each number in an array.

**Example:** `arr = [1,12,3,12,1], target = 12` → **2**

### 🧠 Approach
**Key Insight:** Use a **hash array** indexed by the number itself.

**Algorithm Steps:**
1. Find max element in array
2. Create hash array of size (max + 1) initialized to 0
3. Iterate through array: `hash[arr[i]] += 1`
4. Return `hash[target]`

### 💻 Code Snippet
```javascript
function countFrequency(inputArr, target, max) {
    var hash = new Array(max + 1).fill(0);
    
    for(var i = 0; i < inputArr.length; i++) {
        hash[inputArr[i]] += 1;
    }
    
    return hash[target];
}

// Usage
let arr = [1,12,3,12,1];
let max = Math.max(...arr);
let count = countFrequency(arr, 12, max); // Returns 2
```

### ⏱️ Complexity Analysis
- **Time:** O(n) - single pass to count
- **Space:** O(m) - where m = max element in array

### 💡 Key Insights
- **Simple but powerful** - constant time lookup after preprocessing
- **Works only with non-negative integers** in range [0, max]
- **Better than Map** when range is small and elements are integers
- **Unused indices waste space** - use Map if sparse

### 🔄 Common Variations
1. **Count using Map/HashMap** - for non-integer keys
2. **Find top k frequent elements** - use heap after counting
3. **Majority element** - Moore voting algorithm if only one element > n/2
4. **First non-repeating element** - track frequencies, iterate to find first with count 1

---

## Problem 3.2: Hash Frequency of Letters

### 📌 Problem Statement
Count frequency of characters in a string.

**Example:** `str = "madhur", target = 'a'` → **1**

### 🧠 Approach
**Key Insight:** Use a **fixed-size hash array** (26 for lowercase letters).

**Algorithm Steps:**
1. Create hash array of size 27 (indices 0-25 for 'a'-'z')
2. For each character: `hash[char - 'a'] += 1`
3. Return `hash[target - 'a']`

### 💻 Code Snippet
```javascript
function countLetterFrequency(inputStr, target) {
    var hash = new Array(27).fill(0);
    
    for (var i = 0; i < inputStr.length; i++) {
        hash[inputStr[i].charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
    }
    
    return hash[target.charCodeAt(0) - 'a'.charCodeAt(0)];
}

// Usage
let str = 'madhur';
let freq = countLetterFrequency(str, 'a'); // Returns 1
```

### ⏱️ Complexity Analysis
- **Time:** O(n) - iterate through string
- **Space:** O(1) - fixed array size of 26 (constant)

### 💡 Key Insights
- **O(1) space** because alphabet size is constant (26)
- **Character to index:** `char - 'a'` for lowercase
- **Can extend to all ASCII:** use array of size 256 or 128
- **Case-sensitive:** 'A' and 'a' have different indices

### 🔄 Common Variations
1. **Count for uppercase letters** - `char - 'A'`
2. **Case-insensitive** - convert to lowercase first
3. **All ASCII characters** - use larger hash array
4. **Find anagrams** - count frequencies and compare
5. **First unique character** - iterate string, check count == 1

---

# 4️⃣ TWO-POINTERS TECHNIQUE

## Problem 4.1: Two Sum (Sorted Array)

### 📌 Problem Statement
Find if any pair of numbers sum to target in a **sorted** array.

**Example:** `arr = [0, -1, 2, -3, 1], target = -5` → **false** (but [-3, -1] = -4, [-3, 1] = -2, etc.)

### 🧠 Approach
**Key Insight:** Use **two pointers** from opposite ends of sorted array.

**Algorithm Steps:**
1. Sort the array (if not already sorted)
2. Initialize `left = 0`, `right = arr.length - 1`
3. While `left < right`:
   - Calculate `sum = arr[left] + arr[right]`
   - If `sum == target`: return true
   - If `sum < target`: increment left (need larger sum)
   - If `sum > target`: decrement right (need smaller sum)
4. If loop ends: return false

### 💻 Code Snippet
```javascript
function twoSum(arr, target) {
    arr.sort((a, b) => a - b);
    
    let left = 0, right = arr.length - 1;
    
    while (left < right) {
        let sum = arr[left] + arr[right];
        
        if (sum === target)
            return true;
        else if (sum < target)
            left++;
        else
            right--;
    }
    
    return false;
}

// Test
console.log(twoSum([0, -1, 2, -3, 1], -5)); // false
```

### ⏱️ Complexity Analysis
- **Time:** O(n log n) - dominated by sorting
- **Space:** O(1)* - only using pointers (*ignoring sort space)

### 💡 Key Insights
- **One-pass algorithm** after sorting - very efficient
- **Why it works:** Moving pointers eliminates impossible pairs
- **If unsorted:** Could use HashMap O(n) instead of sorting
- **Can be extended:** Find all unique pairs, closest sum, etc.

### 🔄 Common Variations
1. **Two Sum II** - return indices instead of boolean
2. **Two Sum (unsorted)** - use HashMap approach
3. **3Sum** - fix one element, use two-sum for remaining
4. **4Sum** - nested two-sum approach
5. **Find all unique pairs** - with duplicate handling
6. **Closest pair to target** - track minimum difference

---

# 5️⃣ SLIDING WINDOW

## Problem 5.1: Longest Substring Without Repeating Characters

### 📌 Problem Statement
Find the length of the longest substring without repeating characters.

**Example:** `"abcabcbb"` → **3** (substrings: "abc")  
**Example:** `"bbbbb"` → **1** (substring: "b")  
**Example:** `"pwwkew"` → **3** (substring: "wke")

### 🧠 Approach
**Key Insight:** Use **sliding window with hash map** to track character positions.

**Algorithm Steps:**
1. Create a Map to store character → last seen index
2. Initialize `start = 0`, `maxLength = 0`
3. For each `end` position:
   - If character exists in map and index >= start: update `start` to skip duplicate
   - Add/update character position in map
   - Update `maxLength = max(maxLength, end - start + 1)`
4. Return `maxLength`

### 💻 Code Snippet
```javascript
function lengthOfLongestSubstring(s) {
    const seen = new Map();
    let start = 0;
    let maxLength = 0;
    
    for (let end = 0; end < s.length; end++) {
        if (seen.has(s[end])) {
            // Move start to skip the duplicate
            start = Math.max(start, seen.get(s[end]) + 1);
        }
        seen.set(s[end], end);
        maxLength = Math.max(maxLength, end - start + 1);
    }
    
    return maxLength;
}

// Test
console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb"));   // 1
console.log(lengthOfLongestSubstring("pwwkew"));  // 3
```

### ⏱️ Complexity Analysis
- **Time:** O(n) - each character visited at most twice
- **Space:** O(min(m, n)) - where m = alphabet size, n = string length

### 💡 Key Insights
- **Window shrinks only when needed** (duplicate found)
- **Track index not count** - allows direct calculation of window size
- **Use Math.max for start** - don't move it backwards
- **Generalizes to any constraint** - "at most k distinct characters"

### 🔄 Common Variations
1. **Longest substring with at most k distinct characters**
2. **Longest substring with all unique characters from set**
3. **Longest repeating character replacement**
4. **Longest substring of ones after deletion** - various constraints
5. **Minimum window substring** - find smallest window with all required chars

---

# 6️⃣ TREES

## Problem 6.1: Tree Traversals (Inorder, Preorder, Postorder)

### 📌 Problem Statement
Implement three types of binary tree traversals.

**Example Tree:** 
```
    1
   / \
  2   3
```

**Inorder (L-R-R):** `[2, 1, 3]`  
**Preorder (R-L-R):** `[1, 2, 3]`  
**Postorder (L-R-R):** `[2, 3, 1]`

### 🧠 Approach
**Key Insight:** Different order of visiting: **Root**, **Left**, **Right**

#### **Inorder (Left, Root, Right)**
- **Use case:** BST gives sorted order
- **Process:** Left subtree → Node → Right subtree

#### **Preorder (Root, Left, Right)**
- **Use case:** Create copy of tree, build expression trees
- **Process:** Node → Left subtree → Right subtree

#### **Postorder (Left, Right, Root)**
- **Use case:** Delete tree, evaluate expression trees
- **Process:** Left subtree → Right subtree → Node

### 💻 Code Snippet
```javascript
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinaryTreeTraversals {
    // Inorder: Left, Root, Right
    inorderTraversal(root) {
        const result = [];
        function inorder(node) {
            if (!node) return;
            inorder(node.left);
            result.push(node.val);
            inorder(node.right);
        }
        inorder(root);
        return result;
    }
    
    // Preorder: Root, Left, Right
    preorderTraversal(root) {
        const result = [];
        function preorder(node) {
            if (!node) return;
            result.push(node.val);
            preorder(node.left);
            preorder(node.right);
        }
        preorder(root);
        return result;
    }
    
    // Postorder: Left, Right, Root
    postorderTraversal(root) {
        const result = [];
        function postorder(node) {
            if (!node) return;
            postorder(node.left);
            postorder(node.right);
            result.push(node.val);
        }
        postorder(root);
        return result;
    }
}
```

### ⏱️ Complexity Analysis
- **Time:** O(n) - visit each node exactly once
- **Space:** O(h) - recursion stack where h = height (O(n) worst case for skewed tree)

### 💡 Key Insights
- **Recursive solution:** Natural because tree is recursive structure
- **Mnemonic:** Inorder - In between left and right; Pre - before children; Post - after children
- **Iterative solutions:** Use explicit stack (preorder easiest, inorder/postorder need two stacks)
- **Morris traversal:** O(1) space but complex

### 🔄 Common Variations
1. **Level-order traversal (BFS)** - use queue
2. **Iterative versions** - use stack
3. **Spiral traversal** - zigzag pattern
4. **Boundary traversal** - only outer nodes
5. **Vertical order** - by x-coordinate
6. **Morris traversal** - O(1) space, no recursion/stack

---

# 7️⃣ LINKED LISTS

## Problem 7.1: Array to Linked List Conversion

### 📌 Problem Statement
Convert an array into a linked list.

**Example:** `[1, 2, 3]` → `1 → 2 → 3 → null`

### 🧠 Approach
**Key Insight:** Create nodes sequentially and link them.

**Algorithm Steps:**
1. Handle empty array case (return null)
2. Create head node with arr[0]
3. For remaining elements:
   - Create new node
   - Link current node's next to new node
   - Move current pointer to new node
4. Last node's next remains null

### 💻 Code Snippet
```javascript
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function arrayToLinkedList(arr) {
    if (arr.length === 0) return null;
    
    const head = new Node(arr[0]);
    let current = head;
    
    for (let i = 1; i < arr.length; i++) {
        const newNode = new Node(arr[i]);
        current.next = newNode;
        current = newNode;
    }
    
    return head;
}

// Test
let head = arrayToLinkedList([1, 2, 3]);
// head → 1 → 2 → 3 → null
```

### ⏱️ Complexity Analysis
- **Time:** O(n) - create n nodes
- **Space:** O(n) - n nodes created

### 💡 Key Insights
- **Simple linear process** - no branching
- **Head pointer important** - don't lose it!
- **Current pointer tracks progress** - update after each link

### 🔄 Common Variations
1. **Array to Doubly Linked List** - add prev pointers
2. **Array to Circular Linked List** - last node points to head
3. **Sorted array to BST structure** - different structure

---

## Problem 7.2: Traverse Linked List

### 📌 Problem Statement
Visit all nodes in a linked list and process their values.

**Example:** `1 → 2 → 3 → null` → Print: `1 2 3`

### 🧠 Approach
**Key Insight:** Two approaches - **iterative** and **recursive**

#### **Iterative Approach**
- Simple pointer movement
- No recursion overhead
- Preferred for large lists

#### **Recursive Approach**
- Natural for recursive structures
- Uses call stack (O(n) space)

### 💻 Code Snippet
```javascript
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// Iterative Traversal
function traverseIterative(head) {
    const result = [];
    let current = head;
    
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    
    return result;
}

// Recursive Traversal
function traverseRecursive(head) {
    if (head === null) {
        return [];
    }
    
    const result = [head.val];
    const restResult = traverseRecursive(head.next);
    
    return result.concat(restResult);
}
```

### ⏱️ Complexity Analysis
- **Time:** O(n) - visit each node once
- **Space:** O(1) iterative, O(n) recursive (call stack)

### 💡 Key Insights
- **Iterative is preferred** for production code (no stack overhead)
- **Recursive shows structure well** - each node processes itself
- **Base case critical** - must check null to stop recursion

### 🔄 Common Variations
1. **Forward and backward traversal** - recursive
2. **Reverse traversal** - reverse link directions first
3. **In-place traversal** - process without creating new list
4. **Count nodes** - return count instead of values

---

## Problem 7.3: Search in Linked List

### 📌 Problem Statement
Find if a target value exists in linked list and return position/node.

**Example:** `1 → 2 → 3 → null`, target=2 → **position: 1**

### 🧠 Approach
**Key Insight:** Two approaches - **iterative** and **recursive**

### 💻 Code Snippet
```javascript
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// Iterative Search
function searchIterative(head, target) {
    let current = head;
    let position = 0;
    
    while (current) {
        if (current.val === target) {
            return { found: true, position: position, node: current };
        }
        current = current.next;
        position++;
    }
    
    return { found: false, position: -1, node: null };
}

// Recursive Search
function searchRecursive(head, target, position = 0) {
    if (head === null) {
        return { found: false, position: -1, node: null };
    }
    
    if (head.val === target) {
        return { found: true, position: position, node: head };
    }
    
    return searchRecursive(head.next, target, position + 1);
}
```

### ⏱️ Complexity Analysis
- **Time:** O(n) - worst case traverse entire list
- **Space:** O(1) iterative, O(n) recursive

### 💡 Key Insights
- **Linear search** - no better than O(n) without additional structure
- **No random access** - must traverse from beginning
- **Return node if found** - useful for deletion/modification

### 🔄 Common Variations
1. **Find last occurrence** - reverse logic
2. **Find middle node** - fast/slow pointers
3. **Find k-th from end** - calculate length or two pointers
4. **Search in sorted list** - still O(n) but can optimize

---

# 8️⃣ BINARY SEARCH

## Problem 8.1: Binary Search on Sorted Array

### 📌 Problem Statement
Search for a target in a **sorted array** and return its index, or -1 if not found.

**Constraint:** O(log n) runtime complexity required.

**Example:** `nums = [1, 3, 5, 7, 9], target = 5` → **2**

### 🧠 Approach
**Key Insight:** **Divide and conquer** - eliminate half the remaining elements each iteration.

**Algorithm Steps:**
1. Initialize `left = 0`, `right = arr.length - 1`
2. While `left <= right`:
   - Calculate `mid = left + Math.floor((right - left) / 2)`
   - If `arr[mid] == target`: return mid
   - If `arr[mid] < target`: search right half → `left = mid + 1`
   - If `arr[mid] > target`: search left half → `right = mid - 1`
3. If loop ends: return -1 (not found)

### 💻 Code Snippet
```javascript
function binarySearch(nums, target) {
    let left = 0, right = nums.length - 1;
    
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;  // Search right half
        } else {
            right = mid - 1; // Search left half
        }
    }
    
    return -1; // Not found
}

// Test
console.log(binarySearch([1, 3, 5, 7, 9], 5));  // 2
console.log(binarySearch([1, 3, 5, 7, 9], 4));  // -1
```

### ⏱️ Complexity Analysis
- **Time:** O(log n) - halve search space each iteration
- **Space:** O(1) - iterative, no extra space

### 💡 Key Insights
- **Only works on sorted arrays** - else invalid
- **`left + (right - left) / 2`** better than `(left + right) / 2` (avoids overflow)
- **Two variants:** Inclusive (`<=`) vs exclusive upper bound
- **Recursive version:** Easy but uses O(log n) stack space
- **Many variations:** leftmost, rightmost, closest value

### 🔄 Common Variations
1. **Find leftmost occurrence** - return first index
2. **Find rightmost occurrence** - return last index
3. **Find closest value** - track minimum difference
4. **Search in rotated sorted array** - more complex
5. **Search in matrix** - treat as 1D
6. **First bad version** - variant of binary search

---

# 9️⃣ DYNAMIC PROGRAMMING

## Problem 9.1: Fibonacci with Memoization (Top-Down DP)

### 📌 Problem Statement
Calculate the nth Fibonacci number efficiently using memoization.

**Definition:** F(n) = F(n-1) + F(n-2), with F(0)=0, F(1)=1

**Example:** F(5) = 5 (sequence: 0, 1, 1, 2, 3, 5)

### 🧠 Approach
**Key Insight:** **Memoization** stores computed results to avoid recalculation.

**Algorithm Steps:**
1. Create memo dictionary/map
2. In recursive function:
   - Base cases: F(0)=0, F(1)=1
   - Check if already computed in memo
   - If yes: return cached value
   - If no: compute F(n-1) + F(n-2), store in memo, return

### 💻 Code Snippet
```javascript
// Top-down Memoization
function fibMemo(n, memo = new Map()) {
    // Base cases
    if (n <= 1) {
        return n;
    }
    
    // Check cache
    if (memo.has(n)) {
        return memo.get(n);
    }
    
    // Compute and cache
    const result = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
    memo.set(n, result);
    
    return result;
}

// Test
console.log(fibMemo(5));  // 5
console.log(fibMemo(10)); // 55
```

### ⏱️ Complexity Analysis
- **Time:** O(n) - each Fibonacci number calculated once
- **Space:** O(n) - memo dictionary + recursion stack

### 💡 Key Insights
- **Transforms exponential (2^n) to linear (n)**
- **Top-down:** Natural recursive approach
- **Memoization is automatic caching** of subproblem results
- **Without it:** Would recalculate same values many times

### 🔄 Common Variations
1. **Tabulation (Bottom-up)** - iterative, more efficient
2. **Space optimization** - only track last two values (O(1) space)
3. **Find nth Fibonacci with matrix exponentiation** - O(log n) time
4. **Tribonacci** - F(n) = F(n-1) + F(n-2) + F(n-3)

---

## Problem 9.2: Fibonacci with Tabulation (Bottom-Up DP)

### 📌 Problem Statement
Calculate nth Fibonacci using **tabulation** (iterative DP).

### 🧠 Approach
**Key Insight:** Build solution from bottom up, storing intermediate results in table.

**Algorithm Steps:**
1. Create DP array of size n+1
2. Initialize base cases: dp[0]=0, dp[1]=1
3. For i from 2 to n: `dp[i] = dp[i-1] + dp[i-2]`
4. Return dp[n]

### 💻 Code Snippet
```javascript
// Bottom-up Tabulation
function fibTab(n) {
    if (n <= 1) return n;
    
    // Initialize table
    const dp = new Array(n + 1).fill(0);
    dp[1] = 1;
    
    // Fill table bottom-up
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    
    return dp[n];
}

// Space-optimized version (O(1) space)
function fibOptimized(n) {
    if (n <= 1) return n;
    
    let prev2 = 0, prev1 = 1;
    
    for (let i = 2; i <= n; i++) {
        let curr = prev1 + prev2;
        prev2 = prev1;
        prev1 = curr;
    }
    
    return prev1;
}

// Test
console.log(fibTab(5));       // 5
console.log(fibOptimized(5)); // 5
```

### ⏱️ Complexity Analysis
- **Time:** O(n) - compute each value once
- **Space:** O(n) for table, O(1) optimized version

### 💡 Key Insights
- **Iterative:** No recursion overhead or stack risk
- **Better for interviews** - cleaner, more predictable
- **Can optimize to O(1) space** - track only last two values
- **Pattern:** Most DP problems have space optimization

### 🔄 Common Variations
1. **Return all values** - track entire sequence
2. **Modular Fibonacci** - use % to prevent overflow
3. **Matrix exponentiation** - compute in O(log n) time

---

## Problem 9.3: Climbing Stairs

### 📌 Problem Statement
You can climb 1 or 2 stairs per step. Find total ways to reach nth stair.

**Example:** n=3 → **3 ways** 
- 1+1+1
- 1+2
- 2+1

### 🧠 Approach
**Key Insight:** Recurrence relation: `ways(n) = ways(n-1) + ways(n-2)`

**Why?** To reach stair n, you either:
- Came from stair (n-1) and took 1 step
- Came from stair (n-2) and took 2 steps

### 💻 Code Snippet
```javascript
function climbStairs(n) {
    // Base cases
    if (n <= 2) return n;
    
    // DP table
    const dp = new Array(n + 1);
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 2;
    
    // Fill table
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    
    return dp[n];
}

// Optimized version
function climbStairsOptimized(n) {
    if (n <= 2) return n;
    
    let prev2 = 1, prev1 = 2;
    
    for (let i = 3; i <= n; i++) {
        let curr = prev1 + prev2;
        prev2 = prev1;
        prev1 = curr;
    }
    
    return prev1;
}

// Test
console.log(climbStairs(3));  // 3
console.log(climbStairs(4));  // 5 (1+1+1+1, 1+1+2, 1+2+1, 2+1+1, 2+2)
```

### ⏱️ Complexity Analysis
- **Time:** O(n) - compute each stair once
- **Space:** O(n) DP array, O(1) optimized

### 💡 Key Insights
- **Identical to Fibonacci** - same recurrence relation!
- **Clear DP formulation** - good interview problem
- **Can ask variations:** 1, 2, 3 steps allowed? Min/max steps? Weighted steps?

### 🔄 Common Variations
1. **Jump game** - can jump up to k steps
2. **Min cost climbing** - each stair has cost
3. **Paint staircase** - color constraints
4. **House robber** - variant of DP

---

# 🔟 GREEDY ALGORITHMS

## Problem 10.1: Best Time to Buy and Sell Stock (Once)

### 📌 Problem Statement
Find maximum profit from buying and selling stock **exactly once**.

**Example:** `prices = [7,1,5,3,6,4]` → **5** (buy at 1, sell at 6)

### 🧠 Approach
**Key Insight:** Track **minimum price seen so far** and maximize profit at each step.

**Algorithm Steps:**
1. Initialize `minPrice = Infinity`, `maxProfit = 0`
2. For each price:
   - Update minimum: `minPrice = min(minPrice, price)`
   - Calculate profit: `profit = price - minPrice`
   - Update max: `maxProfit = max(maxProfit, profit)`
3. Return maxProfit

### 💻 Code Snippet
```javascript
function maxProfit(prices) {
    let maxProfit = 0;
    let minPrice = Infinity;
    
    for (let i = 0; i < prices.length; i++) {
        // Update minimum price seen
        minPrice = Math.min(minPrice, prices[i]);
        
        // Calculate profit if we sell at current price
        let profit = prices[i] - minPrice;
        
        // Track maximum profit
        maxProfit = Math.max(maxProfit, profit);
    }
    
    return maxProfit;
}

// Test
console.log(maxProfit([7,1,5,3,6,4]));   // 5
console.log(maxProfit([7,6,4,3,1]));     // 0
console.log(maxProfit([2,4,1,7,5,11]));  // 10
```

### ⏱️ Complexity Analysis
- **Time:** O(n) - single pass
- **Space:** O(1) - constant space

### 💡 Key Insights
- **Greedy choice:** Always track min to maximize profit
- **Must buy before sell** - min price naturally enforces this
- **Works because** we only care about max difference
- **No need to check all pairs** - O(n) vs brute force O(n²)

### 🔄 Common Variations
1. **Buy & Sell Multiple Times** - different approach (greedy capture peaks)
2. **With Transaction Fee** - subtract fee from profit
3. **With Cooldown** - DP approach needed
4. **K Transactions** - DP with states

---

## Problem 10.2: Best Time to Buy and Sell Stock (Multiple Transactions)

### 📌 Problem Statement
Maximize profit by buying and selling **multiple times** (must sell before buying again).

**Example:** `prices = [7,1,5,3,6,4]` → **7** (buy at 1→sell at 5, buy at 3→sell at 6)

### 🧠 Approach
**Key Insight:** **Capture every profitable upward movement** (greedy).

**Algorithm Steps:**
1. Iterate through prices from index 1
2. If `prices[i] > prices[i-1]`: capture the difference
   - Buy at price[i-1], sell at prices[i]
   - Profit = prices[i] - prices[i-1]
3. Accumulate all profitable differences

### 💻 Code Snippet
```javascript
function maxProfitMultiple(prices) {
    let maxProfit = 0;
    let startPrice = prices[0];
    
    for (let i = 1; i < prices.length; i++) {
        // If price increases, capture the profit
        if (prices[i] > startPrice) {
            maxProfit += prices[i] - startPrice;
        }
        startPrice = prices[i]; // Move to next price
    }
    
    return maxProfit;
}

// Test
console.log(maxProfitMultiple([7,1,5,3,6,4])); // 7
console.log(maxProfitMultiple([1,2,3,4,5]));   // 4
```

### ⏱️ Complexity Analysis
- **Time:** O(n) - single pass
- **Space:** O(1) - constant space

### 💡 Key Insights
- **Why it works:** Sum of (5-1) + (6-3) = sum of all rises
- **Example:** [1,2,3] → buy at 1→sell at 3 = buy at 1→sell at 2→buy at 2→sell at 3
- **Greedy works here** because we want ALL profitable transactions
- **Different from single transaction** - where we need max difference

### 🔄 Common Variations
1. **With cooldown** - can't buy immediately after selling
2. **With transaction fee** - subtract fee
3. **K transactions max** - DP approach
4. **Foreign exchange** - similar logic

---

## Problem 10.3: Assign Cookies (Greedy Matching)

### 📌 Problem Statement
Maximize number of content children. Each child needs minimum cookie size (greed factor).

**Example:** `greed = [1,2,3], cookies = [1,1]` → **1** (satisfy only child with greed 1)

### 🧠 Approach
**Key Insight:** **Sort both arrays and use two pointers** to match greedily.

**Algorithm Steps:**
1. Sort both children's greed factors and cookie sizes
2. Initialize `childIdx = 0`, `cookieIdx = 0`
3. While both pointers in bounds:
   - If `cookies[cookieIdx] >= greed[childIdx]`:
     - Cookie satisfies child → increment both pointers
   - Else:
     - Cookie too small → try next cookie (increment cookieIdx)
4. Return number of satisfied children

### 💻 Code Snippet
```javascript
function findContentChildren(greed, cookies) {
    greed.sort((a, b) => a - b);
    cookies.sort((a, b) => a - b);
    
    let childIdx = 0;
    let cookieIdx = 0;
    let satisfied = 0;
    
    while (childIdx < greed.length && cookieIdx < cookies.length) {
        if (cookies[cookieIdx] >= greed[childIdx]) {
            // Cookie satisfies this child
            satisfied++;
            childIdx++;
        }
        // Move to next cookie regardless
        cookieIdx++;
    }
    
    return satisfied;
}

// Test
console.log(findContentChildren([1,2,3], [1,1]));     // 1
console.log(findContentChildren([1,2], [1,2,3]));     // 2
console.log(findContentChildren([10,9,8,7], [5,6,7,8])); // 2
```

### ⏱️ Complexity Analysis
- **Time:** O(n log n + m log m) - sorting both arrays
- **Space:** O(1) - excluding sort space

### 💡 Key Insights
- **Greedy strategy:** Use smallest cookie on smallest requirement
- **Why it works:** If smallest cookie can't satisfy smallest child, it can't satisfy anyone
- **Sorting enables greedy** - problem is about matching not optimization
- **Two pointers** after sorting is standard greedy matching pattern

### 🔄 Common Variations
1. **Distribute resources with constraints** - similar pattern
2. **Rearrange string** - frequency-based matching
3. **Assign movies to time slots** - interval scheduling variant

---

# 📊 COMPLEXITY REFERENCE SHEET

## Time Complexity Comparison
```
O(1)          - Constant      - Hash lookup, array access by index
O(log n)      - Logarithmic   - Binary search, halving input
O(n)          - Linear        - Single loop, simple iteration
O(n log n)    - Linearithmic  - Sort (merge, quick), divide & conquer with merge
O(n²)         - Quadratic     - Nested loops, bubble sort, naive string comparison
O(n³)         - Cubic         - Triple nested loops, matrix multiplication
O(2^n)        - Exponential   - Subset generation, recursive without memoization
O(n!)         - Factorial     - Permutation generation
```

## Space Complexity Comparison
```
O(1)    - Constant        - No extra data structures
O(log n) - Logarithmic    - Recursion depth in binary search
O(n)    - Linear          - Hash map, DP table, recursion stack
O(n²)   - Quadratic       - 2D array, matrix operations
```

---

# 💡 INTERVIEW TIPS & STRATEGIES

## ✅ Before Coding
1. **Clarify the problem** - ask for edge cases, constraints
2. **Discuss examples** - work through 2-3 examples on paper
3. **Explain approach** - discuss time/space trade-offs
4. **Ask permission** - start coding only after clarification

## ✅ While Coding
1. **Talk through logic** - explain as you code
2. **Handle edge cases** - empty input, single element, negative numbers
3. **Use meaningful variable names** - not `i`, `j`, `temp`
4. **Add comments** - especially for non-obvious logic
5. **Test with examples** - mentally run through test cases

## ✅ Common Patterns to Recognize

| Pattern | Use Case | Examples |
|---------|----------|----------|
| **Sliding Window** | Contiguous subarray problems | Longest substring, max window sum |
| **Two Pointers** | Sorted arrays, find pairs | Two sum, partition, merge |
| **DFS/Backtracking** | Combinations, permutations | Subsets, combinations sum |
| **BFS** | Level-order, shortest path | Tree traversal, graph distance |
| **Binary Search** | Sorted arrays, search space | Find element, find boundary |
| **Dynamic Programming** | Overlapping subproblems | Fibonacci, coins, LIS |
| **Greedy** | Maximize/minimize with local choice | Stock buy-sell, coins, scheduling |
| **HashMap** | Frequency, grouping | Count elements, find duplicates |

## ✅ Common Edge Cases to Test
- **Empty input** (empty array, null node, empty string)
- **Single element** (array length 1, tree with 1 node)
- **All duplicates** (all same elements)
- **Negative numbers** (negative values, negation of logic)
- **Very large input** (check for overflow, time limits)
- **Special values** (0, -1, min/max integer)

## ✅ Complexity Analysis Checklist
- [ ] Time complexity clearly stated
- [ ] Space complexity clearly stated
- [ ] Considered best/average/worst case (if different)
- [ ] Discussed optimization possibilities
- [ ] Compared with alternative approaches

## ✅ Red Flags to Avoid
- ❌ Starting to code without plan
- ❌ Not discussing edge cases
- ❌ Unclear variable names (`x`, `y`, `res`)
- ❌ Missing base cases in recursion
- ❌ Off-by-one errors in loops
- ❌ Not testing your code mentally
- ❌ Over-engineering simple solutions

---

# 🎓 TOPIC-WISE LEARNING ROADMAP

## Phase 1: Fundamentals (Week 1-2)
- [ ] Arrays: Basic iteration, modification
- [ ] Strings: Manipulation, searching
- [ ] Hash Maps: Creation, iteration, lookup
- [ ] Simple recursion: Factorial, Fibonacci

## Phase 2: Core Techniques (Week 3-4)
- [ ] Sorting: Merge sort, quick sort concepts
- [ ] Sliding Window: Contiguous problems
- [ ] Two Pointers: Sorted arrays, partitioning
- [ ] Binary Search: Basic and variants

## Phase 3: Advanced Structures (Week 5-6)
- [ ] Linked Lists: Traversal, manipulation
- [ ] Trees: Traversals, searching
- [ ] Graphs: DFS, BFS (basics)
- [ ] Stack & Queue: Operations, applications

## Phase 4: Advanced Techniques (Week 7-8)
- [ ] Recursion & Backtracking: Combinations, permutations
- [ ] Dynamic Programming: Memoization, tabulation
- [ ] Greedy Algorithms: Problem recognition
- [ ] Interval problems: Merging, scheduling

## Phase 5: Integration & Practice (Week 9-10)
- [ ] Mixed problem sets
- [ ] Time-constrained practice
- [ ] Weak area reinforcement
- [ ] Mock interviews

---

# 🚀 QUICK PROBLEM SOLVER FLOWCHART

```
START
  ↓
Is input SORTED? ──YES→ Try BINARY SEARCH
  ↓ NO
Is it about SUBARRAY/WINDOW? ──YES→ Try SLIDING WINDOW
  ↓ NO
Is it about PAIRS/MATCHING? ──YES→ Try TWO POINTERS
  ↓ NO
Is it about COMBINATIONS/PERMUTATIONS? ──YES→ Try BACKTRACKING
  ↓ NO
Does it have OVERLAPPING SUBPROBLEMS? ──YES→ Try DYNAMIC PROGRAMMING
  ↓ NO
Can GREEDY LOCAL CHOICE work? ──YES→ Try GREEDY
  ↓ NO
Is it a TREE/GRAPH problem? ──YES→ Try DFS/BFS
  ↓ NO
Need FREQUENCY COUNTING? ──YES→ Try HASHING
  ↓ NO
Default: Try BRUTE FORCE then OPTIMIZE
```

---

# 📝 FORMULA & MATHEMATICAL INSIGHTS

## Arithmetic
- Sum of 1 to n: `n(n+1)/2`
- Sum of squares: `n(n+1)(2n+1)/6`
- Fibonacci: `F(n) = F(n-1) + F(n-2)`

## Combinatorics
- Permutations: `P(n,r) = n! / (n-r)!`
- Combinations: `C(n,r) = n! / (r!(n-r)!)`
- Subsets of size n: `2^n`

## Probability & Discrete Math
- Pigeonhole principle: If > n items in n boxes, one has > 1
- Inclusion-Exclusion: Better for overlapping sets

---

# 🎯 FINAL CHECKLIST BEFORE INTERVIEW

- [ ] Know complexity of all data structures (array, linked list, tree, hash map)
- [ ] Can explain all 10+ problems from cheat sheet
- [ ] Understand when to use each major technique
- [ ] Practice at least 5-10 mixed problems
- [ ] Can code solutions without referring to notes
- [ ] Understand recursive vs iterative trade-offs
- [ ] Know how to optimize space complexity
- [ ] Can handle edge cases without prompting
- [ ] Comfortable with syntax of chosen language
- [ ] Can estimate complexity without detailed calculation

---

**Happy Coding! 🚀 Remember: Practice > Perfection. Focus on understanding patterns over memorization.**

---

*This cheat sheet covers problems from the InterviewPrepLeetcodeAndOthers repository. Use it for quick revision before interviews!*
