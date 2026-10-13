let correctCount;

function loadGame() {
  document.getElementById("result").textContent = "";
  document.querySelector(".play-again").style.display = "none";
  
  correctCount = Math.floor(Math.random() * 3) + 2; // 2 to 4
  const container = document.getElementById("object-container");
  container.innerHTML = "";

  for (let i = 0; i < correctCount; i++) {
    const img = document.createElement("img");
    img.src = "https://twemoji.maxcdn.com/v/latest/72x72/1f34e.png"; // Apple emoji image

    img.alt = "apple";
    container.appendChild(img);
  }
}

function checkAnswer(selected) {
  const result = document.getElementById("result");
  if (selected === correctCount) {
    result.textContent = "🎉 Correct!";
    result.style.color = "green";
    document.querySelector(".play-again").style.display = "inline-block";
  } else {
    result.textContent = "❌ Try Again!";
    result.style.color = "red";
  }
}

window.onload = loadGame;
