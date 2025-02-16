/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
    for (let i = 0; i < heights.length; i++) {
        for (let j = 0; j < heights.length; j++) {
            if (heights[j] < heights[i]) {
                let temp = heights[i];
                heights[i] = heights[j];
                heights[j] = temp;

                let NameTemp = names[i];
                names[i] = names[j];
                names[j] = NameTemp;
            }
        }
    }
    return names
};