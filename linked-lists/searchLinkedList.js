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
 * Search for an Element in Linked List
 * Problem: Find if a given element exists in the linked list
 * Time Complexity: O(n) where n is number of nodes
 * Space Complexity: O(1) for iterative, O(n) for recursive
 */

// Approach 1: Iterative Search
function searchIterative(head, target) {
    console.log(`Searching for ${target} using Iterative approach:`);
    let current = head;
    let position = 0;
    
    while (current) {
        console.log(`  Position ${position}: Checking value ${current.val}`);
        
        if (current.val === target) {
            console.log(`  ✅ Found! ${target} at position ${position}\n`);
            return {
                found: true,
                position: position,
                node: current
            };
        }
        
        current = current.next;
        position++;
    }
    
    console.log(`  ❌ Not found! ${target} is not in the list\n`);
    return {
        found: false,
        position: -1,
        node: null
    };
}

// Approach 2: Recursive Search
function searchRecursive(head, target, position = 0) {
    console.log(`Searching for ${target} using Recursive approach:`);
    
    function search(node, pos) {
        if (node === null) {
            console.log(`  ❌ Not found! ${target} is not in the list\n`);
            return {
                found: false,
                position: -1,
                node: null
            };
        }
        
        console.log(`  Position ${pos}: Checking value ${node.val}`);
        
        if (node.val === target) {
            console.log(`  ✅ Found! ${target} at position ${pos}\n`);
            return {
                found: true,
                position: pos,
                node: node
            };
        }
        
        return search(node.next, pos + 1);
    }
    
    return search(head, position);
}

// Approach 3: Search with Count (find nth occurrence)
function searchNthOccurrence(head, target, n = 1) {
    console.log(`Searching for ${n}th occurrence of ${target}:`);
    let current = head;
    let count = 0;
    let occurrence = 0;
    
    while (current) {
        if (current.val === target) {
            occurrence++;
            console.log(`  Found occurrence ${occurrence} at position ${count}`);
            
            if (occurrence === n) {
                console.log(`  ✅ ${n}th occurrence found at position ${count}\n`);
                return {
                    found: true,
                    occurrence: occurrence,
                    position: count,
                    node: current
                };
            }
        }
        
        current = current.next;
        count++;
    }
    
    console.log(`  ❌ ${n}th occurrence not found\n`);
    return {
        found: false,
        occurrence: 0,
        position: -1,
        node: null
    };
}

// Approach 4: Search All Occurrences
function searchAllOccurrences(head, target) {
    console.log(`Searching for ALL occurrences of ${target}:`);
    const positions = [];
    let current = head;
    let position = 0;
    
    while (current) {
        console.log(`  Position ${position}: Value = ${current.val}`);
        
        if (current.val === target) {
            positions.push(position);
            console.log(`    ✅ Match found!`);
        }
        
        current = current.next;
        position++;
    }
    
    if (positions.length > 0) {
        console.log(`  Found ${positions.length} occurrence(s) at positions: ${positions}\n`);
    } else {
        console.log(`  ❌ No occurrences found\n`);
    }
    
    return {
        found: positions.length > 0,
        count: positions.length,
        positions: positions
    };
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

// Helper function to display linked list
function displayLinkedList(head) {
    let current = head;
    let display = '';
    
    while (current) {
        display += current.val + ' -> ';
        current = current.next;
    }
    display += 'null';
    
    console.log('LinkedList: ' + display + '\n');
}

// Test cases
console.log('=== SEARCHING IN LINKED LIST ===\n');

const arr = [1, 2, 3, 4, 5, 3, 6];
const head = createLinkedList(arr);
displayLinkedList(head);

console.log('--- TEST 1: Iterative Search (Element exists) ---');
searchIterative(head, 4);

console.log('--- TEST 2: Iterative Search (Element not exists) ---');
searchIterative(head, 10);

console.log('--- TEST 3: Recursive Search (Element exists) ---');
searchRecursive(head, 5);

console.log('--- TEST 4: Recursive Search (Element not exists) ---');
searchRecursive(head, 99);

console.log('--- TEST 5: Search First Occurrence ---');
searchNthOccurrence(head, 3, 1);

console.log('--- TEST 6: Search Second Occurrence ---');
searchNthOccurrence(head, 3, 2);

console.log('--- TEST 7: Search Third Occurrence (doesn\'t exist) ---');
searchNthOccurrence(head, 3, 3);

console.log('--- TEST 8: Find All Occurrences ---');
searchAllOccurrences(head, 3);

console.log('--- TEST 9: Find All Occurrences (none exist) ---');
searchAllOccurrences(head, 99);

/**
 * Search Complexity Analysis:
 * 
 * Iterative Search:
 * - Time: O(n) - worst case visit all nodes
 * - Space: O(1) - constant space
 * 
 * Recursive Search:
 * - Time: O(n) - worst case visit all nodes
 * - Space: O(n) - call stack depth
 * 
 * Search All Occurrences:
 * - Time: O(n) - must visit all nodes
 * - Space: O(k) - where k is number of occurrences
 * 
 * Key Points:
 * - Always check for null before accessing properties
 * - Iterative is preferred for single search (better space)
 * - Recursive is elegant but uses more memory
 * - For multiple searches, consider creating a hash for O(1) lookup
 */