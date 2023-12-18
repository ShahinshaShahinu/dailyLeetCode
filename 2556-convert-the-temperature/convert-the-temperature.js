/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
    const ans = [];
    ans.push(celsius+273.15,32.00+celsius*1.80);
    return ans 
};