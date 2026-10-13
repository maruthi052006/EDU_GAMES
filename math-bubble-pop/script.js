let correctAnswer = 0;
let operation = '+';
const operators = ['+', '-', '*'];

function generateQuestion() {
  const num1 = Math.floor(Math.random() * 20) + 1;
  const num2 = Math.floor(Math.random() * 20) + 1;
  operation = operators[Math.floor(Math.random() * operators.length)];

  switch(operation) {
    case '+': correctAnswer = num1 + num2; break;
    case '-': correctAnswer = num1 - num2; break;
    case '*': correctAnswer = num1 * num2; break;
  }

  document.getElementById('question').textContent = `What is ${num1} ${operation} ${num2}?`;
}

function generateBubbles() {
  const bubbleArea = document.getElementById('bubble-area');
  bubbleArea.innerHTML = "";

  const answers = new Set();
  answers.add(correctAnswer);
  while (answers.size < 6) {
    answers.add(Math.floor(Math.random() * 100) - 10);
  }

  const answerArray = Array.from(answers).sort(() => Math.random() - 0.5);
  answerArray.forEach(answer => {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    bubble.textContent = answer;
    bubble.onclick = () => checkAnswer(answer);
    bubbleArea.appendChild(bubble);
  });
}

function checkAnswer(answer) {
  const result = document.getElementById('result');
  if (answer === correctAnswer) {
    result.textContent = "✅ Correct! Well done!";
    result.className = "text-success";
  } else {
    result.textContent = `❌ Try again. Correct was ${correctAnswer}`;
    result.className = "text-danger";
  }
}

function startGame() {
  document.getElementById('result').textContent = "";
  generateQuestion();
  generateBubbles();
}

window.onload = startGame;
