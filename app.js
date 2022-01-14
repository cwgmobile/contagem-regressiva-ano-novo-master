const secondsContainer = document.querySelector('#seconds');  //  função que atualiza o conteúdo do elemento com o valor do segundo
const minutesContainer = document.querySelector('#minutes');  // função que atualiza o conteúdo do elemento com o valor do minuto
const hoursContainer = document.querySelector('#hours');      // função que atualiza o conteúdo do elemento com o valor da hora
const daysContainer = document.querySelector('#days');        // função que atualiza o conteúdo do elemento com o valor do Dia
const countdownContainer = document.querySelector('#countdown');  // função que atualiza o conteúdo do elemento com o valor do segundo
const spinnerLoading = document.querySelector('#loading');    // função do loading

const nextYearContainer = document.querySelector('#year'); // pega a data do ano seguinte já formatada

const nextYear = new Date().getFullYear() + 1 // puxa a data atual e acrescenta 1 ano
const newYearTime = new Date(`january 01 ${nextYear} 00:00:00`); // new Date() é um objeto que representa a data atual

nextYearContainer.textContent = nextYear;  // atualiza o conteúdo do elemento com o valor do segundo

const getTimeUnit = unit => unit < 10 ? `0${unit}` : unit; // função que atualiza o conteúdo do elemento com o valor do segundo


const insertCountdownValues = ({ seconds, days, minutes, hours }) => {   // função que atualiza o conteúdo do elemento com o valor do segundo

    secondsContainer.textContent = getTimeUnit(seconds);    // atualiza o conteúdo do elemento com o valor do segundo
    minutesContainer.textContent = getTimeUnit(minutes);  // atualiza o conteúdo do elemento com o valor do minuto
    hoursContainer.textContent = getTimeUnit(hours);     //   atualiza o conteúdo do elemento com o valor da hora
    daysContainer.textContent = getTimeUnit(days);        //   atualiza o conteúdo do elemento com o valor do dia

};

const updateCountdown = () => {
    const currentTime = new Date();                          // pega a data atual
    const diff = newYearTime - currentTime;                 // pega a diferença entre a data atual e a data do ano seguinte
    const days = Math.floor(diff / 1000 / 60 / 60 / 24);   // pega a quantidade de dias
    const hours = Math.floor(diff / 1000 / 60 / 60) % 24; // pega a quantidade de horas
    const minutes = Math.floor(diff / 1000 / 60) % 60;   // pega a quantidade de minutos
    const seconds = Math.floor(diff / 1000) % 60;     // pega a quantidade de segundos


    insertCountdownValues({ seconds, days, minutes, hours }); // atualiza o conteúdo do elemento com o valor do segundo
};

const handleCountdownDisplay = () => {  // função que atualiza o conteúdo do elemento com o valor do segundo
    spinnerLoading.remove();  // remove o elemento com id loading
    countdownContainer.style.display = 'flex'; // mostra o elemento com id countdown
};


setTimeout(handleCountdownDisplay, 1000); // chama a função handleCountdownDisplay após 1 segundo

setInterval((updateCountdown), 1000);     // chama a função updateCountdown a cada 1 segundo