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
 * Insert Node in Linked List
 * Four scenarios: Insert at Beginning, Insert at Tail, Insert at Any Position, Insert Before/After Value
 * 
 * Time Complexity:
 * - Insert at Beginning: O(1)
 * - Insert at Tail: O(n)
 * - Insert at Position: O(n)
 * - Insert Before/After Value: O(n)
 * 
 * Space Complexity: O(1)
 */

// ============================================
// APPROACH 1: INSERT AT BEGINNING (HEAD)
// ============================================
/**
 * Insert a new node at the beginning of linked list
 * Time: O(1) - just update head and new node's next
 * Space: O(1)
 */
function insertAtBeginning(head, value) {
    console.log(`Inserting ${value} at BEGINNING:`);
    
    // Create new node
    const newNode = new Node(value);
    console.log(`Created new node with value: ${value}`);
    
    // If list is empty
    if (head === null) {
        console.log('List was empty - new node becomes head\n');
        return newNode;
    }
    
    // Link new node to current head
    console.log(`Linking new node to current head (${head.val})`);
    newNode.next = head;
    console.log(`New head is now: ${newNode.val}\n`);
    
    return newNode;
}

// ============================================
// APPROACH 2: INSERT AT TAIL (END)
// ============================================
/**
 * Insert a new node at the end of linked list
 * Time: O(n) - need to traverse to end
 * Space: O(1)
 */
function insertAtTail(head, value) {
    console.log(`Inserting ${value} at TAIL:`);
    
    // Create new node
    const newNode = new Node(value);
    console.log(`Created new node with value: ${value}`);
    
    // If list is empty
    if (head === null) {
        console.log('List was empty - new node becomes head\n');
        return newNode;
    }
    
    // Traverse to last node
    let current = head;
    let count = 1;
    
    console.log('Traversing to find last node:');
    while (current.next) {
        console.log(`  Position ${count}: Value = ${current.val}`);
        current = current.next;
        count++;
    }
    
    console.log(`  Position ${count}: Value = ${current.val} (Last node)`);
    console.log(`Attaching new node to end`);
    
    // Attach new node to tail
    current.next = newNode;
    console.log(`New tail: ${newNode.val}\n`);
    
    return head;
}

// ============================================
// APPROACH 3: INSERT AT SPECIFIC POSITION
// ============================================
/**
 * Insert node at specific position (1-indexed)
 * Position 1 = before head (at beginning)
 * Position 2 = after first node
 * Position n = at end
 * Time: O(n) - may need to traverse to position
 * Space: O(1)
 */
function insertAtPosition(head, value, position) {
    console.log(`Inserting ${value} at POSITION ${position}:`);
    
    // Create new node
    const newNode = new Node(value);
    console.log(`Created new node with value: ${value}`);
    
    // Special case: insert at beginning (position 1)
    if (position === 1) {
        console.log('Position 1 - inserting at head');
        newNode.next = head;
        console.log(`New head: ${newNode.val}\n`);
        return newNode;
    }
    
    // Find node before target position
    let current = head;
    let count = 1;
    
    console.log('Traversing to find insertion point:');
    while (current && count < position - 1) {
        console.log(`  Position ${count}: Value = ${current.val}`);
        current = current.next;
        count++;
    }
    
    // Check if position is valid
    if (current === null) {
        console.log(`❌ Position ${position} is out of bounds (list too short)`);
        console.log('Inserting at end instead\n');
        
        // Find actual last node
        current = head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
        return head;
    }
    
    console.log(`  Position ${count}: Value = ${current.val}`);
    console.log(`Inserting new node between ${current.val} and ${current.next ? current.next.val : 'null'}`);
    
    // Insert new node
    newNode.next = current.next;
    current.next = newNode;
    console.log(`New node inserted at position ${position}\n`);
    
    return head;
}

// ============================================
// APPROACH 4: INSERT BEFORE A VALUE
// ============================================
/**
 * Insert a new node before the first occurrence of a specific value
 * Time: O(n) - must search for value
 * Space: O(1)
 */
