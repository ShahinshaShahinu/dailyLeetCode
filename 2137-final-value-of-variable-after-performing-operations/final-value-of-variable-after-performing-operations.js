/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    //  let x = 0 ;
    // for(let i=0; i<operations.length; i++){
    //     if(operations[i] === 'X--' || operations[i]  === '--X' ){
    //         x-- ;
    //     } 
    //     else {
    //         x++ ;
    //     }
    // }
    // return x ;
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