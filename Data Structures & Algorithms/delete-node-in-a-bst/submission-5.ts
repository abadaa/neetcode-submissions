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
     * @param {number} key
     * @return {TreeNode}
     */

    minValueNode(root: TreeNode): TreeNode {
        while(root != null && root.left != null) {
            root = root.left
        }

        return root
    }

    deleteNode(root: TreeNode | null, key: number): TreeNode {
        if(root == null) return null

        if(key > root.val) {
            root.right = this.deleteNode(root.right, key)
        } else if(key < root.val) {
            root.left = this.deleteNode(root.left, key)
        } else {
            //Zero and One Child Case
            if(root.left == null) return root.right
            else if(root.right == null) return root.left
            //Two Children Case
            else {
                const minValNode = this.minValueNode(root.right)
                root.val = minValNode.val
                root.right = this.deleteNode(root.right, minValNode.val)
            }
        }

        return root
    }
}
