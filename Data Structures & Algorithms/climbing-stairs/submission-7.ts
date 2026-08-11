class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number): number {
        const dfs = (n: number, memo: Map<number, number>) => {
            //base case
            if(n<=2) return n
            if(memo.has(n)) return memo.get(n)
            memo.set(n, dfs(n-1, memo) + dfs(n-2, memo))
            return memo.get(n)
        }

        return dfs(n, new Map<number, number>())
    }
}
