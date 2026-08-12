class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {
        const n = nums.length
        if(n===0) return 0
        if(n===1) return nums[0]
        const dp = [nums[0], Math.max(nums[0], nums[1])]
        for(let i = 2; i < n; i++) {
            dp[i] = Math.max(dp[i-1], nums[i] + dp[i-2])
        }

        return dp[n-1]
    }
}
