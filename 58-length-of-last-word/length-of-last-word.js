/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
      s = s.trim();
    s = s.substring(s.lastIndexOf(' '))
    s = s.trim();
    return s.length;
};
