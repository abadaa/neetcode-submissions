class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {
        const n = nums.length
        let prev = 0
        let curr = 0
        for(let i = 0; i < n; i++) {
            const temp = Math.max(nums[i] + prev, curr)
            prev = curr
            curr = temp
        }

        return curr
    }
}
