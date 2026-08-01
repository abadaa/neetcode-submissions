class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums: number[]): number[][] {
        let result: number[][] = []
        let subset: number[] = []

        const backtrack = (nums: number[], index: number, result: number[][], subset: number[]) => {
            if(index >= nums.length) {
                result.push([...subset])
                return;
            }

            subset.push(nums[index])
            backtrack(nums, index + 1, result, subset)
            subset.pop()
            backtrack(nums, index + 1, result, subset)
        }

        backtrack(nums, 0, result, subset)

        return result
    }
}
