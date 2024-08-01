/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    const rows = image.length;
    const cols = image[0].length;
    const originalColor = image[sr][sc];

    if (originalColor === newColor) {
        return image;
    }

    function dfs(r, c) {
        if (r < 0 || r >= rows || c < 0 || c >= cols || image[r][c] !== originalColor) {
            return;
        }

        image[r][c] = newColor;

        dfs(r + 1, c); // down
        dfs(r - 1, c); // up
        dfs(r, c + 1); // right
        dfs(r, c - 1); // left
    }

    dfs(sr, sc);
    return image;
};

// Example usage:
const image = [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1]
];
const sr = 1, sc = 1, newColor = 2;

console.log(floodFill(image, sr, sc, newColor));
