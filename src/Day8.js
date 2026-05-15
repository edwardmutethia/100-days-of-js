/**
 * Problem:
 * Remove duplicates from an array
 *
 * Constraints:
 * Maintain order of first occurrences
 *
 * @param
 */

function removeDuplicates(arr) {
    // solving using Set
    // return [...new Set(arr)];

    // without set 
    // const unique = [];
    // for (let i = 0; i < arr.length; i++) {
    //     if (!unique.includes(arr[i])) {
    //         unique.push(arr[i]);
    //     }
    // }
    //
    // return unique;

    
    // C style logic
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let found = 0;

        // check if element already exists
        for (let j = 0; j < result.length; j++) {
            if (arr[i] === result[j]) {
                found = 1;
                break;
            }
        }

        // if not found, add to result
        if (found === 0) {
            result.push(arr[i]);
        }
    }

    return result;
}

const arr = [1, 3, 2, 4, 2, 4, 5]

console.log(removeDuplicates(arr));
