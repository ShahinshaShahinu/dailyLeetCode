/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
    let RealjwelsCount = 0;
    const jwelsType = new Set(jewels);

    for (let stone of stones) {
        if (jwelsType.has(stone)) {
            RealjwelsCount++;
        }
    };
    return RealjwelsCount;


    //  let RealjwelsCount = 0;
    // const jwelsType = new Map();

    // for (let char of jewels) {
    //     if (!jwelsType.has(char)) {
    //         jwelsType.set(char, true);
    //     }
    // };

    // for (let stone of stones) {
    //     if (jwelsType.has(stone)) {
    //         RealjwelsCount++;
    //     }
    // };
    // return RealjwelsCount;
};