class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones: number[]): number {
        let heap = new MaxPriorityQueue()
        for(const stone of stones) heap.enqueue(stone)

        while(heap.size() > 1) {
            const heaviest = heap.dequeue()
            const secondHeaviest = heap.dequeue()
            const smashed = heaviest === secondHeaviest ? 0 : heaviest - secondHeaviest
            heap.enqueue(smashed)
        }

        return heap.front()

    }
}
