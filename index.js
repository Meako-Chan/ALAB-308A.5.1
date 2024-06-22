//This code imports using ALAB 308A.1.1 and  ALAB 308.5.1.
//From ALAB 308A.1.1  I imported prime.js to check whether a number is Prime, and to print primeNumbers from 1 to n.
//From ALAB 308.5.1 Imported Array.js and functions.js for sum of numbers, average, flatten arrays
import{isPrime, primeNumbers} from './prime.js';
import{sum,average,longest_string,stringsLongerThan,printNumbers} from './functions.js';
import{flattenArr} from './Array.js';

let numbers = [8,5,3,5,7];
let primeNumber = 23;

console.log("Check whether 5 is prime: ");
console.log("--------------------------");

console.log(isPrime(5));
//Print Prime numbers up to 23
primeNumbers(primeNumber);
console.log(sum(numbers));
let unflattened_arr = [8, [2,3], [[2,5],6]];
unflattened_arr = flattenArr(unflattened_arr);
console.log(unflattened_arr);