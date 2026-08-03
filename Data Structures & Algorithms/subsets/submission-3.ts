class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums: number[]): number[][] {
        const result: number[][] = []
        // const subset: number[] = []
        
        function backtrack(index: number, subset: number[]) {
            if(index >= nums.length) {
                result.push([...subset])
                return;
            }

            subset.push(nums[index])
            backtrack(index+1, subset)
            subset.pop()
            backtrack(index+1, subset)
        }

        backtrack(0, [])

        return result
    }
}
