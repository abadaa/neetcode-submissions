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

    dfs(root: TreeNode | null, result: number[]): number[] {
        if(!root) return

        this.dfs(root.left, result)
        result.push(root.val)
        this.dfs(root.right, result)
    }

    kthSmallest(root: TreeNode | null, k: number): number {
        let result: number[] = []
        this.dfs(root, result)
        return result[k-1]
    }
}
