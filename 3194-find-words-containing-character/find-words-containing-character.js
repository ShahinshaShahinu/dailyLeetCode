/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let ar=[]
    for(let i=0;i<words.length;i++){
        let str=words[i]
       
            if(str.includes(x)){
                ar.push(i);
                
            }
        
    }

    return ar

};