function insertBeforeValue(head, newValue, targetValue) {
    console.log(`Inserting ${newValue} BEFORE value ${targetValue}:`);
    
    // Create new node
    const newNode = new Node(newValue);
    console.log(`Created new node with value: ${newValue}`);
    
    // If list is empty
    if (head === null) {
        console.log('❌ Empty list - cannot insert\n');
        return null;
    }
    
    // If target is at head
    if (head.val === targetValue) {
        console.log(`Target ${targetValue} found at head`);
        newNode.next = head;
        console.log(`New head: ${newNode.val}\n`);
        return newNode;
    }
    
    // Search for target value
    let current = head;
    let count = 1;
    
    console.log('Searching for target value:');
    while (current.next) {
        console.log(`  Position ${count}: Value = ${current.val}`);
        
        if (current.next.val === targetValue) {
            console.log(`✅ Target ${targetValue} found at position ${count + 1}`);
            console.log(`Inserting ${newValue} between ${current.val} and ${current.next.val}`);
            
            newNode.next = current.next;
            current.next = newNode;
            console.log('Node inserted\n');
            return head;
        }
        
        current = current.next;
        count++;
    }
    
    console.log(`❌ Target value ${targetValue} not found in list\n`);
    return head;
}

// ============================================
// APPROACH 5: INSERT AFTER A VALUE
// ============================================
/**
 * Insert a new node after the first occurrence of a specific value
 * Time: O(n) - must search for value
 * Space: O(1)
 */
