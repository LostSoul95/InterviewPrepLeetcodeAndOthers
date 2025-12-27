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
 * Traversing a Linked List
 * Problem: Visit all nodes in a linked list and print their values
 * Time Complexity: O(n)
 * Space Complexity: O(1) for iterative, O(n) for recursive (call stack)
 */

// Approach 1: Iterative Traversal
function traverseIterative(head) {
    console.log('=== ITERATIVE TRAVERSAL ===');
    const result = [];
    let current = head;
    let count = 0;
    
    while (current) {
        console.log(`Node ${count + 1}: Value = ${current.val}`);
        result.push(current.val);
        current = current.next;
        count++;
    }
    
    console.log(`Total nodes traversed: ${count}\n`);
    return result;
}

// Approach 2: Recursive Traversal
function traverseRecursive(head, count = 1) {
    console.log('=== RECURSIVE TRAVERSAL ===');
    
    if (head === null) {
        console.log('Reached end of list\n');
        return [];
    }
    
    console.log(`Node ${count}: Value = ${head.val}`);
    const result = [head.val];
    const restResult = traverseRecursive(head.next, count + 1);
    
    return result.concat(restResult);
}

// Approach 3: Traversal with Index
function traverseWithIndex(head) {
    console.log('=== TRAVERSAL WITH INDEX ===');
    const result = [];
    let current = head;
    let index = 0;
    
    while (current) {
        console.log(`Index ${index}: Value = ${current.val}`);
        result.push({ index, value: current.val });
        current = current.next;
        index++;
    }
    
    console.log(`Total nodes: ${index}\n`);
    return result;
}

// Approach 4: Traversal with Display
function displayLinkedList(head) {
    let current = head;
    let display = '';
    
    while (current) {
        display += current.val + ' -> ';
        current = current.next;
    }
    display += 'null';
    
    console.log('LinkedList: ' + display);
}

// Helper function to create linked list from array
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

// Test cases
console.log('Creating LinkedList from array [1, 2, 3, 4, 5]\n');
const head = createLinkedList([1, 2, 3, 4, 5]);

console.log('--- METHOD 1: Iterative Traversal ---');
const iterativeResult = traverseIterative(head);
console.log('Result array:', iterativeResult);

console.log('\n--- METHOD 2: Recursive Traversal ---');
const recursiveResult = traverseRecursive(head);
console.log('Result array:', recursiveResult);

console.log('\n--- METHOD 3: Traversal with Index ---');
const indexedResult = traverseWithIndex(head);
console.log('Result with indices:', indexedResult);

console.log('\n--- METHOD 4: Display LinkedList ---');
displayLinkedList(head);

// Additional test with single node
console.log('\n\nTest with single node [42]:');
const singleHead = createLinkedList([42]);
console.log('Iterative traversal:');
traverseIterative(singleHead);

// Test with empty list
console.log('\nTest with empty list:');
console.log('Iterative traversal:');
traverseIterative(null);

/**
 * Traversal Patterns:
 * 1. Iterative: Use while loop with current pointer
 * 2. Recursive: Use recursion, reach base case when current is null
 * 3. Index-based: Track position while traversing
 * 4. Display: Build string representation while traversing
 * 
 * Key Points:
 * - Always check for null before accessing next
 * - Update current pointer to move forward
 * - Can collect values in array or other data structures
 */