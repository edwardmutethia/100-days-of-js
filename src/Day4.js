/**
 * Return the maximum number in an array of integers. Do not use `Math.max`.
 * *Constraints:**
 *      Array length ≥ 1
 *      Numbers can be negative
 */

function findMax(arr) {
    let max = arr[0];
    for (let i in arr) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}

console.log(findMax([1, 3, 7, 2, 9]));
console.log(findMax([-5, -1, -10]));