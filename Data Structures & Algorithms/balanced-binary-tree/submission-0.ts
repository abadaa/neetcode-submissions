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


export type checkBalance = {
    balanced: boolean,
    height: number
}

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */

    dfs(root: TreeNode): checkBalance {
        if(!root) {
            return {balanced: true, height: 0}
        }

        const left = this.dfs(root.left)
        const right = this.dfs(root.right)
        const balanced: boolean = left.balanced && right.balanced && Math.abs(left.height - right.height) <= 1
        const height = 1 + Math.max(left.height, right.height)

        return {balanced, height}
    }

    isBalanced(root: TreeNode | null): boolean {
        return this.dfs(root).balanced
    }
}
