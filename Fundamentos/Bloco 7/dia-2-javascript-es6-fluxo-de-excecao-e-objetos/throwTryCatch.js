const sum = (value1, value2) => value1 + value2;

console.log(sum(2, 3));

// ----------------------------------------------- //

const sum = (value1, value2) => value1 + value2;

console.log(sum(2, '3')); // resultado: 23

// ----------------------------------------------- //

const sum = (value1, value2) => {
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    return 'Os valores devem ser numéricos';
  }
  return value1 + value2;
};

console.log(sum(2, '3'));

// ----------------------------------------------- //

// Você precisa indicar de alguma forma que ocorreu um erro. Para isso existe o fluxo de exceção. Quando um erro acontece em Javascript, devemos lançar uma exceção, que vai interromper o funcionamento do código. Essa é a função do throw:

const sum = (value1, value2) => {
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    throw new Error('Os valores devem ser numéricos');
  }
  return value1 + value2;
};

console.log(sum(2, '3'));

// Percebeu a diferença? Agora a execução da função sum foi interrompida e temos uma mensagem de erro no console, bem como uma indicação da linha onde esse erro ocorre.

// ---------------- Try/Catch ------------------ // 

const verifyIsNumber = (value1, value2) => {
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    throw new Error('Os valores devem ser numéricos');
  }
};

const sum = (value1, value2) => {
  try {
    verifyIsNumber(value1, value2);
    return value1 + value2;
  } catch (error) {
    throw error.message;
  }
};

console.log(sum(2, '3'));

