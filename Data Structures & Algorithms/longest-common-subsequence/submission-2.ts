class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1: string, text2: string): number {
        //we wanna have a 2d array of rows text1.length and cols text2.length
        let dp: number[][] = Array(text1.length+1).fill(0).map(() => Array(text2.length+1).fill(0))

        //now loop through the matrix
        for(let i = text1.length - 1; i >=0; i--) {
            for(let j = text2.length - 1; j >= 0; j--) {
                //check if the texts are equal and if they are add 1 and store it at the coordinate
                if(text1[i] === text2[j]) dp[i][j] = 1 + dp[i+1][j+1]
                else dp[i][j] = Math.max(dp[i][j+1], dp[i+1][j])
            }
        }

        return dp[0][0]
    }
}
