const questions = [
  {
    question: "Which country is home to the Great Wall?",
    answers: [
      { text: "China", correct: true },
      { text: "India", correct: false },
      { text: "Japan", correct: false },
      { text: "Nepal", correct: false }
    ]
  },
  {
    question: "Where is the Eiffel Tower located?",
    answers: [
      { text: "Italy", correct: false },
      { text: "Spain", correct: false },
      { text: "France", correct: true },
      { text: "Germany", correct: false }
    ]
  },
  {
    question: "The Taj Mahal is located in which Indian city?",
    answers: [
      { text: "Mumbai", correct: false },
      { text: "Delhi", correct: false },
      { text: "Agra", correct: true },
      { text: "Jaipur", correct: false }
    ]
  },
  {
    question: "Which wonder is in Jordan and carved into rock?",
    answers: [
      { text: "Petra", correct: true },
      { text: "Colosseum", correct: false },
      { text: "Machu Picchu", correct: false },
      { text: "Chichen Itza", correct: false }
    ]
  },
  {
    question: "The Colosseum is located in which country?",
    answers: [
      { text: "France", correct: false },
      { text: "Italy", correct: true },
      { text: "Greece", correct: false },
      { text: "Spain", correct: false }
    ]
  },
  {
    question: "Where is Machu Picchu located?",
    answers: [
      { text: "Brazil", correct: false },
      { text: "Peru", correct: true },
      { text: "Colombia", correct: false },
      { text: "Argentina", correct: false }
    ]
  },
  {
    question: "Which wonder is found in Mexico?",
    answers: [
      { text: "Chichen Itza", correct: true },
      { text: "Machu Picchu", correct: false },
      { text: "Petra", correct: false },
      { text: "Christ the Redeemer", correct: false }
    ]
  },
  {
    question: "Where is Christ the Redeemer statue located?",
    answers: [
      { text: "Peru", correct: false },
      { text: "Mexico", correct: false },
      { text: "Brazil", correct: true },
      { text: "Argentina", correct: false }
    ]
  },
  {
    question: "The Grand Canyon is located in which country?",
    answers: [
      { text: "Canada", correct: false },
      { text: "USA", correct: true },
      { text: "Mexico", correct: false },
      { text: "Australia", correct: false }
    ]
  },
  {
    question: "Which natural wonder is a massive waterfall on the border of Zambia and Zimbabwe?",
    answers: [
      { text: "Niagara Falls", correct: false },
      { text: "Victoria Falls", correct: true },
      { text: "Angel Falls", correct: false },
      { text: "Iguazu Falls", correct: false }
    ]
  },
  {
    question: "Which mountain is the tallest in the world?",
    answers: [
      { text: "Mount Kilimanjaro", correct: false },
      { text: "Mount Everest", correct: true },
      { text: "K2", correct: false },
      { text: "Denali", correct: false }
    ]
  },
  {
    question: "Which ancient wonder was a lighthouse in Egypt?",
    answers: [
      { text: "Hanging Gardens", correct: false },
      { text: "Lighthouse of Alexandria", correct: true },
      { text: "Great Pyramid", correct: false },
      { text: "Colossus of Rhodes", correct: false }
    ]
  },
  {
    question: "Where is the Leaning Tower of Pisa?",
    answers: [
      { text: "Italy", correct: true },
      { text: "France", correct: false },
      { text: "Spain", correct: false },
      { text: "Portugal", correct: false }
    ]
  },
  {
    question: "Where are the Pyramids of Giza located?",
    answers: [
      { text: "Morocco", correct: false },
      { text: "Egypt", correct: true },
      { text: "Iran", correct: false },
      { text: "Iraq", correct: false }
    ]
  },
  {
    question: "Which country has the Moai statues?",
    answers: [
      { text: "Chile", correct: true },
      { text: "Brazil", correct: false },
      { text: "Argentina", correct: false },
      { text: "Colombia", correct: false }
    ]
  },
  {
    question: "Where is the Stonehenge located?",
    answers: [
      { text: "Ireland", correct: false },
      { text: "England", correct: true },
      { text: "Scotland", correct: false },
      { text: "Wales", correct: false }
    ]
  },
  {
    question: "Which is a famous canyon in Arizona?",
    answers: [
      { text: "Copper Canyon", correct: false },
      { text: "Grand Canyon", correct: true },
      { text: "Zion Canyon", correct: false },
      { text: "Horseshoe Canyon", correct: false }
    ]
  },
  {
    question: "Where is Mount Fuji?",
    answers: [
      { text: "Japan", correct: true },
      { text: "South Korea", correct: false },
      { text: "China", correct: false },
      { text: "Vietnam", correct: false }
    ]
  },
  {
    question: "Which desert has the largest sand dunes?",
    answers: [
      { text: "Sahara", correct: true },
      { text: "Gobi", correct: false },
      { text: "Kalahari", correct: false },
      { text: "Thar", correct: false }
    ]
  },
  {
    question: "Which man-made wonder was a temple in Greece?",
    answers: [
      { text: "Parthenon", correct: true },
      { text: "Colosseum", correct: false },
      { text: "Petra", correct: false },
      { text: "Hanging Gardens", correct: false }
    ]
  },
  {
    question: "Which wonder is known for its terracotta army?",
    answers: [
      { text: "China", correct: true },
      { text: "India", correct: false },
      { text: "Greece", correct: false },
      { text: "Egypt", correct: false }
    ]
  },
    {
    question: "The statue of Christ the Redeemer stands tall in which country?",
    answers: [
      { text: "Brazil", correct: true },
      { text: "Argentina", correct: false },
      { text: "Portugal", correct: false },
      { text: "Chile", correct: false }
    ]
  },
  {
    question: "Machu Picchu is a historical site located in which country?",
    answers: [
      { text: "Mexico", correct: false },
      { text: "Peru", correct: true },
      { text: "Colombia", correct: false },
      { text: "Ecuador", correct: false }
    ]
  },
  {
    question: "Which ancient city is known for its rock-cut architecture and water conduit system?",
    answers: [
      { text: "Petra", correct: true },
      { text: "Luxor", correct: false },
      { text: "Athens", correct: false },
      { text: "Rome", correct: false }
    ]
  },
  {
    question: "The Leaning Tower of Pisa is located in which country?",
    answers: [
      { text: "Italy", correct: true },
      { text: "Spain", correct: false },
      { text: "France", correct: false },
      { text: "Greece", correct: false }
    ]
  },
  {
    question: "Which wonder of the world is a mausoleum built in memory of Mumtaz Mahal?",
    answers: [
      { text: "Taj Mahal", correct: true },
      { text: "Red Fort", correct: false },
      { text: "Qutub Minar", correct: false },
      { text: "Charminar", correct: false }
    ]
  },
  {
    question: "Which African country is home to the ancient pyramids of Giza?",
    answers: [
      { text: "Egypt", correct: true },
      { text: "Sudan", correct: false },
      { text: "Morocco", correct: false },
      { text: "Algeria", correct: false }
    ]
  },
  {
    question: "Which European country is home to the Neuschwanstein Castle?",
    answers: [
      { text: "Germany", correct: true },
      { text: "Austria", correct: false },
      { text: "France", correct: false },
      { text: "Switzerland", correct: false }
    ]
  },
  {
    question: "The Moai statues are located on which island?",
    answers: [
      { text: "Easter Island", correct: true },
      { text: "Bora Bora", correct: false },
      { text: "Hawaii", correct: false },
      { text: "Galápagos", correct: false }
    ]
  },
  {
    question: "Which structure in India is known as the Sun Temple?",
    answers: [
      { text: "Konark Temple", correct: true },
      { text: "Brihadeeswara Temple", correct: false },
      { text: "Kailasa Temple", correct: false },
      { text: "Somnath Temple", correct: false }
    ]
  },
  {
    question: "What natural wonder stretches over 2,300 kilometers along the Australian coast?",
    answers: [
      { text: "Great Barrier Reef", correct: true },
      { text: "Uluru", correct: false },
      { text: "Daintree Forest", correct: false },
      { text: "Twelve Apostles", correct: false }
    ]
  },
  {
    question: "Which desert is home to the ancient city of Timbuktu?",
    answers: [
      { text: "Sahara", correct: true },
      { text: "Gobi", correct: false },
      { text: "Kalahari", correct: false },
      { text: "Atacama", correct: false }
    ]
  },
  {
    question: "Which world wonder is located in Jordan?",
    answers: [
      { text: "Petra", correct: true },
      { text: "Machu Picchu", correct: false },
      { text: "Great Wall", correct: false },
      { text: "Taj Mahal", correct: false }
    ]
  },
  {
    question: "Which South American statue is one of the New Seven Wonders?",
    answers: [
      { text: "Christ the Redeemer", correct: true },
      { text: "Angel Falls", correct: false },
      { text: "Sugarloaf Mountain", correct: false },
      { text: "Iguazu Falls", correct: false }
    ]
  },
  {
    question: "Which world wonder was built during the Ming dynasty?",
    answers: [
      { text: "Great Wall of China", correct: true },
      { text: "Forbidden City", correct: false },
      { text: "Terracotta Army", correct: false },
      { text: "Temple of Heaven", correct: false }
    ]
  },
  {
    question: "Which ancient wonder was located in Babylon?",
    answers: [
      { text: "Hanging Gardens", correct: true },
      { text: "Colossus of Rhodes", correct: false },
      { text: "Lighthouse of Alexandria", correct: false },
      { text: "Temple of Artemis", correct: false }
    ]
  },
  {
    question: "Which of the following is a natural wonder?",
    answers: [
      { text: "Grand Canyon", correct: true },
      { text: "Taj Mahal", correct: false },
      { text: "Petra", correct: false },
      { text: "Great Wall of China", correct: false }
    ]
  },
  {
    question: "Which wonder is located in Mexico and served as a temple to the god Kukulkan?",
    answers: [
      { text: "Chichen Itza", correct: true },
      { text: "Machu Picchu", correct: false },
      { text: "Teotihuacan", correct: false },
      { text: "Copán", correct: false }
    ]
  },
  {
    question: "Which wonder can be found in Rome, Italy?",
    answers: [
      { text: "Colosseum", correct: true },
      { text: "Pantheon", correct: false },
      { text: "Leaning Tower", correct: false },
      { text: "Sistine Chapel", correct: false }
    ]
  },
  {
    question: "Which country is home to the Terracotta Army?",
    answers: [
      { text: "China", correct: true },
      { text: "Japan", correct: false },
      { text: "Thailand", correct: false },
      { text: "Vietnam", correct: false }
    ]
  },
  {
    question: "Which temple is known for being carved entirely from a single rock?",
    answers: [
      { text: "Kailasa Temple", correct: true },
      { text: "Konark Temple", correct: false },
      { text: "Meenakshi Temple", correct: false },
      { text: "Jagannath Temple", correct: false }
    ]
  },
  {
    question: "Which iconic structure is found in Cambodia?",
    answers: [
      { text: "Angkor Wat", correct: true },
      { text: "Borobudur", correct: false },
      { text: "Shwedagon Pagoda", correct: false },
      { text: "Bagan Temples", correct: false }
    ]
  },
  {
    question: "Which city is home to the Burj Khalifa, though not a world wonder, a modern marvel?",
    answers: [
      { text: "Dubai", correct: true },
      { text: "Abu Dhabi", correct: false },
      { text: "Riyadh", correct: false },
      { text: "Doha", correct: false }
    ]
  },
  {
    question: "Which of the Seven Wonders of the Ancient World still exists today?",
    answers: [
      { text: "Great Pyramid of Giza", correct: true },
      { text: "Statue of Zeus", correct: false },
      { text: "Temple of Artemis", correct: false },
      { text: "Hanging Gardens", correct: false }
    ]
  },
  {
    question: "Which waterfall is one of the largest in the world and borders Zambia and Zimbabwe?",
    answers: [
      { text: "Victoria Falls", correct: true },
      { text: "Niagara Falls", correct: false },
      { text: "Angel Falls", correct: false },
      { text: "Iguazu Falls", correct: false }
    ]
  },
  {
    question: "Which ancient amphitheater could hold over 50,000 spectators?",
    answers: [
      { text: "Colosseum", correct: true },
      { text: "Parthenon", correct: false },
      { text: "Acropolis", correct: false },
      { text: "Forum", correct: false }
    ]
  },

];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  nextButton.innerText = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  questionElement.innerText = currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const btn = document.createElement("button");
    btn.innerText = answer.text;
    btn.classList.add("btn");
    if (answer.correct) {
      btn.dataset.correct = answer.correct;
    }
    btn.addEventListener("click", selectAnswer);
    answerButtons.appendChild(btn);
  });
}

function resetState() {
  nextButton.style.display = "none";
  answerButtons.innerHTML = "";
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  selectedBtn.style.backgroundColor = isCorrect ? "#4caf50" : "#f44336";

  Array.from(answerButtons.children).forEach(btn => {
    if (btn.dataset.correct === "true") {
      btn.style.backgroundColor = "#4caf50";
    }
    btn.disabled = true;
  });

  nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
});

function showScore() {
  resetState();
  questionElement.innerText = `🎉 You’ve completed the World Wonders Quest!`;
  nextButton.innerText = "Play Again";
  nextButton.style.display = "block";
}

startQuiz();
