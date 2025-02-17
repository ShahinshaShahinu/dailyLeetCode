/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function (s) {
    const cells = [];
    const [fromLetter, fromNum, , endLetter, endNum] = s;
    for (let i = fromLetter.charCodeAt(); i <= endLetter.charCodeAt(); i++) {
        for (let j = fromNum; j <= endNum; j++) {
            cells.push(String.fromCharCode(i) + j)
        }
    }
    return cells
};