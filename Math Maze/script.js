function generateRandomQuestion() {
  const operations = ["+", "-", "×"];
  const op = operations[Math.floor(Math.random() * operations.length)];
  let num1 = Math.floor(Math.random() * 10) + 1;
  let num2 = Math.floor(Math.random() * 10) + 1;
  let correctAnswer;

  switch (op) {
    case "+":
      correctAnswer = num1 + num2;
      break;
    case "-":
      correctAnswer = num1 - num2;
      break;
    case "×":
      correctAnswer = num1 * num2;
      break;
  }

  // Create 2 random wrong options
  const options = new Set();
  options.add(correctAnswer);
  while (options.size < 3) {
    const fakeAnswer = correctAnswer + Math.floor(Math.random() * 5) - 2;
    if (fakeAnswer !== correctAnswer && fakeAnswer >= 0) {
      options.add(fakeAnswer);
    }
  }

  return {
    question: `What is ${num1} ${op} ${num2}?`,
    options: Array.from(options).sort(() => Math.random() - 0.5),
    correct: correctAnswer
  };
}

let currentQuestion;

function startMaze() {
  document.getElementById("status").textContent = "";
  document.getElementById("restart").style.display = "none";
  loadStep();
}

function loadStep() {
  currentQuestion = generateRandomQuestion();
  document.getElementById("question").textContent = currentQuestion.question;

  const optionArea = document.getElementById("options");
  optionArea.innerHTML = "";

  currentQuestion.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(opt);
    optionArea.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const status = document.getElementById("status");

  if (selected === currentQuestion.correct) {
    status.textContent = "✅ Correct! On to the next...";
    status.style.color = "green";
    setTimeout(loadStep, 1000); // Load next question after 1s
  } else {
    status.textContent = "❌ Dead End! Try Again.";
    status.style.color = "red";
    document.getElementById("restart").style.display = "inline-block";
  }
}

window.onload = startMaze;
