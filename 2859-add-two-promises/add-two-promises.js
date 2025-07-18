/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {

    // const [result1 , result2] = await Promise.all([promise1,promise2]);
    // return result1 + result2;

    return await Promise.all([promise1, promise2]).then(([num1, num2]) => num1 + num2)
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */