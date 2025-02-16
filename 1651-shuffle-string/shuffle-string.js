/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
    const NewArray = new Array(indices.length);
    for (let i = 0; i < indices.length; i++) {
        NewArray[indices[i]] = s[i];
    }
    return NewArray.join('');
};