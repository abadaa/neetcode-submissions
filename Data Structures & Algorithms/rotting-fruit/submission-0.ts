class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */

    createKey(r: number, c: number) {
        return `${r}, ${c}`
    }

    orangesRotting(grid: number[][]): number {
        if(!grid) return -1
        const ROWS: number = grid.length
        const COLS: number = grid[0].length
        const queue = new Queue()
        const visit: Set<string> = new Set<string>()
        const directions: number[][] = [[1, 0], [0, 1], [0, -1], [-1, 0]]
        let minutes: number = 0
        let freshCount: number = 0
        for(let r = 0; r < ROWS; r++) {
            for(let c = 0; c < COLS; c++) {
                if(grid[r][c] === 1) {
                    freshCount++
                }
                if(grid[r][c] === 2) {
                    queue.enqueue([r, c])
                }
            }
        }

        while(freshCount > 0 && queue.size() > 0) {
            let queueLength = queue.size()
            for(let i = 0; i < queueLength; i++) {
                const [r, c] = queue.dequeue()
                for(const [dr, dc] of directions) {
                    const row = dr+r
                    const col = dc+c
                    if(row >= 0 && row < ROWS && col >= 0 && col < COLS && grid[row][col] === 1) {
                        grid[row][col] = 2
                        queue.enqueue([row, col])
                        freshCount--
                    }
                }
            }
            minutes++
        }


        return freshCount === 0 ? minutes : -1
    }
}
