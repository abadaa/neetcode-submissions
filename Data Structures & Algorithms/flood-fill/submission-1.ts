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
        if(ogColor === color) return image
        const ROWS = image.length
        const COLS = image[0].length

        function dfs(r: number, c: number) {
            if(Math.min(r, c) < 0 || r === ROWS || c === COLS || image[r][c] !== ogColor) {
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
