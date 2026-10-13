const questions = [
  { question: "You have a ₹5 coin and a ₹10 note. How much money do you have?", options: ["₹15", "₹10", "₹5"], correct: "₹15" },
  { question: "Which of these is the least value?", options: ["₹0.50", "₹1", "₹2"], correct: "₹0.50" },
  { question: "You buy candy for ₹12 and pay with ₹20. How much change do you get?", options: ["₹8", "₹10", "₹12"], correct: "₹8" },
  { question: "Which combination gives ₹20?", options: ["Two ₹10", "One ₹10 and one ₹5", "Four ₹5"], correct: "Four ₹5" },
  { question: "If a toy costs ₹35 and you give ₹50, what is the change?", options: ["₹15", "₹10", "₹20"], correct: "₹15" },
  { question: "₹10 + ₹2 + ₹5 = ?", options: ["₹17", "₹15", "₹20"], correct: "₹17" },
  { question: "You have ₹1, ₹2, ₹5 and ₹10. What is the total?", options: ["₹18", "₹17", "₹15"], correct: "₹18" },
  { question: "You bought a pen for ₹25 and paid ₹50. What’s your change?", options: ["₹25", "₹30", "₹20"], correct: "₹25" },
  { question: "Which pair makes ₹7?", options: ["₹5 and ₹2", "₹2 and ₹2", "₹1 and ₹1"], correct: "₹5 and ₹2" },
  { question: "What is half of ₹10?", options: ["₹5", "₹10", "₹2"], correct: "₹5" },
  { question: "₹100 - ₹45 = ?", options: ["₹55", "₹65", "₹45"], correct: "₹55" },
  { question: "You pay ₹50 for a book costing ₹47. Change?", options: ["₹3", "₹2", "₹1"], correct: "₹3" },
  { question: "Which note is highest?", options: ["₹500", "₹100", "₹200"], correct: "₹500" },
  { question: "₹2 + ₹2 + ₹2 = ?", options: ["₹6", "₹4", "₹8"], correct: "₹6" },
  { question: "You have ₹100 and buy items worth ₹25. What is left?", options: ["₹75", "₹85", "₹95"], correct: "₹75" },
  { question: "₹20 + ₹30 = ?", options: ["₹50", "₹40", "₹60"], correct: "₹50" },
  { question: "₹10 × 2 = ?", options: ["₹20", "₹30", "₹10"], correct: "₹20" },
  { question: "Which combo makes ₹10?", options: ["Two ₹5", "One ₹2 and ₹2", "₹1 and ₹1"], correct: "Two ₹5" },
  { question: "You have three ₹2 coins. Total?", options: ["₹6", "₹4", "₹2"], correct: "₹6" },
  { question: "Buy an eraser for ₹8, pay with ₹10. Change?", options: ["₹2", "₹3", "₹5"], correct: "₹2" },
  { question: "₹1 + ₹2 + ₹3 = ?", options: ["₹6", "₹7", "₹5"], correct: "₹6" },
  { question: "You give ₹20 for a ₹13 ball. Change?", options: ["₹7", "₹6", "₹5"], correct: "₹7" },
  { question: "₹200 - ₹125 = ?", options: ["₹75", "₹85", "₹90"], correct: "₹75" },
  { question: "Which is more: ₹0.50 or ₹0.25?", options: ["₹0.50", "₹0.25", "Same"], correct: "₹0.50" },
  { question: "₹10 + ₹10 + ₹10 = ?", options: ["₹30", "₹20", "₹40"], correct: "₹30" },
  { question: "₹100 - ₹10 = ?", options: ["₹90", "₹80", "₹85"], correct: "₹90" },
  { question: "₹5 × 3 = ?", options: ["₹15", "₹10", "₹20"], correct: "₹15" },
  { question: "₹1 + ₹1 + ₹1 + ₹1 = ?", options: ["₹4", "₹3", "₹2"], correct: "₹4" },
  { question: "You buy chocolate for ₹45, pay ₹50. Change?", options: ["₹5", "₹10", "₹3"], correct: "₹5" },
  { question: "₹500 - ₹250 = ?", options: ["₹250", "₹300", "₹200"], correct: "₹250" },
  { question: "You spend ₹30, then ₹20. Total spent?", options: ["₹50", "₹40", "₹60"], correct: "₹50" },
  { question: "₹0.25 + ₹0.25 = ?", options: ["₹0.50", "₹0.75", "₹1"], correct: "₹0.50" },
  { question: "You get ₹2 change after paying ₹100. What was the cost?", options: ["₹98", "₹97", "₹95"], correct: "₹98" },
  { question: "You buy 2 items: ₹15 and ₹25. Total?", options: ["₹40", "₹35", "₹30"], correct: "₹40" },
  { question: "₹200 + ₹300 = ?", options: ["₹500", "₹400", "₹600"], correct: "₹500" },
  { question: "Buy toy ₹90, pay ₹100. Change?", options: ["₹10", "₹5", "₹20"], correct: "₹10" },
  { question: "Which coin is smallest?", options: ["₹1", "₹2", "₹5"], correct: "₹1" },
  { question: "₹10 ÷ 2 = ?", options: ["₹5", "₹2", "₹10"], correct: "₹5" },
  { question: "₹0.50 + ₹0.50 = ?", options: ["₹1", "₹2", "₹1.5"], correct: "₹1" },
  { question: "Buy pen ₹9 and pencil ₹6. Total?", options: ["₹15", "₹14", "₹13"], correct: "₹15" },
  { question: "You pay ₹100 for ₹86 item. Change?", options: ["₹14", "₹13", "₹10"], correct: "₹14" },
  { question: "₹300 - ₹150 = ?", options: ["₹150", "₹100", "₹200"], correct: "₹150" },
  { question: "₹1 × 5 = ?", options: ["₹5", "₹4", "₹6"], correct: "₹5" },
  { question: "₹50 + ₹25 = ?", options: ["₹75", "₹80", "₹70"], correct: "₹75" },
  { question: "₹100 ÷ 2 = ?", options: ["₹50", "₹60", "₹40"], correct: "₹50" },
  { question: "₹10 + ₹15 = ?", options: ["₹25", "₹20", "₹30"], correct: "₹25" },
  { question: "₹500 - ₹100 = ?", options: ["₹400", "₹300", "₹350"], correct: "₹400" },
  { question: "₹50 × 2 = ?", options: ["₹100", "₹80", "₹90"], correct: "₹100" },
  { question: "Buy a ruler ₹15, pay ₹20. Change?", options: ["₹5", "₹4", "₹6"], correct: "₹5" },
  { question: "₹1 + ₹1 + ₹1 + ₹1 + ₹1 = ?", options: ["₹5", "₹4", "₹3"], correct: "₹5" }
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
