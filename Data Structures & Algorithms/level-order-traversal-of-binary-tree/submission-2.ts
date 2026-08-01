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
        if(root) queue.push(root)
        let result: number[][] = []
        let level: number = 0
        while(queue.length > 0) {
            let levelLength = queue.length
            let temp: number[] = []
            for(let i = 0; i < levelLength; i++) {
                const current: TreeNode = queue.shift()
                temp.push(current.val)
                if(current.left) queue.push(current.left)
                if(current.right) queue.push(current.right)
            }
            result.push([...temp])
            level++
            temp = []
        }

        return result
    }
}
