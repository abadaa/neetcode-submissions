class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let l = 0
        let r = nums.length - 1
        
        while(l <= r) {
            let mid = Math.floor((l+r) / 2)

            if(target > nums[mid]) {
                l = mid + 1
            } else if(target < nums[mid]) {
                r = mid - 1
            } else {
                return mid
            }
        }

        return -1
    }
}
