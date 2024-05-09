/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
 let c = 0;

for (let i = s.length-1; i>= 0; i--) {
  if (c != 0 && s[i] == " ") {
    break;
  }
  if (s[i] == " ") {
    continue;
  } else {
    c++;
  }
}
return c
};