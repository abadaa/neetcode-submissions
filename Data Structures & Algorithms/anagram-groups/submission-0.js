class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let result = {}
        let hash = []
        for(let s of strs) {
            const sorted = [...s].sort().join('')
            if(!result[sorted]) {
                result[sorted] = []
            }
            result[sorted].push(s)
        }

        return Object.values(result)
    }
}
