/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
    if (n <= 2) return 0;

    // Create a boolean array to mark prime numbers
    let isPrime = new Array(n).fill(true);
    isPrime[0] = isPrime[1] = false; // 0 and 1 are not prime numbers

    for (let i = 2; i * i < n; i++) {
        if (isPrime[i]) {
            // Mark all multiples of i as non-prime
            for (let j = i * i; j < n; j += i) {
                isPrime[j] = false;
            }
        }
    }

    // Count the number of prime numbers
    let count = 0;
    for (let i = 2; i < n; i++) {
        if (isPrime[i]) count++;
    }

    return count;
};
