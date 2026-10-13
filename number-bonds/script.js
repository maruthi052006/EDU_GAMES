const challenges = [
  { target: 5, numbers: [1, 2, 3, 4, 5, 0] },
  { target: 10, numbers: [2, 8, 4, 6, 5, 0] },
  { target: 7, numbers: [3, 2, 5, 4, 1, 6] },
  { target: 9, numbers: [1, 8, 3, 6, 5, 4] },
  { target: 6, numbers: [1, 2, 4, 3, 5, 0] },
  { target: 12, numbers: [3, 9, 6, 7, 5, 4] },
  { target: 8, numbers: [1, 2, 7, 5, 3, 4] },
  { target: 15, numbers: [5, 10, 6, 9, 7, 8] },
  { target: 18, numbers: [9, 9, 12, 6, 7, 11] },
  { target: 20, numbers: [10, 5, 15, 8, 12, 2] },
  { target: 14, numbers: [8, 6, 10, 4, 5, 9] },
  { target: 17, numbers: [9, 8, 7, 10, 6, 11] },
  { target: 13, numbers: [5, 8, 4, 9, 3, 10] },
  { target: 11, numbers: [6, 5, 7, 4, 8, 3] },
  { target: 16, numbers: [7, 9, 5, 11, 8, 6] },
  { target: 19, numbers: [10, 9, 11, 8, 12, 7] },
  { target: 4, numbers: [2, 2, 1, 3, 0, 4] },
  { target: 2, numbers: [1, 1, 0, 2, 3, 4] },
  { target: 3, numbers: [1, 2, 3, 0, 4, 5] },
  { target: 1, numbers: [1, 0, 2, 3, 4, 5] },
  { target: 0, numbers: [0, 1, 2, 3, 4, 5] },
  { target: 21, numbers: [10, 11, 8, 13, 7, 14] },
  { target: 22, numbers: [12, 10, 14, 8, 6, 9] },
  { target: 23, numbers: [12, 11, 13, 10, 9, 14] },
  { target: 24, numbers: [15, 9, 12, 8, 10, 14] },
  { target: 25, numbers: [13, 12, 11, 14, 10, 15] },
  { target: 26, numbers: [11, 15, 13, 12, 14, 10] },
  { target: 27, numbers: [13, 14, 10, 17, 12, 15] },
  { target: 28, numbers: [14, 14, 13, 15, 16, 12] },
  { target: 29, numbers: [14, 15, 13, 12, 16, 17] },
  { target: 30, numbers: [15, 15, 16, 14, 13, 17] }
];

let current = 0;
let selected = [];

function loadChallenge() {
  selected = [];
  const challenge = challenges[current];
  document.getElementById("targetNum").textContent = challenge.target;
  document.getElementById("choices").innerHTML = "";
  document.getElementById("feedback").textContent = "";
  document.getElementById("selected").textContent = "";

  challenge.numbers.forEach(num => {
    const btn = document.createElement("button");
    btn.className = "btn btn-outline-dark choice-btn";
    btn.textContent = num;
    btn.onclick = () => selectNumber(num);
    document.getElementById("choices").appendChild(btn);
  });
}

function selectNumber(num) {
  if (selected.length < 2) {
    selected.push(num);
    document.getElementById("selected").textContent = `You selected: ${selected.join(" + ")}`;

    if (selected.length === 2) {
      const sum = selected[0] + selected[1];
      const target = challenges[current].target;
      const feedback = document.getElementById("feedback");

      if (sum === target) {
        feedback.textContent = "✅ Correct!";
        feedback.className = "text-success";
      } else {
        feedback.textContent = `❌ Wrong! That adds up to ${sum}, not ${target}`;
        feedback.className = "text-danger";
      }
    }
  }
}

function nextChallenge() {
  current = (current + 1) % challenges.length;
  loadChallenge();
}

window.onload = loadChallenge;
