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
 * Array to LinkedList Conversion
 * Problem: Convert an array into a linked list
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

function arrayToLinkedList(arr) {
    if (arr.length === 0) return null;
    
    // Create head node
    const head = new Node(arr[0]);
    let current = head;
    
    console.log(`Converting array [${arr}] to LinkedList:`);
    console.log(`Step 1: Created head node with value ${arr[0]}`);
    
    // Create remaining nodes
    for (let i = 1; i < arr.length; i++) {
        const newNode = new Node(arr[i]);
        current.next = newNode;
        console.log(`Step ${i + 1}: Created node with value ${arr[i]} and linked it`);
        current = newNode;
    }
    
    console.log('LinkedList creation complete!\n');
    return head;
}

/**
 * Display LinkedList
 */
function displayLinkedList(head) {
    let current = head;
    let result = '';
    
    while (current) {
        result += current.val + ' -> ';
        current = current.next;
    }
    result += 'null';
    console.log('LinkedList: ' + result);
}

/**
 * Convert LinkedList to Array (for easy visualization)
 */
function linkedListToArray(head) {
    const arr = [];
    let current = head;
    
    while (current) {
        arr.push(current.val);
        current = current.next;
    }
    
    return arr;
}

// Test cases
console.log('=== ARRAY TO LINKEDLIST CONVERSION ===\n');

const arr1 = [1, 2, 3, 4, 5];
const head1 = arrayToLinkedList(arr1);
displayLinkedList(head1);

console.log('\n');

const arr2 = [10, 20, 30];
const head2 = arrayToLinkedList(arr2);
displayLinkedList(head2);

console.log('\n');

const arr3 = [100];
const head3 = arrayToLinkedList(arr3);
displayLinkedList(head3);

console.log('\n');

const arr4 = [];
const head4 = arrayToLinkedList(arr4);
console.log('Empty array result: ' + (head4 === null ? 'null' : 'LinkedList'));