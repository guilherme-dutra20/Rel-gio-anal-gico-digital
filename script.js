// buscando os elementos 
let digitalElement = document.querySelector('.digital');
let dateNow = document.querySelector('.data');
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');

// function atualizar o relógio
function updateClock() {

    // separando as etapas do relógio digital
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth();
    let year = today.getFullYear();

    // mostrando o relógio digital (fixzero é a ultima function do código)

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;
    if(month == 12){
        dateNow.innerHTML = `${fixZeroDay(day)}/${fixZeroDay(month - 11)}/${year}`;
    } else {
    dateNow.innerHTML = `${fixZeroDay(day)}/${fixZeroDay(month + 1)}/${year}`;
   }
    /* deg são os graus que vão se mover, -90 é por que a posição de origem no css era
    o horario de 3 horas, logo, precisou voltar 90 graus */ 

    // 360 é a medida em graus de um circulo
    let sDeg = ((360 / 60) * second) - 90;
    let mDeg = ((360 / 60) * minute) - 90;
    let hDeg = ((360 / 12) * hour) - 90;

    sElement.style.transform = `rotate(${sDeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`;
}

function fixZero(time) {

    // retornando a hora com um zero antes quando o numero for menor que 10
    return time < 10 ? `0${time}` : time;
}
 function fixZeroDay(date){

    return date < 10 ? `0${date}` : date;
}

// atualizando de 1 em 1 segundo
setInterval(updateClock, 1000);
updateClock();