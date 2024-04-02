function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function filterPrimes(array) {
    return array.filter(num => isPrime(num));
}

// console the function
const inputArray = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const primeNumbers = filterPrimes(inputArray);
console.log(primeNumbers); // Output: [11, 13, 17, 19]