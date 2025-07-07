/**
 * @param {number[][]} events
 * @return {number}
 */
function maxEvents(events) {
    events.sort((a, b) => a[0] - b[0]);
    let heap = [];
    let res = 0, i = 0, day = 0, n = events.length;

    function heapPush(val) {
        heap.push(val);
        let idx = heap.length - 1;
        while (idx > 0) {
            let p = Math.floor((idx - 1) / 2);
            if (heap[p] <= heap[idx]) break;
            [heap[p], heap[idx]] = [heap[idx], heap[p]];
            idx = p;
        }
    }

    function heapPop() {
        let top = heap[0];
        let last = heap.pop();
        if (heap.length === 0) return top;
        heap[0] = last;
        let i = 0;
        while (true) {
            let l = 2 * i + 1, r = 2 * i + 2, smallest = i;
            if (l < heap.length && heap[l] < heap[smallest]) smallest = l;
            if (r < heap.length && heap[r] < heap[smallest]) smallest = r;
            if (smallest === i) break;
            [heap[smallest], heap[i]] = [heap[i], heap[smallest]];
            i = smallest;
        }
        return top;
    }

    function heapTop() { return heap[0]; }
    function heapSize() { return heap.length; }

    while (heapSize() > 0 || i < n) {
        if (heapSize() === 0) day = events[i][0];
        while (i < n && events[i][0] <= day) {
            heapPush(events[i][1]);
            i++;
        }
        while (heapSize() > 0 && heapTop() < day) heapPop();
        if (heapSize() > 0) {
            heapPop();
            res++;
            day++;
        } else {
            day++;
        }
    }
    return res;
}