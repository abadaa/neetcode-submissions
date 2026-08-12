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

export type balanceCheck = {
    balanced: boolean,
    height: number
}

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */


    isBalanced(root: TreeNode | null): boolean {
        const dfs = (node): balanceCheck => {
            if(!node) return {balanced: true, height: 0}
            const left = dfs(node.left)
            const right = dfs(node.right)
            const balanced: boolean = Math.abs(left.height - right.height) <= 1 && left.balanced && right.balanced
            const height = Math.max(left.height, right.height) + 1
            
            return {balanced, height}
        }

        return dfs(root).balanced
    }
}
