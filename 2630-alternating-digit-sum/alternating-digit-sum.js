/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
    let str='';
    str+=n ;
    let ar =[]
    for(let i=0;i<str.length;i++){
        if((i+1)%2==0){
        ar.push(-parseInt(str[i]))
        }else{
            ar.push(parseInt(str[i]))

        }
    }
    let sum=0

    for(let j=0;j<ar.length;j++){
        sum+=ar[j]
    }
    return sum
};