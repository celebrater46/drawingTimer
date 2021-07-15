"use strict";

const getInterval = () => {
    const element = document.getElementById("interval");
    let minutes = parseInt(element.setMinutes.value);
    let seconds = parseInt(element.setSeconds.value);
    if(minutes < 10) {
        minutes = "0" + minutes;
    } else if(minutes > 99) {
        minutes = 99;
    }
    if(seconds < 10) {
        seconds = "0" + seconds;
    } else if(seconds > 59) {
        seconds = 59;
    }
    return { minutes: minutes, seconds: seconds };
    // const items = element.interval;
    // for(let i = 0; i < items.length; i++){
    //     if(items[i].checked){
    //         return items[i].value;
    //     }
    // }
}

const getRemain = (interval) => { // interval == obj
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

const timeOver = () => {
    console.log("Time up!");
}

const decreaseTimer = (interval) => {
    let minutes = interval.minutes;
    let seconds = interval.seconds;
    if(seconds < 1 && minutes > 0) {
        seconds = 59;
        minutes--;
    } else {
        seconds--;
    }
    return { minutes: minutes, seconds: seconds };
}

const updateDom = (interval) => {
    const elementMinutes = document.clockForm.minutes;
    const elementSeconds = document.clockForm.seconds;
    elementMinutes.value = interval.minutes;
    elementSeconds.value = interval.seconds;
}

const setTimer = () => {
    // const minutesSeconds = getRemain(getCurrentTime());
    const interval = getInterval();
    updateDom(interval);
    // const remain = getRemain(interval);
    decreaseTimer(interval);
    if(interval.seconds < 0) {
        timeOver();
    } else {
        setTimeout(setTimer, 1000);
    }
}

const startDrawing = () => {
    setTimer();
}

const test3 = () => {
    // console.log("Hello World");
    const interval = getInterval();
    console.log(interval);
    // const remain = getRemain(350);
    // console.log("remain: ");
    // console.log(remain);
}
