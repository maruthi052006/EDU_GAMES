const questions = [
  { question: "Which fraction is greater?", options: ["1/4", "2/3", "3/8"], correct: "2/3" },
  { question: "Which fraction equals 0.5?", options: ["1/2", "2/5", "3/4"], correct: "1/2" },
  { question: "Which is the smallest?", options: ["5/6", "1/3", "2/4"], correct: "1/3" },
  { question: "Which fraction equals 0.25?", options: ["1/4", "1/2", "3/4"], correct: "1/4" },
  { question: "Which fraction is greater?", options: ["4/5", "3/5", "2/5"], correct: "4/5" },
  { question: "Which is the smallest?", options: ["2/3", "1/6", "1/2"], correct: "1/6" },
  { question: "Which fraction equals 0.75?", options: ["3/4", "1/3", "2/5"], correct: "3/4" },
  { question: "Which is the greatest?", options: ["5/8", "7/8", "3/8"], correct: "7/8" },
  { question: "Which fraction equals 0.2?", options: ["1/5", "1/4", "1/3"], correct: "1/5" },
  { question: "Which is the smallest?", options: ["3/4", "1/2", "2/3"], correct: "1/2" },
  { question: "Which fraction is equal to 0.33?", options: ["1/3", "1/2", "2/5"], correct: "1/3" },
  { question: "Which fraction is greater?", options: ["3/8", "1/2", "2/5"], correct: "1/2" },
  { question: "Which is smaller?", options: ["5/6", "3/4", "1/3"], correct: "1/3" },
  { question: "Which equals 0.66?", options: ["2/3", "3/4", "1/2"], correct: "2/3" },
  { question: "Which is closest to 0.5?", options: ["1/2", "3/4", "1/3"], correct: "1/2" },
  { question: "Which fraction is smallest?", options: ["3/8", "1/6", "2/5"], correct: "1/6" },
  { question: "Which is equal to 0.6?", options: ["3/5", "2/3", "1/2"], correct: "3/5" },
  { question: "Which is greater?", options: ["5/7", "4/6", "3/5"], correct: "5/7" },
  { question: "Which is equal to 0.125?", options: ["1/8", "1/6", "1/4"], correct: "1/8" },
  { question: "Which fraction equals 0.9?", options: ["9/10", "3/4", "4/5"], correct: "9/10" },
  { question: "Which is the largest?", options: ["3/6", "4/6", "5/6"], correct: "5/6" },
  { question: "Which fraction is equal to 1?", options: ["3/3", "2/3", "1/2"], correct: "3/3" },
  { question: "Which is greater?", options: ["2/5", "1/2", "3/10"], correct: "1/2" },
  { question: "Which is smaller?", options: ["5/8", "1/2", "2/3"], correct: "1/2" },
  { question: "Which fraction equals 0.4?", options: ["2/5", "3/5", "1/3"], correct: "2/5" },
  { question: "Which equals 0.875?", options: ["7/8", "3/4", "2/3"], correct: "7/8" },
  { question: "Which is smaller?", options: ["3/6", "1/6", "4/6"], correct: "1/6" },
  { question: "Which is equal to 0.66?", options: ["2/3", "1/3", "3/5"], correct: "2/3" },
  { question: "Which is greater?", options: ["4/5", "5/6", "3/4"], correct: "5/6" },
  { question: "Which fraction is smallest?", options: ["1/2", "2/3", "1/3"], correct: "1/3" },
  { question: "Which equals 0.6?", options: ["3/5", "2/3", "4/5"], correct: "3/5" },
  { question: "Which is greater?", options: ["2/3", "5/8", "3/4"], correct: "3/4" },
  { question: "Which equals 0.875?", options: ["7/8", "5/6", "4/5"], correct: "7/8" },
  { question: "Which is smallest?", options: ["2/3", "1/2", "1/6"], correct: "1/6" },
  { question: "Which equals 0.66?", options: ["2/3", "1/2", "3/5"], correct: "2/3" },
  { question: "Which is the largest?", options: ["3/4", "4/5", "5/6"], correct: "5/6" },
  { question: "Which is equal to 0.125?", options: ["1/8", "1/6", "1/5"], correct: "1/8" },
  { question: "Which is greater?", options: ["2/3", "3/5", "4/7"], correct: "2/3" },
  { question: "Which is smallest?", options: ["5/8", "1/4", "1/2"], correct: "1/4" },
  { question: "Which equals 0.25?", options: ["1/4", "2/5", "1/3"], correct: "1/4" },
  { question: "Which is equal to 0.5?", options: ["1/2", "2/3", "3/4"], correct: "1/2" },
  { question: "Which is greater?", options: ["1/2", "3/8", "2/5"], correct: "1/2" },
  { question: "Which is smallest?", options: ["2/3", "3/5", "1/3"], correct: "1/3" },
  { question: "Which fraction equals 0.8?", options: ["4/5", "3/4", "2/3"], correct: "4/5" },
  { question: "Which is greater?", options: ["1/3", "2/5", "3/4"], correct: "3/4" },
  { question: "Which equals 0.6?", options: ["3/5", "1/2", "2/3"], correct: "3/5" },
  { question: "Which is smallest?", options: ["3/4", "1/2", "2/3"], correct: "1/2" },
  { question: "Which fraction equals 0.2?", options: ["1/5", "1/4", "1/3"], correct: "1/5" },
  { question: "Which is greater?", options: ["5/6", "4/5", "3/4"], correct: "5/6" }
];


let currentIndex = 0;

function loadNext() {
  const q = questions[currentIndex];
  document.getElementById("question").textContent = q.question;

  const optionsBox = document.getElementById("options");
  optionsBox.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => checkAnswer(option);
    optionsBox.appendChild(btn);
  });

  document.getElementById("feedback").textContent = "";
  document.getElementById("next").style.display = "none";
}

function checkAnswer(selected) {
  const q = questions[currentIndex];
  const feedback = document.getElementById("feedback");

  if (selected === q.correct) {
    feedback.textContent = "✅ Correct!";
    feedback.style.color = "green";
  } else {
    feedback.textContent = `❌ Oops! Correct answer is ${q.correct}`;
    feedback.style.color = "red";
  }

  currentIndex = (currentIndex + 1) % questions.length;
  document.getElementById("next").style.display = "inline-block";
}

window.onload = loadNext;
