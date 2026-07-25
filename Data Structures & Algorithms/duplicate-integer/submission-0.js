class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let arr = []
        let result = false
        for(let i = 0; i<nums.length; i++) {
            const x = nums[i]
            if(arr.includes(x)) {
                result = true
            } else {
                arr.push(x)
            }
        }

        return result
    }
}
