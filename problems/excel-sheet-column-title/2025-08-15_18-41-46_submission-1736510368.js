/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  if (columnNumber <= 26) {
    return String.fromCharCode(96 + columnNumber).toUpperCase()
  } else {
    return String.fromCharCode(96 + 26).toUpperCase() + String.fromCharCode(96 + columnNumber % 26).toUpperCase()
  }
};