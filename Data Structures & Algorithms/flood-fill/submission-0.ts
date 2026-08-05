class Solution {
    /**
     * @param {number[][]} image
     * @param {number} sr
     * @param {number} sc
     * @param {number} color
     * @return {number[][]}
     */
    floodFill(
        image: number[][],
        sr: number,
        sc: number,
        color: number,
    ): number[][] {
        const ogColor = image[sr][sc]
        //don't need to do recursion if the color is already the correct one
        if(color === ogColor) return image
        const ROWS = image.length
        const COLUMNS = image[0].length

        function dfs(r: number, c: number) {
            //We're out of bounds, we've already visited this point in the grid
            //Or this grid point doesn't match the og color
            if(Math.min(r, c) < 0 || r === ROWS || c === COLUMNS || image[r][c] !== ogColor) {
                return;
            }

            image[r][c] = color
            dfs(r+1, c)
            dfs(r-1, c)
            dfs(r, c+1)
            dfs(r, c-1)
        }

        dfs(sr, sc)

        return image
        
    }

}
