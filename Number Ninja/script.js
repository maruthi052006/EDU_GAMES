const questions = [
  { question: "What is the place value of 3 in 345?", options: ["300", "30", "3"], correct: "300" },
  { question: "What is the place value of 7 in 5728?", options: ["700", "70", "7"], correct: "700" },
  { question: "What is the place value of 9 in 2190?", options: ["90", "900", "9"], correct: "90" },
  { question: "What is the place value of 2 in 8204?", options: ["200", "2", "20"], correct: "200" },
  { question: "What is the place value of 6 in 3068?", options: ["60", "600", "6"], correct: "60" },
  { question: "What is the place value of 1 in 7184?", options: ["100", "10", "1"], correct: "100" },
  { question: "What is the place value of 5 in 3509?", options: ["500", "5", "50"], correct: "500" },
  { question: "What is the place value of 8 in 2846?", options: ["800", "80", "8"], correct: "800" },
  { question: "What is the place value of 4 in 9450?", options: ["400", "40", "4"], correct: "400" },
  { question: "What is the place value of 2 in 1023?", options: ["20", "2", "200"], correct: "20" },
  { question: "What is the place value of 9 in 4912?", options: ["900", "90", "9"], correct: "900" },
  { question: "What is the place value of 0 in 4036?", options: ["0", "30", "3"], correct: "0" },
  { question: "What is the place value of 8 in 8765?", options: ["8000", "800", "80"], correct: "8000" },
  { question: "What is the place value of 1 in 5124?", options: ["100", "10", "1"], correct: "100" },
  { question: "What is the place value of 2 in 6329?", options: ["20", "200", "2"], correct: "20" },
  { question: "What is the place value of 7 in 1704?", options: ["700", "70", "7"], correct: "700" },
  { question: "What is the place value of 6 in 6543?", options: ["6000", "60", "600"], correct: "6000" },
  { question: "What is the place value of 5 in 8591?", options: ["500", "5000", "50"], correct: "500" },
  { question: "What is the place value of 3 in 1234?", options: ["30", "300", "3"], correct: "30" },
  { question: "What is the place value of 4 in 4501?", options: ["4000", "4", "40"], correct: "4000" },
  { question: "What is the place value of 7 in 7093?", options: ["7000", "70", "7"], correct: "7000" },
  { question: "What is the place value of 2 in 2468?", options: ["2000", "20", "2"], correct: "2000" },
  { question: "What is the place value of 1 in 9136?", options: ["100", "1000", "10"], correct: "100" },
  { question: "What is the place value of 6 in 1603?", options: ["600", "60", "6"], correct: "600" },
  { question: "What is the place value of 8 in 5812?", options: ["800", "80", "8"], correct: "800" },
  { question: "What is the place value of 5 in 9540?", options: ["500", "50", "5000"], correct: "500" },
  { question: "What is the place value of 3 in 3901?", options: ["3000", "30", "3"], correct: "3000" },
  { question: "What is the place value of 9 in 2901?", options: ["900", "90", "9"], correct: "900" },
  { question: "What is the place value of 2 in 7290?", options: ["200", "20", "2"], correct: "200" },
  { question: "What is the place value of 7 in 4761?", options: ["700", "70", "7"], correct: "700" },
  { question: "What is the place value of 6 in 8674?", options: ["600", "60", "6000"], correct: "6000" },
  { question: "What is the place value of 4 in 4523?", options: ["4000", "40", "4"], correct: "4000" },
  { question: "What is the place value of 5 in 1543?", options: ["50", "500", "5"], correct: "500" },
  { question: "What is the place value of 3 in 7325?", options: ["300", "3", "30"], correct: "300" },
  { question: "What is the place value of 1 in 1903?", options: ["1000", "100", "10"], correct: "1000" },
  { question: "What is the place value of 8 in 1849?", options: ["800", "80", "8000"], correct: "800" },
  { question: "What is the place value of 0 in 3405?", options: ["0", "10", "100"], correct: "0" },
  { question: "What is the place value of 9 in 5091?", options: ["900", "90", "9"], correct: "90" },
  { question: "What is the place value of 2 in 2817?", options: ["2000", "200", "20"], correct: "2000" },
  { question: "What is the place value of 4 in 4372?", options: ["4000", "40", "4"], correct: "4000" },
  { question: "What is the place value of 1 in 5146?", options: ["100", "10", "1"], correct: "100" },
  { question: "What is the place value of 7 in 5710?", options: ["700", "70", "7"], correct: "700" },
  { question: "What is the place value of 6 in 2065?", options: ["60", "600", "6"], correct: "60" },
  { question: "What is the place value of 3 in 9312?", options: ["300", "3000", "3"], correct: "3000" },
  { question: "What is the place value of 5 in 5607?", options: ["5000", "50", "5"], correct: "5000" },
  { question: "What is the place value of 8 in 4821?", options: ["800", "80", "8000"], correct: "800" },
  { question: "What is the place value of 2 in 2014?", options: ["2000", "2", "20"], correct: "2000" },
  { question: "What is the place value of 4 in 9456?", options: ["400", "4000", "40"], correct: "4000" },
  { question: "What is the place value of 6 in 1642?", options: ["600", "60", "6000"], correct: "600" },
  { question: "What is the place value of 1 in 7813?", options: ["10", "100", "1000"], correct: "10" }
];
  // Add 40 more manually or dynamically if needed

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
    feedback.style.color = "lightgreen";
  } else {
    feedback.textContent = `❌ Oops! The correct answer is ${q.correct}`;
    feedback.style.color = "red";
  }

  currentIndex = (currentIndex + 1) % questions.length;
  document.getElementById("next").style.display = "inline-block";
}

window.onload = loadNext;
