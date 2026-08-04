class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const hashSet: Set<number> = new Set<number>()
        let flag = false
        for (const num of nums) {
            if(hashSet.has(num)) {
                flag = true
                break;
            } else {
                hashSet.add(num)
            }

        }

        return flag
    }
}
