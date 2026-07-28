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

    inOrderTraversal(root: TreeNode | null): number[] {
        const result: number[] = []
        if(!root) return result
        result.push(...this.inOrderTraversal(root.left))
        result.push(root.val)
        result.push(...this.inOrderTraversal(root.right))

        return result
    }

    kthSmallest(root: TreeNode | null, k: number): number {
        return this.inOrderTraversal(root)[k-1]
    }
}
