class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid: number[][]): number {
        if(!grid) return -1
        //boilerplate
        const queue = new Queue()
        let fresh: number = 0
        let minutes: number = 0
        const ROWS: number = grid.length
        const COLS: number = grid[0].length
        const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]]

        //find locations of rotten fruit and amount of fresh fruit
        for(let i = 0; i < ROWS; i++) {
            for(let j = 0; j < COLS; j++) {
                if(grid[i][j] == 1) fresh++
                if(grid[i][j] == 2) queue.enqueue([i, j])
            }
        }

        //now go through the queue and see what will rot
        while(!queue.isEmpty() && fresh > 0) {
            let queueLength = queue.size()
            for(let i = 0; i < queueLength; i++) {
                const curr = queue.dequeue()
                for(const [dr, dc] of directions) {
                    const row = curr[0] + dr
                    const col = curr[1] + dc
                    if(row >= 0 && row < ROWS && col >= 0 && col < COLS && grid[row][col] === 1) {
                        grid[row][col] = 2
                        queue.push([row, col])
                        fresh--
                    }
                }
            }
            minutes++
        }

        return fresh > 0 ? -1 : minutes
    }
}
