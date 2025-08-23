/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let smallIndex = 0
    let biggestIndex = 0
    for (let i = 0; i < prices.length; i++) {
        if (prices[smallIndex] > prices[i]) {
            smallIndex = i
        }
        if (prices[biggestIndex] < prices[i]) {
            biggestIndex = i
        }
    }
    if (smallIndex > biggestIndex) {
        return 0
    } else {
        return prices[biggestIndex]-prices[smallIndex]
    }
};