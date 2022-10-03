// 스톱워치
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

// 버튼
let i = 0;
const container = document.querySelector(".container");
const clickButton = {
    forest: document.querySelector(".option_container :nth-child(1)"),
    cafe: document.querySelector(".option_container :nth-child(2)"),
    library: document.querySelector(".option_container :nth-child(3)"),
    airplane: document.querySelector(".option_container :nth-child(4)"),
    park: document.querySelector(".option_container :nth-child(5)"),
    beach: document.querySelector(".option_container :nth-child(6)")
}
const bgList = [
    "url('src/assets/img/img_forest.jpg')",
    "url('src/assets/img/img_cafe.jpg')",
    "url('src/assets/img/img_library.jpg')",
    "url('src/assets/img/img_airplane.jpg')",
    "url('src/assets/img/img_park.jpg')",
    "url('src/assets/img/img_beach.jpg')"
]
const audioList = [
    new Audio("src/assets/audio/audio_forest.mp3"),
    new Audio("src/assets/audio/audio_cafe.mp3"),
    new Audio("src/assets/audio/audio_library.mp3"),
    new Audio("src/assets/audio/audio_airplane.mp3"),
    new Audio("src/assets/audio/audio_park.mp3"),
    new Audio("src/assets/audio/audio_beach.mp3")
]

const clickEvent = {
    forest: function() {
        container.style.backgroundImage = bgList[0];
        for(i=0; i<6; i++){
            audioList[i].pause();
        };
        i=0;
        audioList[0].play();
        playButton.classList.add("hide");
    },
    cafe: function() {
        container.style.backgroundImage = bgList[1];
        for(i=0; i<6; i++){
            audioList[i].pause();
        };
        i=1;
        audioList[1].play();
        playButton.classList.add("hide");
    },
    library: function() {
        for(i=0; i<6; i++){
            audioList[i].pause();
        };
        container.style.backgroundImage = bgList[2];
        i=2;
        audioList[2].play();
        playButton.classList.add("hide");
    },
    airplane: function() {
        for(i=0; i<6; i++){
            audioList[i].pause();
        };
        container.style.backgroundImage = bgList[3];
        i=3;
        audioList[3].play();
        playButton.classList.add("hide");
    },
    park: function() {
        for(i=0; i<6; i++){
            audioList[i].pause();
        };
        container.style.backgroundImage = bgList[4];
        i=4;
        audioList[4].play();
        playButton.classList.add("hide");
    },
    beach: function() {
        for(i=0; i<6; i++){
            audioList[i].pause();
        };
        container.style.backgroundImage = bgList[5];
        i=5;
        audioList[5].play();
        playButton.classList.add("hide");
    }
}

clickButton.forest.addEventListener("click", clickEvent.forest);
clickButton.cafe.addEventListener("click", clickEvent.cafe);
clickButton.library.addEventListener("click", clickEvent.library);
clickButton.airplane.addEventListener("click", clickEvent.airplane);
clickButton.park.addEventListener("click", clickEvent.park);
clickButton.beach.addEventListener("click", clickEvent.beach);


// 오디오 컨트롤 버튼
const playButton = document.querySelector(".play");
const pauseButton = document.querySelector(".pause");
const stopButton = document.querySelector(".stop");

function clickPlay() {
    audioList[i].play();
    playButton.classList.toggle("hide");
}
function clickPause() {
    audioList[i].pause();
    playButton.classList.toggle("hide");
}
function clickStop() {
    audioList[i].pause();
    audioList[i].currentTime = 0;
    playButton.classList.remove("hide");
}

playButton.addEventListener("click", clickPlay);
pauseButton.addEventListener("click", clickPause);
stopButton.addEventListener("click", clickStop);