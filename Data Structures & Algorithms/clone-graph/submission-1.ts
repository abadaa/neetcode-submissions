/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node: Node | null): Node {
        if(!node) return null
        const copy: Map<Node, Node> = new Map<Node, Node>()
        const queue: any = new Queue()
        queue.push(node)
        copy.set(node, new Node(node.val))
        while(!queue.isEmpty()) {
            const curr: Node = queue.dequeue()
            for(const neighbor of curr.neighbors) {
                if(!copy.has(neighbor)) {
                    copy.set(neighbor, new Node(neighbor.val))
                    queue.push(neighbor)
                }

                copy.get(curr).neighbors.push(copy.get(neighbor))
            }
        }

        return copy.get(node)
    }
}
