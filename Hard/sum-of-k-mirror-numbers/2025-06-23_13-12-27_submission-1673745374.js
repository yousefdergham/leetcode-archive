/**
 * @param {number} k
 * @param {number} n
 * @return {number}
 */
var kMirror = function (k, n) {
  let result = [];
  let sum = 0;
  let i = 1;

  const isPalindrome = (num) => {
    const str = num.toString();
    let left = 0, right = str.length - 1;
    while (left < right) {
      if (str[left] !== str[right]) return false;
      left++;
      right--;
    }
    return true;
  }

  while (result.length < n) {
    if (isPalindrome(i)) {
      const baseK = i.toString(k);
      if (isPalindrome(baseK)) {
        result.push(i);
        sum += i;
      }
    }
    i++;
  }
  return sum;
};