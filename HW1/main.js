let seconds = 0;
let minutes = 0;

setInterval(() => {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    document.getElementById("timer").innerHTML =
        (minutes < 10 ? "0" + minutes : minutes) + ":" +
        (seconds < 10 ? "0" + seconds : seconds);
}, 1000);

let timer = setInterval(() => {

}, 1000);