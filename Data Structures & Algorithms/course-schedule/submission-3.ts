class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses: number, prerequisites: number[][]): boolean {
        //build out the adjacency list
        const prereqMap: Map<number, number[]> = new Map<number, number[]>()
        for(let i = 0; i < numCourses; i++) {
            prereqMap.set(i, [])
        }
        for(const [c, p] of prerequisites) {
            prereqMap.get(c).push(p)
        }

        //add our set to see which courses in the graph we've visited
        const visited: Set<number> = new Set<number>()

        //do our dfs to check for cycles
        const dfs = (course: number): boolean => {
            //if a prereq is already set as a course with prereqs, we have a cycle
            if(visited.has(course)) return false
            //if a course has no more prereqs we need to take
            //we can say this course is possible to take
            if(prereqMap.get(course).length === 0) return true

            visited.add(course)
            //otherwise loop through the courses and their prereqs and do a dfs to check for cycles
            for(const p of prereqMap.get(course)) {
                if(!dfs(p)) return false
            } 
            visited.delete(course)
            prereqMap.set(course, [])
            return true
        }

        //run dfs for every graph node in case it's not all connected
        for(let i = 0; i < numCourses; i++) {
            if(!dfs(i)) return false
        }

        return true
    }
}
