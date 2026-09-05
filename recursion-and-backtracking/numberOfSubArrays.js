function printSubArrays(arr, start, end) {   
    if (end == arr.length) 
        return;
      
    // Increment the end point and start
    // from 0 
    else if (start > end) 
        printSubArrays(arr, 0, end + 1);
          
    // Print the subarray and increment 
    // the starting point 
    else {
        let subArray = "[";
        for (var i = start; i < end; i++) {
            subArray += arr[i] + ", ";
        }
        subArray += arr[end] + "]";
        console.log(subArray);
        printSubArrays(arr, start + 1, end);
    }
    return;
}

var arr = [1, 2, 3];
printSubArrays(arr, 0, 0);