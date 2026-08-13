class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    uniquePathsWithObstacles(grid: number[][]): number {
        if(!grid) return 0
        const ROWS = grid.length
        const COLS = grid[0].length
        if(grid[ROWS-1][COLS-1] === 1) return 0
        const pathMap: Map<string, number> = new Map<string, number>()
        pathMap.set(`${ROWS-1}, ${COLS-1}`, 1)
        for(let r = ROWS-1; r >=0; r--) {
            for(let c = COLS-1; c >= 0; c--) {
                if (r === ROWS - 1 && c === COLS - 1) continue;
                let temp: number = 0
                const bck: string = `${r+1}, ${c}`
                const rck: string = `${r}, ${c+1}`
                const nck: string = `${r}, ${c}`
                if(grid[r][c] === 1) {
                    pathMap.set(nck, 0)

                } else {
                    const down = pathMap.get(bck) || 0;
                    const right = pathMap.get(rck) || 0;
                    temp = down + right;
                    pathMap.set(nck, temp)
                }
            }
        }

        return pathMap.get(`${0}, ${0}`)
    }
}
