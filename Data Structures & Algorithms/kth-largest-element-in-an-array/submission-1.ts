class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums: number[], k: number): number {
        const heap = new MaxPriorityQueue()
        for(const num of nums) heap.enqueue(num)
        while(heap.size() > nums.length - k + 1) heap.dequeue()

        return heap.front()
    }
}
