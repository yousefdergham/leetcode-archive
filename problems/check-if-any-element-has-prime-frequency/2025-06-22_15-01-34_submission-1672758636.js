/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPrimeFrequency = function (nums) {

  let primeFreq = {}
  let isPrimeFreq = false
  for (const num of nums) {
    primeFreq[num] = (primeFreq[num] || 0) + 1
    console.log(primeFreq[num])
    if (isPrime(primeFreq[num])) {
      isPrimeFreq = true
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