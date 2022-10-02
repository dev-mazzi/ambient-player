const time = document.querySelector(".time");

let timeId;
let currentTime = 0;
let hour, min, sec;

function printTime() {
    currentTime++;
    time.innerText = getTimeFormatString();
    timeId = setTimeout(printTime, 1000);
}

function startTime() {
    if (timeId == null)
    timeId = setTimeout(printTime, 1000);
}

function stopTime() {
    if (timeId != null) {
        clearTimeout(timeId);
        timeId = null;
    }
}

function resetTime() {
    stopTime();
    time.innerText = "00:00:00";
    currentTime = 0;
}

function getTimeFormatString() {
    hour = parseInt(String(currentTime / (60 * 60)));
    min = parseInt(String((currentTime - (hour * 60 * 60)) / 60));
    sec = currentTime % 60;

    return String(hour).padStart(2, '0') + ":" + String(min).padStart(2, '0') + ':' + String(sec).padStart(2, '0');
}