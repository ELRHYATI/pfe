var minutes = 0;
var seconds = 0;
var timer;
var isTimerRunning = false;

function toggleTimer() {
  if (isTimerRunning) {
    clearInterval(timer);
    document.getElementById("btn").innerHTML = `<i class="fa-solid fa-microphone"></i>`;
    isTimerRunning = false;
  } else {
    timer = setInterval(function() {
      seconds++;
      if (seconds == 60) {
        minutes++;
        seconds = 0;
      }
      displayTimer();
    }, 1000);
    document.getElementById("btn").innerHTML = `<i class="fa-solid fa-microphone"></i>`;
    isTimerRunning = true;
  }
}

function displayTimer() {
  document.getElementById("min").innerHTML = pad(minutes);
  document.getElementById("sec").innerHTML = pad(seconds);
}

function pad(number) {
  return (number < 10 ? '0' : '') + number;
}

