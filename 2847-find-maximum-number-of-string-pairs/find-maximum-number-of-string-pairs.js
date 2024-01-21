/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function (words) {
    let k = [...words];
    let c = 0;

    let i = 0;


    while (i < k.length) {
        let item = k[i];


        for (let j = i + 1; j < k.length; j++) {

            if (k[j] == item || k[j].split('').reverse().join('') == item) {
                c++
                break
            }
        }
        i++
    }

    return c
};