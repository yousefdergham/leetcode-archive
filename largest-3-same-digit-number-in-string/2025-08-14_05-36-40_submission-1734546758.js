/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    let lg = "";
    for (let i = 0; i + 2 < num.length; i++) {
        if (num[i] === num[i+1] && num[i] === num[i+2]) {
            let cur = num.substring(i, i+3);
            if (cur > lg) lg = cur;
        }
    }
    return lg;
};