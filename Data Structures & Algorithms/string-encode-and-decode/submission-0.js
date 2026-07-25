class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const delimiter = '#'
        return strs.map(s => s.length + delimiter + s).join('')
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const delimiter = '#'
        let result = []
        let i = 0
        while(i < str.length) {
            let pointer = i;
            while(str[pointer] !== delimiter) {
                pointer++
            }
            let length = parseInt(str.substring(i, pointer))
            i = pointer + 1
            pointer = i + length
            result.push(str.substring(i, pointer))
            i = pointer
        }
        return result
    }
}
