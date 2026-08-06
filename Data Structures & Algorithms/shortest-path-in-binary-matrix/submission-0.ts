class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    createKey(r: number, c: number): string {
        return `${r}, ${c}`
    }

    shortestPathBinaryMatrix(grid: number[][]): number {
        if(!grid) return -1
        const ROWS: number = grid.length
        const COLS: number = grid[0].length
        if(grid[0][0] === 1 || grid[ROWS-1][COLS-1] === 1) return -1
        const visit: Set<string> = new Set<string>()
        const queue: any = new Queue()
        queue.enqueue([0, 0])
        visit.add(this.createKey(0, 0))
        let result: number = 1
        const directions: number[][] = [[1, 0], [1, 1], [1, -1], [0, 1], [0, -1], [-1, 0], [-1, 1], [-1, -1]]

        while(queue.size() > 0) {
            let queueLength = queue.size()
            for(let i = 0; i < queueLength; i++) {
                const [r, c] = queue.dequeue()
                if(r === ROWS-1 && c === ROWS-1) {
                    return result
                }
                const neighbors: number[][] = directions.map(d => [d[0]+r, d[1]+c])
                for(let j = 0; j<neighbors.length; j++) {
                    const newR = neighbors[j][0]
                    const newC = neighbors[j][1]
                    const key = this.createKey(newR, newC)
                    if(Math.min(newR, newC) < 0 || newR === ROWS || newC === COLS || visit.has(key) || grid[newR][newC] === 1) {
                        continue;
                    }

                    queue.enqueue([newR, newC])
                    visit.add(key)
                }
            }

            result++
        }

        return -1
    }
}
