/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} targetSum
     * @return {boolean}
     */
    hasPathSum(root: TreeNode | null, targetSum: number): boolean {
        let currentSum = 0
        let helper = (root: TreeNode | null, target: number, current: number): boolean => {
            if(!root) return false
            current += root.val

            if(!root.right && !root.left) {
                return current === target
            }

            if(helper(root.left, target, current)) {
                return true
            }
            if(helper(root.right, target, current)) {
                return true
            }

            return false
        }

        return helper(root, targetSum, currentSum)
    }
}
