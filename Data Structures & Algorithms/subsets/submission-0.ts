class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums: number[]): number[][] {
        const result: number[][] = []
        let subset: number[] = []

        const helper = (result: number[][], subset: number[], i: number, nums: number[]) => {
            if(i >= nums.length) {
                result.push([...subset])
                return;
            }
            subset.push(nums[i])
            helper(result, subset, i+1, nums)
            subset.pop();
            helper(result, subset, i+1, nums)
        }

        helper(result, subset, 0, nums)

        return result
    }
}
