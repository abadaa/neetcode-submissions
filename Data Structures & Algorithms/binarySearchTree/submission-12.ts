class TreeMapNode {
    public key: number
    public val: number
    public left: TreeMapNode | null
    public right: TreeMapNode | null

    constructor(key: number, val: number) {
        this.key = key,
        this.val = val,
        this.left = null
        this.right = null
    }
}


class TreeMap {
    public root: TreeMapNode
    constructor(root: TreeMapNode = null) {
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

    insertHelper(root: TreeMapNode, key: number, val: number): TreeMapNode {
        if(root == null) return new TreeMapNode(key, val)

        if(key > root.key) {
            root.right = this.insertHelper(root.right, key, val)
        } else if(key < root.key) {
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
        return this.search(this.root, key)
    }

    search(root: TreeMapNode, key: number): number {
        if(!root) return -1
        else if(key > root.key) return this.search(root.right, key)
        else if(key < root.key) return this.search(root.left, key)
        else return root.val
    }

    /**
     * @returns {number}
     */
    getMin(): number {
        let root = this.root
        if(!root) return -1
        while(root.left) {
            root = root.left
        }

        return root.val
    }

    /**
     * @returns {number}
     */
    getMax(): number {
        let root = this.root
        if(!root) return -1
        while(root.right) {
            root = root.right
        }

        return root.val
    }

    /**
     * @param {number} key
     * @returns {void}
     */
    remove(key: number): void {
       this.root = this.removeHelper(this.root, key)
    }

    removeHelper(root: TreeMapNode, key: number): TreeMapNode {
        if(!root) return null

        if(key > root.key) root.right = this.removeHelper(root.right, key)
        else if(key < root.key) root.left = this.removeHelper(root.left, key)
        else {
            //Zero or One Child Case
            if(!root.left) return root.right
            else if(!root.right) return root.left
            else {
                //Two Children Case
                const minValNode = this.getMinNode(root.right)
                root.key = minValNode.key
                root.val = minValNode.val
                root.right = this.removeHelper(root.right, minValNode.key)
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
        let result: number[] = []
        this.dfsInOrderForKeys(this.root, result)
        return result
    }

    dfsInOrderForKeys(root: TreeMapNode | null, result: number[]): number[] {
        if(!root) return;

        this.dfsInOrderForKeys(root.left, result)
        result.push(root.key)
        this.dfsInOrderForKeys(root.right, result)
    }
}
