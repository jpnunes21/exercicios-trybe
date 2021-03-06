const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = `Não devo ser utilizada fora do meu escopo (if).`;
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = `Não devo ser utilizada fora meu escopo (else).`;
    console.log(elseScope);
  }
  // console.log(`${ifScope} o que estou fazendo aqui ?`);  Se necessário esta linha pode ser removida.
}

testingScope(true);

// --------------------------------------------------------------------------------------- //

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const ordem = (array) => {
  array.sort(function (a, b) {
    return a - b;
  });
  console.log(`Os números ${array} se encontram ordenados de forma crescente!`);
}

console.log(ordem(oddsAndEvens));

// Para entender melhor o .sort(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort