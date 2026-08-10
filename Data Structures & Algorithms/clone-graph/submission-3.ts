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
        //if node is empty the graph is empty
        if(!node) return null

        //boilerplate
        const queue = new Queue()
        const copy: Map<Node, Node> = new Map<Node, Node>()
        queue.push(node)
        copy.set(node, new Node(node.val))

        //while the queue has nodes, loop through and set their neighbors while adding new nodes to the copy
        while(!queue.isEmpty()) {
            const curr: Node = queue.dequeue()
            //loop through the neighbors to add them to the current node's neighbors OR if they're nodes we haven't seen yet, add to the copy map
            for(const neighbor of curr.neighbors) {
                if(!copy.has(neighbor)) {
                    copy.set(neighbor, new Node(neighbor.val))
                    queue.push(neighbor)
                }

                const currCopyNodeNeighbors = copy.get(curr).neighbors
                currCopyNodeNeighbors.push(copy.get(neighbor))
            }
        }

        return copy.get(node)
    }
}
