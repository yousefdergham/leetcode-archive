/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function (nums) {
  const subsequences = nums.reduce(
    (subs, num) =>
      subs.concat(subs.map(seq => [...seq, num])),
    [[]]
  ).filter((x) => x.length !== 0);

  const uniqueInnerArrays = subsequences.map(innerArray => {
    const uniqueNumbersSet = new Set(innerArray);
    return [...uniqueNumbersSet];
  });

  let max = -101;
  for (let i = 0; i < uniqueInnerArrays.length; i++) {
    let tmp = uniqueInnerArrays[i];
    const sum = tmp.reduce((acc, x) => acc + x, 0);
    max = Math.max(sum, max);
  }
  return max;
};