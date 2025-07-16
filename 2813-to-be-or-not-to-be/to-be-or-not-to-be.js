/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
    return {
        toBe: function (value) {
            if (val === value) return true;
            throw new Error("Not Equal")
        },
        notToBe: function (value) {
            if (val !== value) return true;
            throw new Error("Equal")
        }

    };
};


try {
    const result = expect(5).toBe(5);
    console.log({ "value": result })
} catch (error) {
    console.log({ error: error.message })
}
try {
    const result = expect(5).notToBe(5)
    console.log({ "value": result })
} catch (error) {
    console.log({ error: error.message })
}

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */