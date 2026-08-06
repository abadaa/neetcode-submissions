class Solution {
    /**
     * @param {number[][]}
     * @returns {number}
     */

    setCoordinate(r: number, c: number): string {
        return `${r}, ${c}`
    }

    shortestPath(grid: number[][]): number {
        if(!grid) return -1
        //boilerplate setup
        const ROWS: number = grid.length
        const COLS: number = grid[0].length
        if(grid[0][0] === 1 || grid[ROWS-1][COLS-1] === 1) return -1
        const visit: Set<string> = new Set<string>()
        const queue: any = new Queue()
        //add first coordinate to the queue and mark it as visited
        queue.enqueue([0, 0])
        visit.add(this.setCoordinate(0, 0))
        let result: number = 0
        //loop through the queue
        while(queue.size() > 0) {
            //set queue length for this iteration
            const queueLength = queue.size()
            for(let i = 0; i < queueLength; i++) {
                const [r, c]: number[] = queue.dequeue()
                //check if we met our wincon
                if(r === ROWS - 1 && c === COLS - 1) {
                    return result
                }            
                //get the neighbors
                const neighbors: number[][] = [[r+1, c], [r-1, c], [r, c+1], [r, c-1]]
                for(let j = 0; j < 4; j++) {
                    //set new coordinate
                    const [newR, newC] = [neighbors[j][0], neighbors[j][1]]
                    //check if this coordinate is valid
                    if(Math.min(newR, newC) < 0 || newR === ROWS || newC === COLS || visit.has(this.setCoordinate(newR, newC)) || grid[newR][newC] === 1) {
                        continue;
                    }
                    //if the coordinate is valid, add it to the queue
                    queue.enqueue([newR, newC])
                    //also say we visited this coordinate
                    visit.add(this.setCoordinate(newR, newC))
                }
            }

            result++
        }

        return -1
    }
}
