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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root: TreeNode | null, k: number): number {
        const nums: number[] = []
        const dfs = (node: TreeNode | null) => {
            if(!node) return;
            dfs(node.left)
            nums.push(node.val)
            dfs(node.right)
        }
        dfs(root)

        return nums[k-1]
    }
}
