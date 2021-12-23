function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;
  
        weekDaysList.appendChild(dayListItem);
    };
};
  
createDaysOfTheWeek();
  
// Escreva seu código abaixo.

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

const addDays = () => {
let listaNaoOrdenadaDays = document.getElementById('days');
    for (let index = 0; index < dezDaysList.length; index += 1) {
        if (index !== 25 && index !== 26 && index !== 32 && index !== 5 && index !== 12 && index !== 19) {
            let criaLi = document.createElement('li');
            criaLi.className = 'day';
            criaLi.innerHTML = dezDaysList[index];
            listaNaoOrdenadaDays.appendChild(criaLi);
        } else if (index === 25 || index === 32) {
            let criaLi = document.createElement('li');
            criaLi.className = 'day';
            criaLi.classList.add('holiday');
            criaLi.innerHTML = dezDaysList[index];
            listaNaoOrdenadaDays.appendChild(criaLi);
        } else if (index === 5 || index === 12 || index === 19) {
            let criaLi = document.createElement('li');
            criaLi.className = 'day';
            criaLi.classList.add('friday');
            criaLi.innerHTML = dezDaysList[index];
            listaNaoOrdenadaDays.appendChild(criaLi);
        } else if (index === 26) {
            let criaLi = document.createElement('li');
            criaLi.className = 'day';
            criaLi.classList.add('friday');
            criaLi.classList.add('holiday');
            criaLi.innerHTML = dezDaysList[index];
            listaNaoOrdenadaDays.appendChild(criaLi);
        }
    }
}

addDays();

const holiday = (Feriados) => {
    let pai = document.getElementsByClassName('buttons-container')[0];
    let button = document.createElement('button');
    button.id = 'btn-holiday';
    button.innerHTML = Feriados;
    pai.appendChild(button);
}

holiday('Feriados');

let botaoFeriados = document.getElementById('btn-holiday');

let comHoliday = document.getElementsByClassName('holiday');

const clicou = () => {
    for (let index = 0; index < comHoliday.length; index += 1) {
        if (comHoliday[index].style.backgroundColor === "white") {
            comHoliday[index].style.backgroundColor = "rgb(238,238,238)";
        } else {
            comHoliday[index].style.backgroundColor = "white";
        }
    }
}

botaoFeriados.addEventListener('click', clicou);

const friday = (SextaFeira) => {
    let pai2 = document.getElementsByClassName('buttons-container')[0];
    let button2 = document.createElement('button');
    button2.id = 'btn-friday';
    button2.innerHTML = SextaFeira;
    pai2.appendChild(button2);
}

friday('Sexta-feira');

let botaoSexta = document.getElementById('btn-friday');

let comSexta = document.getElementsByClassName('friday');

botaoSexta.addEventListener('click', function () {
    for (let index = 0; index < comSexta.length; index += 1) {
        if (comSexta[index].innerHTML !== "Sextou") {
            comSexta[index].innerHTML = "Sextou";
        } else {
            if (index === 0) {
                comSexta[index].innerHTML = 4;
            } else if (index === 1) {
                comSexta[index].innerHTML = 11;
            } else if (index === 2) {
                comSexta[index].innerHTML = 18;
            } else if (index === 3) {
                comSexta[index].innerHTML = 25;
            }
        }
    }
});
 
let dias = document.getElementsByClassName('day');

const zoom = (event) => {
    event.target.style.fontSize = '50px';
}

const tiraZoom = (event) => {
    event.target.style.fontSize = '20px';
}

for (let index = 0; index < dias.length; index += 1) {
    dias[index].addEventListener("mouseover", zoom);
    dias[index].addEventListener("mouseleave", tiraZoom);
}

const tiraZoomDois = (event) => {
    event.target.style.fontSize = '25px';
}

const tarefa = () => {
    let pai = document.getElementsByClassName('my-tasks')[0];
    let valor = document.getElementById('task-input');
    let criando = document.createElement('p');
    criando.innerHTML = valor.value;
    pai.appendChild(criando);
    valor.value = "";
    criando.style.color = `rgb( ${Math.floor((Math.random() * 256))}, ${Math.floor((Math.random() * 256))}, ${Math.floor((Math.random() * 256))})`;
    criando.addEventListener('mouseover', zoom);
    criando.addEventListener("mouseleave", tiraZoomDois);
}

let botaoAdd = document.getElementById("btn-add");

botaoAdd.addEventListener('click', tarefa);