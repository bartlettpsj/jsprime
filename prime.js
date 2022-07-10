const process = require('process');

const calculateHighestPrime = (max) => {

    // Is even the make lower odd so we can go down in 2's
    if (max % 2 == 0) max--;

    for (let i = max; i > 2; i -= 2) {
        let isPrime = true;

        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            return i;
        }
    }

    return 0;
}

const getPrimes = (max) => {
    const result = [];

    for (let i = 3; i <= max; i += 2) {
        let isPrime = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            result.push(i);
        }
    }

    return result;
}

const MAX_PRIME = 10000000;

// let start = process.hrtime(); // doesn't work with bun
let start = Date.now();
const maxPrime = calculateHighestPrime(MAX_PRIME);
let stop = Date.now();
// let stop = process.hrtime(start); // doesn't work with bun

console.log(`Maximum prime is ${maxPrime} in ${(stop - start)/1000} seconds`);
//console.log(`Maximum prime is ${maxPrime} in ${(stop[0] * 1e9 + stop[1])/1e9} seconds`);



// start = process.hrtime(); // doesn't work with bun
start = Date.now();
const primes = getPrimes(MAX_PRIME);
// stop = process.hrtime(start); // doesn't work with bun
stop = Date.now();

//console.log(`Got ${primes.length} prime numbers with max ${MAX_PRIME} in ${(stop[0] * 1e9 + stop[1])/1e9} seconds`);
console.log(`Got ${primes.length} prime numbers with max ${MAX_PRIME} in ${(stop - start)/1000} seconds`);
