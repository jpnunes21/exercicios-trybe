// A função recebe um número qualquer de parâmetros. Todos são agregados como valores para adicionar ao objeto de destino!

Object.assign(destino, objeto1);
Object.assign(destino, objeto1, objeto2);
Object.assign(destino, objeto1, objeto2, objeto3, objeto4);

let objetoDestino = {
    nome: 'João',
    sobrenome: 'Nunes',
};

let objetoTeste = {
    idade: 22,
    profissao: 'Engenheiro de Software',
};

let totalTeste = Object.assign(objetoDestino, objetoTeste);

console.table(totalTeste);

// Exemplo de uso do Object.assign:

const person = {
    name: 'Alberto',
    lastName: 'Gomes',
    age: 20,
};
  
const info = {
    age: 23,
    job: 'engenheiro',
};
  
const family = {
    children: ['Maria', 'João'],
    wife: 'Ana',
};
  
Object.assign(person, info, family)
console.log(person)
  
/*
Output 
{ 
    name: 'Alberto',
    lastName: 'Gomes',
    age: 23,            -----> Este foi sobreposto!
    job: 'engenheiro',
    children: [ 'Maria', 'João' ],
    wife: 'Ana'
}
*/

// Outro exemplo:

const person = {
    name: 'Roberto',
};
  
const lastName = {
    lastName: 'Silva',
};
  
const clone = Object.assign(person, lastName);
  
console.log(clone); // { name: 'Roberto', lastName: 'Silva' }
console.log(person); // { name: 'Roberto', lastName: 'Silva' }

// ------------------------------------------------------------- //

clone.name = 'Maria';

console.log('Mudando a propriedade name através do objeto clone')
console.log(clone); // Output: { name: 'Maria', lastName: 'Silva' }
console.log(person); // Output: { name: 'Maria', lastName: 'Silva' }
console.log('--------------');

person.lastName = 'Ferreira';

console.log('Mudando a propriedade lastName através do objeto person');
console.log(clone); // Output: { name: 'Maria', lastName: 'Ferreira' }
console.log(person); // Output: { name: 'Maria', lastName: 'Ferreira' }

// Outra forma de se copiar um objeto:

const obj = { value1: 10, value2: 11 };
const cloneObj = obj;

console.table(obj);
console.table(cloneObj);

obj.value2 = 20;

console.table(obj);

console.table(cloneObj);

// Para resolver esse problema de alteação do nosso clone do objeto obj:


const person = {
    name:'Roberto',
};
  
const lastName = {
    lastName: 'Silva',
};
  
const newPerson = Object.assign({},person,lastName); // Como objeto de destino colocamos um objeto vazio, para isso o Object.assign precisa estar vinculado a uma nova variavel, nesse caso, newPerson.
newPerson.name = 'Gilberto';
console.log(newPerson);
console.log(person);