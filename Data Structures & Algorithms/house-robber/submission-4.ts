class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {
        const n = nums.length
        let rob1 = 0
        let rob2 = 0
        for(let i=0; i < n; i++) {
            const temp = Math.max(rob1 + nums[i], rob2)
            rob1 = rob2
            rob2 = temp
        }

        return rob2
    }
}
