/**
 * @param {number[][]} tiles
 * @param {number} carpetLen
 * @return {number}
 */
var maximumWhiteTiles = function(tiles, carpetLen) {
  tiles.sort((a, b) => a[0] - b[0]);
  let s = 0, j = 0, max = 0;
  
  for (let i = 0; i < tiles.length; i++) {
    const end = tiles[i][0] + carpetLen - 1;
    while (j < tiles.length && tiles[j][1] <= end)
      s += tiles[j][1] - tiles[j][0] + 1, j++;
    
    max = Math.max(
      max,
      s + (j < tiles.length ? end - tiles[j][0] + 1 : 0)
    );
    
    s -= tiles[i][1] - tiles[i][0] + 1;
  }
  
  return max;
};