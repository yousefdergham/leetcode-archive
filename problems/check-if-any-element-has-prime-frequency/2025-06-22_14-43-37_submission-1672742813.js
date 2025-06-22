/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPrimeFrequency = function (nums) {
  let isPrime = false
  for (const num in nums) {
    if (num % 2 == 1) {
      return true
    } else {
      isPrime = false
    }
  }
  return isPrime
}