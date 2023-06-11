import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const inputEl = document.querySelector('#datetime-picker');
const buttonEl = document.querySelector('button[data-start]');
const daysEl = document.querySelector('span[data-days]');
const hoursEl = document.querySelector('span[data-hours]');
const minutesEl = document.querySelector('span[data-minutes]');
const secondsEl = document.querySelector('span[data-seconds]');

buttonEl.setAttribute('disabled', true);

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      if(selectedDates[0] < new Date()) {
        Notify.failure("Please choose a date in the future");
        buttonEl.setAttribute('disabled', true);
        return
      };
      buttonEl.removeAttribute('disabled');
    },
};

const dateInput = flatpickr(inputEl, options);

class Timer {
    constructor() {
        this.intervalId = null;
        this.isActive = false;
    }

    start() {
        if (this.isActive) {
            return;
        }

        const startTime = dateInput.selectedDates[0];
        this.isActive = true;

        this.intervalId = setInterval(() => {
            let currentTime = Date.now();
            let deltaTime = startTime - currentTime;
            if(deltaTime <= 1000) {
                clearInterval(this.intervalId);
            }
            let time = convertMs(deltaTime);
            updateClock(time);

            

        }, 1000);
    };
};

const timer = new Timer();



buttonEl.addEventListener('click', onButtonClick);


function onButtonClick(event) {
    timer.start();
};

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    const days = pad(Math.floor(ms / day));
    const hours = pad(Math.floor((ms % day) / hour));
    const minutes = pad(Math.floor(((ms % day) % hour) / minute));
    const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
  }
  
function pad(value) {
    return String(value).padStart(2, '0')
}

function updateClock({ days, hours, minutes, seconds }) {
    daysEl.textContent = days;
    hoursEl.textContent = hours;
    minutesEl.textContent = minutes;
    secondsEl.textContent = seconds;
}