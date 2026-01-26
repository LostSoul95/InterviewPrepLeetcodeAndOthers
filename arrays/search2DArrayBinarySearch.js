/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

var binarySearch = function (row, target) {
    // define high 
    let high = row.length - 1;

    //define low
    let low = 0;

    while (low <= high) {

        let mid = Math.floor((high + low) / 2);

        if (target == row[mid]) {
            return true;
        }

        else if (target > row[mid]) {
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }
    return false;
}


var searchMatrix = function (matrix, target) {
        // Get number of rows
        let n = matrix.length;

        // Get number of columns
        let m = matrix[0].length;

        // Traverse each row
        for (let i = 0; i < n; i++) {
            // Check if target can be in this row
            if (matrix[i][0] <= target && target <= matrix[i][m - 1]) {
                // Perform binary search on the current row
                return binarySearch(matrix[i], target);
            }
        }

        // Return false if not found
        return false;
    };
