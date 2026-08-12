class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points: number[][], k: number): number[][] {
        //create a queue
        const queue = new MinPriorityQueue(p => p[0])
        //set things in the queue
        for(const [x, y] of points) {
            const distance = x**2 + y**2
            queue.enqueue([distance, x, y])
        }

        let result: number[][] = []
        for(let i = 0; i < k; i++) {
            let [d, x, y] = queue.dequeue()
            result.push([x, y])
        }

        return result
    }
}
