class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        return [...(s.replaceAll(' ', '').replace(/[^a-zA-Z0-9\s]|_/g, '')).toLowerCase()].reverse().join('') === s.replaceAll(' ', '').replace(/[^a-zA-Z0-9\s]|_/g, '').toLowerCase()
    }
}
