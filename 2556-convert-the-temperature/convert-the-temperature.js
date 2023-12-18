/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
   let kelvin =273.15,fahrenheit=32.00;

    kelvin+=celsius,fahrenheit+=celsius*1.80
   return [kelvin,fahrenheit] 
};