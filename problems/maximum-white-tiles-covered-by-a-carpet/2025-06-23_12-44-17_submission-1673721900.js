/**
 * @param {number[][]} tiles
 * @param {number} carpetLen
 * @return {number}
 */
var maximumWhiteTiles = function(tiles, carpetLen) {
  tiles.sort((a,b)=>a[0]-b[0]);
  const n = tiles.length;
  const prefix = Array(n+1).fill(0);
  const ends   = tiles.map(t=>t[1]);
  for (let i=0; i<n; i++) {
    prefix[i+1] = prefix[i] + (tiles[i][1] - tiles[i][0] + 1);
  }
  let res = 0;
  for (let i=0; i<n; i++) {
    const endPos = tiles[i][0] + carpetLen - 1;
    let lo = 0, hi = n;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (ends[mid] <= endPos) lo = mid + 1;
      else hi = mid;
    }
    const full = prefix[lo] - prefix[i];
    const extra = lo < n && tiles[lo][0] <= endPos
                ? endPos - tiles[lo][0] + 1
                : 0;
    res = res > full+extra ? res : full+extra;
  }
  return res;
};