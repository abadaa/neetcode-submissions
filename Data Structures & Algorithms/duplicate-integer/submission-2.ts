class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const hashSet: Set<number> = new Set<number>()
        for(const num of nums) hashSet.add(num)

        return hashSet.size != nums.length
    }
}
