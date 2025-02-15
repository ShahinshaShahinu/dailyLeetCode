/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
    let ItemCount = 0;
    // let ruleIndex = ruleKey === 'type' ? 0 : ruleKey === 'color' ? 1 : 2;
    let ruleIndex = {
        type: 0,
        color: 1,
        name: 2
    }
    for (let item of items) {
        if (item[ruleIndex[ruleKey]] === ruleValue) {
            ItemCount++;
        }
    }
    return ItemCount;
};