// Object.entries retorna um array com os elementos sendo arrays:

const tvShow = {
    name: "BoJack Horseman",
    genre: "adult animation",
    createdBy: "Raphael Bob-Waksberg",
    favoriteCharacter: "Princess Carolyn",
    quote: "Princess Carolyn always lands on her feet.",
    seasons: 6,
};
  
const arrayDoObjeto = Object.entries(tvShow);

// console.log(arrayDoObjeto);

for (let index in tvShow) {
    console.log([index, tvShow[index]]);
}

// Exemplo de uso do Object.entries:

const países = {
    França: 'Paris',
    Brasil: 'Brasília',
    Espanha: 'Madrid',
    Portugal: 'Lisboa',
};

const pairKeyValue = Object.entries(países);

console.table(pairKeyValue);

for(index in pairKeyValue) {
    console.log('--------');
    console.log('País:', pairKeyValue[index][0]);
    console.log('Capital:', pairKeyValue[index][1]);
};