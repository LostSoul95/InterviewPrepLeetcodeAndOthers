// You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

// On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can sell and buy the stock multiple times on the same day, ensuring you never hold more than one share of the stock.

// Find and return the maximum profit you can achieve.


function maxProfit(prices) {

    var maxPro = 0;
    const len = prices.length;
    var startPrice =  prices[0];

    for(let i=0;i<len;i++){
        if(prices[i] > startPrice)
        {
            maxPro = maxPro + prices[i] - startPrice;
        }
        startPrice = prices[i];
    }
    return maxPro;
};

console.log("Test Case 1:");
let arr1 = [7,1,5,3,6,4];
console.log("Prices:", arr1);
console.log("Max profit:", maxProfit(arr1)); // Output: 7 (buy at 1, sell at 5, buy at 3, sell at 6)