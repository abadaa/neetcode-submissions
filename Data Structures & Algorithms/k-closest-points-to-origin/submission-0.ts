class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points: number[][], k: number): number[][] {
        let distances: Map<number[], number> = new Map<number[], number>()
        points.forEach(p => {
            distances.set(p, this.findDistance(p))
        })

        const sortedByValue = new Map([...distances.entries()].sort((a, b) => a[1] - b[1]))

        return [...sortedByValue.keys()].slice(0, k)
    }

    findDistance(point: number[]): number {
        const x: number = point[0]
        const y: number = point[1]
        return Math.sqrt((x)**2 + (y)**2)
    }
}
