/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
    // let ItemCount = 0;
    let ruleIndex = {
        type: 0,
        color: 1,
        name: 2
    }
    // first mehtod
    // let ruleIndex = ruleKey === 'type' ? 0 : ruleKey === 'color' ? 1 : 2;
    // for (let item of items) {
    //     if (item[ruleIndex] === ruleValue) {
    //         ItemCount++;
    //     }
    // }
    // second method

    // for (let item of items) {
    //     if (item[ruleIndex[ruleKey]] === ruleValue) {
    //         ItemCount++;
    //     }
    // }
    // return ItemCount;
    // third method
    // instead of for loop 
    // return items.filter((item) => item[ruleIndex[ruleKey] === ruleValue]).length;

    // let indexMap = { "type": 0, "color": 1, "name": 2 }
    let index = ruleIndex[ruleKey];
    return items.filter((item) => item[ruleIndex[ruleKey]] === ruleValue).length;

};