const questions = [
  {
    question: "Where is the Great Wall located?",
    answers: [
      { text: "India", correct: false },
      { text: "China", correct: true },
      { text: "Russia", correct: false },
      { text: "Japan", correct: false }
    ]
  },
  {
    question: "What ancient city is home to the Colosseum?",
    answers: [
      { text: "Athens", correct: false },
      { text: "Istanbul", correct: false },
      { text: "Rome", correct: true },
      { text: "Paris", correct: false }
    ]
  },
  {
    question: "Which country has the Taj Mahal?",
    answers: [
      { text: "India", correct: true },
      { text: "Iran", correct: false },
      { text: "Pakistan", correct: false },
      { text: "Bangladesh", correct: false }
    ]
  },
  {
    question: "Machu Picchu is located in which country?",
    answers: [
      { text: "Brazil", correct: false },
      { text: "Peru", correct: true },
      { text: "Chile", correct: false },
      { text: "Colombia", correct: false }
    ]
  },
  {
    question: "What is the Christ the Redeemer statue known for?",
    answers: [
      { text: "Tallest Buddha statue", correct: false },
      { text: "Lighthouse", correct: false },
      { text: "Iconic Jesus statue", correct: true },
      { text: "Largest pyramid", correct: false }
    ]
  },
  {
    question: "In which city is the Eiffel Tower located?",
    answers: [
      { text: "London", correct: false },
      { text: "Paris", correct: true },
      { text: "Rome", correct: false },
      { text: "Madrid", correct: false }
    ]
  },
  {
    question: "Petra is an ancient rock city in which country?",
    answers: [
      { text: "Jordan", correct: true },
      { text: "Egypt", correct: false },
      { text: "Iran", correct: false },
      { text: "Greece", correct: false }
    ]
  },
  {
    question: "Which pyramid is considered one of the Seven Wonders of the Ancient World?",
    answers: [
      { text: "Chichen Itza", correct: false },
      { text: "Great Pyramid of Giza", correct: true },
      { text: "Luxor", correct: false },
      { text: "Tikal", correct: false }
    ]
  },
  {
    question: "Which structure spans the Golden Gate strait in California?",
    answers: [
      { text: "Brooklyn Bridge", correct: false },
      { text: "London Bridge", correct: false },
      { text: "Golden Gate Bridge", correct: true },
      { text: "Bay Bridge", correct: false }
    ]
  },
  {
    question: "The Leaning Tower of Pisa is in which country?",
    answers: [
      { text: "Spain", correct: false },
      { text: "Italy", correct: true },
      { text: "Portugal", correct: false },
      { text: "France", correct: false }
    ]
  },
  {
    question: "Which natural wonder is located on the border of Zambia and Zimbabwe?",
    options: ["Victoria Falls", "Niagara Falls", "Iguazu Falls", "Angel Falls"],
    answer: "Victoria Falls"
  },
  {
    question: "Which natural wonder is known as the largest coral reef system in the world?",
    options: ["Red Sea Coral Reef", "Belize Barrier Reef", "Great Barrier Reef", "Andros Barrier Reef"],
    answer: "Great Barrier Reef"
  },
  {
    question: "Which desert is the largest hot desert in the world?",
    options: ["Gobi Desert", "Sahara Desert", "Kalahari Desert", "Arabian Desert"],
    answer: "Sahara Desert"
  },
  {
    question: "What is the tallest mountain in the world above sea level?",
    options: ["K2", "Mount Elbrus", "Mount Everest", "Denali"],
    answer: "Mount Everest"
  },
  {
    question: "Which waterfall has the highest uninterrupted drop?",
    options: ["Iguazu Falls", "Niagara Falls", "Angel Falls", "Yosemite Falls"],
    answer: "Angel Falls"
  },
  {
    question: "Which canyon is considered the largest in the world?",
    options: ["Fish River Canyon", "Copper Canyon", "Grand Canyon", "Yarlung Tsangpo Canyon"],
    answer: "Grand Canyon"
  },
  {
    question: "Which lake is the deepest in the world?",
    options: ["Lake Tahoe", "Lake Tanganyika", "Caspian Sea", "Lake Baikal"],
    answer: "Lake Baikal"
  },
  {
    question: "Which natural wonder stretches across multiple U.S. states and is made of colorful rock formations?",
    options: ["Yellowstone", "Bryce Canyon", "Badlands", "Grand Canyon"],
    answer: "Grand Canyon"
  },
  {
    question: "Where is the Amazon Rainforest primarily located?",
    options: ["Brazil", "Peru", "Colombia", "Venezuela"],
    answer: "Brazil"
  },
  {
    question: "Which river is the longest in the world?",
    options: ["Amazon", "Yangtze", "Nile", "Mississippi"],
    answer: "Nile"
  },
  {
    question: "What is the largest volcano on Earth by volume?",
    options: ["Mount Fuji", "Mauna Loa", "Mount Etna", "Mount St. Helens"],
    answer: "Mauna Loa"
  },
  {
    question: "Which mountain range runs along the western edge of South America?",
    options: ["Rocky Mountains", "Andes", "Alps", "Himalayas"],
    answer: "Andes"
  },
  {
    question: "Which desert covers most of northern Africa?",
    options: ["Atacama", "Sahara", "Thar", "Mojave"],
    answer: "Sahara"
  },
  {
    question: "Which waterfall system is shared by Argentina and Brazil?",
    options: ["Victoria Falls", "Niagara Falls", "Iguazu Falls", "Tugela Falls"],
    answer: "Iguazu Falls"
  },
  {
    question: "Which natural wonder is a salt flat located in Bolivia?",
    options: ["Badwater Basin", "Salar de Uyuni", "Makgadikgadi Pan", "Etosha Pan"],
    answer: "Salar de Uyuni"
  },
  {
    question: "Which large rift valley runs through eastern Africa?",
    options: ["Jordan Rift", "East African Rift", "Red Sea Rift", "Mid-Atlantic Ridge"],
    answer: "East African Rift"
  },
  {
    question: "Which mountain is considered the second-highest in the world?",
    options: ["K2", "Lhotse", "Makalu", "Kangchenjunga"],
    answer: "K2"
  },
  {
    question: "Where is the Dead Sea located?",
    options: ["Between Israel and Jordan", "Between Egypt and Sudan", "Near Turkey", "In Iran"],
    answer: "Between Israel and Jordan"
  },
  {
    question: "Which river flows through the Grand Canyon?",
    options: ["Colorado River", "Rio Grande", "Missouri River", "Columbia River"],
    answer: "Colorado River"
  },
  {
    question: "Which natural wonder is known for its red sandstone domes in Australia?",
    options: ["Kata Tjuta", "Uluru", "The Pinnacles", "Devils Marbles"],
    answer: "Kata Tjuta"
  },
  {
    question: "What is the world's highest navigable lake?",
    options: ["Lake Titicaca", "Lake Tahoe", "Lake Geneva", "Lake Victoria"],
    answer: "Lake Titicaca"
  },
  {
    question: "Which geyser is located in Yellowstone National Park?",
    options: ["Old Faithful", "Steamboat Geyser", "Lady Knox", "Strokkur"],
    answer: "Old Faithful"
  },
  {
    question: "Which rock formation is considered a sacred site by the Anangu people?",
    options: ["Uluru", "Table Mountain", "Devils Tower", "Stone Mountain"],
    answer: "Uluru"
  },
  {
    question: "Which body of water has the highest salinity?",
    options: ["Dead Sea", "Red Sea", "Caspian Sea", "Great Salt Lake"],
    answer: "Dead Sea"
  },
  {
    question: "Which natural feature in Ireland is made of basalt columns?",
    options: ["Cliffs of Moher", "Burren", "Giant's Causeway", "Benbulbin"],
    answer: "Giant's Causeway"
  },
  {
    question: "Which desert is the driest place on Earth?",
    options: ["Sahara", "Namib", "Atacama", "Gobi"],
    answer: "Atacama"
  },
  {
    question: "Which island chain is known for volcanic activity and lush scenery in the U.S.?",
    options: ["Hawaii", "Florida Keys", "Channel Islands", "San Juan Islands"],
    answer: "Hawaii"
  },
  {
    question: "Which Asian mountain range includes Mount Everest?",
    options: ["Himalayas", "Urals", "Altai", "Zagros"],
    answer: "Himalayas"
  },
  {
    question: "Which sea is known for having no outlet and being very salty?",
    options: ["Baltic Sea", "Black Sea", "Caspian Sea", "Arabian Sea"],
    answer: "Caspian Sea"
  },
  {
    question: "Where are the Chocolate Hills located?",
    options: ["Philippines", "Thailand", "Indonesia", "Vietnam"],
    answer: "Philippines"
  },
  {
    question: "Which natural wonder is home to the largest tropical rainforest?",
    options: ["Amazon Rainforest", "Congo Basin", "Daintree Forest", "Sundarbans"],
    answer: "Amazon Rainforest"
  },
  {
    question: "Which river has the largest drainage basin in the world?",
    options: ["Nile", "Yangtze", "Amazon", "Mississippi"],
    answer: "Amazon"
  },
  {
    question: "Which mountain is considered sacred in Japan?",
    options: ["Mount Haku", "Mount Tate", "Mount Fuji", "Mount Yari"],
    answer: "Mount Fuji"
  },
  {
    question: "Which lake is located in the crater of a volcano in Oregon, USA?",
    options: ["Crater Lake", "Lake Tahoe", "Lake Mead", "Lake Superior"],
    answer: "Crater Lake"
  },
  {
    question: "Where are the Marble Caves located?",
    options: ["Chile", "Argentina", "Iceland", "Norway"],
    answer: "Chile"
  },
  {
    question: "Which famous waterfall is located between Canada and the USA?",
    options: ["Niagara Falls", "Victoria Falls", "Iguazu Falls", "Yosemite Falls"],
    answer: "Niagara Falls"
  },
  {
    question: "Which desert has shifting dunes and red sands in Namibia?",
    options: ["Namib Desert", "Sahara Desert", "Kalahari Desert", "Thar Desert"],
    answer: "Namib Desert"
  },
  {
    question: "Which island in the Indian Ocean is known for unique biodiversity?",
    options: ["Madagascar", "Sri Lanka", "Maldives", "Mauritius"],
    answer: "Madagascar"
  },
  {
    question: "What is the highest waterfall in Europe?",
    options: ["Staubbach Falls", "Gavarnie Falls", "Krimml Falls", "Rhine Falls"],
    answer: "Krimml Falls"
  }
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
  nextButton.innerHTML = "Next";
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
    answerButtons.appendChild(button);
  });
}

function resetState() {
  nextButton.classList.add("hidden");
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
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
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });

  nextButton.classList.remove("hidden");
}

function showScore() {
  resetState();
  questionElement.innerText = "🌍 Quest Complete!";
  scoreText.innerText = `You scored ${score} out of ${questions.length}!`;
  scoreSection.classList.remove("hidden");
  nextButton.innerText = "Play Again";
  nextButton.classList.remove("hidden");
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
