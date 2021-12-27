/*
// Exercício 1:

for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
}

// Exercício 2:

let soma = 0; // A variável precisa estar definida e já ter um valor atribuído a ela, senão, o resultado será "NaN".
for (let index = 0; index < numbers.length; index += 1) {
    soma += numbers[index];
}
console.log(soma);

// Exercício 3:

let soma = 0;
for (let index = 0; index < numbers.length; index += 1) {
    soma += numbers[index];
}
console.log(soma / numbers.length);

// Exercício 4 (Depende do exercício 3):

if (soma / numbers.length > 20) {
    console.log("Valor maior que 20");
} else {
    console.log("Valor menor ou igual a 20");
}

// Exercício 5:

let maiorValor = 0;
for (index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > maiorValor){
        maiorValor = numbers[index]
    }
}
console.log(maiorValor)

// Exercício 6:

// Só quer saber a quantidade de números ímpares.
let result = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    result += 1;
  }
}

if (result === 0) {
  console.log('nenhum valor ímpar encontrado');
} else {
  console.log(result);
}

// Exercício 7:

// o valor da variável smallestNumber poderia ser qualquer um, desde que fosse maior que o maior número do array numbers. Caso atribuíssemos o valor 1 para a variável, nosso algoritmo estaria errado, pois ele nunca acharia um número menor que 1 no array. Para resolver esse problema vamos iniciar a variavel com o primeiro valor do array. Dessa forma podemos pular a posição 0 e iniciar com index = 1

let smallestNumber = numbers[0]; // Importante ressaltar que não é necessário criar um array vazio, precisamos criar uma variável que faz referência ao array número 1, nesse caso.

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] < smallestNumber) {
    smallestNumber = numbers[index];
  }
}

console.log(smallestNumber);

// Exercício 8:

let array = [];
for (let index = 1; index <= 25; index += 1) {
    array.push(index)
}
console.log(array);

// Exercício 9 (Depende do exercício 8):

let divisao = [];
for (let i = 0; i < array.length; i += 1) {
    divisao.push(array[i] / 2)
}
console.log(divisao);

// Exercício Bônus parte 1:

for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers[index] < numbers[secondIndex]) {
        let position = numbers[index];
        numbers[index] = numbers[secondIndex];
        numbers[secondIndex] = position;
        }
    }
}
console.log(numbers);

// Exercício Bônus parte 2:

for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers[index] > numbers[secondIndex]) {
        let position = numbers[index];
        numbers[index] = numbers[secondIndex];
        numbers[secondIndex] = position;
        }
    }
}
console.log(numbers);

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let novoArray = [];
for (let index = 1; index < numbers.length; index += 1) {
            let multiplicado = numbers[index] * numbers[index - 1];
            novoArray.push(multiplicado);
}

console.log(novoArray);

*/