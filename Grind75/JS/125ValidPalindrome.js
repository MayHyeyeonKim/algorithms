function isPalindrome(s) {
    // Helper function to check if a character is alphanumeric
    function isAlphaNumeric(char) {
        return /^[a-zA-Z0-9]$/.test(char);
    }

    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        // Move left pointer to the next alphanumeric character
        while (left < right && !isAlphaNumeric(s[left])) {
            left++;
        }
        // Move right pointer to the previous alphanumeric character
        while (left < right && !isAlphaNumeric(s[right])) {
            right--;
        }
        // Compare the characters
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

// Example usage:
const s = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s)); // Output: true
