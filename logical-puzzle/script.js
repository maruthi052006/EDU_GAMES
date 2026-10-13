const puzzles = [
  { question: "2, 4, 6, __ ?", options: ["8", "9", "7"], answer: "8" },
  { question: "1, 3, 5, 7, __ ?", options: ["8", "9", "10"], answer: "9" },
  { question: "10, 8, 6, __ ?", options: ["2", "4", "5"], answer: "4" },
  { question: "3, 6, 9, 12, __ ?", options: ["13", "15", "14"], answer: "15" },
  { question: "5, 10, 15, __ ?", options: ["20", "18", "16"], answer: "20" },
  { question: "6, 12, 24, __ ?", options: ["36", "48", "44"], answer: "48" },
  { question: "81, 27, 9, __ ?", options: ["6", "3", "1"], answer: "3" },
  { question: "100, 90, 80, __ ?", options: ["60", "50", "70"], answer: "70" },
  { question: "7, 14, 28, __ ?", options: ["56", "40", "36"], answer: "56" },
  { question: "9, 18, 36, __ ?", options: ["72", "81", "63"], answer: "72" },
  { question: "64, 32, 16, __ ?", options: ["4", "8", "2"], answer: "8" },
  { question: "11, 22, 44, __ ?", options: ["66", "77", "88"], answer: "88" },
  { question: "50, 45, 40, __ ?", options: ["30", "35", "25"], answer: "35" },
  { question: "1, 4, 9, 16, __ ?", options: ["25", "36", "49"], answer: "25" },
  { question: "2, 3, 5, 8, __ ?", options: ["10", "12", "13"], answer: "13" },
  { question: "8, 16, 32, __ ?", options: ["48", "56", "64"], answer: "64" },
  { question: "13, 26, 39, __ ?", options: ["52", "50", "48"], answer: "52" },
  { question: "4, 8, 12, 16, __ ?", options: ["18", "20", "24"], answer: "20" },
  { question: "1, 2, 4, 8, __ ?", options: ["10", "14", "16"], answer: "16" },
  { question: "60, 50, 40, __ ?", options: ["20", "30", "10"], answer: "30" },
  { question: "90, 80, 70, __ ?", options: ["60", "65", "55"], answer: "60" },
  { question: "7, 21, 63, __ ?", options: ["189", "126", "98"], answer: "189" },
  { question: "2, 4, 8, 16, __ ?", options: ["30", "32", "24"], answer: "32" },
  { question: "10, 20, 40, 80, __ ?", options: ["100", "120", "160"], answer: "160" },
  { question: "27, 9, 3, __ ?", options: ["0", "2", "1"], answer: "1" },
  { question: "5, 25, 125, __ ?", options: ["625", "500", "600"], answer: "625" },
  { question: "4, 9, 16, 25, __ ?", options: ["36", "49", "30"], answer: "36" },
  { question: "100, 80, 60, __ ?", options: ["50", "30", "40"], answer: "40" },
  { question: "11, 22, 33, 44, __ ?", options: ["55", "66", "77"], answer: "55" },
  { question: "6, 36, 216, __ ?", options: ["1296", "1024", "1216"], answer: "1296" },
  { question: "3, 6, 12, 24, __ ?", options: ["36", "48", "52"], answer: "48" },
  { question: "19, 38, 76, __ ?", options: ["152", "144", "148"], answer: "152" },
  { question: "25, 20, 15, __ ?", options: ["10", "12", "5"], answer: "10" },
  { question: "7, 9, 11, __ ?", options: ["13", "15", "14"], answer: "13" },
  { question: "6, 11, 16, __ ?", options: ["21", "22", "20"], answer: "21" },
  { question: "2, 5, 10, __ ?", options: ["15", "18", "20"], answer: "17" },
  { question: "9, 18, 27, __ ?", options: ["34", "36", "45"], answer: "36" },
  { question: "4, 7, 10, __ ?", options: ["12", "13", "14"], answer: "13" },
  { question: "1, 1, 2, 3, 5, __ ?", options: ["7", "8", "9"], answer: "8" },
  { question: "2, 4, 3, 6, 5, 10, __ ?", options: ["8", "12", "9"], answer: "8" },
  { question: "11, 13, 15, __ ?", options: ["16", "17", "18"], answer: "17" },
  { question: "2, 6, 12, 20, __ ?", options: ["30", "28", "32"], answer: "30" },
  { question: "5, 6, 11, 17, __ ?", options: ["22", "26", "28"], answer: "28" },
  { question: "9, 5, 1, -3, __ ?", options: ["-6", "-7", "-8"], answer: "-7" },
  { question: "8, 16, 14, 28, __ ?", options: ["24", "32", "36"], answer: "24" },
  { question: "1, 10, 100, __ ?", options: ["1000", "110", "10000"], answer: "1000" },
  { question: "2, 4, 6, 10, 16, __ ?", options: ["24", "22", "26"], answer: "26" }
];

let currentIndex = 0;
let score = 0;

function loadPuzzle() {
  if (currentIndex >= puzzles.length) {
    document.getElementById("puzzle").textContent = "🎉 Game Over!";
    document.getElementById("choices").innerHTML = "";
    document.getElementById("feedback").textContent = `Final Score: ${score} / ${puzzles.length}`;
    document.querySelector("button").textContent = "Play Again";
    document.querySelector("button").onclick = () => location.reload();
    return;
  }

  const puzzle = puzzles[currentIndex];
  document.getElementById("puzzle").textContent = puzzle.question;
  document.getElementById("total").textContent = puzzles.length;

  const choicesBox = document.getElementById("choices");
  choicesBox.innerHTML = "";

  puzzle.options.forEach(option => {
    const btn = document.createElement("button");
    btn.className = "btn btn-outline-dark";
    btn.textContent = option;
    btn.onclick = () => checkAnswer(option);
    choicesBox.appendChild(btn);
  });

  document.getElementById("feedback").textContent = "";
}

function checkAnswer(selected) {
  const correct = puzzles[currentIndex].answer;
  const feedback = document.getElementById("feedback");

  if (selected === correct) {
    feedback.textContent = "✅ Correct!";
    feedback.className = "text-success";
    score++;
  } else {
    feedback.textContent = `❌ Wrong! Correct answer: ${correct}`;
    feedback.className = "text-danger";
  }

  document.getElementById("score").textContent = score;
  updateProgress();
}

function nextPuzzle() {
  currentIndex++;
  loadPuzzle();
}

function updateProgress() {
  const percent = ((currentIndex + 1) / puzzles.length) * 100;
  document.getElementById("progress-bar").style.width = percent + "%";
}

window.onload = () => {
  loadPuzzle();
};
