/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = {};

  for (const s of strs) {
    const key = s
      .split("")
      .sort()
      .join("");
    if (!map[key]) {
      map[key] = [];
    }
    map[key].push(s);
  }
  let result = Object.values(map);
  result = result.map(group => group.sort());
  result.sort((a, b) => {
    if (a.length !== b.length) {
      return a.length - b.length;
    }
    return a[0].localeCompare(b[0]);
  });

  return result;

};