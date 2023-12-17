/**
 * @param {string} address
 * @return {string}
 */
    var defangIPaddr = function(address) {
        let defanging = '' ;
        for(let i=0;i<address.length;i++){
            if(address[i]=='.'){
                defanging+='[.]'
            }else{
            defanging+=address[i]

            }
        }

        return defanging
    };