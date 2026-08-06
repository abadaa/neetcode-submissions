class Solution {
    /**
     * @param {number[][]} grid
     * @returns {number}
     */
    countPaths(grid: number[][]): number {
        if(!grid) return 0
        const ROWS = grid.length
        const COLS = grid[0].length
        const visit: Set<string> = new Set<string>()
        
        const dfs = (r: number, c: number): number => {
            if(Math.min(r, c) < 0 || r === ROWS || c === COLS || grid[r][c] === 1 || visit.has(`${r}, ${c}`)) {
                return 0;
            }
            if(r === ROWS-1 && c === COLS-1) return 1

            const key = `${r}, ${c}`
            visit.add(key)
            let count = 0
            count+= dfs(r+1, c)
            count+= dfs(r-1, c)
            count+= dfs(r, c+1)
            count+= dfs(r, c-1)
            visit.delete(key)

            return count
        }

        return dfs(0, 0)
    }
}
