const questions = [
  {
    "question": "Which decimal is the greatest?",
    "options": [
      "0.8",
      "0.82",
      "0.75"
    ],
    "correct": "0.82"
  },
  {
    "question": "What is 1.5 + 2.3?",
    "options": [
      "3.8",
      "3.7",
      "4.0"
    ],
    "correct": "3.8"
  },
  {
    "question": "What is 3.6 - 1.2?",
    "options": [
      "2.4",
      "2.2",
      "1.6"
    ],
    "correct": "2.4"
  },
  {
    "question": "Which is equal to 3/10?",
    "options": [
      "0.3",
      "0.33",
      "0.03"
    ],
    "correct": "0.3"
  },
  {
    "question": "Round 7.86 to the nearest whole number.",
    "options": [
      "8",
      "7",
      "9"
    ],
    "correct": "8"
  },
  {
    "question": "What is 0.2 \u00d7 5?",
    "options": [
      "1",
      "0.7",
      "1.2"
    ],
    "correct": "1"
  },
  {
    "question": "Which is smaller?",
    "options": [
      "0.04",
      "0.4",
      "0.44"
    ],
    "correct": "0.04"
  },
  {
    "question": "What is 1.2 \u00f7 2?",
    "options": [
      "0.6",
      "0.7",
      "0.5"
    ],
    "correct": "0.6"
  },
  {
    "question": "Which number is between 0.3 and 0.4?",
    "options": [
      "0.35",
      "0.45",
      "0.25"
    ],
    "correct": "0.35"
  },
  {
    "question": "Which is equal to 5.00?",
    "options": [
      "5",
      "0.5",
      "50"
    ],
    "correct": "5"
  },
  {
    "question": "What is 0.1 + 2.0?",
    "options": [
      "3.0",
      "2.1",
      "1.3"
    ],
    "correct": "2.1"
  },
  {
    "question": "What is 0.1 \u00d7 5.8?",
    "options": [
      "-0.1",
      "0.8",
      "0.6"
    ],
    "correct": "0.6"
  },
  {
    "question": "What is 1.3 - 9.7?",
    "options": [
      "-9.2",
      "-8.1",
      "-8.4"
    ],
    "correct": "-8.4"
  },
  {
    "question": "What is 1.7 + 4.3?",
    "options": [
      "5.4",
      "6.4",
      "6.0"
    ],
    "correct": "6.0"
  },
  {
    "question": "What is 5.4 \u00d7 9.2?",
    "options": [
      "49.7",
      "50.2",
      "48.8"
    ],
    "correct": "49.7"
  },
  {
    "question": "What is 5.2 \u00f7 9.6?",
    "options": [
      "0.7",
      "0.2",
      "0.5"
    ],
    "correct": "0.5"
  },
  {
    "question": "What is 9.9 \u00f7 6.4?",
    "options": [
      "1.2",
      "1.5",
      "1.8"
    ],
    "correct": "1.5"
  },
  {
    "question": "What is 2.5 \u00d7 6.8?",
    "options": [
      "16.2",
      "17.7",
      "17.0"
    ],
    "correct": "17.0"
  },
  {
    "question": "What is 7.4 \u00f7 2.2?",
    "options": [
      "4.3",
      "3.4",
      "2.7"
    ],
    "correct": "3.4"
  },
  {
    "question": "What is 4.0 + 4.3?",
    "options": [
      "8.3",
      "8.1",
      "8.8"
    ],
    "correct": "8.3"
  },
  {
    "question": "What is 5.9 \u00d7 3.8?",
    "options": [
      "22.4",
      "23.3",
      "22.0"
    ],
    "correct": "22.4"
  },
  {
    "question": "What is 3.8 + 1.8?",
    "options": [
      "5.8",
      "4.9",
      "5.6"
    ],
    "correct": "5.6"
  },
  {
    "question": "What is 5.6 \u00d7 1.6?",
    "options": [
      "9.3",
      "8.8",
      "9.0"
    ],
    "correct": "9.0"
  },
  {
    "question": "What is 2.8 \u00d7 8.3?",
    "options": [
      "23.7",
      "23.2",
      "22.6"
    ],
    "correct": "23.2"
  },
  {
    "question": "What is 1.0 + 4.9?",
    "options": [
      "5.8",
      "6.2",
      "5.9"
    ],
    "correct": "5.9"
  },
  {
    "question": "What is 4.4 \u00f7 2.2?",
    "options": [
      "3.0",
      "2.0",
      "1.3"
    ],
    "correct": "2.0"
  },
  {
    "question": "What is 9.8 + 2.3?",
    "options": [
      "12.4",
      "12.1",
      "11.5"
    ],
    "correct": "12.1"
  },
  {
    "question": "What is 7.3 \u00d7 2.9?",
    "options": [
      "21.3",
      "20.8",
      "21.2"
    ],
    "correct": "21.2"
  },
  {
    "question": "What is 7.0 \u00f7 2.6?",
    "options": [
      "2.0",
      "3.7",
      "2.7"
    ],
    "correct": "2.7"
  },
  {
    "question": "What is 3.8 - 5.1?",
    "options": [
      "-1.1",
      "-1.3",
      "-2.2"
    ],
    "correct": "-1.3"
  },
  {
    "question": "What is 9.3 - 0.7?",
    "options": [
      "8.6",
      "8.7",
      "7.9"
    ],
    "correct": "8.6"
  },
  {
    "question": "What is 8.3 \u00d7 5.2?",
    "options": [
      "42.8",
      "43.2",
      "44.0"
    ],
    "correct": "43.2"
  },
  {
    "question": "What is 4.9 - 6.6?",
    "options": [
      "-1.7",
      "-1.3",
      "-2.5"
    ],
    "correct": "-1.7"
  },
  {
    "question": "What is 7.9 - 5.9?",
    "options": [
      "2.6",
      "1.1",
      "2.0"
    ],
    "correct": "2.0"
  },
  {
    "question": "What is 6.7 + 3.3?",
    "options": [
      "10.2",
      "10.0",
      "9.9"
    ],
    "correct": "10.0"
  },
  {
    "question": "What is 9.8 \u00d7 0.4?",
    "options": [
      "3.9",
      "3.1",
      "4.0"
    ],
    "correct": "3.9"
  },
  {
    "question": "What is 1.1 - 6.0?",
    "options": [
      "-4.9",
      "-5.6",
      "-4.4"
    ],
    "correct": "-4.9"
  },
  {
    "question": "What is 5.6 + 5.5?",
    "options": [
      "12.0",
      "11.1",
      "10.7"
    ],
    "correct": "11.1"
  },
  {
    "question": "What is 8.6 \u00d7 5.1?",
    "options": [
      "43.9",
      "43.1",
      "44.2"
    ],
    "correct": "43.9"
  },
  {
    "question": "What is 2.6 \u00f7 1.9?",
    "options": [
      "1.1",
      "1.4",
      "2.3"
    ],
    "correct": "1.4"
  },
  {
    "question": "What is 0.1 \u00d7 2.8?",
    "options": [
      "0.3",
      "1.2",
      "-0.4"
    ],
    "correct": "0.3"
  },
  {
    "question": "What is 7.0 \u00d7 6.6?",
    "options": [
      "45.2",
      "47.1",
      "46.2"
    ],
    "correct": "46.2"
  },
  {
    "question": "What is 8.4 + 3.6?",
    "options": [
      "12.0",
      "12.9",
      "11.3"
    ],
    "correct": "12.0"
  },
  {
    "question": "What is 0.8 \u00d7 8.5?",
    "options": [
      "7.4",
      "6.7",
      "6.8"
    ],
    "correct": "6.8"
  },
  {
    "question": "What is 6.2 - 3.6?",
    "options": [
      "2.8",
      "2.6",
      "1.8"
    ],
    "correct": "2.6"
  },
  {
    "question": "What is 5.9 \u00f7 5.3?",
    "options": [
      "1.2",
      "0.3",
      "1.1"
    ],
    "correct": "1.1"
  },
  {
    "question": "What is 5.5 - 2.5?",
    "options": [
      "3.4",
      "3.0",
      "2.7"
    ],
    "correct": "3.0"
  },
  {
    "question": "What is 0.8 \u00d7 7.0?",
    "options": [
      "5.4",
      "5.6",
      "6.4"
    ],
    "correct": "5.6"
  },
  {
    "question": "What is 0.7 - 5.0?",
    "options": [
      "-5.2",
      "-3.5",
      "-4.3"
    ],
    "correct": "-4.3"
  },
  {
    "question": "What is 3.5 \u00d7 1.0?",
    "options": [
      "4.2",
      "2.6",
      "3.5"
    ],
    "correct": "3.5"
  }
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
    feedback.textContent = `❌ Wrong! Correct answer is ${q.correct}`;
    feedback.style.color = "red";
  }

  currentIndex = (currentIndex + 1) % questions.length;
  document.getElementById("next").style.display = "inline-block";
}

window.onload = loadNext;
