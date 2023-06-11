const bodyEl = document.querySelector('body');
const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[data-stop]');

const onButtonStart = buttonStart.addEventListener('click', onButtonStartClick);
const onButtonStop = buttonStop.addEventListener('click', onButtonStopClick);

let timerId = '';

function onButtonStartClick (event) {
    if(timerId === '') {
    timerId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
    }, 1000);
    console.log('клик');
};
return;
};

function onButtonStopClick (event) {
    clearInterval(timerId);
    timerId = "";
};

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  };