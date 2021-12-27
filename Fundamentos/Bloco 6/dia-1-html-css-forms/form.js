const select = document.querySelector('#estados');

const estados = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

for (let index = 0; index < estados.length; index += 1) {
    let criadorOptions = document.createElement('option');
    criadorOptions.innerText = estados[index];
    select.appendChild(criadorOptions);
}

/*
if (select.value === "") {
    alert("Estado inválido");
}
*/

const verificaData = () => {
    let data = document.getElementById('data');
    let valorData = data.value;
    for (let index = 0; index < valorData.length; index += 1) {
        let dia = Number(`${valorData[0]}${valorData[1]}`);
        let mes = Number(`${valorData[3]}${valorData[4]}`);
        let ano = Number(`${valorData[6]}${valorData[7]}${valorData[8]}${valorData[9]}`);
        if (valorData.length !== 10 || dia < 0 || dia > 31 || mes < 0 || mes > 12 || ano < 0 || valorData[2] !== "/" || valorData[5] !== "/") {
            alert("Data inválida");
        }
    }
}

verificaData();
/*
let forms = document.getElementById('form');

forms.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('enviou');
});
*/