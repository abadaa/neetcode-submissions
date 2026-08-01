class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums: number[]): number[][] {
        let result: number[][] = []
        let subset: number[] = []

        const backtrack = (index: number, subset: number[]) => {
            if(index >= nums.length) {
                result.push([...subset])
                return;
            }

            subset.push(nums[index])
            backtrack(index + 1, subset)
            subset.pop()
            backtrack(index + 1, subset)
        }

        backtrack(0, subset)

        return result
    }
}
