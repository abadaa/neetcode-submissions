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
        //check if graph is empty
        if(!node) return null
        const hashmap: Map<Node, Node> = new Map<Node, Node>()

        const dfs = (curr: Node): Node => {
            //base case
            if(hashmap.has(curr)) {
                return hashmap.get(curr)
            }

            const copy = new Node(curr.val)
            hashmap.set(curr, copy)

            for(const neighbor of curr.neighbors) {
                copy.neighbors.push(dfs(neighbor))
            }

            return copy
        }

        return dfs(node)

    }
}
