class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    //Bottom Up
    climbStairs(n: number): number {
        if(n <= 2) return n
        let dp: number[] = [0, 1, 2]
        let i = 3
        while(i <= n) {
            dp.push(dp[i-1]+dp[i-2])
            i++
        }

        return dp[n]
    }
}
