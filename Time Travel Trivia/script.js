const questions = [
  {
    question: "Who was the first President of the United States?",
    answers: [
      { text: "George Washington", correct: true },
      { text: "Thomas Jefferson", correct: false },
      { text: "Abraham Lincoln", correct: false },
      { text: "John Adams", correct: false }
    ]
  },
  {
    question: "In what year did World War II end?",
    answers: [
      { text: "1945", correct: true },
      { text: "1939", correct: false },
      { text: "1942", correct: false },
      { text: "1950", correct: false }
    ]
  },
  {
    question: "Which ancient civilization built the pyramids?",
    answers: [
      { text: "Egyptians", correct: true },
      { text: "Romans", correct: false },
      { text: "Greeks", correct: false },
      { text: "Mesopotamians", correct: false }
    ]
  },
  {
    question: "Who discovered gravity after watching an apple fall?",
    answers: [
      { text: "Isaac Newton", correct: true },
      { text: "Albert Einstein", correct: false },
      { text: "Galileo Galilei", correct: false },
      { text: "Aristotle", correct: false }
    ]
  },
  {
    question: "Where did the Renaissance begin?",
    answers: [
      { text: "Italy", correct: true },
      { text: "France", correct: false },
      { text: "Germany", correct: false },
      { text: "Spain", correct: false }
    ]
  },
  {
    question: "Who was the first man to walk on the Moon?",
    answers: [
      { text: "Neil Armstrong", correct: true },
      { text: "Buzz Aldrin", correct: false },
      { text: "Yuri Gagarin", correct: false },
      { text: "Michael Collins", correct: false }
    ]
  },
  {
    question: "What was the name of the ship on which the Pilgrims traveled to America?",
    answers: [
      { text: "Mayflower", correct: true },
      { text: "Titanic", correct: false },
      { text: "Santa Maria", correct: false },
      { text: "Endeavour", correct: false }
    ]
  },
  {
    question: "Which war was fought between the North and South regions of the United States?",
    answers: [
      { text: "Civil War", correct: true },
      { text: "Revolutionary War", correct: false },
      { text: "World War I", correct: false },
      { text: "Korean War", correct: false }
    ]
  },
  {
    question: "Who was the famous nurse during the Crimean War?",
    answers: [
      { text: "Florence Nightingale", correct: true },
      { text: "Clara Barton", correct: false },
      { text: "Marie Curie", correct: false },
      { text: "Helen Keller", correct: false }
    ]
  },
  {
    question: "What year did the Berlin Wall fall?",
    answers: [
      { text: "1989", correct: true },
      { text: "1991", correct: false },
      { text: "1980", correct: false },
      { text: "1975", correct: false }
    ]
  },
  {
    question: "Who invented the telephone?",
    answers: [
      { text: "Alexander Graham Bell", correct: true },
      { text: "Thomas Edison", correct: false },
      { text: "Nikola Tesla", correct: false },
      { text: "James Watt", correct: false }
    ]
  },
  {
    question: "Which event started World War I?",
    answers: [
      { text: "Assassination of Archduke Franz Ferdinand", correct: true },
      { text: "Invasion of Poland", correct: false },
      { text: "Pearl Harbor attack", correct: false },
      { text: "Fall of the Berlin Wall", correct: false }
    ]
  },
  {
    question: "Where is the Great Wall located?",
    answers: [
      { text: "China", correct: true },
      { text: "Japan", correct: false },
      { text: "India", correct: false },
      { text: "Russia", correct: false }
    ]
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: [
      { text: "Leonardo da Vinci", correct: true },
      { text: "Michelangelo", correct: false },
      { text: "Raphael", correct: false },
      { text: "Donatello", correct: false }
    ]
  },
  {
    question: "Which explorer discovered America in 1492?",
    answers: [
      { text: "Christopher Columbus", correct: true },
      { text: "Vasco da Gama", correct: false },
      { text: "Ferdinand Magellan", correct: false },
      { text: "Marco Polo", correct: false }
    ]
  },
  {
    question: "Who was Queen of England during the Spanish Armada?",
    answers: [
      { text: "Queen Elizabeth I", correct: true },
      { text: "Queen Victoria", correct: false },
      { text: "Queen Mary I", correct: false },
      { text: "Queen Anne", correct: false }
    ]
  },
  {
    question: "What empire was ruled by Julius Caesar?",
    answers: [
      { text: "Roman Empire", correct: true },
      { text: "Greek Empire", correct: false },
      { text: "Ottoman Empire", correct: false },
      { text: "Mongol Empire", correct: false }
    ]
  },
  {
    question: "When did India gain independence?",
    answers: [
      { text: "1947", correct: true },
      { text: "1950", correct: false },
      { text: "1935", correct: false },
      { text: "1945", correct: false }
    ]
  },
  {
    question: "Who discovered America was not Asia?",
    answers: [
      { text: "Amerigo Vespucci", correct: true },
      { text: "Columbus", correct: false },
      { text: "Cook", correct: false },
      { text: "Cartier", correct: false }
    ]
  },
  {
    question: "What ancient city was destroyed by a volcano in 79 AD?",
    answers: [
      { text: "Pompeii", correct: true },
      { text: "Athens", correct: false },
      { text: "Rome", correct: false },
      { text: "Carthage", correct: false }
    ]
  },
  {
  question: "Who was the first man to travel into space?",
  answers: [
    { text: "Yuri Gagarin", correct: true },
    { text: "Neil Armstrong", correct: false },
    { text: "Buzz Aldrin", correct: false },
    { text: "John Glenn", correct: false }
  ]
},
{
  question: "What is the national sport of Japan?",
  answers: [
    { text: "Sumo Wrestling", correct: true },
    { text: "Judo", correct: false },
    { text: "Karate", correct: false },
    { text: "Baseball", correct: false }
  ]
},
{
  question: "Which continent is known as the 'Dark Continent'?",
  answers: [
    { text: "Africa", correct: true },
    { text: "Asia", correct: false },
    { text: "Australia", correct: false },
    { text: "Europe", correct: false }
  ]
},
{
  question: "Which gas do plants absorb from the atmosphere?",
  answers: [
    { text: "Carbon Dioxide", correct: true },
    { text: "Oxygen", correct: false },
    { text: "Nitrogen", correct: false },
    { text: "Hydrogen", correct: false }
  ]
},
{
  question: "Which is the smallest bone in the human body?",
  answers: [
    { text: "Stapes", correct: true },
    { text: "Femur", correct: false },
    { text: "Humerus", correct: false },
    { text: "Tibia", correct: false }
  ]
},
{
  question: "Which planet is known as the Morning Star?",
  answers: [
    { text: "Venus", correct: true },
    { text: "Mars", correct: false },
    { text: "Mercury", correct: false },
    { text: "Saturn", correct: false }
  ]
},
{
  question: "Who painted the ceiling of the Sistine Chapel?",
  answers: [
    { text: "Michelangelo", correct: true },
    { text: "Leonardo da Vinci", correct: false },
    { text: "Raphael", correct: false },
    { text: "Donatello", correct: false }
  ]
},
{
  question: "Which organ purifies blood in the human body?",
  answers: [
    { text: "Kidney", correct: true },
    { text: "Liver", correct: false },
    { text: "Heart", correct: false },
    { text: "Lungs", correct: false }
  ]
},
{
  question: "Who wrote the national anthem of India?",
  answers: [
    { text: "Rabindranath Tagore", correct: true },
    { text: "Bankim Chandra Chatterjee", correct: false },
    { text: "Sarojini Naidu", correct: false },
    { text: "Mahatma Gandhi", correct: false }
  ]
},
{
  question: "What is the hardest natural substance on Earth?",
  answers: [
    { text: "Diamond", correct: true },
    { text: "Gold", correct: false },
    { text: "Iron", correct: false },
    { text: "Granite", correct: false }
  ]
},
{
  question: "Which is the largest ocean in the world?",
  answers: [
    { text: "Pacific Ocean", correct: true },
    { text: "Atlantic Ocean", correct: false },
    { text: "Indian Ocean", correct: false },
    { text: "Arctic Ocean", correct: false }
  ]
},
{
  question: "What is the main source of energy for the Earth?",
  answers: [
    { text: "Sun", correct: true },
    { text: "Moon", correct: false },
    { text: "Coal", correct: false },
    { text: "Electricity", correct: false }
  ]
},
{
  question: "What is the name of our galaxy?",
  answers: [
    { text: "Milky Way", correct: true },
    { text: "Andromeda", correct: false },
    { text: "Orion", correct: false },
    { text: "Centaurus", correct: false }
  ]
},
{
  question: "Which is the longest river in the world?",
  answers: [
    { text: "Nile", correct: true },
    { text: "Amazon", correct: false },
    { text: "Yangtze", correct: false },
    { text: "Mississippi", correct: false }
  ]
},
{
  question: "Which planet has the most moons?",
  answers: [
    { text: "Saturn", correct: true },
    { text: "Jupiter", correct: false },
    { text: "Earth", correct: false },
    { text: "Uranus", correct: false }
  ]
},
{
  question: "What is the capital of Canada?",
  answers: [
    { text: "Ottawa", correct: true },
    { text: "Toronto", correct: false },
    { text: "Vancouver", correct: false },
    { text: "Montreal", correct: false }
  ]
},
{
  question: "Who is known as the 'Iron Man of India'?",
  answers: [
    { text: "Sardar Vallabhbhai Patel", correct: true },
    { text: "Subhash Chandra Bose", correct: false },
    { text: "Jawaharlal Nehru", correct: false },
    { text: "Mahatma Gandhi", correct: false }
  ]
},
{
  question: "What do bees collect and use to make honey?",
  answers: [
    { text: "Nectar", correct: true },
    { text: "Pollen", correct: false },
    { text: "Water", correct: false },
    { text: "Sap", correct: false }
  ]
},
{
  question: "Which metal is liquid at room temperature?",
  answers: [
    { text: "Mercury", correct: true },
    { text: "Iron", correct: false },
    { text: "Copper", correct: false },
    { text: "Aluminum", correct: false }
  ]
},
{
  question: "What is the chemical symbol for gold?",
  answers: [
    { text: "Au", correct: true },
    { text: "Ag", correct: false },
    { text: "Gd", correct: false },
    { text: "Go", correct: false }
  ]
},
{
  question: "Which country invented paper?",
  answers: [
    { text: "China", correct: true },
    { text: "Egypt", correct: false },
    { text: "India", correct: false },
    { text: "Greece", correct: false }
  ]
},
{
  question: "Which is the tallest mountain in the world?",
  answers: [
    { text: "Mount Everest", correct: true },
    { text: "K2", correct: false },
    { text: "Kangchenjunga", correct: false },
    { text: "Makalu", correct: false }
  ]
},
{
  question: "What is the boiling point of water in Celsius?",
  answers: [
    { text: "100°C", correct: true },
    { text: "90°C", correct: false },
    { text: "80°C", correct: false },
    { text: "120°C", correct: false }
  ]
},
{
  question: "Who is known as the 'Father of Computers'?",
  answers: [
    { text: "Charles Babbage", correct: true },
    { text: "Alan Turing", correct: false },
    { text: "Steve Jobs", correct: false },
    { text: "Bill Gates", correct: false }
  ]
},
{
  question: "Which vitamin is produced when sunlight hits the skin?",
  answers: [
    { text: "Vitamin D", correct: true },
    { text: "Vitamin A", correct: false },
    { text: "Vitamin B", correct: false },
    { text: "Vitamin C", correct: false }
  ]
}

  // Add 30 more in same format...
];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const scoreSection = document.getElementById("score-section");
const scoreText = document.getElementById("score-text");

let currentQuestionIndex = 0;
let score = 0;

function startGame() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerText = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  questionElement.innerText = currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtons.appendChild(button);
  });
}

function resetState() {
  nextButton.classList.add("hidden");
  answerButtons.innerHTML = "";
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct === "true";
  if (correct) {
    selectedButton.classList.add("correct");
    score++;
  } else {
    selectedButton.classList.add("wrong");
  }

  Array.from(answerButtons.children).forEach(button => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });

  nextButton.classList.remove("hidden");
}

function showScore() {
  resetState();
  questionElement.innerText = "";
  scoreSection.classList.remove("hidden");
  scoreText.innerText = `You scored ${score} out of ${questions.length}.`;
  nextButton.classList.add("hidden");
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startGame();
  }
});

startGame();
