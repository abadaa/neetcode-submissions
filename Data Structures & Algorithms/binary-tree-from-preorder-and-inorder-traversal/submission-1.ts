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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */

    buildTree(preorder: number[], inorder: number[]): TreeNode {
        let preIndex = 0;
        let indices: Map<number, number> = new Map<number, number>();

        //basically create a hashmap storing a value and its index
        //this way we can call it to know the order to get a value in O(1) time
        inorder.forEach((val, index) => indices.set(val, index))

        //recursively call the depth first search to build out the tree from the bottom up
        function dfs(l, r) {
            //if our left pointer is > right pointer, return null cuz we've reached the end of the subtree
            if(l > r) return null
            let rootVal = preorder[preIndex++]
            let root = new TreeNode(rootVal)
            let mid = indices.get(rootVal)
            root.left = dfs(l, mid - 1)
            root.right = dfs(mid+1, r);
            return root
        }

        return dfs(0, inorder.length - 1)
    }
}
