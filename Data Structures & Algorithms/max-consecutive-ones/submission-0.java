class Solution {
    public int findMaxConsecutiveOnes(int[] nums) {
        int result = 0;
        int temp = 0;
        for(int i = 0; i < nums.length; i++) {
            if(nums[i] == 1) {
                temp++;
                if(temp > result) {
                    result = temp;
                }
            } else {
                if(temp > result) {
                    result = temp;
                }
                temp = 0;
            }
        }

        return result;
    }
}