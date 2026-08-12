class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    //Bottom Up
    climbStairs(n: number): number {
        if(n<=2) return n
        let dp = [0, 1, 2]
        let index = 3
        while(index <= n) {
            dp[index] = dp[index-1] + dp[index-2]
            index++
        }

        return dp[n]
    }
}
