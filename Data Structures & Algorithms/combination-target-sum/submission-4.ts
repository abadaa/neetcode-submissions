class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums: number[], target: number): number[][] {
        const result: number[][] = []
        nums.sort((a, b) => a-b)

        const backtrack = (index: number, current: number[], total: number) => {
            if(total === target) {
                result.push([...current])
                return;
            }

            for(let i = index; i < nums.length; i++) {
                if(nums[i] + total > target) {
                    return;
                }
                current.push(nums[i])
                backtrack(i, current, total+nums[i])
                current.pop()
            }
        }

        backtrack(0, [], 0)
        return result
    }
}
