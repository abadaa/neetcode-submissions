class LRUCache {
    /**
     * @param {number} capacity
     */
    private capacity: number
    private cache: Map<number, number>

    constructor(capacity: number) {
        this.capacity = capacity
        this.cache = new Map<number, number>()
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key: number): number {
        if(!this.cache.get(key)) return -1
        const val = this.cache.get(key) 
        this.cache.delete(key)
        this.cache.set(key, val)
        return val
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key: number, value: number): void {
        if(this.cache.has(key)) {
            this.cache.delete(key)
        }
        else if(this.capacity === this.cache.size) {
            const first = this.cache.keys().next().value
            this.cache.delete(first)
        }
        this.cache.set(key, value)
    }
}
