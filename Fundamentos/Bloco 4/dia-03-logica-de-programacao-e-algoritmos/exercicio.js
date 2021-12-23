const fatorial = (number) => {
let contador = 1;
    for (let index = 1; index <= number; index += 1) {
        contador = index * contador;
        // console.log(contador);
    }
    return contador;
}
console.log(fatorial(10));

const reverte = (palavra) => {
let avesso = '';
    for (let index = palavra.length - 1; index >= 0; index -= 1) {
        avesso += palavra[index];
        // console.log(avesso);
    }
    return avesso;
}
console.log(reverte('tryber'));

const maiorMenor = (array) => {
let maior = array[0]
let menor = array[0]
    for (let index = 1; index < array.length; index += 1) {
        if (array[index].length > maior.length) {
            maior = array[index];
            // console.log(maior);
        }
    }
    for (let index = 1; index < array.length; index += 1) {
        if (array[index].length < menor.length) {
            menor = array[index];
            // console.log(menor);
        }
    }
    return `O maior é: ${maior} e o menor é: ${menor}`
}
console.log(maiorMenor(['java', 'javascript', 'python', 'html', 'css']));


