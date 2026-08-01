class TreeMapNode {
    public key: number
    public val: number
    public left: TreeMapNode | null
    public right: TreeMapNode | null

    constructor(key, val) {
        this.key = key
        this.val = val
        this.left = null
        this.right = null
    }
}

class TreeMap {
    public root: TreeMapNode | null
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

    private insertHelper(root: TreeMapNode | null, key: number, val: number) {
        if(!root) return new TreeMapNode(key, val)

        if(key > root.key) root.right = this.insertHelper(root.right, key, val)
        else if(key < root.key) {
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

    private search(root: TreeMapNode | null, key: number): number {
        if(!root) return -1
        else if(key > root.key) return this.search(root.right, key)
        else if(key < root.key) return this.search(root.left, key)
        else return root.val
    }

    /**
     * @returns {number}
     */
    getMin(): number {
        if(!this.root) return -1
        let current = this.root
        while(current.left) current = current.left
        return current.val
    }

    /**
     * @returns {number}
     */
    getMax(): number {
        if(!this.root) return -1
        let current = this.root
        while(current.right) current = current.right

        return current.val
    }

    /**
     * @param {number} key
     * @returns {void}
     */
    remove(key: number): void {
        this.root = this.removeHelper(this.root, key)
    }

    private removeHelper(root: TreeMapNode | null, key: number): TreeMapNode | null {
        if(!root) return null

        if(key > root.key) root.right = this.removeHelper(root.right, key)
        else if(key < root.key) root.left = this.removeHelper(root.left, key)
        else {
            //Zero or One Child Case
            if(!root.right) root = root.left
            else if(!root.left) root = root.right
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

    private getMinNode(root): TreeMapNode | null {
        while(root && root.left != null) {
            root = root.left
        }

        return root
    }

    /**
     * @returns {number[]}
     */
    getInorderKeys(): number[] {
        const result: number[] = []
        this.dfs(this.root, result)

        return result
    }

    dfs(root: TreeMapNode | null, result: number[]): number[] {
        if(!root) return;

        this.dfs(root.left, result)
        result.push(root.key)
        this.dfs(root.right, result)
    }
}
