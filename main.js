"use strict";

let isDrawing = false;
let minutes = 0;
let seconds = 30;
const sound = document.querySelector("#se1");

const getInterval = () => {
    const element = document.getElementById("interval");
    minutes = parseInt(element.setMinutes.value);
    seconds = parseInt(element.setSeconds.value);
    if(minutes > 99) {
        minutes = 99;
    }
    if(seconds > 59) {
        seconds = 59;
    }
    if(minutes < 1 && seconds < 1) {
        minutes = 0;
        seconds = 1;
    }
}

const decreaseTimer = () => {
    if(seconds < 1 && minutes > 0) {
        seconds = 59;
        minutes--;
    } else {
        seconds--;
    }
}

const updateDom = () => {
    let m = minutes;
    let s = seconds;
    if(m < 10) {
        m = "0" + m;
    }
    if(s < 10) {
        s = "0" + s;
    }
    const elementMinutes = document.clockForm.minutes;
    const elementSeconds = document.clockForm.seconds;
    elementMinutes.value = m;
    elementSeconds.value = s;
}

const setTimer = () => {
    updateDom();
    decreaseTimer();
    if(seconds < 0 && minutes < 1) {
        getInterval(); // Loop
        sound.play();
    }
    if(isDrawing) {
        setTimeout(setTimer, 1000);
    }
}

const startDrawing = () => {
    const startButton = document.getElementById("interval").start;
    if(isDrawing) {
        isDrawing = false;
        startButton.value = "Start";
    } else {
        isDrawing = true;
        startButton.value = "Stop";
        getInterval();
        setTimer();
    }
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
    // sound.play();
}
