const tvShow = {
    name: "BoJack Horseman",
    genre: "adult animation",
    createdBy: "Raphael Bob-Waksberg",
    favoriteCharacter: "Princess Carolyn",
    quote: "Princess Carolyn always lands on her feet.",
    seasons: 6,
};

/*
for (let keys in tvShow) {
    console.log(tvShow[keys]);
}
*/

// Utilizando o Object.values:

let arrayValues = Object.values(tvShow);

console.log(arrayValues);

for (let i = 0; i < arrayValues.length; i += 1) {
    console.log(`Valores das chaves em tvShow: ${arrayValues[i]}`);
}

// Exemplo de uso do Object.values:

const student = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkill: 'Ótimo',
};

const valores = (objeto) => {
    let habilidades = [];
    for (const habilidade in objeto) {
        habilidades.push(objeto[habilidade]);
    }
    return habilidades;
}

console.log(valores(student));

// Ou...

const valoresComObject = Object.values(student);

console.log(valoresComObject);