/**
 * Problem: Write a function that takes a string and returns it reversed.
 * Do not use the built-in .reverse() method.
 *
 * Constraints:
 *
 * Input string length ≤ 1000
 * Must use iteration or recursion
 */

function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i > 0; i--) {
        reversed += str[i];
    }

    return reversed;
}

console.log(reverseString("hello"));



