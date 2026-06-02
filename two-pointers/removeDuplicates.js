// Remove Duplicates from Sorted Array (both pointers move same direction)
// Problem: Remove duplicates in-place, return new length
// Time: O(n), Space: O(1)

function removeDuplicates(arr) {
    if (arr.length === 0) return 0;

    let i = 0; // pointer for unique elements position
    let j = 1; // pointer for scanning

    // Both pointers move in the same direction (left to right)
    while (j < arr.length) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
        j++;
    }

    return i + 1; // length of array with duplicates removed
}

// Test cases
let arr1 = [1, 1, 2, 2, 3, 4, 4];
console.log(removeDuplicates(arr1)); // Output: 4
console.log(arr1.slice(0, 4)); // [1, 2, 3, 4]

let arr2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(arr2)); // Output: 5
console.log(arr2.slice(0, 5)); // [0, 1, 2, 3, 4]


// Another example: Move zeros to end (both pointers same direction)
function moveZeroes(arr) {
    let nonZero = 0; // pointer for non-zero elements

    // First pass: move all non-zero elements to front
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[nonZero] = arr[i];
            nonZero++;
        }
    }

    // Fill remaining with zeros
    while (nonZero < arr.length) {
        arr[nonZero] = 0;
        nonZero++;
    }

    return arr;
}

// Test
let arr3 = [0, 1, 0, 3, 12];
console.log(moveZeroes(arr3)); // Output: [1, 3, 12, 0, 0]
