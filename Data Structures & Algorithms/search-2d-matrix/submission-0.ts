class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */

    binarySearch(nums: number[], target: number) : number {
        let l = 0
        let r = nums.length - 1

        while(l <= r) {
            const mid = Math.floor((l+r) / 2)
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

    searchMatrix(matrix: number[][], target: number): boolean {
        let flag = false
        for(const row of matrix) {
            flag = this.binarySearch(row, target) === -1 ? false : true
            if(flag === true) break;
        }

        return flag
    }
}
