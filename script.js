let time = {
    seconds: 0,
    minutes: 0,
    hours: 0,
    days: 0,
};
let timer;
window.addEventListener('load', (event) => {
    document.querySelector('#start > button').addEventListener('click', (event) => {
        event.target.setAttribute('disabled', 'disabled');
        document.querySelector('#resume > button').setAttribute('disabled', 'disabled');
        document.querySelector('#reset > button').setAttribute('disabled', 'disabled');
        document.querySelector('#stop > button').removeAttribute('disabled');
        timer = setInterval(() => {
            if (time.seconds === 59) {
                ++time.minutes;
                time.seconds = 0;
            } else ++time.seconds;
            if (time.minutes === 59) {
                ++time.hours;
                time.minutes = 0;
            }
            if (time.hours === 23) {
                ++time.days;
                time.hours = 0;
            }
            if (time.days === 10) {
                stopTimer();
                alert('Maximum Time reached for Timer');
            }
            updateClock();
        }, 1000);
    });
    function stopTimer() {
        window.clearInterval(timer);
    }

    function updateClock() {
        document.querySelector('#seconds').innerHTML = time.seconds;
        document.querySelector('#minutes').innerHTML = time.minutes;
        document.querySelector('#hours').innerHTML = time.hours;
        document.querySelector('#days').innerHTML = time.days;
    }

    document.querySelector('#stop > button').addEventListener('click', () => {
        stopTimer();
        document.querySelector('#stop > button').setAttribute('disabled', '');
        document.querySelector('#resume > button').removeAttribute('disabled');
        document.querySelector('#reset > button').removeAttribute('disabled');

    })

    document.querySelector('#reset > button').addEventListener('click', () => {
        time.seconds = 0;
        time.minutes = 0;
        time.hours = 0;
        time.days = 0;
        document.querySelector('#start > button').removeAttribute('disabled');
        document.querySelector('#resume > button').setAttribute('disabled', 'disabled');
        document.querySelector('#stop > button').setAttribute('disabled', 'disabled');
        updateClock();
    });
    document.querySelector('#resume > button').addEventListener('click', () => {
        document.querySelector('#resume > button').setAttribute('disabled', 'disabled');
        document.querySelector('#reset > button').setAttribute('disabled', 'disabled');
        document.querySelector('#stop > button').removeAttribute('disabled');
        
        timer = setInterval(() => {
            if (time.seconds === 59) {
                ++time.minutes;
                time.seconds = 0;
            } else ++time.seconds;
            if (time.minutes === 59) {
                ++time.hours;
                time.minutes = 0;
            }
            if (time.hours === 23) {
                ++time.days;
                time.hours = 0;
            }
            if (time.days === 10) {
                stopTimer();
                alert('Maximum Time reached for Timer');
            }
            updateClock();
        }, 1000);
    });
});