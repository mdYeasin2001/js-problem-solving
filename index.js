"use strict";

// Parameters: for numArray: array of numbers and for rotate integer number
function rotateLeft(numArray, rotate) {
  for (let i = 0; i < rotate; i++) {
    for (let j = 0; j < numArray.length - 1; j++) {
      let temp = numArray[j];
      numArray[j] = numArray[j + 1];
      numArray[j + 1] = temp;
    }
  }
  return numArray;
}

// sample test cases
const result1 = rotateLeft([1, 2, 3, 4, 5], 4);
console.log(result1);

const result2 = rotateLeft([1, 2, 3], 8);
console.log(result2);
