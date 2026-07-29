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
     * @return {number[][]}
     */
    levelOrder(root: TreeNode | null): number[][] {
        let queue: TreeNode[] = []
        if(root != null) queue.push(root)
        let result: number[][] = []
        let level: number = 0
        while(queue.length > 0) {
            let temp: number[] = []
            let levelLength = queue.length
            for(let i = 0; i < levelLength; i++) {
                const curr = queue.shift()
                temp.push(curr.val)
                if(curr.left != null) {
                    queue.push(curr.left)
                }
                if(curr.right != null) {
                    queue.push(curr.right)
                }
            }
            result.push([...temp])
            level++
            temp = []
        }

        return result
    }
}
