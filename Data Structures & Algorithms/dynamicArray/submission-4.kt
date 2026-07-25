class DynamicArray(capacity: Int) {

    private var array: IntArray
    private var length = 0;
    private var capacity: Int = capacity

    init {
        this.array = IntArray(this.capacity)
    }


    fun get(i: Int): Int {
        return array[i];
    }

    fun set(i: Int, n: Int) {
        array[i] = n;
    }

    fun pushback(n: Int) {
        if(length == capacity) resize()
        array[length] = n
        length++
    }

    fun popback(): Int {
        if (length > 0) length--
        return array[length]
    }

    private fun resize() {
        capacity *= 2
        val newArr = IntArray(capacity)
        for (i in 0 until length) {
            newArr[i] = array[i]
        }
        array = newArr
    }

    fun getSize(): Int {
        return length
    }

    fun getCapacity(): Int {
        return capacity
    }
}
