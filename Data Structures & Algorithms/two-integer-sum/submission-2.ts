class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const hashMap: Map<number, number> = new Map<number, number>()
        let result: number[] = []
        for (let i = 0; i < nums.length; i++) {
            if(hashMap.has(target - nums[i])) {
                result = [i, hashMap.get(target - nums[i])]
                break;
            }
            else hashMap.set(nums[i], i)
        }

        return result
    }
}
