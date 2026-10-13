const tamilLetters = [
  "அ", "ஆ", "இ", "ஈ", "உ", "ஊ", "எ", "ஏ", "ஐ", "ஒ", "ஓ", "ஔ",
  "க", "ங", "ச", "ஞ", "ட", "ண", "த", "ந", "ப", "ம", "ய", "ர",
  "ல", "வ", "ழ", "ள", "ற", "ன"
];

let currentLetter = "";

function spinLetter() {
  const randomIndex = Math.floor(Math.random() * tamilLetters.length);
  currentLetter = tamilLetters[randomIndex];
  document.getElementById("letter-display").textContent = currentLetter;
  document.getElementById("feedback").textContent = "";
  document.getElementById("userWord").value = "";
}

function checkWord() {
  const userWord = document.getElementById("userWord").value.trim();
  const feedback = document.getElementById("feedback");

  if (userWord === "") {
    feedback.textContent = "ஒரு சொல்லை உள்ளிடுங்கள்!";
    feedback.style.color = "orange";
  } else if (userWord.startsWith(currentLetter)) {
    feedback.textContent = "✅ அருமை! சரியான தொடக்கம்.";
    feedback.style.color = "green";
  } else {
    feedback.textContent = `❌ இந்தச் சொல்லில் '${currentLetter}' தொடக்கம் இல்லை.`;
    feedback.style.color = "red";
  }
}
