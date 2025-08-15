/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  if (columnNumber <= 26) {
    return String.fromCharCode(64 + columnNumber)
  } else {
    let result = '';
    while (columnNumber > 0) {
      let remainder = columnNumber % 26 || 26;
      result = String.fromCharCode(64 + remainder) + result;
      columnNumber = Math.floor((columnNumber - remainder) / 26);
    }
    return result;
  }
};