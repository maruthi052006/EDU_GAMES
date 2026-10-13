const times = [
  { hour: 1, minute: 0, correct: "1:00", choices: ["1:00", "2:00", "3:00"] },
  { hour: 1, minute: 15, correct: "1:15", choices: ["1:15", "2:15", "12:15"] },
  { hour: 1, minute: 30, correct: "1:30", choices: ["1:30", "2:30", "3:30"] },
  { hour: 1, minute: 45, correct: "1:45", choices: ["1:45", "12:45", "2:45"] },
  { hour: 2, minute: 0, correct: "2:00", choices: ["2:00", "3:00", "4:00"] },
  { hour: 2, minute: 15, correct: "2:15", choices: ["2:15", "1:15", "3:15"] },
  { hour: 2, minute: 30, correct: "2:30", choices: ["2:30", "1:30", "4:30"] },
  { hour: 2, minute: 45, correct: "2:45", choices: ["2:45", "3:45", "1:45"] },
  { hour: 3, minute: 0, correct: "3:00", choices: ["3:00", "2:00", "4:00"] },
  { hour: 3, minute: 15, correct: "3:15", choices: ["3:15", "4:15", "2:15"] },
  { hour: 3, minute: 30, correct: "3:30", choices: ["3:30", "4:30", "2:30"] },
  { hour: 3, minute: 45, correct: "3:45", choices: ["3:45", "2:45", "4:45"] },
  { hour: 4, minute: 0, correct: "4:00", choices: ["4:00", "5:00", "3:00"] },
  { hour: 4, minute: 15, correct: "4:15", choices: ["4:15", "3:15", "5:15"] },
  { hour: 4, minute: 30, correct: "4:30", choices: ["4:30", "3:30", "5:30"] },
  { hour: 4, minute: 45, correct: "4:45", choices: ["4:45", "5:45", "3:45"] },
  { hour: 5, minute: 0, correct: "5:00", choices: ["5:00", "6:00", "4:00"] },
  { hour: 5, minute: 15, correct: "5:15", choices: ["5:15", "4:15", "6:15"] },
  { hour: 5, minute: 30, correct: "5:30", choices: ["5:30", "6:30", "4:30"] },
  { hour: 5, minute: 45, correct: "5:45", choices: ["5:45", "4:45", "6:45"] },
  { hour: 6, minute: 0, correct: "6:00", choices: ["6:00", "5:00", "7:00"] },
  { hour: 6, minute: 15, correct: "6:15", choices: ["6:15", "5:15", "7:15"] },
  { hour: 6, minute: 30, correct: "6:30", choices: ["6:30", "5:30", "7:30"] },
  { hour: 6, minute: 45, correct: "6:45", choices: ["6:45", "5:45", "7:45"] },
  { hour: 7, minute: 0, correct: "7:00", choices: ["7:00", "6:00", "8:00"] },
  { hour: 7, minute: 15, correct: "7:15", choices: ["7:15", "6:15", "8:15"] },
  { hour: 7, minute: 30, correct: "7:30", choices: ["7:30", "6:30", "8:30"] },
  { hour: 7, minute: 45, correct: "7:45", choices: ["7:45", "6:45", "8:45"] },
  { hour: 8, minute: 0, correct: "8:00", choices: ["8:00", "9:00", "7:00"] },
  { hour: 8, minute: 15, correct: "8:15", choices: ["8:15", "9:15", "7:15"] },
  { hour: 8, minute: 30, correct: "8:30", choices: ["8:30", "9:30", "7:30"] },
  { hour: 8, minute: 45, correct: "8:45", choices: ["8:45", "7:45", "9:45"] },
  { hour: 9, minute: 0, correct: "9:00", choices: ["9:00", "10:00", "8:00"] },
  { hour: 9, minute: 15, correct: "9:15", choices: ["9:15", "10:15", "8:15"] },
  { hour: 9, minute: 30, correct: "9:30", choices: ["9:30", "10:30", "8:30"] },
  { hour: 9, minute: 45, correct: "9:45", choices: ["9:45", "8:45", "10:45"] },
  { hour: 10, minute: 0, correct: "10:00", choices: ["10:00", "11:00", "9:00"] },
  { hour: 10, minute: 15, correct: "10:15", choices: ["10:15", "9:15", "11:15"] },
  { hour: 10, minute: 30, correct: "10:30", choices: ["10:30", "11:30", "9:30"] },
  { hour: 10, minute: 45, correct: "10:45", choices: ["10:45", "9:45", "11:45"] },
  { hour: 11, minute: 0, correct: "11:00", choices: ["11:00", "10:00", "12:00"] },
  { hour: 11, minute: 15, correct: "11:15", choices: ["11:15", "10:15", "12:15"] },
  { hour: 11, minute: 30, correct: "11:30", choices: ["11:30", "10:30", "12:30"] },
  { hour: 11, minute: 45, correct: "11:45", choices: ["11:45", "12:45", "10:45"] },
  { hour: 12, minute: 0, correct: "12:00", choices: ["12:00", "11:00", "1:00"] },
  { hour: 12, minute: 15, correct: "12:15", choices: ["12:15", "11:15", "1:15"] },
  { hour: 12, minute: 30, correct: "12:30", choices: ["12:30", "11:30", "1:30"] },
  { hour: 12, minute: 45, correct: "12:45", choices: ["12:45", "11:45", "1:45"] }
];

let index = 0;

function showClock() {
  const clock = document.getElementById("clock");
  const opts = document.getElementById("options");
  const feedback = document.getElementById("feedback");

  // Reset
  clock.innerHTML = "";
  opts.innerHTML = "";
  feedback.textContent = "";
  feedback.className = "";

  const { hour, minute, choices } = times[index];

  const hourAngle = (hour % 12 + minute / 60) * 30;
  const minuteAngle = minute * 6;

  const hourHand = document.createElement("div");
  hourHand.className = "hand hour-hand";
  hourHand.style.transform = `translateX(-50%) rotate(${hourAngle}deg)`;

  const minuteHand = document.createElement("div");
  minuteHand.className = "hand minute-hand";
  minuteHand.style.transform = `translateX(-50%) rotate(${minuteAngle}deg)`;

  clock.appendChild(hourHand);
  clock.appendChild(minuteHand);

  choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.className = "btn btn-outline-primary fs-5";
    btn.textContent = choice;
    btn.onclick = () => checkAnswer(choice);
    opts.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const correct = times[index].correct;
  const feedback = document.getElementById("feedback");

  if (selected === correct) {
    feedback.textContent = "✅ Correct!";
    feedback.className = "text-success fs-5 fw-bold";
  } else {
    feedback.textContent = `❌ Incorrect. Correct time is ${correct}`;
    feedback.className = "text-danger fs-5 fw-bold";
  }
}

function nextClock() {
  index = (index + 1) % times.length;
  showClock();
}

window.onload = showClock;
