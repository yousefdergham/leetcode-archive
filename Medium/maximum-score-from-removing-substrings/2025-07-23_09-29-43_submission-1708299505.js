/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var maximumGain = function (s, x, y) {
  let removedPairs = [];
  let g = y > x ? ["b", "a"] : ["a", "b"], sm = y > x ? ["a", "b"] : ["b", "a"]
  while (true) {
    let found = false;
    for (let i = 0; i < s.length - 1; i++) {
      if (s[i] === g[0] && s[i + 1] === g[1]) {
        removedPairs.push(g[0] + g[1]);
        s = s.slice(0, i) + s.slice(i + 2);
        found = true;
        break;
      }
    }

    if (!found) {
      for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === sm[0] && s[i + 1] === sm[1]) {
          removedPairs.push(sm[0] + sm[1]);
          s = s.slice(0, i) + s.slice(i + 2);
          found = true;
          break;
        }
      }
    }

    if (!found) break;
  }
  let result = removedPairs.reduce((acc, pair) => {
    return pair === "ab" ? acc + x : acc + y;
  }, 0);

  return result

}