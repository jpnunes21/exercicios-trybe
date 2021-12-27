const a = 21;
const b = 90;
const c = 38;


console.log(a + b);
console.log(b - a);
console.log(b / a);
console.log(a * b);
console.log(b % a);

if (a > b) {
    console.log(a);
} else {
    console.log(b);
}

if (a > b && a > c) {
    console.log(a);
} else if (b > a && b > c) { 
    console.log(b);
} else {
    console.log(c);
}

if (numero > 0) {
    console.log("positive");
} else if (numero < 0) {
    console.log("negative");
} else {
    console.log(0);
}

let triangle = (a + b + c);
if (triangle == 180) {
    console.log(true);
} else {
    if (a < 0 || b < 0 || c < 0){
        console.log("Ângulo inválido");
    } else {
        console.log(false)
    }
}

let peça = "RaInhA";
switch (peça.toLowerCase()) { // sintaxe para que todas as letras da string fiquem minúsculas = stringqualquer.toLowerCase()
    case "rei":
        console.log("Pode mover-se em qualquer direção, porém apenas uma casa por vez.");
        break;
    case "rainha":
        console.log("Assim como o Rei, pode mover-se em qualquer direção (vertical, horizontal e diagonal), porém quantas casas quiser, desde que estejam livres.");
        break;
    case "torre":
        console.log("Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.")
        break;
    case "bispo":
        console.log("Move-se na diagonal, quantas casas quiser. O Bispo que iniciar a partida em uma casa branca somente poderá transitar pelas brancas, enquanto o Bispo que inicia em uma casa preta somente poderá transitar pelas casas pretas.")
        break;
    case "cavalo":
        console.log("É a única peça que pode saltar sobre as outras peças do tabuleiro, sejam elas amigas ou inimigas. O movimento executado pelo Cavalo é conhecido por “um-dois” ou “em L”. Ele pode andar duas casas na horizontal e uma na vertical, ou duas na vertical e uma na horizontal, uma na horizontal e duas na vertical, e assim por diante. Quando a casa de saída do Cavalo for escura, a casa de chegada será clara, e vice-versa.");
        break;
    case "peão":
        console.log("Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas. O peão é a única peça que não pode retroceder, e também a única que efetua a captura com um movimento diferente do utilizado para avançar no tabuleiro. O peão pode capturar as peças que estejam uma fileira acima, mas nas colunas adjacentes a sua.");
        break;
    
    default:
        console.log("Essa peça não existe ou esta escrita de forma errada. Tente novamente.")
}

// Questão 7:

let nota = 30;
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

// Questão 8:

if (a % 2 != 0 || b % 2 != 0 || c % 2 != 0){
    console.log(false);
} else {
    console.log(true)
}

if (a % 2 != 0 || b % 2 != 0 || c % 2 != 0){
    console.log(true);
} else {
    console.log(false);
}

// Questão 10:

const venda = 20;
const custo = 4;
let impostoCusto = ((custo * 20) / 100);
let lucro = ((venda - (custo + impostoCusto)) * 1000);
if (venda < 0 || custo < 0) {
    console.log("Os valores de custo e venda devem ser positivos.")
} else {
    console.log(`Seu lucro é: ${lucro}`)
}


// Questão 11:

let ir;
let inss;
let salarioBruto = 3000;

if (salarioBruto <= 1556.94) {
    inss = ((salarioBruto * 8) / 100);
} else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
    inss = ((salarioBruto * 9) / 100);
} else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82) {
    inss = ((salarioBruto * 11) / 100);
} else if (salarioBruto > 5189.82) {
    inss = 570.88
}

let salarioPreIr = (salarioBruto - inss);
if (salarioPreIr <= 1903.98) {
    ir = 0;
} else if (salarioPreIr > 1903.98 && salarioPreIr <= 2826.65) {
    ir = (((salarioPreIr * 7.5) / 100) - 142.80);
} else if (salarioPreIr > 2826.65 && salarioPreIr <= 3751.05) {
    ir = (((salarioPreIr * 15) / 100) - 354.80);
} else if (salarioPreIr > 3751.05 && salarioPreIr <= 4664.68) {
    ir = (((salarioPreIr * 22.5) / 100) - 636.13);
} else if (salarioPreIr > 4664.68) {
    ir = (((salarioPreIr * 27.5) / 100) - 869.36);
}

let salario = salarioPreIr - ir;

console.log(inss);
console.log(ir);
console.log(salario)