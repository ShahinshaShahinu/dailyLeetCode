/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
    let newIP = ""
    for (let i = 0; i < address.length; i++) {
        if (address[i] == ".") {
            newIP += `[${address[i]}]`
        } else {
            newIP += address[i]
        }
    }
    return newIP;
};