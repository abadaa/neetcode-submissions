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
        //create the copy
        const copy: Map<Node, Node> = new Map<Node, Node>()
        //create our dfs recursive function
        const dfs = (node): Node => {
            //if node is null return null
            if(!node) return null

            //if copy already has node, return the nodes copy
            if(copy.has(node)) return copy.get(node)

            //otherwise create a new node and add it to the copy
            const newNode: Node = new Node(node.val)
            copy.set(node, newNode)

            //now add the neighbors
            for(const neighbor of node.neighbors) {
                newNode.neighbors.push(dfs(neighbor))
            }

            return newNode
        }

        return dfs(node)
    }
}
