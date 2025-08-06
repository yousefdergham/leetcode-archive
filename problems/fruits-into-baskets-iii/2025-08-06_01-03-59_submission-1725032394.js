/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
var numOfUnplacedFruits = function (fruits, baskets) {
  const n = fruits.length;
  const NINF = -1e9;
  const tree = new Int32Array(4 * n);
  const build = (node, l, r) => {
    if (l === r) { tree[node] = baskets[l]; return; }
    const m = (l + r) >> 1;
    build(node << 1, l, m);
    build(node << 1 | 1, m + 1, r);
    tree[node] = Math.max(tree[node << 1], tree[node << 1 | 1]);
  };

  const firstFit = (node, l, r, need) => {
    if (tree[node] < need) return -1;      
    if (l === r) return l;
    const m = (l + r) >> 1;
    const left = firstFit(node << 1, l, m, need);
    return left !== -1 ? left
      : firstFit(node << 1 | 1, m + 1, r, need);
  };

  const burn = (node, l, r, idx) => {
    if (l === r) { tree[node] = NINF; return; }
    const m = (l + r) >> 1;
    idx <= m ? burn(node << 1, l, m, idx)
      : burn(node << 1 | 1, m + 1, r, idx);
    tree[node] = Math.max(tree[node << 1], tree[node << 1 | 1]);
  };

  build(1, 0, n - 1);

  let unplaced = 0;
  for (const f of fruits) {
    const idx = firstFit(1, 0, n - 1, f);   
    if (idx === -1) ++unplaced;
    else burn(1, 0, n - 1, idx);
  }
  return unplaced;
};