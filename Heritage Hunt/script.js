const questions = [
  {
    question: "Which monument is also known as the 'Symbol of Love'?",
    answers: [
      { text: "Qutub Minar", correct: false },
      { text: "India Gate", correct: false },
      { text: "Taj Mahal", correct: true },
      { text: "Red Fort", correct: false }
    ]
  },
  {
    question: "Where is the Great Wall located?",
    answers: [
      { text: "India", correct: false },
      { text: "Egypt", correct: false },
      { text: "China", correct: true },
      { text: "Peru", correct: false }
    ]
  },
  {
    question: "Stonehenge is found in which country?",
    answers: [
      { text: "Italy", correct: false },
      { text: "England", correct: true },
      { text: "Germany", correct: false },
      { text: "Greece", correct: false }
    ]
  },
  {
    question: "What culture built Machu Picchu?",
    answers: [
      { text: "Inca", correct: true },
      { text: "Maya", correct: false },
      { text: "Aztec", correct: false },
      { text: "Zulu", correct: false }
    ]
  },
  {
    question: "Where is the Eiffel Tower located?",
    answers: [
      { text: "Paris", correct: true },
      { text: "London", correct: false },
      { text: "Rome", correct: false },
      { text: "Berlin", correct: false }
    ]
  },
  {
    question: "Where can you find the Colosseum?",
    answers: [
      { text: "Athens", correct: false },
      { text: "Rome", correct: true },
      { text: "Istanbul", correct: false },
      { text: "Paris", correct: false }
    ]
  },
  {
    question: "Which ancient city is known for the Pyramids?",
    answers: [
      { text: "Athens", correct: false },
      { text: "Cairo", correct: true },
      { text: "Baghdad", correct: false },
      { text: "Alexandria", correct: false }
    ]
  },
  {
    question: "Which wonder is in Jordan and carved into a rock face?",
    answers: [
      { text: "Petra", correct: true },
      { text: "Giza", correct: false },
      { text: "Luxor", correct: false },
      { text: "Babylon", correct: false }
    ]
  },
  {
    question: "Which statue overlooks Rio de Janeiro?",
    answers: [
      { text: "Statue of Liberty", correct: false },
      { text: "Christ the Redeemer", correct: true },
      { text: "Angel of the North", correct: false },
      { text: "The Thinker", correct: false }
    ]
  },
  {
    question: "Where is Chichen Itza located?",
    answers: [
      { text: "Peru", correct: false },
      { text: "Mexico", correct: true },
      { text: "Brazil", correct: false },
      { text: "Argentina", correct: false }
    ]
  },
  {
    question: "Which structure was built as a tomb by Shah Jahan?",
    answers: [
      { text: "Humayun’s Tomb", correct: false },
      { text: "Taj Mahal", correct: true },
      { text: "Bibi Ka Maqbara", correct: false },
      { text: "Charminar", correct: false }
    ]
  },
  {
    question: "Where is the Leaning Tower of Pisa?",
    answers: [
      { text: "Spain", correct: false },
      { text: "France", correct: false },
      { text: "Italy", correct: true },
      { text: "Germany", correct: false }
    ]
  },
  {
    question: "Which country is home to the Moai statues of Easter Island?",
    answers: [
      { text: "Peru", correct: false },
      { text: "Chile", correct: true },
      { text: "Brazil", correct: false },
      { text: "Argentina", correct: false }
    ]
  },
  {
    question: "Which US landmark was a gift from France?",
    answers: [
      { text: "Lincoln Memorial", correct: false },
      { text: "Statue of Liberty", correct: true },
      { text: "Mount Rushmore", correct: false },
      { text: "Golden Gate Bridge", correct: false }
    ]
  },
  {
    question: "Which structure was once the tallest in the world?",
    answers: [
      { text: "Eiffel Tower", correct: false },
      { text: "Empire State Building", correct: true },
      { text: "Burj Khalifa", correct: false },
      { text: "Big Ben", correct: false }
    ]
  },
  {
    question: "Where is the Burj Khalifa located?",
    answers: [
      { text: "Abu Dhabi", correct: false },
      { text: "Riyadh", correct: false },
      { text: "Dubai", correct: true },
      { text: "Doha", correct: false }
    ]
  },
  {
    question: "Angkor Wat is in which country?",
    answers: [
      { text: "Vietnam", correct: false },
      { text: "Cambodia", correct: true },
      { text: "Thailand", correct: false },
      { text: "Malaysia", correct: false }
    ]
  },
  {
    question: "Which temple is dedicated to Artemis?",
    answers: [
      { text: "Parthenon", correct: false },
      { text: "Temple of Artemis", correct: true },
      { text: "Pantheon", correct: false },
      { text: "Temple of Zeus", correct: false }
    ]
  },
  {
    question: "The Parthenon is located in which city?",
    answers: [
      { text: "Athens", correct: true },
      { text: "Rome", correct: false },
      { text: "Istanbul", correct: false },
      { text: "Cairo", correct: false }
    ]
  },
  {
    question: "What city is home to the Blue Mosque?",
    answers: [
      { text: "Mecca", correct: false },
      { text: "Istanbul", correct: true },
      { text: "Tehran", correct: false },
      { text: "Baghdad", correct: false }
    ]
  },
  {
    question: "The Acropolis is a historical site in which country?",
    answers: [
      { text: "Italy", correct: false },
      { text: "Greece", correct: true },
      { text: "Spain", correct: false },
      { text: "Portugal", correct: false }
    ]
  },
  {
    question: "Which city houses the Sagrada Familia?",
    answers: [
      { text: "Barcelona", correct: true },
      { text: "Madrid", correct: false },
      { text: "Valencia", correct: false },
      { text: "Seville", correct: false }
    ]
  },
  {
    question: "What is the ancient city under Mount Vesuvius?",
    answers: [
      { text: "Pompeii", correct: true },
      { text: "Athens", correct: false },
      { text: "Rome", correct: false },
      { text: "Venice", correct: false }
    ]
  },
  {
    question: "Which structure is in Agra, India?",
    answers: [
      { text: "Taj Mahal", correct: true },
      { text: "Charminar", correct: false },
      { text: "Qutub Minar", correct: false },
      { text: "Golden Temple", correct: false }
    ]
  },
  {
    question: "Where is the Sydney Opera House?",
    answers: [
      { text: "New Zealand", correct: false },
      { text: "Australia", correct: true },
      { text: "Canada", correct: false },
      { text: "UK", correct: false }
    ]
  },
  {
    question: "Which structure is known for its large dome and mosque architecture?",
    answers: [
      { text: "Blue Mosque", correct: false },
      { text: "Hagia Sophia", correct: true },
      { text: "Al-Aqsa Mosque", correct: false },
      { text: "Great Mosque of Mecca", correct: false }
    ]
  },
  {
    question: "Which city is home to the Golden Gate Bridge?",
    answers: [
      { text: "Los Angeles", correct: false },
      { text: "San Francisco", correct: true },
      { text: "Seattle", correct: false },
      { text: "New York", correct: false }
    ]
  },
  {
    question: "Which is a UNESCO World Heritage Site in India?",
    answers: [
      { text: "Charminar", correct: false },
      { text: "Khajuraho Temples", correct: true },
      { text: "Marine Drive", correct: false },
      { text: "Howrah Bridge", correct: false }
    ]
  },
  {
    question: "Where is Mount Rushmore?",
    answers: [
      { text: "North Dakota", correct: false },
      { text: "South Dakota", correct: true },
      { text: "Texas", correct: false },
      { text: "Nevada", correct: false }
    ]
  },
  {
    question: "What is the tallest man-made structure today?",
    answers: [
      { text: "Shanghai Tower", correct: false },
      { text: "Burj Khalifa", correct: true },
      { text: "Empire State", correct: false },
      { text: "CN Tower", correct: false }
    ]
  },
  {
  question: "Which city is home to the famous Christ the Redeemer statue?",
  answers: [
    { text: "Rio de Janeiro", correct: true },
    { text: "Lisbon", correct: false },
    { text: "Madrid", correct: false },
    { text: "Buenos Aires", correct: false }
  ]
},
{
  question: "In which country is the Petra archaeological site located?",
  answers: [
    { text: "Jordan", correct: true },
    { text: "Egypt", correct: false },
    { text: "Iran", correct: false },
    { text: "Turkey", correct: false }
  ]
},
{
  question: "Which ancient wonder was located in Babylon?",
  answers: [
    { text: "Hanging Gardens", correct: true },
    { text: "Colossus of Rhodes", correct: false },
    { text: "Lighthouse of Alexandria", correct: false },
    { text: "Great Pyramid of Giza", correct: false }
  ]
},
{
  question: "Which temple complex is the largest religious monument in the world?",
  answers: [
    { text: "Angkor Wat", correct: true },
    { text: "Borobudur", correct: false },
    { text: "Kailasa Temple", correct: false },
    { text: "Meenakshi Temple", correct: false }
  ]
},
{
  question: "Which wonder is located on an island in the Aegean Sea?",
  answers: [
    { text: "Colossus of Rhodes", correct: true },
    { text: "Temple of Artemis", correct: false },
    { text: "Statue of Zeus", correct: false },
    { text: "Mausoleum at Halicarnassus", correct: false }
  ]
},
{
  question: "Which monument is located on the border of China and Mongolia?",
  answers: [
    { text: "Great Wall of China", correct: true },
    { text: "Forbidden City", correct: false },
    { text: "Terracotta Army", correct: false },
    { text: "Summer Palace", correct: false }
  ]
},
{
  question: "Which iconic monument in India is made from white marble?",
  answers: [
    { text: "Taj Mahal", correct: true },
    { text: "Lotus Temple", correct: false },
    { text: "Charminar", correct: false },
    { text: "Gateway of India", correct: false }
  ]
},
{
  question: "Where is the Leaning Tower of Pisa located?",
  answers: [
    { text: "Italy", correct: true },
    { text: "France", correct: false },
    { text: "Spain", correct: false },
    { text: "Greece", correct: false }
  ]
},
{
  question: "Which wonder was built as a mausoleum in ancient Persia?",
  answers: [
    { text: "Mausoleum at Halicarnassus", correct: true },
    { text: "Temple of Artemis", correct: false },
    { text: "Hanging Gardens", correct: false },
    { text: "Great Pyramid of Giza", correct: false }
  ]
},
{
  question: "Which monument is carved into a mountain in South Dakota, USA?",
  answers: [
    { text: "Mount Rushmore", correct: true },
    { text: "Grand Canyon", correct: false },
    { text: "Statue of Liberty", correct: false },
    { text: "Niagara Falls", correct: false }
  ]
},
{
  question: "Which monument is famous for its giant stone heads on Easter Island?",
  answers: [
    { text: "Moai Statues", correct: true },
    { text: "Stonehenge", correct: false },
    { text: "Totem Poles", correct: false },
    { text: "Olmec Heads", correct: false }
  ]
},
{
  question: "Which ancient city features a giant amphitheater called the Colosseum?",
  answers: [
    { text: "Rome", correct: true },
    { text: "Athens", correct: false },
    { text: "Alexandria", correct: false },
    { text: "Istanbul", correct: false }
  ]
},
{
  question: "Which underwater wonder is off the coast of Australia?",
  answers: [
    { text: "Great Barrier Reef", correct: true },
    { text: "Coral Sea Trench", correct: false },
    { text: "Deep Blue Hole", correct: false },
    { text: "Red Sea Coral", correct: false }
  ]
},
{
  question: "Which historic wall stretches across Northern England?",
  answers: [
    { text: "Hadrian's Wall", correct: true },
    { text: "Berlin Wall", correct: false },
    { text: "Wailing Wall", correct: false },
    { text: "Western Wall", correct: false }
  ]
},
{
  question: "Which Indian temple complex is known for its erotic sculptures?",
  answers: [
    { text: "Khajuraho", correct: true },
    { text: "Konark", correct: false },
    { text: "Meenakshi", correct: false },
    { text: "Jagannath", correct: false }
  ]
},
{
  question: "Which city is home to the Blue Domes of Santorini?",
  answers: [
    { text: "Oia", correct: true },
    { text: "Athens", correct: false },
    { text: "Mykonos", correct: false },
    { text: "Delphi", correct: false }
  ]
},
{
  question: "Where is the historic Acropolis located?",
  answers: [
    { text: "Athens", correct: true },
    { text: "Sparta", correct: false },
    { text: "Corinth", correct: false },
    { text: "Thebes", correct: false }
  ]
},
{
  question: "Which desert hosts the Great Sphinx?",
  answers: [
    { text: "Sahara", correct: true },
    { text: "Thar", correct: false },
    { text: "Gobi", correct: false },
    { text: "Kalahari", correct: false }
  ]
},
{
  question: "Which city is famous for its floating gardens called Xochimilco?",
  answers: [
    { text: "Mexico City", correct: true },
    { text: "Buenos Aires", correct: false },
    { text: "Lima", correct: false },
    { text: "Bogotá", correct: false }
  ]
},
{
  question: "Which European castle inspired Disney’s Cinderella Castle?",
  answers: [
    { text: "Neuschwanstein Castle", correct: true },
    { text: "Windsor Castle", correct: false },
    { text: "Edinburgh Castle", correct: false },
    { text: "Versailles", correct: false }
  ]
}

];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

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
  nextButton.style.display = "none";
  answerButtons.innerHTML = "";
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("wrong");
  }

  Array.from(answerButtons.children).forEach(button => {
    button.disabled = true;
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
  });

  nextButton.style.display = "inline-block";
}

function showScore() {
  resetState();
  questionElement.innerText = `🎉 You scored ${score} out of ${questions.length}!`;
  nextButton.innerText = "Play Again";
  nextButton.style.display = "inline-block";
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
