class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums: number[], target: number): number[][] {
        const result: number[][] = []
        nums.sort((a, b) => a - b)

        function backtrack(index: number, subset: number[], total: number) {
            if(target === total) {
                result.push([...subset])
                return;
            }

            for(let j = index; j < nums.length; j++) {
                if(total + nums[j] > target) {
                    return;
                }

                subset.push(nums[j])
                backtrack(j, subset, total + nums[j])
                subset.pop()
            }
        }

        backtrack(0, [], 0)

        return result
    }
}
