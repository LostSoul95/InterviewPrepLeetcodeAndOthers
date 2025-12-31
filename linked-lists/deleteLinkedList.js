/**
 * Linked List Node Definition
 */
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

/**
 * Delete Node from Linked List
 * Three scenarios: Delete at Start, Delete at End, Delete at Any Position
 * 
 * Time Complexity:
 * - Delete at Start: O(1)
 * - Delete at End: O(n)
 * - Delete at Position: O(n)
 * 
 * Space Complexity: O(1)
 */

// ============================================
// APPROACH 1: DELETE FROM START
// ============================================
/**
 * Delete the first node (head) from linked list
 * Time: O(1) - just update head pointer
 * Space: O(1)
 */
function deleteAtStart(head) {
    console.log('Deleting from START:');
    
    if (head === null) {
        console.log('❌ Empty list - nothing to delete\n');
        return null;
    }
    
    console.log(`Deleting node with value: ${head.val}`);
    console.log(`Old head: ${head.val}`);
    
    // Simply move head to next node
    head = head.next;
    
    console.log(`New head: ${head ? head.val : 'null'}\n`);
    return head;
}

// ============================================
// APPROACH 2: DELETE FROM END
// ============================================
/**
 * Delete the last node from linked list
 * Time: O(n) - need to reach second-to-last node
 * Space: O(1)
 */
function deleteAtEnd(head) {
    console.log('Deleting from END:');
    
    if (head === null) {
        console.log('❌ Empty list - nothing to delete\n');
        return null;
    }
    
    // Special case: single node
    if (head.next === null) {
        console.log(`Deleting single node with value: ${head.val}`);
        console.log('List is now empty\n');
        return null;
    }
    
    // Traverse to second-to-last node
    let current = head;
    let count = 1;
    
    console.log('Traversing to find second-to-last node:');
    while (current.next && current.next.next) {
        console.log(`  Node ${count}: Value = ${current.val}`);
        current = current.next;
        count++;
    }
    
    console.log(`  Node ${count}: Value = ${current.val} (second-to-last)`);
    console.log(`Deleting node with value: ${current.next.val}`);
    
    // Remove last node
    current.next = null;
    console.log('Last node removed\n');
    
    return head;
}

// ============================================
// APPROACH 3: DELETE AT SPECIFIC POSITION
// ============================================
/**
 * Delete node at specific position (1-indexed)
 * Position 1 = head, Position 2 = second node, etc.
 * Time: O(n) - may need to traverse to position
 * Space: O(1)
 */
function deleteAtPosition(head, position) {
    console.log(`Deleting at POSITION ${position}:`);
    
    if (head === null) {
        console.log('❌ Empty list - nothing to delete\n');
        return null;
    }
    
    // Special case: delete head (position 1)
    if (position === 1) {
        console.log(`Deleting head node with value: ${head.val}`);
        head = head.next;
        console.log(`New head: ${head ? head.val : 'null'}\n`);
        return head;
    }
    
    // Find node before target position
    let current = head;
    let count = 1;
    
    console.log('Traversing to find node before target position:');
    while (current && count < position - 1) {
        console.log(`  Position ${count}: Value = ${current.val}`);
        current = current.next;
        count++;
    }
    
    // Check if position is valid
    if (current === null || current.next === null) {
        console.log(`❌ Position ${position} is out of bounds\n`);
        return head;
    }
    
    console.log(`  Position ${count}: Value = ${current.val}`);
    console.log(`Deleting node at position ${position} with value: ${current.next.val}`);
    
    // Delete the node at target position
    current.next = current.next.next;
    console.log('Node deleted\n');
    
    return head;
}

// ============================================
// APPROACH 4: DELETE BY VALUE
// ============================================
/**
 * Delete first occurrence of a specific value
 * Time: O(n)
 * Space: O(1)
 */
function deleteByValue(head, value) {
    console.log(`Deleting node with value: ${value}`);
    
    if (head === null) {
        console.log('❌ Empty list - nothing to delete\n');
        return null;
    }
    
    // If head contains the value
    if (head.val === value) {
        console.log(`Found at head - deleting`);
        head = head.next;
        console.log('Head updated\n');
        return head;
    }
    
    // Search in remaining list
    let current = head;
    let count = 1;
    
    console.log('Searching for value:');
    while (current.next) {
        console.log(`  Position ${count}: Value = ${current.val}`);
        
        if (current.next.val === value) {
            console.log(`✅ Found at position ${count + 1}: Value = ${current.next.val}`);
            current.next = current.next.next;
            console.log('Node deleted\n');
            return head;
        }
        
        current = current.next;
        count++;
    }
    
    console.log(`❌ Value ${value} not found in list\n`);
    return head;
}

// ============================================
// HELPER FUNCTIONS
// ============================================
/**
 * Create linked list from array
 */
