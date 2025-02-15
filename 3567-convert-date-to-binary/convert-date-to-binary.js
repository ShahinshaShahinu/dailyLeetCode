/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function (date) {
    const [year, month, day] = date.split('-');
    
    const year1 = parseInt(year).toString(2);
    const month1 = parseInt(month).toString(2);
    const day1 = parseInt(day).toString(2);

    return year1 + "-" + month1 + "-" + day1
};