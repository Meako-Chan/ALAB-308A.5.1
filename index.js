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

console.log("Print prime numbers up to 23:");
console.log("--------------------------");
primeNumbers(primeNumber);

console.log("Print sum of numbers array: ");
console.log("--------------------------");
console.log(sum(numbers));

console.log("Print average of numbers array: ");
console.log("--------------------------");
console.log(average(numbers));

let foods = ['pizza', 'hot dog', 'burger', 'macaroni and cheese'];
console.log("Print longest food in foods array:")
console.log("--------------------------");
console.log(longest_string(foods));
console.log("Print foods longer than 5 in size:")
console.log("--------------------------");
console.log(stringsLongerThan(foods, 5));
let n = 8;
console.log("Print numbers from 1 to 8:")
console.log("--------------------------");
printNumbers(n);



let unflattened_arr = [8, [2,3], [[2,5],6]];
unflattened_arr = flattenArr(unflattened_arr);

console.log("Print flattened array of numbers:");
console.log("--------------------------");
console.log(unflattened_arr);