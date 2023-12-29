/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let ar=[]
    for(let i=0;i<words.length;i++){
        let str=words[i]
        for(let j=0;j<str.length;j++){
            if(str[j]==x){
                ar.push(i);
                break;
            }
        }
    }

    return ar
};