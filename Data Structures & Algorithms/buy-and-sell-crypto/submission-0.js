class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let max = 0 
        for(let i = 0; i < prices.length; i++) {
            let futureMax = Math.max(...prices.slice(i+1, prices.length))
            let profit = futureMax - prices[i]
            if(max < profit) max = profit
        }

        return max
    }
}
