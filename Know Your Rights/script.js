
const questions = [
  {
    question: "Which of the following is a Fundamental Right in India?",
    options: [
      "Right to Dance",
      "Right to Vote",
      "Right to Freedom of Speech",
      "Right to Get a Job"
    ],
    answer: "Right to Freedom of Speech"
  },
  {
    question: "Which one is a Fundamental Duty?",
    options: [
      "Watching TV daily",
      "Respecting the National Flag",
      "Driving a car",
      "Owning a phone"
    ],
    answer: "Respecting the National Flag"
  },
  {
    question: "Which behavior is correct in a classroom?",
    options: [
      "Shouting loudly",
      "Helping friends",
      "Throwing books",
      "Disobeying teacher"
    ],
    answer: "Helping friends"
  },
  {
    question: "As a citizen, what should you NOT do?",
    options: [
      "Follow traffic rules",
      "Keep your area clean",
      "Harm public property",
      "Help neighbors"
    ],
    answer: "Harm public property"
  },
  {
    question: "What does the Right to Education mean?",
    options: [
      "You can go to school",
      "You must watch cartoons",
      "You get free chocolates",
      "You can skip homework"
    ],
    answer: "You can go to school"
  }
];

let currentQuestionIndex = 0;

function loadQuestion() {
  const current = questions[currentQuestionIndex];
  document.getElementById("question").textContent = current.question;
  const optionsContainer = document.getElementById("options");
  optionsContainer.innerHTML = "";

  current.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.className = "option-btn";
    btn.onclick = () => checkAnswer(btn, current.answer);
    optionsContainer.appendChild(btn);
  });

  document.getElementById("feedback").textContent = "";
  document.getElementById("nextBtn").style.display = "none";
}

function checkAnswer(button, correctAnswer) {
  const buttons = document.querySelectorAll(".option-btn");
  buttons.forEach(btn => btn.disabled = true);

  if (button.textContent === correctAnswer) {
    button.classList.add("correct");
    document.getElementById("feedback").textContent = "✅ Correct!";
  } else {
    button.classList.add("wrong");
    document.getElementById("feedback").textContent = "❌ Oops! Try next one.";
    buttons.forEach(btn => {
      if (btn.textContent === correctAnswer) {
        btn.classList.add("correct");
      }
    });
  }

  document.getElementById("nextBtn").style.display = "inline-block";
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    document.querySelector(".container").innerHTML = `
      <h2>🎉 Great job!</h2>
      <p>You have completed the Know Your Rights activity!</p>
    `;
  }
}

document.getElementById("nextBtn").addEventListener("click", nextQuestion);

window.onload = loadQuestion;
