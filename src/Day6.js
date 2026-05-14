/**
 * Problem
 *  Return the `n`th Fibonacci number (0-indexed)
 *
 *  Constraints
 *
 *  `0 <= n <= 30`
 *
 */

function fibonacci(n) {
    let first = 0;
    let second = 1;

    if (n === 1) return first;
    if (n === 2) return second;

    for (let i = 3; i <= n; i++) {
        next = first + second;
        first = second;
        second = next;
    } 

    return second;
}

console.log(fibonacci(2));
