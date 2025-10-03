/*
Trapping Rain Water II
Difficulty: Hard
Language: JavaScript
Runtime: 80 ms
Memory: 67.6 MB
Submitted: 2025-10-03T07:30:01.557Z
Link: https://leetcode.com/problems/trapping-rain-water-ii/submissions/1789932869/?envType=daily-question&envId=2025-10-03
*/

/**
 * @param {number[][]} heightMap
 * @return {number}
 */
var trapRainWater = function(heightMap) {
    const m = heightMap.length;
    const n = heightMap[0].length;
    if (m <= 2 || n <= 2) return 0;

    const visited = Array.from({ length: m }, () => Array(n).fill(false));
    const pq = new MinPriorityQueue({ compare: (a, b) => a.height - b.height });

    // we push all boundary cells into the priority queue
    for (let i = 0; i < m; i++) {
        pq.enqueue({ x: i, y: 0, height: heightMap[i][0] });
        pq.enqueue({ x: i, y: n - 1, height: heightMap[i][n - 1] });
        visited[i][0] = true;
        visited[i][n - 1] = true;
    }
    for (let j = 1; j < n - 1; j++) {
        pq.enqueue({ x: 0, y: j, height: heightMap[0][j] });
        pq.enqueue({ x: m - 1, y: j, height: heightMap[m - 1][j] });
        visited[0][j] = true;
        visited[m - 1][j] = true;
    }

    const dirs = [[0,1],[0,-1],[1,0],[-1,0]];
    let water = 0;

    while (!pq.isEmpty()) {
        const { x, y, height } = pq.dequeue();

        for (const [dx, dy] of dirs) {
            const nx = x + dx;
            const ny = y + dy;

            if (nx >= 0 && nx < m && ny >= 0 && ny < n && !visited[nx][ny]) {
                visited[nx][ny] = true;
                const nh = heightMap[nx][ny];
                water += Math.max(0, height - nh);
                pq.enqueue({ x: nx, y: ny, height: Math.max(height, nh) });
            }
        }
    }

    return water;
};
