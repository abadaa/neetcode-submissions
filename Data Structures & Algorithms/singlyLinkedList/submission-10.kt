class ListNode(var value: Int, var next: ListNode? = null)

class LinkedList {
    private val head: ListNode = ListNode(-1)
    private var tail: ListNode = head

    fun get(index: Int): Int {
        var currentNode = head.next
        var i = 0
        while(currentNode != null) {
            if(i == index) return currentNode.value
            i++
            currentNode = currentNode.next
        }
        return -1
    }

    fun insertHead(value: Int) {
        val newNode = ListNode(value, head.next)
        head.next = newNode
        if(newNode.next == null) {
            tail = newNode
        }
    }

    fun insertTail(value: Int) {
        val newNode = ListNode(value)
        tail.next = newNode
        tail = newNode
    }

    fun remove(index: Int): Boolean {
        var i = 0
        var currentNode: ListNode? = head

        while (i < index && currentNode != null) {
            i++
            currentNode = currentNode.next
        }

        if(currentNode != null && currentNode.next != null) {
            if(currentNode.next == tail) tail = currentNode
            currentNode.next = currentNode.next?.next
            return true
        }
        return false
    }

    fun getValues(): List<Int> {
        val result = mutableListOf<Int>()
        //make sure you're not on the dummy node
        var curr = head.next
        while (curr != null) {
            result.add(curr.value)
            curr = curr.next
        }
        return result
    }
}