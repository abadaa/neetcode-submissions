export class TreeMapNode {
    public key: number
    public val: number
    public left: TreeMapNode
    public right: TreeMapNode

    constructor(key: number, val: number) {
        this.key = key
        this.val = val
        this.left = null
        this.right = null
    }
}

class TreeMap {
    public root: TreeMapNode
    constructor(root = null) {
        this.root = root
    }

    /**
     * @param {number} key
     * @param {number} val
     * @returns {void}
     */
    insert(key: number, val: number): void {
        this.root = this.insertHelper(this.root, key, val)
    }

    //helper to run this recursively to find where to insert node
    insertHelper(root: TreeMapNode, key: number, val: number): TreeMapNode {
        if(root == null) return new TreeMapNode(key, val)

        if(key > root.key) {
            root.right = this.insertHelper(root.right, key, val)
        } else if (key < root.key) {
            root.left = this.insertHelper(root.left, key, val)
        } else {
            root.val = val
        }

        return root
    }

    /**
     * @param {number} key
     * @returns {number}
     */
    get(key: number): number {
        let node = this.search(this.root, key)
        return node != null ? node.val : -1
    }

    //helper to find node in tree
    search(root: TreeMapNode, key: number): TreeMapNode {
        if(!root) return null
        else if(key > root.key) return this.search(root.right, key)
        else if(key < root.key) return this.search(root.left, key)
        else {
            return root
        }

    }
    /**
     * @returns {number}
     */
    getMin(): number {
        if (!this.root) return -1;
        let curr = this.root;
        while (curr.left) curr = curr.left;
        return curr.val;
    }

    /**
     * @returns {number}
     */
    getMax(): number {
        if (!this.root) return -1;
        let curr = this.root;
        while (curr.right) curr = curr.right;
        return curr.val;
    }


    //dfs inorder traversal to get list of vals
    dfsInOrderForVals(root: TreeMapNode): number[] {
        const result: number[] = []
        if(!root) return result

        result.push(...this.dfsInOrderForVals(root.left))
        result.push(root.val)
        result.push(...this.dfsInOrderForVals(root.right))

        return result
    }
    /**
     * @param {number} key
     * @returns {void}
     */
    remove(key: number): void {
        this.root = this.removeHelper(this.root, key)
    }

    removeHelper(root: TreeMapNode, key: number): TreeMapNode {
        if(root == null) return null

        if(key > root.key) {
            root.right = this.removeHelper(root.right, key)
        } else if(key < root.key) {
            root.left = this.removeHelper(root.left, key)
        } else {
            //Zero or One Child Case
            if(root.left == null) {
                return root.right
            } else if(root.right == null) {
                return root.left
            } else {
                //Two Children Case
                const minNode = this.getMinNode(root.right)
                root.key = minNode.key
                root.val = minNode.val
                root.right = this.removeHelper(root.right, minNode.key)
            }
        }

        return root
    }

    getMinNode(root: TreeMapNode): TreeMapNode {
        while(root && root.left != null) {
            root = root.left
        }
        return root
    }

    /**
     * @returns {number[]}
     */
    getInorderKeys(): number[] {
        return this.dfsInOrderForKeys(this.root)
    }

        //dfs inorder traversal to get list of keys
    dfsInOrderForKeys(root: TreeMapNode): number[] {
        const result: number[] = []
        if(!root) return result

        result.push(...this.dfsInOrderForKeys(root.left))
        result.push(root.key)
        result.push(...this.dfsInOrderForKeys(root.right))

        return result
    }
}