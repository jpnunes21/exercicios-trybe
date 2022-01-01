const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

// console.table(customer);

// Formas de adicionar novas propriedades em um objeto: 

customer.lastName = 'Faria'; // Forma nº 1.

console.table(customer);

const customer2 = {
  firstName: 'Maria',
  age: 23,
  job: 'Medic',
};

// console.table(customer2);

customer2['lastName'] = 'Silva'; // Forma nº 2.

console.table(customer2);

// Forma nº 3:

const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};
/*
let newKey = 'lastName';
const lastName = 'Ferreira';
*/
customer['lastName'] = 'Ferreira';
// newKey = 'fullName';
const fullName = `${customer.firstName} ${customer.lastName}`;
customer['fullName'] = fullName;
console.table(customer);

// ------------------ Fixação ------------------- //

const objetos = (objeto, chave, valor) => {
  let key = chave;
  let resultado = valor;
  objeto[key] = resultado;
  return objeto;
}

let items = {
  sobrenome: 'Ramos',
};

console.table(objetos(items, 'nome', 'João'));