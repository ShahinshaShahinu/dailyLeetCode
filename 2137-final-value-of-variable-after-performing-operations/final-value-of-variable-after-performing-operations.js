/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
  
    let X = 0;
  for (let i = 0; i < operations.length; i++) {
    let operation = operations[i];

    if (operation === "++X" || operation === "X++") {
      X++;
    } else {
      X--;
    }
  }
  return X;
};