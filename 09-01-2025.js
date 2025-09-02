#!/usr/bin/env node

function tribonacciSequence(startSequence, length) {
  let tribArray = [];

  if (length > 4) {
    tribArray = startSequence;
    for (let place = 3 ; place < length ; place++) {
      tribArray.push(tribArray[place - 1] + tribArray[place - 2] + tribArray[place- 3]);
    } 
  } else if (length > 0 < 4) {
    return startSequence.slice(0,length);
  }
  return tribArray;
}

console.log(tribonacciSequence([0, 0, 1], 20)) // should return [0, 0, 1, 1, 2, 4, 7, 13, 24, 44, 81, 149, 274, 504, 927, 1705, 3136, 5768, 10609, 19513])
console.log(tribonacciSequence([21, 32, 43], 1)) // should return [21].
console.log(tribonacciSequence([0, 0, 1], 0)) // should return [].
console.log(tribonacciSequence([10, 20, 30], 2)) // should return [10, 20].
console.log(tribonacciSequence([10, 20, 30], 3)) // should return [10, 20, 30].
console.log(tribonacciSequence([123, 456, 789], 8)) // should return [123, 456, 789, 1368, 2613, 4770, 8751, 16134].
