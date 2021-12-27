/*
let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: { 
        golden: 2, 
        silver: 3 
    },
    bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
}
console.log("A jogadora " + player.name + " " + player.lastName + " tem " + player.age + " anos de idade");

console.log("A jogadora " + player.name + " " + player.lastName + " foi eleita a melhor do mundo por " + player.bestInTheWorld.length + " vezes.")

console.log("A jogadora possui " + player.medals.golden + " medalhas de ouro e " + player.medals.silver + " medalhas de prata.")


// Exercícios For/In:

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
console.log("Bem-vinda, " + info.personagem); //Ou console.log("Bem-vinda, " + info['persongem']);

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
info['recorrente'] = 'Sim';
console.log(info);

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
};

for (let propriedades in info) {
    console.log(info[propriedades])
}

for (let propriedades in info) {
    console.log(propriedades);
}

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
};
let infoDois = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Não',
};

for (let properties in info) {
    if (
        properties === 'recorrente' && info[properties] === 'Sim' && infoDois[properties] === 'Sim'
    ) {
        console.log("Ambos recorrentes");
    } else {
        console.log(info[properties] + ' e ' + infoDois[properties]);
    }
}

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
};
console.log("O livro favorito da " + leitor.nome + " " + leitor.sobrenome + " se chama " + '"' + leitor.livrosFavoritos[0].titulo + '".'); // Pode ser resolvido da seguinte forma : console.log("O livro favorito da " + leitor['nome'] + ' ' + leitor['sobrenome'] + ' se chama ' + '"' + leitor['livrosFavoritos'][0]['titulo'] + '"');

// Adicionando um objeto ao array dentro de um objeto:

leitor.livrosFavoritos.push(
    {
      titulo: 'Harry Potter e o Prisioneiro de Azkaban',
      autor: 'JK Rowling',
      editor: 'Rocco',
    },
);
console.log(leitor);
console.log(leitor.nome + " tem " + leitor.livrosFavoritos.length + " livros favoritos."); 






function techList(array, name) {
    // seu código aqui
let arrayVazio= [];
    for (index = 0; index < array.length; index += 1) {
        let object = {
            tech: array[index],
            name: name,
        };
        arrayVazio.push(object)
    }
    let organizado = arrayVazio.sort (function (a,b) {
        if (a.tech > b.tech) {
            return 1;
        } else if (a.tech < b.tech) {
            return -1;
        } else if (a.tech === b.tech) {
            return 0;
        }
    });
    return organizado;
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "João"));

let array = ["React", "Jest", "HTML", "CSS", "JavaScript"];
let nome = "João";
let arrayVazio= [];
let terceiro = [];
for (index = 0; index < array.length; index += 1) {
    let object = {
        tech: array[index],
        name: nome,
    };
    arrayVazio.push(object);
}
console.log(arrayVazio);

console.log(arrayVazio.sort (function (a,b) {
    if (a.tech > b.tech) {
        return 1;
    } else if (a.tech < b.tech) {
        return -1;
    } else if (a.tech === b.tech) {
        return 0;
    }
}))
*/
