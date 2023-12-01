/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    let st1='',st2=''

    for(let i=0;i<word1.length;i++){
        st1 +=word1[i]
    }
    for(let i=0;i<word2.length;i++){
        st2 +=word2[i]
    }

    if(st1==st2){
        return true
    }else{
        return false
    }


};