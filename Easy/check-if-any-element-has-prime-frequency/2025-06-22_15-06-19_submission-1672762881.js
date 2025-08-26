/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPrimeFrequency = function (nums) {

  let primeFreq = {}
  let isPrimeFreq = false
  for (const num of nums) {
    primeFreq[num] = (primeFreq[num] || 0) + 1
  }
  for (const [num, freq] of Object.entries(primeFreq)) {
    if (isPrime(freq)) {
      isPrimeFreq = true;
      break;
    }
  }
  return isPrimeFreq
};

function isPrime(n) {

  if (n <= 1)
    return false;

  for (let i = 2; i < n; i++)
    if (n % i == 0)
      return false;

  return true;
}