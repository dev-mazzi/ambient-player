// 타이머 기능 구현
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

// 배경화면 변경
const container = document.querySelector(".container");
const clickOption = {
    forest: document.querySelector(".option_container :nth-child(1)"),
    cafe: document.querySelector(".option_container :nth-child(2)"),
    library: document.querySelector(".option_container :nth-child(3)"),
    airplane: document.querySelector(".option_container :nth-child(4)"),
    park: document.querySelector(".option_container :nth-child(5)"),
    beach: document.querySelector(".option_container :nth-child(6)")
}
const bgList = [
    "url('assets/img/img_forest.jpg')",
    "url('assets/img/img_cafe.jpg')",
    "url('assets/img/img_library.jpg')",
    "url('assets/img/img_airplane.jpg')",
    "url('assets/img/img_park.jpg')",
    "url('assets/img/img_beach.jpg')"
]
const changeBg = {
    forest: function() {
        container.style.backgroundImage = bgList[0]
    },
    cafe: function() {
        container.style.backgroundImage = bgList[1]
    },
    library: function() {
        container.style.backgroundImage = bgList[2]
    },
    airplane: function() {
        container.style.backgroundImage = bgList[3]
    },
    park: function() {
        container.style.backgroundImage = bgList[4]
    },
    beach: function() {
        container.style.backgroundImage = bgList[5]
    }
}

clickOption.forest.addEventListener("click", changeBg.forest);
clickOption.cafe.addEventListener("click", changeBg.cafe);
clickOption.library.addEventListener("click", changeBg.library);
clickOption.airplane.addEventListener("click", changeBg.airplane);
clickOption.park.addEventListener("click", changeBg.park);
clickOption.beach.addEventListener("click", changeBg.beach);