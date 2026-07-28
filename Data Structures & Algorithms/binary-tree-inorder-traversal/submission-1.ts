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
     * @return {number[]}
     */
    inorderTraversal(root: TreeNode | null): number[] {
        const result: number[] = []
        if(root == null) return result;

        result.push(...this.inorderTraversal(root.left))
        result.push(root.val)
        result.push(...this.inorderTraversal(root.right))
        return result
    }
}
