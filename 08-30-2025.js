#!/usr/bin/env node

function findDuplicates(arr) {
    let sortedArray = arr.sort((a, b) => a - b);
    let result = [];

    for (let i = 0; i < sortedArray.length; i++) {
      if (sortedArray[i] === sortedArray[i+1] && !result.includes(sortedArray[i])) {
        result.push(sortedArray[i]);
      };
    }

    return result
}

console.log(findDuplicates([0,0,2,3,3])); // It should output [0,3]
console.log(findDuplicates([3,4,5,4,5,5])); // It should output [4,5]
console.log(findDuplicates([2, 34, 0, 1, -6, 23, 5, 3, 2, 5, 67, -6, 23, 2, 43, 2, 12, 0, 2, 4, 4])); // It should output )) [-6, 0, 2, 4, 5, 23]