function insertAfterValue(head, newValue, targetValue) {
    console.log(`Inserting ${newValue} AFTER value ${targetValue}:`);
    
    // Create new node
    const newNode = new Node(newValue);
    console.log(`Created new node with value: ${newValue}`);
    
    // If list is empty
    if (head === null) {
        console.log('❌ Empty list - cannot insert\n');
        return null;
    }
    
    // Search for target value
    let current = head;
    let count = 1;
    
    console.log('Searching for target value:');
    while (current) {
        console.log(`  Position ${count}: Value = ${current.val}`);
        
        if (current.val === targetValue) {
            console.log(`✅ Target ${targetValue} found at position ${count}`);
            console.log(`Inserting ${newValue} after ${current.val}`);
            
            newNode.next = current.next;
            current.next = newNode;
            console.log('Node inserted\n');
            return head;
        }
        
        current = current.next;
        count++;
    }
    
    console.log(`❌ Target value ${targetValue} not found in list\n`);
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

console.log('=== LINKED LIST INSERTION OPERATIONS ===\n');

// Test Case 1: Insert at Beginning
console.log('TEST CASE 1: Insert at Beginning');
console.log('─'.repeat(50));
let head1 = createLinkedList([2, 3, 4, 5]);
displayLinkedList(head1, 'Original');
head1 = insertAtBeginning(head1, 1);
displayLinkedList(head1, 'After insertion');

// Test Case 2: Insert at Tail
console.log('\nTEST CASE 2: Insert at Tail');
console.log('─'.repeat(50));
let head2 = createLinkedList([1, 2, 3, 4]);
displayLinkedList(head2, 'Original');
head2 = insertAtTail(head2, 5);
displayLinkedList(head2, 'After insertion');

// Test Case 3: Insert at Specific Position (Middle)
console.log('\nTEST CASE 3: Insert at Specific Position (Middle - Position 3)');
console.log('─'.repeat(50));
let head3 = createLinkedList([10, 20, 40, 50]);
displayLinkedList(head3, 'Original');
head3 = insertAtPosition(head3, 30, 3);
displayLinkedList(head3, 'After insertion');

// Test Case 4: Insert at Position 1 (Beginning via position)
console.log('\nTEST CASE 4: Insert at Position 1 (Beginning via position)');
console.log('─'.repeat(50));
let head4 = createLinkedList([2, 3, 4]);
displayLinkedList(head4, 'Original');
head4 = insertAtPosition(head4, 1, 1);
displayLinkedList(head4, 'After insertion');

// Test Case 5: Insert Before a Value
console.log('\nTEST CASE 5: Insert Before a Value');
console.log('─'.repeat(50));
let head5 = createLinkedList(['A', 'B', 'D', 'E']);
displayLinkedList(head5, 'Original');
head5 = insertBeforeValue(head5, 'C', 'D');
displayLinkedList(head5, 'After insertion');

// Test Case 6: Insert After a Value
console.log('\nTEST CASE 6: Insert After a Value');
console.log('─'.repeat(50));
let head6 = createLinkedList([100, 200, 300]);
displayLinkedList(head6, 'Original');
head6 = insertAfterValue(head6, 250, 200);
displayLinkedList(head6, 'After insertion');

// Test Case 7: Insert in Empty List
console.log('\nTEST CASE 7: Insert in Empty List');
console.log('─'.repeat(50));
let head7 = null;
displayLinkedList(head7, 'Original');
head7 = insertAtBeginning(head7, 99);
displayLinkedList(head7, 'After insertion');

// Test Case 8: Insert Before Non-Existent Value
console.log('\nTEST CASE 8: Insert Before Non-Existent Value');
console.log('─'.repeat(50));
let head8 = createLinkedList([1, 2, 3]);
displayLinkedList(head8, 'Original');
head8 = insertBeforeValue(head8, 5, 10);
displayLinkedList(head8, 'After attempt');

// Test Case 9: Insert at Out-of-Bounds Position
console.log('\nTEST CASE 9: Insert at Out-of-Bounds Position');
console.log('─'.repeat(50));
let head9 = createLinkedList([5, 10, 15]);
displayLinkedList(head9, 'Original');
head9 = insertAtPosition(head9, 20, 10);
displayLinkedList(head9, 'After insertion (at end)');

// Test Case 10: Multiple Insertions in Sequence
console.log('\nTEST CASE 10: Multiple Insertions in Sequence');
console.log('─'.repeat(50));
let head10 = createLinkedList([2, 4]);
displayLinkedList(head10, 'Original');
console.log('--- Step 1: Insert 1 at beginning ---');
head10 = insertAtBeginning(head10, 1);
displayLinkedList(head10, 'After step 1');
console.log('--- Step 2: Insert 3 at position 3 ---');
head10 = insertAtPosition(head10, 3, 3);
displayLinkedList(head10, 'After step 2');
console.log('--- Step 3: Insert 5 at tail ---');
head10 = insertAtTail(head10, 5);
displayLinkedList(head10, 'After step 3');

/**
 * COMPLEXITY SUMMARY
 * 
 * Insert at Beginning:
 * - Time: O(1)
 * - Space: O(1)
 * - Fastest operation
 * - Good for stack-like operations
 * 
 * Insert at Tail:
 * - Time: O(n) - must traverse to end
 * - Space: O(1)
 * - Good for queue-like operations
 * - Can be O(1) with tail pointer
 * 
 * Insert at Position:
 * - Time: O(n) - worst case traverse whole list
 * - Space: O(1)
 * - Flexible but slower
 * - Position-indexed insertion
 * 
 * Insert Before Value:
 * - Time: O(n) - must search for value
 * - Space: O(1)
 * - User-friendly approach
 * - Fails gracefully if value not found
 * 
 * Insert After Value:
 * - Time: O(n) - must search for value
 * - Space: O(1)
 * - Similar to insertBefore but more intuitive
 * - Fails gracefully if value not found
 * 
 * KEY INSIGHTS:
 * 1. Always handle empty list case
 * 2. Create new node first
 * 3. Update head if inserting at beginning
 * 4. For position-based: validate bounds
 * 5. For value-based: search and validate existence
 * 6. Maintain proper linking order
 * 7. Return updated head pointer
 * 
 * WHEN TO USE WHICH:
 * - Insert at Beginning: Stack operations, fast insertion
 * - Insert at Tail: Queue operations, append
 * - Insert at Position: Index-based operations
 * - Insert Before/After: Value-based operations
 * 
 * OPTIMIZATION TIPS:
 * 1. Maintain tail pointer for O(1) tail insertion
 * 2. Maintain size counter for better position validation
 * 3. Use doubly-linked list if frequent insertions
 * 4. Cache frequently accessed positions
 * 
 * COMMON VARIATIONS:
 * 1. Insert multiple values at once
 * 2. Insert in sorted order
 * 3. Insert and return position
 * 4. Insert with validation/comparison
 * 5. Insert duplicates handling
 * 6. Insert with reordering
 */