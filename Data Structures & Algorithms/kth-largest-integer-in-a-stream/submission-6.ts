class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */

    public k: number
    public minHeap: any

    constructor(k: number, nums: number[]) {
        this.k = k
        this.minHeap = new MinPriorityQueue();
        for (let num of nums) {
            this.minHeap.enqueue(num);
        }

        while (this.minHeap.size() > k) {
            this.minHeap.dequeue();
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val: number): number {
        this.minHeap.enqueue(val);
        if (this.minHeap.size() > this.k) {
            this.minHeap.dequeue();
        }

        return this.minHeap.front();
    }
}