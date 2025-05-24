/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let minPrice;
    let maxProfit = 0;
    for (price in prices) {
        if (minPrice > prices[price]) {
            minPrice = prices[price]
        }
        if (prices[price] - minPrice >= maxProfit && prices.indexOf(prices[price]) > prices.indexOf(minPrice)) {
            maxProfit = prices[price] - minPrice
        }
    }
    return maxProfit
};