/**
 * @param {number} num
 * @return {number}
 */
var maxDiff = function (num) {
 const numStr = num.toString();
    const uniqueDigits = new Set(numStr.split(''));
    let maxVal = num;
    let minVal = num;

    for (const digit of uniqueDigits) {
      for (let newDigit = 0; newDigit <= 9; newDigit++) {
        if (digit === numStr[0] && newDigit === 0) continue;
        const newNumStr = numStr.split(digit).join(newDigit.toString());
        const newNum = parseInt(newNumStr, 10);
        maxVal = Math.max(maxVal, newNum);
        minVal = Math.min(minVal, newNum);
      }
    }

    return maxVal - minVal;

};