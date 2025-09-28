// Binary Tree Node definition
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// Problem 1: Implement all three types of tree traversals
// Time Complexity: O(n)
// Space Complexity: O(h) where h is the height of the tree

class BinaryTreeTraversals {
    // Inorder traversal (Left, Root, Right)
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
    
    // Preorder traversal (Root, Left, Right)
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
    
    // Postorder traversal (Left, Right, Root)
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

// Test
const tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
tree.left.left = new TreeNode(4);
tree.left.right = new TreeNode(5);

const traversal = new BinaryTreeTraversals();
console.log("Inorder:", traversal.inorderTraversal(tree));     // [4,2,5,1,3]
console.log("Preorder:", traversal.preorderTraversal(tree));   // [1,2,4,5,3]
console.log("Postorder:", traversal.postorderTraversal(tree)); // [4,5,2,3,1]