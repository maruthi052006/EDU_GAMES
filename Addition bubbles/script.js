let correctAnswer = 0;

function generateQuestion() {
  document.getElementById("feedback").textContent = "";
  document.querySelector(".play-again").style.display = "none";

  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  correctAnswer = num1 + num2;

  document.getElementById("question").textContent = `What is ${num1} + ${num2}?`;

  const bubbleArea = document.getElementById("bubble-area");
  bubbleArea.innerHTML = "";

  let answers = [correctAnswer];
  while (answers.length < 3) {
    const wrong = Math.floor(Math.random() * 20) + 1;
    if (!answers.includes(wrong)) answers.push(wrong);
  }

  answers.sort(() => Math.random() - 0.5);

  answers.forEach(answer => {
    const bubble = document.createElement("div");
    bubble.className = "bubble";
    bubble.textContent = answer;
    bubble.onclick = () => checkAnswer(answer);
    bubbleArea.appendChild(bubble);
  });
}

function checkAnswer(selected) {
  const feedback = document.getElementById("feedback");
  if (selected === correctAnswer) {
    feedback.textContent = "🎉 Correct!";
    feedback.style.color = "green";
  } else {
    feedback.textContent = "❌ Try Again!";
    feedback.style.color = "red";
  }

  document.querySelector(".play-again").style.display = "inline-block";
}

window.onload = generateQuestion;
