const a = 100;
const b = 20;
const c = 25;

const operation = (operador, number1, number2) => {
    switch (operador) {
      case '+':
        return number1 + number2;
        break;

      case '-':
        return number1 - number2;
        break;

      case '/':
        return number1 / number2;
        break;

      case '*':
        return number1 * number2;
        break;

      case '%':
        return number1 % number2;
        break;
  }
}

// console.log(operation('/', a, b));

// --------------------------------------------------------------------------------------- //

const maior = () => { if (a > b) { return a } else { return b } };

// console.log(maior(a, b));

// --------------------------------------------------------------------------------------- //

const maiorDeTres = (a, b, c) => {
    if (a > b && a > c) {
        return a 
    } else if (b > a && b > c) {
        return b
    } else {
        return c
    } 
};

// console.log(maiorDeTres(a, b, c));

// --------------------------------------------------------------------------------------- //

const positivo = (number) => {
    if (number > 0) {
        return 'positive';
    } else if (number === 0) {
        return 'zero';
    } else {
        return 'negative';
    };
};

// console.log(positivo(0));

// --------------------------------------------------------------------------------------- //

const anguloTriangulo = (ladoA, ladoB, ladoC) => {
    if ((ladoA + ladoB + ladoC !== 180) || (ladoA < 0 || ladoB < 0 || ladoC < 0)) {
        return false;
    } else {
        return true;
    }
};

// console.log(anguloTriangulo(60, 30, 90));

// --------------------------------------------------------------------------------------- //

const xadrez = (peça) => {
    switch (peça.toLowerCase()) { // sintaxe para que todas as letras da string fiquem minúsculas = stringqualquer.toLowerCase()
        case "rei":
            return "Pode mover-se em qualquer direção, porém apenas uma casa por vez.";
            break;
        case "rainha":
            return "Assim como o Rei, pode mover-se em qualquer direção (vertical, horizontal e diagonal), porém quantas casas quiser, desde que estejam livres.";
            break;
        case "torre":
            return "Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.";
            break;
        case "bispo":
            return "Move-se na diagonal, quantas casas quiser. O Bispo que iniciar a partida em uma casa branca somente poderá transitar pelas brancas, enquanto o Bispo que inicia em uma casa preta somente poderá transitar pelas casas pretas.";
            break;
        case "cavalo":
            return "É a única peça que pode saltar sobre as outras peças do tabuleiro, sejam elas amigas ou inimigas. O movimento executado pelo Cavalo é conhecido por “um-dois” ou “em L”. Ele pode andar duas casas na horizontal e uma na vertical, ou duas na vertical e uma na horizontal, uma na horizontal e duas na vertical, e assim por diante. Quando a casa de saída do Cavalo for escura, a casa de chegada será clara, e vice-versa.";
            break;
        case "peão":
            return "Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas. O peão é a única peça que não pode retroceder, e também a única que efetua a captura com um movimento diferente do utilizado para avançar no tabuleiro. O peão pode capturar as peças que estejam uma fileira acima, mas nas colunas adjacentes a sua.";
            break;
        
        default:
            return "Essa peça não existe ou esta escrita de forma errada. Tente novamente.";
    }
};

// console.log(xadrez('rainha'));

// --------------------------------------------------------------------------------------- //

const notas = (nota) => {
    if (nota > 100 || nota < 0) {
        console.log("Erro");
    } else if (nota >= 90) {
        console.log("Nota A");
    } else if (nota >= 80) {
        console.log("Nota B");
    }  else if (nota >= 70) {
        console.log("Nota C");
    }  else if (nota >= 60) {
        console.log("Nota D");
    }  else if (nota >= 50) {
        console.log("Nota E");
    }  else if (nota < 50) {
        console.log("Nota F");
    }
};

// console.log(notas(55));

// --------------------------------------------------------------------------------------- //

const par = (numero1, numero2, numero3) => {
    if (numero1 % 2 === 0 || numero2 % 2 === 0 || numero3 % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

// console.log(par(7, 19, 21));

const impar = (numero1, numero2, numero3) => {
    if (numero1 % 2 !== 0 || numero2 % 2 !== 0 || numero3 % 2 !== 0) {
        return true;
    } else {
        return false;
    }
}

// console.log(impar(6, 8, 20));

// --------------------------------------------------------------------------------------- //

const vendas = (valorVenda, valorCusto) => {
    let impostoCusto = ((valorCusto * 20) / 100);
    let lucro = ((valorVenda - (valorCusto + impostoCusto)) * 1000);
    if (valorVenda < 0 || valorCusto < 0) {
        return "Os valores de custo e venda devem ser positivos.";
    } else {
        return `Seu lucro é: ${lucro}`;
    }
}

// console.log(vendas(10, 5));

// --------------------------------------------------------------------------------------- //