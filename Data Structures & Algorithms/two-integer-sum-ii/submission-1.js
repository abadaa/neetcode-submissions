class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const hashMap = {};
        for (let i = 0; i < numbers.length; i++) {
            const num = numbers[i];
            if (hashMap[target - num] !== undefined && hashMap[target - num] < i) {
                return [hashMap[target - num] + 1, i + 1];
            }
            hashMap[num] = i;
        }
        return [];
    }
}
