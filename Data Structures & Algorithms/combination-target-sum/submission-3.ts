class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums: number[], target: number): number[][] {
        const result: number[][] = []
        nums.sort((a, b) => a-b)

        const helper = (i: number, current: number[], total: number) => {
            if(total === target) {
                result.push([...current])
                return;
            }

            for(let j = i; j < nums.length; j++) {
                if(total + nums[j] > target) {
                    return;
                }
                current.push(nums[j])
                helper(j, current, total + nums[j])
                current.pop()
            }
        }

        helper(0, [], 0)

        return result
    }
}
