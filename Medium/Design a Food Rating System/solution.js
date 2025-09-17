/*
Design a Food Rating System
Difficulty: Medium
Language: JavaScript
Runtime: 124 ms
Memory: 98.1 MB
Submitted: 2025-09-17T18:45:51.463Z
Link: https://leetcode.com/problems/design-a-food-rating-system/submissions/1774247455/?envType=daily-question&envId=2025-09-17
*/

class FoodRatings {
    constructor(foods, cuisines, ratings) {
        this.foodToCuisine = new Map();
        this.foodToRating = new Map();
        this.cuisineHeaps = new Map();
        
        for (let i = 0; i < foods.length; i++) {
            this.foodToCuisine.set(foods[i], cuisines[i]);
            this.foodToRating.set(foods[i], ratings[i]);
            
            if (!this.cuisineHeaps.has(cuisines[i])) {
                this.cuisineHeaps.set(cuisines[i], new MaxHeapClass());
            }
            this.cuisineHeaps.get(cuisines[i]).push([ratings[i], foods[i]]);
        }
    }
    
    changeRating(food, newRating) {
        const cuisine = this.foodToCuisine.get(food);
        this.foodToRating.set(food, newRating);
        this.cuisineHeaps.get(cuisine).push([newRating, food]);
    }
    
    highestRated(cuisine) {
        const heap = this.cuisineHeaps.get(cuisine);
        
        while (!heap.isEmpty()) {
            const [rating, food] = heap.peek();
            if (this.foodToRating.get(food) === rating) {
                return food;
            }
            heap.pop(); // Remove outdated entry
        }
        return "";
    }
}

class MaxHeapClass {
    constructor() {
        this.heap = [];
    }
    
    push(item) {
        this.heap.push(item);
        this.heapifyUp(this.heap.length - 1);
    }
    
    pop() {
        if (this.heap.length <= 1) return this.heap.pop();
        
        const result = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return result;
    }
    
    peek() {
        return this.heap[0];
    }
    
    isEmpty() {
        return this.heap.length === 0;
    }
    
    heapifyUp(index) {
        const parent = Math.floor((index - 1) / 2);
        if (parent >= 0 && this.compare(this.heap[index], this.heap[parent]) > 0) {
            [this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]];
            this.heapifyUp(parent);
        }
    }
    
    heapifyDown(index) {
        const left = 2 * index + 1;
        const right = 2 * index + 2;
        let largest = index;
        
        if (left < this.heap.length && this.compare(this.heap[left], this.heap[largest]) > 0) {
            largest = left;
        }
        if (right < this.heap.length && this.compare(this.heap[right], this.heap[largest]) > 0) {
            largest = right;
        }
        
        if (largest !== index) {
            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
            this.heapifyDown(largest);
        }
    }
    
    compare([ratingA, foodA], [ratingB, foodB]) {
        if (ratingA !== ratingB) return ratingA - ratingB;
        return foodB.localeCompare(foodA); // Lexicographically smaller food name wins
    }
}