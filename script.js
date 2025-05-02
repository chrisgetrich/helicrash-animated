
let multiplier = 1.00;
let helico = document.getElementById("helico");
let multiplierDisplay = document.getElementById("multiplier");
let bottomPosition = 50;
let crashed = false;

function startGame() {
    let interval = setInterval(() => {
        if (crashed) return clearInterval(interval);
        multiplier += 0.01;
        multiplierDisplay.innerText = multiplier.toFixed(2) + "x";
        bottomPosition += 2;
        helico.style.bottom = bottomPosition + "px";
        if (Math.random() < 0.005 * multiplier) {
            crash();
            clearInterval(interval);
        }
    }, 100);
}

function crash() {
    crashed = true;
    helico.style.transform = "translateX(-50%) rotate(90deg)";
    multiplierDisplay.innerText += " - Crash!";
}

window.onload = startGame;
