let moto = {
    nome: 'twister',
    cilindradas: '249,5cc',
    potência: '24cv a 8000 rpm',
}

for (let caracteristicas in moto) {
    console.log(moto[caracteristicas]); // Dessa forma conseguimos o nome dos valores das propriedades. Cada chave tem seu valor, dessa forma conseguimos trabalhar com seus valores.
}

for (let caracteristicas in moto) {
    console.log(caracteristicas); // Dessa forma conseguimos o nome das propriedades (também chamadas de "chaves", "keys").
}

// --------------------------------------------------------------------------------------- //

let pokedex = {
    001: 'Bulbasaur',
    004: 'Charmander',
    007: 'Squirtle',
    025: 'Pikachu'
}

for (let pokemon in pokedex) {
    console.log(pokedex[pokemon]);
}

// --------------------------------------Exercícios--------------------------------------- //

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log(`Bem-vinda, ${info.personagem}`);

info.recorrente = 'Sim'

console.log(info);

for (let keys in info) {
    console.log(keys);
}

for (let valores in info) {
    console.log(info[valores]);
}

let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
};

for (let properties in info) {
    if (
      properties === 'recorrente' &&
      info[properties] === 'Sim' &&
      info2[properties] === 'Sim'
    ) {
      console.log('Ambos recorrentes');
    } else {
      console.log(info[properties] + ' e ' + info2[properties]);
    }
}
