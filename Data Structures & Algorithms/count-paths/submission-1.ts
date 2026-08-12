class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m: number, n: number): number {
        let prevCol = Array(n).fill(1)
        let currCol = Array(n).fill(0)
        let counter = m-2
        while(counter >= 0) {
            for(let i = n-1; i >= 0; i--) {
                if(i === n-1) currCol[i] = 1
                else currCol[i] = currCol[i+1] + prevCol[i]
            }        
            counter--
            prevCol = currCol    
        }

        return prevCol[0]
    }
}
