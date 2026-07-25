/**
 * Pair class to store key-value pairs
 */
// class Pair {
//     /**
//      * @param {number} key The key to be stored in the pair
//      * @param {string} value The value to be stored in the pair
//      */
//     constructor(key, value) {
//         this.key = key;
//         this.value = value;
//     }
// }
class Solution {
    /**
     * @param {Pair[]} pairs
     * @returns {Pair[][]}
     */
    insertionSort(pairs: Pair[]): Pair[][] {
        if(pairs.length === 0) {
            return []
        }
        let result: Pair[][] = [pairs.map(p=> new Pair(p.key, p.value))]
        console.log(result)
        for(let i = 1; i < pairs.length; i++) {
            let j = i - 1
            while(j >= 0 && pairs[j].key > pairs[j + 1].key) {
                console.log("start")
                let temp = pairs[j+1]
                pairs[j+1] = pairs[j]
                pairs[j] = temp
                j--
            }
            pairs.forEach(p => {
                console.log(p)
            })
            result.push(
                pairs.map(
                    p => new Pair(p.key, p.value)
                )
            )
        }

        return result
    }
}
