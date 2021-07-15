const getInterval = () => {
    const elements = document.getElementById("interval");
    for(let i = 0; i < elements.length; i++){
        if(elements.item(i).checked){
            return elements.item(i).value;
        }
    }
}

const startDrawing = () => {
    const interval = getInterval();

}

const setTimer = () => {
    const hms = getRemain(getCurrentTime());
    elH.value = hms.hour;
    elM.value = hms.min;
    elS.value = hms.sec;
    consoleLog([hms.hour, hms.min, hms.sec], "hms.hour, hms.min, hms.sec", "setTimer", nameOfComponent, true);
    setTimeout(setTimer, 1000);
}

setTimer();