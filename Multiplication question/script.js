let problems = [];
let correctMatches = 0;

function startGame() {
  correctMatches = 0;
  document.getElementById("result").textContent = "";
  document.querySelector(".play-again").style.display = "none";

  problems = [];
  const questionCards = document.getElementById("questionCards");
  const answerCards = document.getElementById("answerCards");
  questionCards.innerHTML = "";
  answerCards.innerHTML = "";

  // Generate 4 problems
  for (let i = 0; i < 4; i++) {
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    problems.push({ id: `q${i}`, question: `${a} × ${b}`, answer: a * b });
  }

  // Shuffle and display question cards
  problems.forEach((p) => {
    const qCard = document.createElement("div");
    qCard.className = "card";
    qCard.textContent = p.question;
    qCard.id = p.id;
    qCard.draggable = true;
    qCard.ondragstart = (e) => e.dataTransfer.setData("text", p.id);
    questionCards.appendChild(qCard);
  });

  // Shuffle and display answer cards
  const shuffledAnswers = [...problems]
    .map(p => p.answer)
    .sort(() => Math.random() - 0.5);

  shuffledAnswers.forEach(answer => {
    const aCard = document.createElement("div");
    aCard.className = "card drop-target";
    aCard.textContent = answer;
    aCard.ondragover = (e) => e.preventDefault();
    aCard.ondrop = (e) => handleDrop(e, answer);
    answerCards.appendChild(aCard);
  });
}

function handleDrop(e, answer) {
  e.preventDefault();
  const draggedId = e.dataTransfer.getData("text");
  const draggedProblem = problems.find(p => p.id === draggedId);

  if (draggedProblem && draggedProblem.answer === answer) {
    document.getElementById(draggedId).remove();
    e.target.remove();
    correctMatches++;

    if (correctMatches === problems.length) {
      document.getElementById("result").textContent = "🎉 All Correct!";
      document.getElementById("result").style.color = "green";
      document.querySelector(".play-again").style.display = "inline-block";
    }
  } else {
    document.getElementById("result").textContent = "❌ Wrong match!";
    document.getElementById("result").style.color = "red";
  }
}

window.onload = startGame;
