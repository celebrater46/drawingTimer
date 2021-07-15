"use strict";

const getInterval = () => {
    const element = document.getElementById("interval");
    const items = element.interval;
    for(let i = 0; i < items.length; i++){
        if(items[i].checked){
            return items[i].value;
        }
    }
}

const getRemain = (interval) => {
    let minutes = 0;
    let seconds = 0;
    if(interval > 59) {
        minutes = Math.floor(interval / 60);
        seconds = interval % 60;
    } else {
        seconds = interval;
    }
    return { minutes: minutes, seconds: seconds };
}

const startDrawing = () => {
    const interval = getInterval();
    const remain = getRemain(interval);
}

const test3 = () => {
    // console.log("Hello World");
    const interval = getInterval();
    console.log(interval);
    // const remain = getRemain(350);
    // console.log("remain: ");
    // console.log(remain);
}

// const setTimer = () => {
//     const minutesSeconds = getRemain(getCurrentTime());
//     const elementMinutes = document.clockForm.minutes;
//     const elementSeconds = document.clockForm.seconds;
//     elementMinutes.value = minutesSeconds.minutes;
//     elementSeconds.value = minutesSeconds.seconds;
//     setTimeout(setTimer, 1000);
// }
//
// setTimer();