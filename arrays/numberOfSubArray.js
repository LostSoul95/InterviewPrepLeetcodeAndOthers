//Prints all subarrays in arr[0..n-1]
function subArray(arr) {
    const n = arr.length;
    var sumArray = [];

    // Pick starting point
    for (let i = 0; i < n; i++) {
    
        // Pick ending point
        for (let j = i; j < n; j++) {
        
            // Print subarray between current starting and ending points
            let subarr = [];
            for (let k = i; k <= j; k++) {
                subarr.push(arr[k]);
            }
            console.log(subarr.join(" "));
        }
    }
    console.log(sumArray);
}

const arr = [1, 2, 3, 4];
console.log("All Non-empty Subarrays:");
subArray(arr);