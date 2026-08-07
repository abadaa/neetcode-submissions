class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid: number[][]): number {
        if(!grid) return -1
        const ROWS: number = grid.length
        const COLS: number = grid[0].length
        const queue: any = new Queue()
        let freshCount: number = 0
        let minutes: number = 0
        let directions: number[][] = [[0, -1], [0, 1], [1, 0], [-1, 0]]

        for(let i = 0; i < ROWS; i++) {
            for(let j = 0; j < COLS; j++) {
                if(grid[i][j] === 1) freshCount++
                if(grid[i][j] === 2) queue.enqueue([i, j])
            }
        }

        while(queue.size() > 0 && freshCount > 0) {
            let queueLength = queue.size()
            for(let i = 0; i < queueLength; i++) {
                const [r, c] = queue.dequeue()
                for(const [dr, dc] of directions) {
                    const newRow = dr+r
                    const newCol = dc+c
                    if(Math.min(newRow, newCol) < 0 || newRow >= ROWS || newCol >= COLS || grid[newRow][newCol] !== 1) {
                        continue;
                    }
                    grid[newRow][newCol] = 2
                    queue.enqueue([newRow, newCol])
                    freshCount--
                }
            }

            minutes++
        }

        return freshCount === 0 ? minutes : -1
    }
}
