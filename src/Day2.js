/**
 * Check if a given string is a palindrome (reads the same forward and backward).
 * 
 * **Constraints:**
 *  Ignore spaces and case
 *  Input contains only alphanumeric and spaces
 *  Return 'true' or 'false' (boolean)
 */

function isPalindrome(str) {
    let normalized = str.replace(/\s/g, "").toLowerCase();
    let left = 0;
    let right = normalized.length - 1;

    // two-pointer approach
    // compares characters from both ends moving towards the middle
    // avoids creating a full reversed string and can exit early if a mismatch is found
    // Reduced space complexity from O(n) to O(1)
    // (excluding the normalized string creation) by avoiding the construction
    // of a full reversed string
    while (left < right) {
        if (normalized[left] !== normalized[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}

console.log(isPalindrome("Race car")); // true
console.log(isPalindrome("hello"));    // false
console.log(isPalindrome("A man a plan a canal Panama")); // true
console.log(isPalindrome("12321"));    // true
console.log(isPalindrome("12345"));    // false
