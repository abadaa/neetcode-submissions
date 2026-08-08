class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses: number, prerequisites: number[][]): boolean {
        //Create adjacency list
        const prereqs: Map<number, number[]> = new Map<number, number[]>()
        for(let i = 0; i < numCourses; i++) {
            prereqs.set(i, [])
        }
        for(const [course, prereq] of prerequisites) {
            prereqs.get(course).push(prereq)
        }

        const visited: Set<number> = new Set<number>()

        const dfs = (course: number): boolean => {
            if(visited.has(course)) return false
            if(prereqs.get(course).length === 0) return true

            visited.add(course)
            for(let prereq of prereqs.get(course)) {
                if(!dfs(prereq)) return false
            }
            visited.delete(course)
            prereqs.set(course, [])
            return true
        }

        for(let i=0; i < numCourses; i++) {
            if(!dfs(i)) return false
        }

        return true
    }
}
