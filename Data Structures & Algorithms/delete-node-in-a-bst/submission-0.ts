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
        if(!root) return null

        if(key > root.val) {
            root.right = this.deleteNode(root.right, key)
        } else if(key < root.val) {
            root.left = this.deleteNode(root.left, key)
        } else {
            //No child or One child case
            if(!root.right) return root.left
            else if(!root.left) return root.right
            //Two children
            else {
                let minVal = this.minValueNode(root.right)
                root.val = minVal.val
                root.right = this.deleteNode(root.right, minVal.val)
            }
        }

        return root
    }
}