function createLinkedList(arr) {
    if (arr.length === 0) return null;
    
    const head = new Node(arr[0]);
    let current = head;
    
    for (let i = 1; i < arr.length; i++) {
        current.next = new Node(arr[i]);
        current = current.next;
    }
    
    return head;
}

/**
 * Display linked list
 */
function displayLinkedList(head, label = 'LinkedList') {
    let current = head;
    let display = '';
    
    while (current) {
        display += current.val + ' → ';
        current = current.next;
    }
    display += 'null';
    
    console.log(`${label}: ${display}\n`);
}

/**
 * Get length of linked list
 */
function getLength(head) {
    let count = 0;
    let current = head;
    
    while (current) {
        count++;
        current = current.next;
    }
    
    return count;
}

// ============================================
// TEST CASES
// ============================================

console.log('=== LINKED LIST DELETION OPERATIONS ===\n');

// Test Case 1: Delete at Start
console.log('TEST CASE 1: Delete at Start');
console.log('─'.repeat(50));
let head1 = createLinkedList([1, 2, 3, 4, 5]);
displayLinkedList(head1, 'Original');
head1 = deleteAtStart(head1);
displayLinkedList(head1, 'After deletion');

// Test Case 2: Delete at End
console.log('\nTEST CASE 2: Delete at End');
console.log('─'.repeat(50));
let head2 = createLinkedList([10, 20, 30, 40, 50]);
displayLinkedList(head2, 'Original');
head2 = deleteAtEnd(head2);
displayLinkedList(head2, 'After deletion');

// Test Case 3: Delete at Specific Position (Middle)
console.log('\nTEST CASE 3: Delete at Specific Position (Middle - Position 3)');
console.log('─'.repeat(50));
let head3 = createLinkedList([100, 200, 300, 400, 500]);
displayLinkedList(head3, 'Original');
head3 = deleteAtPosition(head3, 3);
displayLinkedList(head3, 'After deletion');

// Test Case 4: Delete at Specific Position (Head)
console.log('\nTEST CASE 4: Delete at Specific Position (Head - Position 1)');
console.log('─'.repeat(50));
let head4 = createLinkedList([5, 10, 15, 20]);
displayLinkedList(head4, 'Original');
head4 = deleteAtPosition(head4, 1);
displayLinkedList(head4, 'After deletion');

// Test Case 5: Delete by Value
console.log('\nTEST CASE 5: Delete by Value');
console.log('─'.repeat(50));
let head5 = createLinkedList(['A', 'B', 'C', 'D', 'E']);
displayLinkedList(head5, 'Original');
head5 = deleteByValue(head5, 'C');
displayLinkedList(head5, 'After deletion');

// Test Case 6: Delete Single Node
console.log('\nTEST CASE 6: Delete Single Node (from end)');
console.log('─'.repeat(50));
let head6 = createLinkedList([99]);
displayLinkedList(head6, 'Original');
head6 = deleteAtEnd(head6);
displayLinkedList(head6, 'After deletion');

// Test Case 7: Delete from Empty List
console.log('\nTEST CASE 7: Delete from Empty List');
console.log('─'.repeat(50));
let head7 = null;
displayLinkedList(head7, 'Original');
head7 = deleteAtStart(head7);

// Test Case 8: Delete at Invalid Position
console.log('\nTEST CASE 8: Delete at Invalid Position');
console.log('─'.repeat(50));
let head8 = createLinkedList([1, 2, 3]);
displayLinkedList(head8, 'Original');
head8 = deleteAtPosition(head8, 10);
displayLinkedList(head8, 'After (no change)');

/**
 * COMPLEXITY SUMMARY
 * 
 * Delete at Start:
 * - Time: O(1)
 * - Space: O(1)
 * - Simplest operation
 * 
 * Delete at End:
 * - Time: O(n) - must traverse to second-last node
 * - Space: O(1)
 * - Most expensive operation
 * 
 * Delete at Position:
 * - Time: O(n) - worst case traverse whole list
 * - Space: O(1)
 * - Flexible but slower
 * 
 * Delete by Value:
 * - Time: O(n) - must search for value
 * - Space: O(1)
 * - User-friendly approach
 * 
 * KEY INSIGHTS:
 * 1. Always check if list is empty
 * 2. Handle head deletion separately (no previous node)
 * 3. Use previous node pointer for middle/end deletion
 * 4. Validate position before deletion
 * 5. Update head if needed
 * 6. For deletion at end, keep track of previous node
 * 
 * WHEN TO USE WHICH:
 * - Delete at Start: When removing first element (queue-like)
 * - Delete at End: When removing last element
 * - Delete at Position: When index is known
 * - Delete by Value: When value is known, index not
 * 
 * COMMON VARIATIONS:
 * 1. Delete all nodes with specific value
 * 2. Delete alternate nodes
 * 3. Delete every k-th node
 * 4. Delete even/odd positioned nodes
 * 5. Delete in-place vs create new list
 */