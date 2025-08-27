/*
Length of Longest V-Shaped Diagonal Segment
Difficulty: Hard
Language: JavaScript
Runtime: 566 ms
Memory: 99.3 MB
Submitted: 2025-08-27T00:51:00.486Z
Link: https://leetcode.com/problems/length-of-longest-v-shaped-diagonal-segment/submissions/1749626994/?envType=daily-question&envId=2025-08-27
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var lenOfVDiagonal = function (grid) {
    const n = grid.length, m = grid[0].length, NM = n * m;


    const id = (i, j) => i * m + j;
    const dr = [-1, +1, +1, -1];
    const dc = [+1, +1, -1, -1];
    const cw = [1, 2, 3, 0];

    const alt2 = Array.from({ length: 4 }, () => new Uint16Array(NM));
    const alt0 = Array.from({ length: 4 }, () => new Uint16Array(NM));

    const U = Array.from({ length: 4 }, () => new Int32Array(NM));
    const V = Array.from({ length: 4 }, () => new Int32Array(NM));


    function forEachDiag(dir, fn) {
        const r = dr[dir], c = dc[dir];
        const useSum = (dir === 0 || dir === 2);
        const asc = (r === -1);

        if (useSum) {
            for (let s = 0; s <= (n - 1) + (m - 1); s++) {
                let i0 = Math.max(0, s - (m - 1));
                let i1 = Math.min(n - 1, s);
                if (asc) {
                    for (let i = i0; i <= i1; i++) {
                        const j = s - i;
                        fn(i, j);
                    }
                } else {
                    for (let i = i1; i >= i0; i--) {
                        const j = s - i;
                        fn(i, j);
                    }
                }
            }
        } else {
            const dmin = -(m - 1), dmax = (n - 1);
            for (let d = dmin; d <= dmax; d++) {
                let i0 = Math.max(0, d);
                let i1 = Math.min(n - 1, d + (m - 1));
                if (asc) {
                    for (let i = i0; i <= i1; i++) {
                        const j = i - d;
                        fn(i, j);
                    }
                } else {
                    for (let i = i1; i >= i0; i--) {
                        const j = i - d;
                        fn(i, j);
                    }
                }
            }
        }
    }

    for (let dir = 0; dir < 4; dir++) {
        const r = dr[dir], c = dc[dir];
        forEachDiag(dir, (i, j) => {
            const p = id(i, j);
            const ni = i + r, nj = j + c;
            const hasNext = (0 <= ni && ni < n && 0 <= nj && nj < m);
            const nextId = hasNext ? id(ni, nj) : -1;


            if (grid[i][j] === 2) {
                alt2[dir][p] = 1 + (hasNext ? alt0[dir][nextId] : 0);
            } else {
                alt2[dir][p] = 0;
            }

            if (grid[i][j] === 0) {
                alt0[dir][p] = 1 + (hasNext ? alt2[dir][nextId] : 0);
            } else {
                alt0[dir][p] = 0;
            }
        });
    }


    const NEG = -1e9 | 0;
    for (let dir = 0; dir < 4; dir++) {
        const r = dr[dir], c = dc[dir];
        const dirCW = cw[dir];
        const rCW = dr[dirCW], cCW = dc[dirCW];

        forEachDiag(dir, (i, j) => {
            const p = id(i, j);


            const i1 = i + r, j1 = j + c;
            const has1 = (0 <= i1 && i1 < n && 0 <= j1 && j1 < m);
            const p1 = has1 ? id(i1, j1) : -1;
            const L1 = has1 ? alt2[dir][p1] : 0;


            const it0 = i + rCW, jt0 = j + cCW;
            const hasTurn0 = (0 <= it0 && it0 < n && 0 <= jt0 && jt0 < m);
            const pt0 = hasTurn0 ? id(it0, jt0) : -1;


            let u = hasTurn0 ? alt2[dirCW][pt0] : 0;
            if (L1 >= 2) {
                const i2 = i + 2 * r, j2 = j + 2 * c;
                const p2 = id(i2, j2);
                u = Math.max(u, 2 + U[dir][p2]);
            }
            U[dir][p] = u;


            let v = NEG;
            if (L1 >= 1) {
                const it1 = i1 + rCW, jt1 = j1 + cCW;
                const hasTurn1 = (0 <= it1 && it1 < n && 0 <= jt1 && jt1 < m);
                const pt1 = hasTurn1 ? id(it1, jt1) : -1;
                v = 1 + (hasTurn1 ? alt0[dirCW][pt1] : 0);
                if (L1 >= 3) {
                    const i2 = i + 2 * r, j2 = j + 2 * c;
                    const p2 = id(i2, j2);
                    v = Math.max(v, 2 + V[dir][p2]);
                }
            }
            V[dir][p] = v;
        });
    }

    // 3) Aggregate answer over all starting '1' cells and 4 starting directions
    let ans = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] !== 1) continue;
            const p = id(i, j);
            for (let dir = 0; dir < 4; dir++) {
                const r = dr[dir], c = dc[dir];
                const i1 = i + r, j1 = j + c;
                const straight = (0 <= i1 && i1 < n && 0 <= j1 && j1 < m) ? alt2[dir][id(i1, j1)] : 0;
                const bestLegs = Math.max(straight, U[dir][p], V[dir][p]);
                ans = Math.max(ans, 1 + bestLegs);
            }
        }
    }

    return ans;
};
