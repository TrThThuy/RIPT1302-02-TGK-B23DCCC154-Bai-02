const minutesInput = document.getElementById('minutes');
const secondsInput = document.getElementById('seconds');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const alarmSound = document.getElementById('alarmSound');

let countdown;

startBtn.addEventListener('click', () => {
  const minutes = parseInt(minutesInput.value);
  const seconds = parseInt(secondsInput.value);

  if (isNaN(minutes) || isNaN(seconds)) {
    alert('Vui lòng nhập đúng định dạng thời gian!');
    return;
  }

  const totalTime = minutes * 60 + seconds;

  startCountdown(totalTime);
});

resetBtn.addEventListener('click', () => {
  clearInterval(countdown);
  minutesInput.value = '';
  secondsInput.value = '';
});

function startCountdown(totalTime) {
  let remainingTime = totalTime;

  countdown = setInterval(() => {
    remainingTime--;

    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    if (minutes === 0 && seconds === 0) {
      clearInterval(countdown);
      alarm();
    }

    displayTime(minutes, seconds);
  }, 1000);
}

function displayTime(minutes, seconds) {
  minutesInput.value = String(minutes).padStart(2, '0');
  secondsInput.value = String(seconds).padStart(2, '0');
}

function alarm() {
  alarmSound.play();
}





