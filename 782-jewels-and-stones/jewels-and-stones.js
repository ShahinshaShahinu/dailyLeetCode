/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
    let RealjwelsCount = 0;
    const jwelsType = new Map();

    for (let char of jewels) {
        jwelsType.set(char, true);
    };

    for (let stone of stones) {
        if (jwelsType.has(stone)) {
            RealjwelsCount++;
        }
    };
    return RealjwelsCount;
};