/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
    const ans = [];
    const kelvin = celsius + 273.15;
    const fahrenheit = (celsius * 1.8) + 32.00;
    ans.push(kelvin, fahrenheit);  
  return ans 
};