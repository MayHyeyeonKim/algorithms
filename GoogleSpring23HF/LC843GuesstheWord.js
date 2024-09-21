/**
 * // This is the master's API interface.
 * // You should not implement it, or speculate about its implementation
 * function Master() {
 *
 *     @param {string} word
 *     @return {integer}
 *     this.guess = function(word) {
 *         ...
 *     };
 * };
 */
/**
 * @param {string[]} words
 * @param {Master} master
 * @return {void}
 */
var findSecretWord = function(words, master) {

    // Helper function to count matches
    const countMatches = (word1, word2) => {
        let matches = 0;
        for (let i = 0; i < word1.length; i++) {
            if (word1[i] === word2[i]) {
                matches += 1;
            }
        }
        return matches;
    };

    let attempts = 0;
    let currentWords = words.slice();

    while (attempts < words.length) {
        let random = Math.floor(Math.random() * currentWords.length)
        const guessWord = currentWords[random];
        const matches = master.guess(guessWord);
        if (matches === 6) {
            return;
        }
        currentWords = currentWords.filter(word => countMatches(guessWord, word) === matches);
        attempts += 1;
    }
};