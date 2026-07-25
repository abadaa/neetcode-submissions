class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max = 0
        for(let i = 0; i < heights.length - 1; i++) {
            for(let j = 0; j < heights.length; j++) {
                const lower = heights[i] < heights[j] ? heights[i] : heights[j]
                const temp = lower * (j - i)
                if(temp > max) max = temp
            }
        }

        return max
    }
}
