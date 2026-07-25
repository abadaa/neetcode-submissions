// Definition for a pair
// class Pair(var key: Int, var value: String)

class Solution {
    fun insertionSort(pairs: MutableList<Pair>): List<List<Pair>> {
        val size = pairs.size
        val result = mutableListOf<List<Pair>>()

        for (i in 0 until size) {
            var j = i-1
            while(j>=0 && pairs[j].key > pairs[j+1].key) {
                val temp = pairs[j]
                pairs[j] = pairs[j+1]
                pairs[j+1] = temp
                j--
            }
            result.add(pairs.map { Pair(it.key, it.value)})
        }

        return result
    }
}
