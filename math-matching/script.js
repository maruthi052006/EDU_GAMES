const pairs = [];

for (let i = 1; i <= 50; i++) {
  const a = Math.floor(Math.random() * 20) + 1;
  const b = Math.floor(Math.random() * 20) + 1;
  pairs.push({ problem: `${a} + ${b}`, answer: (a + b).toString() });
}

for (let i = 1; i <= 25; i++) {
  const a = Math.floor(Math.random() * 20) + 1;
  const b = Math.floor(Math.random() * 10) + 1;
  pairs.push({ problem: `${a} - ${b}`, answer: (a - b).toString() });
}

for (let i = 1; i <= 25; i++) {
  const a = Math.floor(Math.random() * 10) + 1;
  const b = Math.floor(Math.random() * 10) + 1;
  pairs.push({ problem: `${a} × ${b}`, answer: (a * b).toString() });
}

let selectedProblem = null;
let selectedAnswer = null;

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function startGame() {
  selectedProblem = null;
  selectedAnswer = null;
  document.getElementById("feedback").textContent = "";

  const gamePairs = shuffle(pairs).slice(0, 10); // Pick 10 each round
  const shuffledProblems = shuffle([...gamePairs]);
  const shuffledAnswers = shuffle(gamePairs.map(p => p.answer));

  const problemsDiv = document.getElementById("problems");
  const answersDiv = document.getElementById("answers");

  problemsDiv.innerHTML = "";
  answersDiv.innerHTML = "";

  shuffledProblems.forEach(p => {
    const btn = document.createElement("button");
    btn.className = "btn btn-outline-primary match-btn";
    btn.textContent = p.problem;
    btn.dataset.problem = p.problem;
    btn.onclick = () => selectProblem(btn);
    problemsDiv.appendChild(btn);
  });

  shuffledAnswers.forEach(ans => {
    const btn = document.createElement("button");
    btn.className = "btn btn-outline-secondary match-btn";
    btn.textContent = ans;
    btn.dataset.answer = ans;
    btn.onclick = () => selectAnswer(btn);
    answersDiv.appendChild(btn);
  });
}

function selectProblem(btn) {
  clearSelections("problems");
  btn.classList.add("selected");
  selectedProblem = btn.dataset.problem;
  tryMatch();
}

function selectAnswer(btn) {
  clearSelections("answers");
  btn.classList.add("selected");
  selectedAnswer = btn.dataset.answer;
  tryMatch();
}

function clearSelections(id) {
  document.getElementById(id).querySelectorAll(".match-btn").forEach(b => {
    b.classList.remove("selected", "correct", "wrong");
  });
}

function tryMatch() {
  if (selectedProblem && selectedAnswer) {
    const correctPair = pairs.find(p => p.problem === selectedProblem);
    const isCorrect = correctPair && correctPair.answer === selectedAnswer;

    const feedback = document.getElementById("feedback");
    feedback.textContent = isCorrect ? "✅ Correct match!" : "❌ Wrong match. Try again.";

    highlightSelection(isCorrect);
    selectedProblem = null;
    selectedAnswer = null;
  }
}

function highlightSelection(correct) {
  const probBtn = [...document.querySelectorAll("#problems .match-btn")]
    .find(b => b.dataset.problem === selectedProblem);
  const ansBtn = [...document.querySelectorAll("#answers .match-btn")]
    .find(b => b.dataset.answer === selectedAnswer);

  if (correct) {
    probBtn.classList.add("correct");
    ansBtn.classList.add("correct");
  } else {
    probBtn.classList.add("wrong");
    ansBtn.classList.add("wrong");
  }
}

window.onload = startGame;
