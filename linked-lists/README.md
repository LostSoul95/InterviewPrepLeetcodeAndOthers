# Linked List Problems

This section covers fundamental linked list operations and problems commonly asked in interviews.

## 1. Array to LinkedList Conversion
**File**: `arrayToLinkedList.js`

### Problem:
Convert an array into a linked list structure.

### Approach:
1. Create head node with first element
2. Iterate through remaining array elements
3. Create new nodes and link them together
4. Return head pointer

**Time Complexity**: O(n)
**Space Complexity**: O(n)

### Example:
```javascript
Array: [1, 2, 3, 4, 5]
LinkedList: 1 -> 2 -> 3 -> 4 -> 5 -> null
```

## 2. Traversing a LinkedList
**File**: `traverseLinkedList.js`

### Problem:
Visit all nodes in a linked list and process their values.

### Approaches:

1. **Iterative Traversal**
   ```javascript
   let current = head;
   while (current) {
       process(current.val);
       current = current.next;
   }
   ```
   - Time: O(n)
   - Space: O(1)

2. **Recursive Traversal**
   ```javascript
   function traverse(node) {
       if (node === null) return;
       process(node.val);
       traverse(node.next);
   }
   ```
   - Time: O(n)
   - Space: O(n) [call stack]

3. **Traversal with Index**
   - Track position while traversing
   - Useful for finding kth element

4. **Display Traversal**
   - Build string representation
   - For visualization and debugging

## 3. Searching an Element in LinkedList
**File**: `searchLinkedList.js`

### Problem:
Find if a given element exists in the linked list.

### Approaches:

1. **Iterative Search**
   ```javascript
   function search(head, target) {
       let current = head;
       let position = 0;
       while (current) {
           if (current.val === target) return position;
           current = current.next;
           position++;
       }
       return -1; // not found
   }
   ```
   - Time: O(n)
   - Space: O(1)

2. **Recursive Search**
   - Elegant but uses call stack
   - Space: O(n)

3. **Search Nth Occurrence**
   - Find nth time element appears
   - Useful for handling duplicates

4. **Find All Occurrences**
   - Return all positions where element exists
   - Space: O(k) where k = number of occurrences

## LinkedList Node Structure
```javascript
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
```

## Common Operations Complexity

| Operation | Time | Space |
|-----------|------|-------|
| Traversal | O(n) | O(1) iterative, O(n) recursive |
| Search | O(n) | O(1) iterative, O(n) recursive |
| Insert at Head | O(1) | O(1) |
| Insert at Tail | O(n) | O(1) |
| Delete | O(n) | O(1) |

## Interview Tips

1. **Always check for null** before accessing node properties
2. **Use two pointers** for many linked list problems (slow/fast, prev/curr)
3. **Iterative > Recursive** for better space complexity
4. **Practice edge cases**:
   - Empty list
   - Single node list
   - Element at beginning/end
   - Element not present

## Extensions

Once you master these basics:
- Reverse a linked list
- Detect cycle in linked list
- Find middle element
- Merge two sorted lists
- Remove nth node from end
- Palindrome linked list

## Related Patterns

- **Two Pointers**: Find middle, detect cycle
- **Recursion**: Elegant solutions but higher space
- **Backtracking**: Useful for complex operations