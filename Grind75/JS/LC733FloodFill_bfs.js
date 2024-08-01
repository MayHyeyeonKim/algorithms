/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFillBFS = function(image, sr, sc, newColor) {
    const rows = image.length;
    const cols = image[0].length;
    const originalColor = image[sr][sc];

    if (originalColor === newColor) {
        return image;
    }

    const queue = [[sr, sc]];

    while (queue.length > 0) {
        const [r, c] = queue.shift();

        if (r < 0 || r >= rows || c < 0 || c >= cols || image[r][c] !== originalColor) {
            continue;
        }

        image[r][c] = newColor;

        queue.push([r + 1, c]); // down
        queue.push([r - 1, c]); // up
        queue.push([r, c + 1]); // right
        queue.push([r, c - 1]); // left
    }

    return image;
};

// Example usage:
const imageBFS = [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1]
];
const srBFS = 1, scBFS = 1, newColorBFS = 2;

console.log(floodFillBFS(imageBFS, srBFS, scBFS, newColorBFS));
