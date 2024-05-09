/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
    return function(x) {
          // Iterate over each function in reverse order and apply it to the input
        for (let i = functions.length - 1; i >= 0; i--) {
            x = functions[i](x);
        }
        return x; // Return the result after applying all functions
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */