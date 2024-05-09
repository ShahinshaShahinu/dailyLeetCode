/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
let f  = true;
let NewS= '' ;
let er = ["[",
  ",", ":", " ", ".", "@", "#", "$", ",", "%", "^", "&", "*", "()", ")", "]", "_", "-", "}", "{", "/", `"`, `'`, `\\`
  ,"?",";",":","!","(" ,"`"
];
let eq = false ;

for (let j = 0; j < s.length; j++) {
  for (let i = 0; i < er.length; i++) {
    if(s[j] == er[i]){
      eq=true;
      break
    }
  }
  if(eq != true){
    NewS+=s[j]
  }
  eq=false
}

NewS = NewS.toLowerCase()

for(let i = 0 ;i<NewS.length ;i++) {
    if(NewS[i] != NewS[NewS.length-1-i]){
      f= false
      break;
    }
}

return f
};