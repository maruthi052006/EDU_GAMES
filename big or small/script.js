let num1, num2;

function loadNumbers() {
  const feedback = document.getElementById("feedback");
  feedback.textContent = "";
  document.querySelector(".play-again").style.display = "none";

  num1 = Math.floor(Math.random() * 90) + 10;  // 10-99
  num2 = Math.floor(Math.random() * 90) + 10;

  while (num1 === num2) {
    num2 = Math.floor(Math.random() * 90) + 10;
  }

  document.getElementById("card1").textContent = num1;
  document.getElementById("card2").textContent = num2;
}

function checkAnswer(choice) {
  const feedback = document.getElementById("feedback");

  if (choice === "big") {
    if (num1 > num2) {
      feedback.textContent = "🎉 Correct! " + num1 + " is bigger!";
      feedback.style.color = "green";
    } else {
      feedback.textContent = "❌ Oops! " + num2 + " is bigger!";
      feedback.style.color = "red";
    }
  } else if (choice === "small") {
    if (num1 < num2) {
      feedback.textContent = "🎉 Correct! " + num1 + " is smaller!";
      feedback.style.color = "green";
    } else {
      feedback.textContent = "❌ Oops! " + num2 + " is smaller!";
      feedback.style.color = "red";
    }
  }

  document.querySelector(".play-again").style.display = "inline-block";
}

window.onload = loadNumbers;
document.querySelector(".play-again").addEventListener("click", function() {
  loadNumbers();
  document.getElementById("feedback").textContent = "";
  document.querySelector(".play-again").style.display = "none";
})    