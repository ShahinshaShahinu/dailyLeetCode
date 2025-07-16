/**
 * @param {string} val
 * @return {Object}
 */
function expect(val) {
    return {
        toBe: function(expected) {
            if (val === expected) {
                return true;
            } else {
                throw new Error("Not Equal");
            }
        },
        notToBe: function(unexpected) {
            if (val !== unexpected) {
                return true;
            } else {
                throw new Error("Equal");
            }
        }
    };
}


try {
    const result = expect(5).toBe(5);
    console.log({ value: result });  // Output: { value: true }
} catch (err) {
    console.log({ error: err.message });
}
try{


const result = expect(10).toBe(5);
 console.log({ value: result });
} catch(err){
     console.log({ error: err.message });
}
/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */