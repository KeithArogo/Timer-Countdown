const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minsElement = document.getElementById('mins');
const secondsElement = document.getElementById('seconds');



const targetDay = '1 Jan 2022';

function countdown() {
    const targetDayDate = new Date(targetDay);
    const currentDate = new Date();

    const totalSeconds = (targetDayDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysElement.innerHTML = days;
    hoursElement.innerHTML = hours;
    minsElement.innerHTML = mins;
    secondsElement.innerHTML = seconds;


    
}



countdown();
setInterval(countdown, 1000)
