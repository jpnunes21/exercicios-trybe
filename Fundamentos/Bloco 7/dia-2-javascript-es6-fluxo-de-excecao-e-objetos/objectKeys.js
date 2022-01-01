const tvShow = {
    name: "BoJack Horseman",
    genre: "adult animation",
    createdBy: "Raphael Bob-Waksberg",
    favoriteCharacter: "Princess Carolyn",
    quote: "Princess Carolyn always lands on her feet.",
    seasons: 6,
};

/*
for (let chaves in tvShow) {
    console.log(chaves); // Mostra todas as chaves do objeto. 
}
*/

// Object.keys faz isso com mais facilidade.

console.table(Object.keys(tvShow));

// -------------------------------------- //

const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
  };
  
  const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
  };

const habilidades = (objeto) => {
    let array = Object.keys(objeto);
    for (let index in objeto) {
        console.log(`Nome da habilidade: ${index}, Nível: ${objeto[index]}`);
    }
    // console.table(array);
}

// habilidades(student1);

// Utilizando Object.keys:

const habilidadeNivel = (objeto) => {
    const array = Object.keys(objeto);
    for (let index in array) {
        console.log(`Nome da habilidade: ${array[index]}, Nível: ${objeto[array[index]]}`);
    }
}

habilidadeNivel(student1);