
/*

Dica: Num for, para identificarmos o erro, colocamos para imprimir o index.

// Exercício 1:
for(index = 0; index < n; index += 1) { // Primeiramente, acrescentamos n asterisco num espaço vazio.
    vazio += "*"
}
for(i = 0; i < n; i += 1){ // Nessa segunda etapa, ele irá imprimir n vezes a variável que foi recheada no looping anterior. Nesse exemplo, a variável "vazio".
    console.log(vazio);
}

// Exercício 2:
for(index = 0; index < n; index += 1) { // A diferença para o código acima, é que, ao colocarmos um asterisco na variável, ele já imprime a variável e depois retorna o loop adicionando mais um.
    vazio += "*"
    console.log(vazio);
}

*/
/*
n = 5

    *
   **
  ***
 ****
*****
*/

let n = 5;

for(let index = 0; index < n; index += 1) {
    let espaco = " ";
    for(i = n; i > index; i -= 1) {
        espaco += "*";
    }
    console.log(espaco);
}
/* // Exemplo da monitoria.
for (let index = 0; index < 5; index += 1) {
    console.log('Loop atual do primeiro For, index:', index);
    console.log('--------Antes do segundo For--------');
    for (let index2 = 0; index2 < 5; index2 += 1) {
    console.log('Loop atual do segundo For, index:', index2);
    }
    console.log('-------Depois do segundo For---------');
    }; 
*/

























/* Ignorar por enquanto
// EXEMPLO FOR DENTRO DE FOR
let qtd = 10;
let ingredientes = ["queijo","presunto","maionese"];
let sacola = [];
for(let index = 0; index < 10; index+=1){
    //console.log('exectuou fora: ', index)
    let pao = [];
    for( let index = 0; index < ingredientes.length; index+=1){
    // console.log('executou dentro: ', index);
        pao.push(ingredientes[index])
    }
    sacola.push(pao);
}
let paoDois = ["ketchup","mostarda","salsicha"];
sacola.splice(0,pao.length,paoDois);
console.log(sacola);
*/