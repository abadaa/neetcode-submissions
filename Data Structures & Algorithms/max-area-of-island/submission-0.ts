class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid: number[][]): number {
        if(!grid) return 0
        const ROWS: number = grid.length
        const COLS: number = grid[0].length
        let max = 0

        const dfs = (r: number, c: number): number => {
            if(Math.min(r, c) < 0 || r === ROWS || c === COLS || grid[r][c] === 0) {
                return 0
            }

            grid[r][c] = 0
            return 1 + dfs(r+1, c) + dfs(r-1, c) + dfs(r, c+1) + dfs(r, c-1)
        }

        for(let r = 0; r < ROWS; r++) {
            for(let c = 0; c < COLS; c++) {
                if(grid[r][c] === 1) {
                    max = Math.max(max, dfs(r, c))
                }
            }
        }

        return max
    }
}
