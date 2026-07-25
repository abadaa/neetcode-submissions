class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        let l = 1
        let r = Math.max(...piles)
        let result = r
        while(l <= r) {
            const k = Math.floor((l+r) / 2)
            let eaten = 0
            for(const x of piles) {
                eaten += Math.ceil(x / k)
            }
            if(eaten <= h) {
                result = k
                r = k -1
            } else {
                l = k+1
            }
        }

        return result
    }
}
