class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses: number, prerequisites: number[][]): boolean {
        //build out the adjacency list
        const prereqMap: Map<number, number[]> = new Map<number, number[]>()
        for(let i = 0; i < numCourses; i++) prereqMap.set(i, [])
        //add the prereqs
        for(const [c, p] of prerequisites) prereqMap.get(c).push(p)

        //make our visited set to see which courses we've seen already
        const visited: Set<number> = new Set<number>()

        //dfs to check for cycles
        const dfs = (course: number): boolean => {
            //if course already exists in the set, we have a cycle
            if(visited.has(course)) return false

            //if course doesn't have a prereq we still need to take, we can take it
            if(prereqMap.get(course).length === 0) return true

            visited.add(course)

            //loop through and prereqs and dfs to see if there's cycles
            for(const c of prereqMap.get(course)) {
                if(!dfs(c)) return false
            }

            //if we're good, remove from visited set, mark this course as no prereqs and return true

            visited.delete(course)
            prereqMap.set(course, [])

            return true
        }

        //now we wanna run dfs on every possible course to check for cycles
        for(let i = 0; i < numCourses; i++) {
            if(!dfs(i)) return false
        }

        return true
    }
}
