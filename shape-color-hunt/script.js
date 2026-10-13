const shapes = ['square', 'circle', 'triangle'];
const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'cyan', 'lime', 'brown'];

let challenges = [];

// Generate 50 random challenges
for (let i = 0; i < 50; i++) {
  const correctShape = shapes[Math.floor(Math.random() * shapes.length)];
  const correctColor = colors[Math.floor(Math.random() * colors.length)];

  const distractors = [];
  while (distractors.length < 2) {
    const shape = shapes[Math.floor(Math.random() * shapes.length)];
    const color = colors[Math.floor(Math.random() * colors.length)];
    if (!(shape === correctShape && color === correctColor)) {
      distractors.push({ shape, color });
    }
  }

  const items = [...distractors, { shape: correctShape, color: correctColor, correct: true }]
    .sort(() => Math.random() - 0.5);

  challenges.push({
    prompt: `Click the ${correctColor} ${correctShape}`,
    items: items
  });
}

let currentIndex = 0;

function renderChallenge() {
  const challenge = challenges[currentIndex];
  document.getElementById("prompt").textContent = challenge.prompt;
  const area = document.getElementById("gameArea");
  area.innerHTML = "";
  document.getElementById("feedback").textContent = "";

  challenge.items.forEach(item => {
    const div = document.createElement("div");

    if (item.shape === "triangle") {
      div.className = "shape-box triangle";
      div.style.borderBottomColor = item.color;
    } else {
      div.className = `shape-box ${item.shape}`;
      div.style.backgroundColor = item.color;
    }

    div.onclick = () => {
      const feedback = document.getElementById("feedback");
      if (item.correct) {
        feedback.textContent = "✅ Correct!";
        feedback.className = "text-success fs-5 mt-3 fade-in";
      } else {
        feedback.textContent = "❌ Try Again!";
        feedback.className = "text-danger fs-5 mt-3 fade-in";
      }
    };

    area.appendChild(div);
  });
}

function nextChallenge() {
  currentIndex = (currentIndex + 1) % challenges.length;
  renderChallenge();
}

window.onload = renderChallenge;
