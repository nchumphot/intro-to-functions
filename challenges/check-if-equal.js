/**
 * Check if two numbers are equal
 * @param {number} numOne - first input number
 * @param {number} numTwo - second input number
 * @returns {boolean} if the two input numbers are equal
 */

function isEqual(numOne, numTwo) {
  return numOne === numTwo;
}

// TEST CASES
console.log("isEqual(4,4):", isEqual(4, 4), "should be true.");
console.log("isEqual(0,0):", isEqual(0, 0), "should be true.");
console.log("isEqual(-4,-4):", isEqual(-4, -4), "should be true.");
console.log("isEqual(4,-4):", isEqual(4, -4), "should be false.");
console.log("isEqual(0,1):", isEqual(0, 1), "should be false.");
