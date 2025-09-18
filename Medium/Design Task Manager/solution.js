/*
Design Task Manager
Difficulty: Medium
Language: JavaScript
Runtime: N/A
Memory: N/A
Submitted: 2025-09-18T15:27:15.517Z
Link: https://leetcode.com/problems/design-task-manager/submissions/1775119803/?envType=daily-question&envId=2025-09-18
*/

class Manager {
    constructor(userId, taskId, priority) {
        this.userId = userId;
        this.taskId = taskId;
        this.priority = priority;
    }
}

class TaskManager {
    constructor(tasks) {
        this.record = new Map();
        this.pq = [];

        for (let t of tasks) {
            let m = new Manager(t[0], t[1], t[2]);
            this.pq.push(m);
            this.record.set(m.taskId, m);
        }
        this._heapify();
    }

    _heapify() {
        this.pq.sort((a, b) => {
            if (a.priority === b.priority) return b.taskId - a.taskId;
            return b.priority - a.priority;
        });
    }

    add(userId, taskId, priority) {
        let m = new Manager(userId, taskId, priority);
        this.pq.push(m);
        this.record.set(taskId, m);
        this._heapify();
    }

    edit(taskId, newPriority) {
        let old = this.record.get(taskId);
        let updated = new Manager(old.userId, taskId, newPriority);
        this.pq.push(updated);
        this.record.set(taskId, updated);
        this._heapify();
    }

    rmv(taskId) {
        this.record.delete(taskId);
    }

    execTop() {
        while (this.pq.length > 0) {
            this._heapify();
            let top = this.pq.shift();
            let latest = this.record.get(top.taskId);
            if (!latest) continue;
            if (latest.priority !== top.priority) continue;
            this.record.delete(top.taskId);
            return top.userId;
        }
        return -1;
    }
}