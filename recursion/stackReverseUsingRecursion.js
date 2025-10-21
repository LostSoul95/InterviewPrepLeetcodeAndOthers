// Function to insert element at the bottom of the stack
function insertAtBottom(stack, val) {
    // If stack is empty, push the value
    if (stack.length === 0) {
        stack.push(val);
        return;
    }

    // Pop the top element
    let topVal = stack.pop();
    console.log("Popped in insertAtBottom:", topVal);
    console.log("Stack in insertAtBottom before recursion:", stack);

    // Recurse for the rest of the stack
    insertAtBottom(stack, val);
    console.log("Stack in insertAtBottom after recursion:", stack);

    // Push the popped element back
    stack.push(topVal);
    console.log("Pushed back in insertAtBottom:", topVal);
    console.log("Stack in insertAtBottom after pushing back:", stack);
}

// Function to reverse the stack
function reverseStack(stack) {
    // Base case: If stack is empty, return
    if (stack.length === 0) return;

    // Pop the top element
    let topVal = stack.pop();

    console.log("Popped:", topVal);

    // Recursively reverse the remaining stack
    reverseStack(stack);
    console.log("Stack after popping:", stack);

    // Insert the popped element at the bottom
    insertAtBottom(stack, topVal);
    console.log("Stack after inserting at bottom:", stack);
}

function main() {
    // Create a sample stack
    let stack = [1,2,3,4];

    // Reverse the stack
    reverseStack(stack);

    // Print the reversed stack
    console.log("Reversed Stack:", stack);
}

main();