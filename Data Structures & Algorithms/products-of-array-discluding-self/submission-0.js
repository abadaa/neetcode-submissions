class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let result = [];
        if(nums.length === 0) {
            return result
        }
        for(let i = 0; i<nums.length; i++) {
            if(i === 0) {
                result.push(nums.slice(1, nums.length))
            } else if(i === nums.length - 1) {
                result.push(nums.slice(0, nums.length-1))
            } else {
                const arr1 = nums.slice(0, i)
                const arr2 = nums.slice(i+1, nums.length)
                result.push([...arr1, ...arr2])
            }
        }

        return result.map(n => n.reduce((t, c) => t*c, 1))
    }
}
