let start = document.getElementById('start');
let pause = document.getElementById('pause');
let reset = document.getElementById('reset');
let lap = document.getElementById('lap');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let tens = document.getElementById('tens');
let laps = document.getElementById('laps');
let timeInterval;
let totalTime = 0;
let pauseTime;

function startTimer() {
    timeInterval = setInterval(function () {
        totalTime += 10;
        let newTime = formatTime(totalTime);
        minutes.textContent = newTime.minutes;
        seconds.textContent = newTime.seconds;
        tens.textContent = newTime.tens;
    }, 10);
}

function pauseTimer() {
    clearInterval(timeInterval);
    pauseTime = totalTime;
}

function resetTimer() {
    clearInterval(timeInterval);
    totalTime = 0;
    pauseTime = 0;
    minutes.textContent = '00';
    seconds.textContent = '00';
    tens.textContent = '00';
}

function formatTime(time) {
    let minutes = Math.floor(time / 6000);
    let seconds = Math.floor(time % 6000 / 100);
    let tens = Math.floor(time % 100);

    return {
        minutes: minutes < 10 ? '0' + minutes : minutes,
        seconds: seconds < 10 ? '0' + seconds : seconds,
        tens: tens < 10 ? '0' + tens : tens
    };
}

function lapTime() {
    let currentTime = formatTime(totalTime);
    let lapTime = `${currentTime.minutes}:${currentTime.seconds}:${currentTime.tens}`;
    let li = document.createElement('li');
    li.textContent = lapTime;
    laps.appendChild(li);
}

start.addEventListener('click', startTimer);
pause.addEventListener('click', pauseTimer);
reset.addEventListener('click', resetTimer);
lap.addEventListener('click', lapTime);