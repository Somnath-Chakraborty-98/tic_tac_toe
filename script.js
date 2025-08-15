let darkMode = false;

const toggleDarkMode = () => {
    darkMode = !darkMode;
    document.body.classList.toggle("dark-mode", darkMode);
    document.querySelector(".dark-mode-toggle").textContent = darkMode ? "Light Mode" : "Dark Mode";
};

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".dark-mode-toggle").addEventListener("click", toggleDarkMode);
});

let resetBtn = document.querySelector(".reset-btn");
resetBtn.addEventListener("click", resetGame);

let playBtn = document.querySelectorAll(".cell");
let turnX = true;

const winningArray = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

playBtn.forEach(btn => {
    btn.addEventListener("click", () => {
      btn.innerText = turnX ? "X" : "O";
      btn.disabled = true;
      turnX = !turnX;
      checkWinner();
    });
  });

checkWinner = () => {
    for (const combination of winningArray) {
        const [a, b, c] = combination;
        if (playBtn[a].innerText && playBtn[a].innerText === playBtn[b].innerText && playBtn[a].innerText === playBtn[c].innerText) {
            setTimeout(() => {
                alert(`Player ${playBtn[a].innerText} wins!`);
                resetGame();
            }, 100);
            return;
        }
    }
};

function resetGame() {
    console.log("Game reset");
    playBtn.forEach(btn => {
        btn.innerText = "";
        btn.disabled = false;
    });
    turnX = true;
    turnO = false;
};
