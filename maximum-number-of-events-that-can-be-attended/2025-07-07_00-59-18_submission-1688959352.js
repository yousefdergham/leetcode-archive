/**
 * @param {number[][]} events
 * @return {number}
 */
var maxEvents = function (events) {
  let sortedArr = events.sort((a, b) => a[1] - b[1]);
  let maxDay = sortedArr[sortedArr.length - 1][1];
  let dp = new Array(maxDay + 2).fill(0);

  for (let event of sortedArr) {
    let start = event[0];
    let end = event[1];
    let added = false;
    for (let day = start; day <= end && !added; day++) {
      if (dp[day] === 0) {
        dp[day] = 1;
        added = true;
      }
    }
  }
  let count = 0;
  for (let i = 0; i <= maxDay; i++) {
    count += dp[i];
  }
  return count;
};