/**
 * @param {number} eventTime
 * @param {number} k
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @return {number}
 */
function maxFreeTime(eventTime, k, startTime, endTime) {
  let count = startTime.length;
  let prefixSum = Array(count + 1).fill(0);
  let maxFree = 0;

  for (let i = 0; i < count; i++) {
    prefixSum[i + 1] = prefixSum[i] + endTime[i] - startTime[i];
  }

  for (let i = k - 1; i < count; i++) {
    let occupied = prefixSum[i + 1] - prefixSum[i - k + 1];
    let windowEnd = (i === count - 1) ? eventTime : startTime[i + 1];
    let windowStart = (i === k - 1) ? 0 : endTime[i - k];
    let freeTime = windowEnd - windowStart - occupied;
    maxFree = Math.max(maxFree, freeTime);
  }

  return maxFree;
}