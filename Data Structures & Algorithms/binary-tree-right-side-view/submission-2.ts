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
    rightSideView(root: TreeNode | null): number[] {
        //boilerplate
        const queue = new Queue()
        if(root) queue.enqueue(root)
        let result: number[] = []
        while(!queue.isEmpty()) {
            let queueLength: number = queue.size()
            let temp: number = 0
            for(let i = 0; i < queueLength; i++) {
                const curr = queue.dequeue()
                if(i === queueLength - 1) temp = curr.val
                console.log("Current value: " + curr.val)
                if(curr.left) queue.enqueue(curr.left)
                if(curr.right) queue.enqueue(curr.right)
            }
            result.push(temp)
            temp = 0
        }

        return result
    }
}
