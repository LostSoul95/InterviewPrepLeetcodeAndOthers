# Tree Problems

This section covers various tree problems and their solutions, focusing on binary trees and their traversals.

## 1. Tree Traversals
**File**: `tree_traversals.js`

### Problem:
Implement three different types of tree traversals:
- Inorder (Left → Root → Right)
- Preorder (Root → Left → Right)
- Postorder (Left → Right → Root)

### Approaches:

1. **Recursive Traversal**
   ```javascript
   // Inorder
   function inorder(node) {
       if (!node) return;
       inorder(node.left);
       visit(node);
       inorder(node.right);
   }
   ```

2. **Iterative Traversal** (using stack)
   ```javascript
   // Inorder
   function inorderIterative(root) {
       const stack = [];
       let current = root;
       while (current || stack.length) {
           while (current) {
               stack.push(current);
               current = current.left;
           }
           current = stack.pop();
           visit(current);
           current = current.right;
       }
   }
   ```

**Time Complexity**: O(n)
**Space Complexity**: O(h) where h is height of tree

## Common Tree Problems:

1. **Tree Construction**
   - From inorder and preorder traversals
   - From level order traversal
   - Balanced BST from sorted array

2. **Tree Properties**
   - Height/Depth calculation
   - Balance checking
   - Symmetry checking

3. **Path Problems**
   - Path sum
   - Lowest common ancestor
   - Maximum path sum

## Implementation Tips:

1. **Tree Node Structure**
   ```javascript
   class TreeNode {
       constructor(val) {
           this.val = val;
           this.left = null;
           this.right = null;
       }
   }
   ```

2. **Recursive vs Iterative**
   - Recursive: Cleaner code but stack space
   - Iterative: More complex but better space

3. **Level Order Operations**
   - Use queue for BFS
   - Track level size for level-wise processing

## Interview Strategies:

1. **Problem Analysis**
   - Is it a BST or binary tree?
   - Are values unique?
   - Is the tree balanced?
   - Any specific traversal requirement?

2. **Common Techniques**
   - DFS (recursion/stack)
   - BFS (queue)
   - Level-order processing
   - Parent pointers

3. **Edge Cases**
   - Empty tree
   - Single node
   - Skewed tree
   - Complete binary tree

## Space-Time Complexity:
- Most tree operations: O(n) time
- Balanced tree operations: O(log n) time
- Space complexity varies:
  - Recursive: O(h) stack space
  - BFS: O(w) where w is max width
  - DFS iterative: O(h) stack space