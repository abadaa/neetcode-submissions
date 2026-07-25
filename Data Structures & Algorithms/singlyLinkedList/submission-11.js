class Node {
    constructor(value, nextNode = null) {
        this.value = value;
        this.next = nextNode
    }
}

class LinkedList {
    constructor() {
        this.head = new Node(-1)
        this.tail = this.head
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        let currentHead = this.head.next
        let i = 0
        while(currentHead) {
            if(index === i) {
                return currentHead.value
            }
            i++
            currentHead = currentHead.next
        }

        return -1
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        const newNode = new Node(val)
        newNode.next = this.head.next
        this.head.next = newNode
        if(!newNode.next) {
            this.tail = newNode
        }
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        let newNode = new Node(val)
        this.tail.next = newNode
        this.tail = this.tail.next
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        let currenthead = this.head
        let i = 0;

        //get to the index
        while(i<index && currenthead) {
            i++;
            currenthead = currenthead.next
        }

        if(currenthead && currenthead.next) {
            if(currenthead.next === this.tail) {
                this.tail = currenthead
            }
            currenthead.next = currenthead.next.next
            return true
        }
        return false
    }

    /**
     * @return {number[]}
     */
    getValues() {
        let currentHead = this.head.next
        let result = [];
        while(currentHead) {
            result.push(currentHead.value);
            currentHead = currentHead.next
        }
        return result
    }
}
