
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const multiplierDisplay = document.getElementById('multiplier');
const resultDisplay = document.getElementById('result');
const helico = document.getElementById('helico');

let multiplier = 1.0;
let interval, crashPoint;
let flying = false;

startBtn.onclick = () => {
  multiplier = 1.0;
  multiplierDisplay.textContent = '1.00x';
  resultDisplay.textContent = '';
  startBtn.disabled = true;
  stopBtn.disabled = false;
  flying = true;
  crashPoint = (Math.random() * 2 + 2).toFixed(2);
  helico.style.transform = 'translateY(0)';
  let position = 0;

  interval = setInterval(() => {
    multiplier += 0.01;
    multiplier = parseFloat(multiplier.toFixed(2));
    multiplierDisplay.textContent = multiplier + 'x';
    position -= 2;
    helico.style.transform = `translateY(${position}px)`;

    if (multiplier >= crashPoint) {
      clearInterval(interval);
      flying = false;
      resultDisplay.textContent = 'Crash à ' + multiplier + 'x !';
      stopBtn.disabled = true;
      startBtn.disabled = false;
      helico.style.transform = 'translateY(100px)';
    }
  }, 50);
};

stopBtn.onclick = () => {
  if (flying) {
    clearInterval(interval);
    flying = false;
    resultDisplay.textContent = 'Retiré à ' + multiplier + 'x';
    stopBtn.disabled = true;
    startBtn.disabled = false;
  }
};
