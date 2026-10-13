const questions = [
  {
    question: "What is the capital of Australia?",
    answers: [
      { text: "Sydney", correct: false },
      { text: "Melbourne", correct: false },
      { text: "Canberra", correct: true },
      { text: "Perth", correct: false }
    ]
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: false }
    ]
  },
  {
    question: "Who wrote the national anthem of India?",
    answers: [
      { text: "Bankim Chandra Chatterjee", correct: false },
      { text: "Sarojini Naidu", correct: false },
      { text: "Rabindranath Tagore", correct: true },
      { text: "Subhash Chandra Bose", correct: false }
    ]
  },
  {
    question: "Which is the largest ocean in the world?",
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Pacific Ocean", correct: true },
      { text: "Arctic Ocean", correct: false }
    ]
  },
  {
    question: "In which year did India gain independence?",
    answers: [
      { text: "1945", correct: false },
      { text: "1947", correct: true },
      { text: "1950", correct: false },
      { text: "1942", correct: false }
    ]
  },
  {
    question: "Which gas do plants use for photosynthesis?",
    answers: [
      { text: "Oxygen", correct: false },
      { text: "Carbon Dioxide", correct: true },
      { text: "Nitrogen", correct: false },
      { text: "Hydrogen", correct: false }
    ]
  },
  {
    question: "What is H2O commonly known as?",
    answers: [
      { text: "Salt", correct: false },
      { text: "Water", correct: true },
      { text: "Oxygen", correct: false },
      { text: "Acid", correct: false }
    ]
  },
  {
    question: "Who is known as the Father of the Nation in India?",
    answers: [
      { text: "Jawaharlal Nehru", correct: false },
      { text: "Sardar Vallabhbhai Patel", correct: false },
      { text: "Mahatma Gandhi", correct: true },
      { text: "B. R. Ambedkar", correct: false }
    ]
  },
  {
    question: "Which continent is the Sahara Desert located in?",
    answers: [
      { text: "Asia", correct: false },
      { text: "Africa", correct: true },
      { text: "Australia", correct: false },
      { text: "Europe", correct: false }
    ]
  },
  {
    question: "What is the smallest prime number?",
    answers: [
      { text: "1", correct: false },
      { text: "2", correct: true },
      { text: "3", correct: false },
      { text: "5", correct: false }
    ]
  },
   {
    question: "What is the largest continent on Earth?",
    answers: [
      { text: "Asia", correct: true },
      { text: "Africa", correct: false },
      { text: "Europe", correct: false },
      { text: "Australia", correct: false }
    ]
  },
  {
    question: "Which country gifted the Statue of Liberty to the USA?",
    answers: [
      { text: "France", correct: true },
      { text: "Germany", correct: false },
      { text: "Canada", correct: false },
      { text: "Italy", correct: false }
    ]
  },
  {
    question: "Who was the first man to step on the Moon?",
    answers: [
      { text: "Neil Armstrong", correct: true },
      { text: "Buzz Aldrin", correct: false },
      { text: "Yuri Gagarin", correct: false },
      { text: "Michael Collins", correct: false }
    ]
  },
  {
    question: "Which gas do plants use for photosynthesis?",
    answers: [
      { text: "Carbon Dioxide", correct: true },
      { text: "Oxygen", correct: false },
      { text: "Nitrogen", correct: false },
      { text: "Hydrogen", correct: false }
    ]
  },
  {
    question: "What is the boiling point of water?",
    answers: [
      { text: "100°C", correct: true },
      { text: "0°C", correct: false },
      { text: "50°C", correct: false },
      { text: "212°C", correct: false }
    ]
  },
  {
    question: "Who invented the telephone?",
    answers: [
      { text: "Alexander Graham Bell", correct: true },
      { text: "Thomas Edison", correct: false },
      { text: "Nikola Tesla", correct: false },
      { text: "Guglielmo Marconi", correct: false }
    ]
  },
  {
    question: "Which ocean is the deepest?",
    answers: [
      { text: "Pacific Ocean", correct: true },
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Arctic Ocean", correct: false }
    ]
  },
  {
    question: "What is the capital of Japan?",
    answers: [
      { text: "Tokyo", correct: true },
      { text: "Osaka", correct: false },
      { text: "Kyoto", correct: false },
      { text: "Nagoya", correct: false }
    ]
  },
  {
    question: "Which blood group is called the universal donor?",
    answers: [
      { text: "O Negative", correct: true },
      { text: "O Positive", correct: false },
      { text: "AB Negative", correct: false },
      { text: "A Positive", correct: false }
    ]
  },
  {
    question: "Which metal is liquid at room temperature?",
    answers: [
      { text: "Mercury", correct: true },
      { text: "Iron", correct: false },
      { text: "Silver", correct: false },
      { text: "Copper", correct: false }
    ]
  },
  {
    question: "Which is the tallest mountain in the world?",
    answers: [
      { text: "Mount Everest", correct: true },
      { text: "K2", correct: false },
      { text: "Kangchenjunga", correct: false },
      { text: "Lhotse", correct: false }
    ]
  },
  {
    question: "Which Indian river is considered sacred and worshipped?",
    answers: [
      { text: "Ganga", correct: true },
      { text: "Yamuna", correct: false },
      { text: "Narmada", correct: false },
      { text: "Godavari", correct: false }
    ]
  },
  {
    question: "How many players are there in a football (soccer) team?",
    answers: [
      { text: "11", correct: true },
      { text: "9", correct: false },
      { text: "7", correct: false },
      { text: "12", correct: false }
    ]
  },
  {
    question: "Who wrote the national anthem of India?",
    answers: [
      { text: "Rabindranath Tagore", correct: true },
      { text: "Bankim Chandra Chatterjee", correct: false },
      { text: "Sarojini Naidu", correct: false },
      { text: "Subhash Chandra Bose", correct: false }
    ]
  },
  {
    question: "Which is the smallest planet in our solar system?",
    answers: [
      { text: "Mercury", correct: true },
      { text: "Mars", correct: false },
      { text: "Earth", correct: false },
      { text: "Pluto", correct: false }
    ]
  },
  {
    question: "What is the largest mammal in the world?",
    answers: [
      { text: "Blue Whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Hippopotamus", correct: false },
      { text: "Giraffe", correct: false }
    ]
  },
  {
    question: "What is the currency of Japan?",
    answers: [
      { text: "Yen", correct: true },
      { text: "Won", correct: false },
      { text: "Rupee", correct: false },
      { text: "Dollar", correct: false }
    ]
  },
  {
    question: "What is H2O commonly known as?",
    answers: [
      { text: "Water", correct: true },
      { text: "Oxygen", correct: false },
      { text: "Hydrogen", correct: false },
      { text: "Carbon Dioxide", correct: false }
    ]
  },
  {
    question: "Which planet is known as the 'Red Planet'?",
    answers: [
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Venus", correct: false },
      { text: "Mercury", correct: false }
    ]
  },
  {
    question: "Which bird is known as the national bird of India?",
    answers: [
      { text: "Peacock", correct: true },
      { text: "Sparrow", correct: false },
      { text: "Eagle", correct: false },
      { text: "Pigeon", correct: false }
    ]
  },
 {
  question: "Which gas do plants absorb from the atmosphere?",
  answers: [
    { text: "Oxygen", correct: false },
    { text: "Carbon Dioxide", correct: true },
    { text: "Nitrogen", correct: false },
    { text: "Hydrogen", correct: false }
  ]
},
{
  question: "Which state is known as the 'Land of Rising Sun' in India?",
  answers: [
    { text: "Arunachal Pradesh", correct: true },
    { text: "Assam", correct: false },
    { text: "Sikkim", correct: false },
    { text: "Nagaland", correct: false }
  ]
},
{
  question: "Who was the first man to walk on the moon?",
  answers: [
    { text: "Buzz Aldrin", correct: false },
    { text: "Neil Armstrong", correct: true },
    { text: "Yuri Gagarin", correct: false },
    { text: "Michael Collins", correct: false }
  ]
},
{
  question: "Which country gifted the Statue of Liberty to the USA?",
  answers: [
    { text: "Germany", correct: false },
    { text: "France", correct: true },
    { text: "Canada", correct: false },
    { text: "England", correct: false }
  ]
},
{
  question: "Which is the smallest continent in the world?",
  answers: [
    { text: "Europe", correct: false },
    { text: "Australia", correct: true },
    { text: "Antarctica", correct: false },
    { text: "South America", correct: false }
  ]
},
{
  question: "Which is the hardest natural substance?",
  answers: [
    { text: "Gold", correct: false },
    { text: "Iron", correct: false },
    { text: "Diamond", correct: true },
    { text: "Silver", correct: false }
  ]
},
{
  question: "What is the name of India’s national aquatic animal?",
  answers: [
    { text: "Blue Whale", correct: false },
    { text: "Dolphin", correct: true },
    { text: "Shark", correct: false },
    { text: "Turtle", correct: false }
  ]
},
{
  question: "Which instrument is used to measure temperature?",
  answers: [
    { text: "Thermometer", correct: true },
    { text: "Barometer", correct: false },
    { text: "Hygrometer", correct: false },
    { text: "Altimeter", correct: false }
  ]
},
{
  question: "Who was the first President of independent India?",
  answers: [
    { text: "Jawaharlal Nehru", correct: false },
    { text: "Dr. Rajendra Prasad", correct: true },
    { text: "Sardar Patel", correct: false },
    { text: "Lal Bahadur Shastri", correct: false }
  ]
},
{
  question: "Which is the longest river in India?",
  answers: [
    { text: "Ganga", correct: true },
    { text: "Yamuna", correct: false },
    { text: "Brahmaputra", correct: false },
    { text: "Godavari", correct: false }
  ]
},
{
  question: "Which country is known as the Land of the Rising Sun?",
  answers: [
    { text: "China", correct: false },
    { text: "Japan", correct: true },
    { text: "Thailand", correct: false },
    { text: "South Korea", correct: false }
  ]
},
{
  question: "How many planets are there in our solar system?",
  answers: [
    { text: "7", correct: false },
    { text: "8", correct: true },
    { text: "9", correct: false },
    { text: "10", correct: false }
  ]
},
{
  question: "Who discovered gravity?",
  answers: [
    { text: "Albert Einstein", correct: false },
    { text: "Isaac Newton", correct: true },
    { text: "Galileo", correct: false },
    { text: "Marie Curie", correct: false }
  ]
},
{
  question: "Which city is known as the Pink City of India?",
  answers: [
    { text: "Udaipur", correct: false },
    { text: "Jaipur", correct: true },
    { text: "Jodhpur", correct: false },
    { text: "Agra", correct: false }
  ]
},
{
  question: "Which planet has rings around it?",
  answers: [
    { text: "Earth", correct: false },
    { text: "Saturn", correct: true },
    { text: "Mars", correct: false },
    { text: "Venus", correct: false }
  ]
},
{
  question: "Which is the largest desert in the world?",
  answers: [
    { text: "Sahara", correct: true },
    { text: "Gobi", correct: false },
    { text: "Thar", correct: false },
    { text: "Kalahari", correct: false }
  ]
},
{
  question: "What is the main source of energy on Earth?",
  answers: [
    { text: "Moon", correct: false },
    { text: "Sun", correct: true },
    { text: "Wind", correct: false },
    { text: "Water", correct: false }
  ]
},
{
  question: "Who invented the light bulb?",
  answers: [
    { text: "Alexander Graham Bell", correct: false },
    { text: "Thomas Edison", correct: true },
    { text: "Nikola Tesla", correct: false },
    { text: "James Watt", correct: false }
  ]
},
{
  question: "Which is the national animal of India?",
  answers: [
    { text: "Lion", correct: false },
    { text: "Elephant", correct: false },
    { text: "Tiger", correct: true },
    { text: "Peacock", correct: false }
  ]
},
{
  question: "Which organ pumps blood in the human body?",
  answers: [
    { text: "Brain", correct: false },
    { text: "Heart", correct: true },
    { text: "Liver", correct: false },
    { text: "Lungs", correct: false }
  ]
},
{
  question: "Which festival is known as the festival of lights?",
  answers: [
    { text: "Holi", correct: false },
    { text: "Eid", correct: false },
    { text: "Diwali", correct: true },
    { text: "Christmas", correct: false }
  ]
},
{
  question: "Which is the largest mammal in the world?",
  answers: [
    { text: "Elephant", correct: false },
    { text: "Blue Whale", correct: true },
    { text: "Giraffe", correct: false },
    { text: "Rhino", correct: false }
  ]
},
{
  question: "What color symbolizes peace?",
  answers: [
    { text: "Red", correct: false },
    { text: "White", correct: true },
    { text: "Blue", correct: false },
    { text: "Green", correct: false }
  ]
},
{
  question: "Which planet is closest to the sun?",
  answers: [
    { text: "Mercury", correct: true },
    { text: "Venus", correct: false },
    { text: "Earth", correct: false },
    { text: "Mars", correct: false }
  ]
},
{
  question: "How many bones are there in the adult human body?",
  answers: [
    { text: "206", correct: true },
    { text: "201", correct: false },
    { text: "210", correct: false },
    { text: "215", correct: false }
  ]
},
{
  question: "Which day is celebrated as World Environment Day?",
  answers: [
    { text: "5 June", correct: true },
    { text: "22 April", correct: false },
    { text: "8 March", correct: false },
    { text: "2 October", correct: false }
  ]
}

  // You can continue adding questions here...
];

// (The rest of your existing script: showQuestion(), selectAnswer(), etc. remains unchanged)


const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const scoreSection = document.getElementById("score-section");
const scoreText = document.getElementById("score-text");

let currentQuestionIndex = 0;
let score = 0;

function startGame() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerText = "Next";
  scoreSection.classList.add("hidden");
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.innerText = currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  nextButton.classList.add("hidden");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const isCorrect = selectedButton.dataset.correct === "true";

  if (isCorrect) {
    selectedButton.classList.add("correct");
    score++;
  } else {
    selectedButton.classList.add("wrong");
  }

  Array.from(answerButtonsElement.children).forEach(button => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });

  nextButton.classList.remove("hidden");
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
  questionElement.innerText = "Quiz Completed!";
  scoreSection.classList.remove("hidden");
  scoreText.innerText = `You scored ${score} out of ${questions.length}! 🚀`;
  nextButton.classList.add("hidden");
}

startGame();