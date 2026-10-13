const questions = [
  { question: "How many sides does a square have?", options: ["3", "4", "5"], correct: "4" },
  { question: "How many sides does a triangle have?", options: ["3", "4", "5"], correct: "3" },
  { question: "How many sides does a rectangle have?", options: ["4", "6", "5"], correct: "4" },
  { question: "How many sides does a circle have?", options: ["0", "1", "2"], correct: "0" },
  { question: "How many sides does a pentagon have?", options: ["5", "6", "4"], correct: "5" },
  { question: "How many vertices does a hexagon have?", options: ["6", "4", "5"], correct: "6" },
  { question: "Which shape has 8 sides?", options: ["octagon", "hexagon", "circle"], correct: "octagon" },
  { question: "How many sides does a decagon have?", options: ["10", "9", "8"], correct: "10" },
  { question: "Which shape has 7 sides?", options: ["heptagon", "nonagon", "hexagon"], correct: "heptagon" },
  { question: "Which shape has 0 vertices?", options: ["circle", "square", "triangle"], correct: "circle" },
  { question: "Which shape has equal sides and angles?", options: ["square", "rectangle", "trapezium"], correct: "square" },
  { question: "How many vertices does a triangle have?", options: ["3", "2", "4"], correct: "3" },
  { question: "Which shape has more sides?", options: ["pentagon", "triangle", "square"], correct: "pentagon" },
  { question: "How many vertices does a nonagon have?", options: ["9", "10", "8"], correct: "9" },
  { question: "Which shape has straight sides?", options: ["square", "circle", "none"], correct: "square" },
  { question: "Which shape has only curved edges?", options: ["circle", "triangle", "hexagon"], correct: "circle" },
  { question: "Which shape has 6 sides?", options: ["hexagon", "pentagon", "heptagon"], correct: "hexagon" },
  { question: "How many sides does a nonagon have?", options: ["9", "8", "10"], correct: "9" },
  { question: "Which has the fewest sides?", options: ["triangle", "square", "hexagon"], correct: "triangle" },
  { question: "Which has 4 equal sides?", options: ["square", "rectangle", "parallelogram"], correct: "square" },
{ question: "Which shape has 5 sides?", options: ["pentagon", "square", "hexagon"], correct: "pentagon" },
  { question: "How many sides does an octagon have?", options: ["8", "7", "6"], correct: "8" },
  { question: "Which shape has 10 sides?", options: ["decagon", "nonagon", "hexagon"], correct: "decagon" },
  { question: "Which has more sides?", options: ["hexagon", "pentagon", "square"], correct: "hexagon" },
  { question: "Which has 3 sides?", options: ["triangle", "square", "rectangle"], correct: "triangle" },
  { question: "Which shape is round?", options: ["circle", "triangle", "square"], correct: "circle" },
  { question: "How many corners does a rectangle have?", options: ["4", "3", "2"], correct: "4" },
  { question: "How many straight sides does a circle have?", options: ["0", "1", "2"], correct: "0" },
  { question: "Which shape has all angles equal?", options: ["square", "trapezoid", "rectangle"], correct: "square" },
  { question: "Which has 7 sides?", options: ["heptagon", "hexagon", "octagon"], correct: "heptagon" },
  { question: "How many angles does a triangle have?", options: ["3", "4", "2"], correct: "3" },
  { question: "Which shape has opposite sides equal and 4 right angles?", options: ["rectangle", "trapezium", "rhombus"], correct: "rectangle" },
  { question: "Which shape has 4 equal sides but no right angles?", options: ["rhombus", "square", "rectangle"], correct: "rhombus" },
  { question: "Which has exactly 1 curved edge?", options: ["circle", "square", "hexagon"], correct: "circle" },
  { question: "Which is not a polygon?", options: ["circle", "pentagon", "hexagon"], correct: "circle" },
  { question: "How many sides does a trapezoid have?", options: ["4", "3", "5"], correct: "4" },
  { question: "Which shape has 9 sides?", options: ["nonagon", "octagon", "heptagon"], correct: "nonagon" },
  { question: "Which shape has 6 vertices?", options: ["hexagon", "pentagon", "square"], correct: "hexagon" },
  { question: "Which shape has 4 vertices?", options: ["square", "rectangle", "both"], correct: "both" },
  { question: "Which shape has the most sides?", options: ["decagon", "nonagon", "octagon"], correct: "decagon" },
  { question: "How many sides does a heptagon have?", options: ["7", "8", "6"], correct: "7" },
  { question: "How many corners does a hexagon have?", options: ["6", "5", "4"], correct: "6" },
  { question: "Which shape has two pairs of equal sides but no right angles?", options: ["rhombus", "square", "rectangle"], correct: "rhombus" },
  { question: "Which shape has four unequal sides?", options: ["trapezium", "square", "hexagon"], correct: "trapezium" },
  { question: "Which of these has all right angles?", options: ["square", "circle", "triangle"], correct: "square" },
  { question: "Which shape has exactly 4 sides and 4 vertices?", options: ["square", "rectangle", "both"], correct: "both" },
  { question: "Which is a 3-sided polygon?", options: ["triangle", "hexagon", "pentagon"], correct: "triangle" },
  { question: "Which shape has all equal sides but not equal angles?", options: ["rhombus", "rectangle", "trapezium"], correct: "rhombus" },
  { question: "Which shape has 4 sides but only 1 pair of parallel sides?", options: ["trapezium", "rectangle", "rhombus"], correct: "trapezium" },
  { question: "Which shape has more than 6 sides?", options: ["octagon", "triangle", "square"], correct: "octagon" }

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
    feedback.textContent = `❌ Oops! The correct answer is ${q.correct}`;
    feedback.style.color = "red";
  }

  currentIndex = (currentIndex + 1) % questions.length;
  document.getElementById("next").style.display = "inline-block";
}

window.onload = loadNext;
