/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
    if (n <= 2) return 0; // No primes less than 2

    let count = 0;

    for (let i = 2; i < n; i++) {
        let isPrime = true;

        if (i === 2) {
            count++; // 2 is prime
            continue;
        }

        if (i % 2 === 0) {
            isPrime = false; // Skip even numbers greater than 2
        } else {
            // Check divisibility from 3 to the square root of i
            for (let j = 3; j * j <= i; j += 2) {
                if (i % j === 0) {
                    isPrime = false; // Found a divisor
                    break;
                }
            }
        }

        if (isPrime) count++; // Count the prime number
    }

    return count;
};
