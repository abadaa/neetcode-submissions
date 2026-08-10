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
        const copy: Map<Node, Node> = new Map<Node, Node>()

        const dfs = (node, map) => {
            //base case
            if(!node) return null

            //if the copy already contains the node, we don't need to set it
            if(map.has(node)) return map.get(node)

            //otherwise create the copy and add it to the map
            const newNode = new Node(node.val)
            copy.set(node, newNode)

            //now add the neighbors to the new node
            for(const neighbor of node.neighbors) {
                newNode.neighbors.push(dfs(neighbor, copy))
            }

            return newNode
        }

        return dfs(node, copy)

    }
}
