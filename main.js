"use strict";

let isWorking = false;
let minutes;
let seconds;

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

const decreaseTimer = () => {
    // let m = m;
    // let s = s;
    if(seconds < 1 && minutes > 0) {
        seconds = 59;
        minutes--;
    } else {
        seconds--;
    }
    // return { minutes: minutes, seconds: seconds };
}

const updateDom = () => {
    const elementMinutes = document.clockForm.minutes;
    const elementSeconds = document.clockForm.seconds;
    elementMinutes.value = minutes;
    elementSeconds.value = seconds;
}

const setTimer = () => {
    // const minutesSeconds = getRemain(getCurrentTime());
    // let interval = getInterval();
    updateDom();
    // const remain = getRemain(interval);
    // let remain = decreaseTimer(minutes, seconds);
    decreaseTimer();
    // console.log("remain: ");
    // console.log(remain);
    // if(remain.seconds < 0) {
    //     timeOver();
    // } else {
    //     setTimeout(setTimer(), 1000);
    // }
    if(seconds < 0) {
        timeOver();
    } else {
        setTimeout(setTimer(), 1000);
    }
}

const startDrawing = () => {
    const interval = getInterval();
    minutes = interval.minutes;
    seconds = interval.seconds;
    setTimer();
}

const test3 = () => {
    // console.log("Hello World");
    // const interval = getInterval();
    // console.log(interval);
    // const remain = getRemain(350);
    // console.log("remain: ");
    // console.log(remain);
    // updateDom({ minutes: 0, seconds: 20});
    // const inverval = decreaseTimer({ minutes: 10, seconds: 0});
    // console.log(inverval);
}
