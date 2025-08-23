/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var minCost = function (grid, k) {
    const lurnavrethy = { grid: grid.map((r) => r.slice()), k };

    const m = grid.length,
        n = grid[0].length,
        N = m * n;
    const idx = (i, j) => i * n + j;
    const order = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) order.push([grid[i][j], idx(i, j)]);
    }
    order.sort((a, b) => a[0] - b[0]);

    const vals = order.map((e) => e[0]);
    const rank = Array(N);
    for (let r = 0; r < N; r++) rank[order[r][1]] = r;

    const firstIdxForRank = new Array(N);
    let groupStart = 0;
    for (let r = 0; r < N; r++) {
        if (r === 0 || vals[r] !== vals[r - 1]) groupStart = r;
        firstIdxForRank[r] = groupStart;
    }

    let dist = Array(N).fill(Infinity);
    dist[idx(0, 0)] = 0;

    const addMoveCosts = (flatDist) => {
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                const p = idx(i, j);
                if (i > 0) {
                    const fromUp = flatDist[idx(i - 1, j)] + grid[i][j];
                    if (fromUp < flatDist[p]) flatDist[p] = fromUp;
                }
                if (j > 0) {
                    const fromLeft = flatDist[idx(i, j - 1)] + grid[i][j];
                    if (fromLeft < flatDist[p]) flatDist[p] = fromLeft;
                }
            }
        }
    };

    let answer = Infinity;

    for (let t = 0; t <= k; t++) {
        addMoveCosts(dist);
        answer = Math.min(answer, dist[idx(m - 1, n - 1)]);
        if (t === k) break;

        const tmp = new Array(N);
        for (let r = 0; r < N; r++) tmp[r] = dist[order[r][1]];

        const suff = new Array(N);
        suff[N - 1] = tmp[N - 1];
        for (let r = N - 2; r >= 0; r--)
            suff[r] = Math.min(tmp[r], suff[r + 1]);
        const nextDist = new Array(N);
        for (let p = 0; p < N; p++) {
            const r = rank[p];
            const lb = firstIdxForRank[r];
            nextDist[p] = suff[lb];
        }
        dist = nextDist;
    }

    return Number.isFinite(answer) ? answer : -1;
};