let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Exercicio 5 - Utilizar o 'for' para descobrir qual o maior valor do array e imprimí-lo

let largestNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] > largestNumber) {
    largestNumber = numbers[index];
  }
}

console.log(largestNumber);