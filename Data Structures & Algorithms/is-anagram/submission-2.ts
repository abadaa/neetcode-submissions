class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length != t.length) return false
        const firstMap: Map<string, number> = new Map<string, number>()
        const secondMap: Map<string, number> = new Map<string, number>()

        for(let i = 0; i < s.length; i++) {
            firstMap.set(s[i], (firstMap.get(s[i]) || 0) + 1)
            secondMap.set(t[i], (secondMap.get(t[i]) || 0) + 1)
        }

        let count = 0
        while(count < s.length && firstMap.get(s[count]) === secondMap.get(s[count])) {
            count++
        }

        return count === s.length
    }
}
