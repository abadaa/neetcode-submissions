class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid: string[][]): number {
        if(!grid) return 0
        const ROWS = grid.length
        const COLS = grid[0].length
        let count = 0

        const dfs = (r: number, c: number) => {
            if(Math.min(r, c) < 0 || r === ROWS || c === COLS || grid[r][c] === '0') {
                return;
            }
            grid[r][c] = '0'
            dfs(r+1, c)
            dfs(r-1, c)
            dfs(r, c+1)
            dfs(r, c-1)
        }

        for(let r = 0; r < ROWS; r++) {
            for(let c = 0; c < COLS; c++) {
                if(grid[r][c] === '1') {
                    //search through the grid
                    dfs(r, c)
                    count++
                }
            }
        }

        return count
    }
}
