class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums: number[]): void {
        let counts = [0, 0, 0]
        for(let i = 0; i < nums.length; i++) {
            counts[nums[i]] += 1
        }

        let x = 0
        for(let i = 0; i < counts.length; i++) {
            for(let j = 0; j < counts[i]; j++) {
                nums[x] = i
                x++
            }
        }
    }
}
