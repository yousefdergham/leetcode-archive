/**
 * @param {string} s
 * @return {number}
 */
var maxDifference = function(s) {
  // 1) build freq map
  const freq = {};
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    freq[c] = (freq[c] || 0) + 1;
  }

  // 2) track min‐even and min‐odd counts
  let minEven = Infinity;
  let minOdd  = Infinity;
  for (const count of Object.values(freq)) {
    if (count % 2 === 0) {
      if (count < minEven) minEven = count;
    } else {
      if (count < minOdd)  minOdd  = count;
    }
  }

  // 3) if one bucket is empty, you can decide what makes sense—here we return -1
  if (minEven === Infinity || minOdd === Infinity) {
    return -1;
  }

  // 4) exactly your odd[0] - even[0] logic
  return minOdd - minEven;
};