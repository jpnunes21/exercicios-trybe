let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

numbers.forEach((elemento) => {
    console.log(elemento);
});

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

const soma = (arr) => {
    let contador = 0;
    for (let i = 0; i < arr.length; i += 1) {
        contador = contador + arr[i];
    }
    return contador;
};

// console.log(soma([5, 9, 3, 19, 70, 8, 100, 2, 35, 27]));

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

const media = (array) => {
    let contador = 0;
    for (let index = 0; index < array.length; index += 1) {
        contador += array[index];
    }
    return Math.round(contador / array.length);
}

// console.log(media([5, 9, 3, 19, 70, 8, 100, 2, 35, 27]));

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

const mediaCondition = (array) => {
    let contador = 0;
    for (let index = 0; index < array.length; index += 1) {
        contador += array[index];
    }
    if (contador > 20) {
        return 'Valor maior que 20';
    } else {
        return 'Valor menor que 20'
    }
}

console.log(mediaCondition(numbers));

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

const maiorValor = (array) => {
let maior = 0;
    for (let index = 0; index < array.length; index += 1) {
        if (array[index] > maior) {
            maior = array[index];
        }
    }
    return maior;
}

console.log(maiorValor(numbers));

let numbers = [70, 8, 100, 2];

const impares = (array) => {
let contador = 0;
    for (let index = 0; index < array.length; index += 1) {
        if (array[index] % 2 !== 0) {
            contador += 1;
        }
    }
    if (contador === 0) {
        return 'Nenhum valor ímpar encontrado';
    } else {
        return contador;
    }
}

console.log(impares(numbers));

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

const menorValor = (array) => {
let menor = array[0]
    for (let index = 0; index < array.length; index += 1) {
        if (array[index] < menor) {
            menor = array[index];
        }
    }
    return menor;
}

console.log(menorValor(numbers));

const umVinteCinco = () => {
    for (let index = 0; index <= 25; index += 1) {
        console.log(index / 2);
    }
}

umVinteCinco();
