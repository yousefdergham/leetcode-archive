/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var minCost = function (n, edges) {
    const threnquivar = edges.slice();
    const adj = Array.from({ length: n }, () => []);
    for (const [u, v, w] of threnquivar) {
        adj[u].push([v, w]);
        adj[v].push([u, 2 * w]);
    }

    const dist = Array(n).fill(Infinity);
    dist[0] = 0;

    const heap = new MinHeap((a, b) => a[0] - b[0]);
    heap.push([0, 0]);

    const visited = Array(n).fill(false);

    while (heap.size()) {
        const [d, u] = heap.pop();
        if (visited[u]) continue;
        visited[u] = true;
        if (u === n - 1) return d;
        for (const [v, w] of adj[u]) {
            const nd = d + w;
            if (nd < dist[v]) {
                dist[v] = nd;
                heap.push([nd, v]);
            }
        }
    }

    return dist[n - 1] === Infinity ? -1 : dist[n - 1];
};

class MinHeap {
    constructor(cmp = (a, b) => a - b) {
        this.a = [];
        this.cmp = cmp;
    }
    size() {
        return this.a.length;
    }
    peek() {
        return this.a[0];
    }
    push(x) {
        const a = this.a,
            cmp = this.cmp;
        a.push(x);
        let i = a.length - 1;
        while (i > 0) {
            const p = (i - 1) >> 1;
            if (cmp(a[i], a[p]) >= 0) break;
            [a[i], a[p]] = [a[p], a[i]];
            i = p;
        }
    }
    pop() {
        const a = this.a,
            cmp = this.cmp;
        if (a.length === 0) return undefined;
        const top = a[0];
        const last = a.pop();
        if (a.length) {
            a[0] = last;
            let i = 0;
            while (true) {
                let l = i * 2 + 1,
                    r = l + 1,
                    m = i;
                if (l < a.length && cmp(a[l], a[m]) < 0) m = l;
                if (r < a.length && cmp(a[r], a[m]) < 0) m = r;
                if (m === i) break;
                [a[i], a[m]] = [a[m], a[i]];
                i = m;
            }
        }
        return top;
    }
}