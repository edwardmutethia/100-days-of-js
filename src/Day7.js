/**
 * Problem:
 * Reverse the order of words in a sentence (not the caharacters);
 *
 * Constraints
 * Words separated by single spaces
 * No built-in reverse allowed
 *
 */

function reverseWords(sentence) {
    const words = sentence.split(" ");
    const reverseArray = [];
    for (let i = words.length - 1; i >= 0; i--) {
        reverseArray.push(words[i]);
    }

    return reverseArray.join(" ");
}

console.log(reverseWords("I love JavaScript"));
