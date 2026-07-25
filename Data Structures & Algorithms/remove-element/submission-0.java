class Solution {
    public int removeElement(int[] nums, int val) {
        int count = 0;
        int length = nums.length;
        while(count < length) {
            if(nums[count] == val) {
                nums[count] = nums[--length];
            } else {
                count++;
            }
        }

        return length;
    }
}