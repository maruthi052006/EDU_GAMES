const questions = [
  {
    question: "Who was the first President of India?",
    answers: [
      { text: "Dr. Rajendra Prasad", correct: true },
      { text: "Jawaharlal Nehru", correct: false },
      { text: "Sardar Vallabhbhai Patel", correct: false },
      { text: "Dr. B.R. Ambedkar", correct: false }
    ]
  },
  {
    question: "Who is known as the 'Father of the Nation' in India?",
    answers: [
      { text: "Subhash Chandra Bose", correct: false },
      { text: "Mahatma Gandhi", correct: true },
      { text: "Bhagat Singh", correct: false },
      { text: "Lal Bahadur Shastri", correct: false }
    ]
  },
  {
    question: "Who discovered gravity?",
    answers: [
      { text: "Albert Einstein", correct: false },
      { text: "Galileo Galilei", correct: false },
      { text: "Isaac Newton", correct: true },
      { text: "Stephen Hawking", correct: false }
    ]
  },
  {
    question: "Where is the Taj Mahal located?",
    answers: [
      { text: "Delhi", correct: false },
      { text: "Agra", correct: true },
      { text: "Jaipur", correct: false },
      { text: "Lucknow", correct: false }
    ]
  },
  {
    question: "Which monument is known as the 'Sun Temple'?",
    answers: [
      { text: "Konark Temple", correct: true },
      { text: "Kailasa Temple", correct: false },
      { text: "Meenakshi Temple", correct: false },
      { text: "Somnath Temple", correct: false }
    ]
  },
  {
    question: "What is the capital of India?",
    answers: [
      { text: "Mumbai", correct: false },
      { text: "New Delhi", correct: true },
      { text: "Chennai", correct: false },
      { text: "Kolkata", correct: false }
    ]
  },
  {
    question: "Who built the Qutub Minar?",
    answers: [
      { text: "Akbar", correct: false },
      { text: "Qutb-ud-din Aibak", correct: true },
      { text: "Shah Jahan", correct: false },
      { text: "Babur", correct: false }
    ]
  },
  {
    question: "Where is Hampi located?",
    answers: [
      { text: "Karnataka", correct: true },
      { text: "Tamil Nadu", correct: false },
      { text: "Odisha", correct: false },
      { text: "Gujarat", correct: false }
    ]
  },
  {
    question: "What is the famous monument in Hyderabad?",
    answers: [
      { text: "Charminar", correct: true },
      { text: "Gateway of India", correct: false },
      { text: "India Gate", correct: false },
      { text: "Red Fort", correct: false }
    ]
  },
  {
    question: "The Brihadeeswara Temple is in which Indian state?",
    answers: [
      { text: "Kerala", correct: false },
      { text: "Tamil Nadu", correct: true },
      { text: "Andhra Pradesh", correct: false },
      { text: "Karnataka", correct: false }
    ]
  },
  {
    question: "Which city is known as the 'Pink City'?",
    answers: [
      { text: "Jodhpur", correct: false },
      { text: "Udaipur", correct: false },
      { text: "Jaipur", correct: true },
      { text: "Bikaner", correct: false }
    ]
  },
  {
    question: "Who wrote the Indian national anthem?",
    answers: [
      { text: "Bankim Chandra Chatterjee", correct: false },
      { text: "Rabindranath Tagore", correct: true },
      { text: "Sarojini Naidu", correct: false },
      { text: "Subhash Chandra Bose", correct: false }
    ]
  },
  {
    question: "Which monument is associated with Emperor Ashoka?",
    answers: [
      { text: "Ashoka Pillars", correct: true },
      { text: "Red Fort", correct: false },
      { text: "Humayun's Tomb", correct: false },
      { text: "Charminar", correct: false }
    ]
  },
  {
    question: "What type of architecture is the Ajanta Caves known for?",
    answers: [
      { text: "Rock-cut architecture", correct: true },
      { text: "Mughal architecture", correct: false },
      { text: "Gothic architecture", correct: false },
      { text: "Dravidian architecture", correct: false }
    ]
  },
  {
    question: "Khajuraho temples are famous for?",
    answers: [
      { text: "Erotic sculptures", correct: true },
      { text: "Military forts", correct: false },
      { text: "Palaces", correct: false },
      { text: "Gardens", correct: false }
    ]
  },
  {
    question: "Where is India Gate located?",
    answers: [
      { text: "New Delhi", correct: true },
      { text: "Mumbai", correct: false },
      { text: "Ahmedabad", correct: false },
      { text: "Bhopal", correct: false }
    ]
  },
  {
    question: "Which state has the famous Sun Temple of Konark?",
    answers: [
      { text: "Odisha", correct: true },
      { text: "Andhra Pradesh", correct: false },
      { text: "West Bengal", correct: false },
      { text: "Madhya Pradesh", correct: false }
    ]
  },
  {
    question: "Which city is home to the Golden Temple?",
    answers: [
      { text: "Amritsar", correct: true },
      { text: "Delhi", correct: false },
      { text: "Varanasi", correct: false },
      { text: "Lucknow", correct: false }
    ]
  },
  {
    question: "Charminar is located in which Indian city?",
    answers: [
      { text: "Hyderabad", correct: true },
      { text: "Bangalore", correct: false },
      { text: "Ahmedabad", correct: false },
      { text: "Pune", correct: false }
    ]
  },
  {
    question: "Which emperor built the Red Fort?",
    answers: [
      { text: "Shah Jahan", correct: true },
      { text: "Akbar", correct: false },
      { text: "Aurangzeb", correct: false },
      { text: "Babur", correct: false }
    ]
  },
  {
    question: "Fatehpur Sikri was built by?",
    answers: [
      { text: "Akbar", correct: true },
      { text: "Shah Jahan", correct: false },
      { text: "Jahangir", correct: false },
      { text: "Aurangzeb", correct: false }
    ]
  },
  {
    question: "Which city is famous for the Victoria Memorial?",
    answers: [
      { text: "Kolkata", correct: true },
      { text: "Mumbai", correct: false },
      { text: "Delhi", correct: false },
      { text: "Chennai", correct: false }
    ]
  },
  {
    question: "Who designed the Rashtrapati Bhavan?",
    answers: [
      { text: "Edwin Lutyens", correct: true },
      { text: "Charles Correa", correct: false },
      { text: "Le Corbusier", correct: false },
      { text: "Laurie Baker", correct: false }
    ]
  },
  {
    question: "Where is the Gateway of India located?",
    answers: [
      { text: "Mumbai", correct: true },
      { text: "Chennai", correct: false },
      { text: "Goa", correct: false },
      { text: "Kochi", correct: false }
    ]
  },
  {
    question: "The Lotus Temple is famous for what shape?",
    answers: [
      { text: "Lotus flower", correct: true },
      { text: "Sun", correct: false },
      { text: "Crescent", correct: false },
      { text: "Pyramid", correct: false }
    ]
  },
  {
  question: "Who painted the Mona Lisa?",
  answers: [
    { text: "Leonardo da Vinci", correct: true },
    { text: "Michelangelo", correct: false },
    { text: "Vincent van Gogh", correct: false },
    { text: "Pablo Picasso", correct: false }
  ]
},
{
  question: "Who was the first woman to win a Nobel Prize?",
  answers: [
    { text: "Marie Curie", correct: true },
    { text: "Mother Teresa", correct: false },
    { text: "Rosalind Franklin", correct: false },
    { text: "Florence Nightingale", correct: false }
  ]
},
{
  question: "Who discovered gravity by watching a falling apple?",
  answers: [
    { text: "Isaac Newton", correct: true },
    { text: "Galileo Galilei", correct: false },
    { text: "Albert Einstein", correct: false },
    { text: "Nikola Tesla", correct: false }
  ]
},
{
  question: "Who is known as the 'Father of Computers'?",
  answers: [
    { text: "Charles Babbage", correct: true },
    { text: "Alan Turing", correct: false },
    { text: "Bill Gates", correct: false },
    { text: "Steve Jobs", correct: false }
  ]
},
{
  question: "Who invented the light bulb?",
  answers: [
    { text: "Thomas Edison", correct: true },
    { text: "Nikola Tesla", correct: false },
    { text: "Alexander Graham Bell", correct: false },
    { text: "James Watt", correct: false }
  ]
},
{
  question: "Who wrote 'Romeo and Juliet'?",
  answers: [
    { text: "William Shakespeare", correct: true },
    { text: "Jane Austen", correct: false },
    { text: "Charles Dickens", correct: false },
    { text: "Mark Twain", correct: false }
  ]
},
{
  question: "Who was the famous nurse during the Crimean War?",
  answers: [
    { text: "Florence Nightingale", correct: true },
    { text: "Marie Curie", correct: false },
    { text: "Clara Barton", correct: false },
    { text: "Helen Keller", correct: false }
  ]
},
{
  question: "Who was the first black president of South Africa?",
  answers: [
    { text: "Nelson Mandela", correct: true },
    { text: "Barack Obama", correct: false },
    { text: "Desmond Tutu", correct: false },
    { text: "Cyril Ramaphosa", correct: false }
  ]
},
{
  question: "Who is known for developing the theory of evolution?",
  answers: [
    { text: "Charles Darwin", correct: true },
    { text: "Gregor Mendel", correct: false },
    { text: "Isaac Newton", correct: false },
    { text: "Albert Einstein", correct: false }
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
  question: "Who is the author of 'Harry Potter' series?",
  answers: [
    { text: "J.K. Rowling", correct: true },
    { text: "J.R.R. Tolkien", correct: false },
    { text: "Stephen King", correct: false },
    { text: "Suzanne Collins", correct: false }
  ]
},
{
  question: "Who led the Indian independence movement with non-violence?",
  answers: [
    { text: "Mahatma Gandhi", correct: true },
    { text: "Jawaharlal Nehru", correct: false },
    { text: "Subhas Chandra Bose", correct: false },
    { text: "Sardar Vallabhbhai Patel", correct: false }
  ]
},
{
  question: "Who became the first human in space?",
  answers: [
    { text: "Yuri Gagarin", correct: true },
    { text: "Neil Armstrong", correct: false },
    { text: "Buzz Aldrin", correct: false },
    { text: "Valentina Tereshkova", correct: false }
  ]
},
{
  question: "Who created the character Sherlock Holmes?",
  answers: [
    { text: "Arthur Conan Doyle", correct: true },
    { text: "Agatha Christie", correct: false },
    { text: "Dan Brown", correct: false },
    { text: "Jules Verne", correct: false }
  ]
},
{
  question: "Who is the famous deaf-blind author and activist?",
  answers: [
    { text: "Helen Keller", correct: true },
    { text: "Anne Sullivan", correct: false },
    { text: "Marie Curie", correct: false },
    { text: "Oprah Winfrey", correct: false }
  ]
},
{
  question: "Who is known as the Iron Lady of Britain?",
  answers: [
    { text: "Margaret Thatcher", correct: true },
    { text: "Elizabeth I", correct: false },
    { text: "Angela Merkel", correct: false },
    { text: "Theresa May", correct: false }
  ]
},
{
  question: "Who wrote 'The Diary of a Young Girl'?",
  answers: [
    { text: "Anne Frank", correct: true },
    { text: "Helen Keller", correct: false },
    { text: "Malala Yousafzai", correct: false },
    { text: "Maya Angelou", correct: false }
  ]
},
{
  question: "Who discovered penicillin?",
  answers: [
    { text: "Alexander Fleming", correct: true },
    { text: "Louis Pasteur", correct: false },
    { text: "Robert Koch", correct: false },
    { text: "Edward Jenner", correct: false }
  ]
},
{
  question: "Who is known for painting the ceiling of the Sistine Chapel?",
  answers: [
    { text: "Michelangelo", correct: true },
    { text: "Raphael", correct: false },
    { text: "Leonardo da Vinci", correct: false },
    { text: "Donatello", correct: false }
  ]
},
{
  question: "Who is known as the 'Missile Man of India'?",
  answers: [
    { text: "Dr. A.P.J. Abdul Kalam", correct: true },
    { text: "Vikram Sarabhai", correct: false },
    { text: "Homi Bhabha", correct: false },
    { text: "C.V. Raman", correct: false }
  ]
},
{
  question: "Who became the youngest Nobel Peace Prize laureate?",
  answers: [
    { text: "Malala Yousafzai", correct: true },
    { text: "Greta Thunberg", correct: false },
    { text: "Mother Teresa", correct: false },
    { text: "Barack Obama", correct: false }
  ]
},
{
  question: "Who was the leader of the civil rights movement in the USA?",
  answers: [
    { text: "Martin Luther King Jr.", correct: true },
    { text: "Malcolm X", correct: false },
    { text: "Rosa Parks", correct: false },
    { text: "Abraham Lincoln", correct: false }
  ]
},
{
  question: "Who developed the polio vaccine?",
  answers: [
    { text: "Jonas Salk", correct: true },
    { text: "Louis Pasteur", correct: false },
    { text: "Alexander Fleming", correct: false },
    { text: "Edward Jenner", correct: false }
  ]
},
{
  question: "Who was the first woman in space?",
  answers: [
    { text: "Valentina Tereshkova", correct: true },
    { text: "Sally Ride", correct: false },
    { text: "Kalpana Chawla", correct: false },
    { text: "Mae Jemison", correct: false }
  ]
},
{
  question: "Who composed the famous symphony 'Fur Elise'?",
  answers: [
    { text: "Ludwig van Beethoven", correct: true },
    { text: "Wolfgang Amadeus Mozart", correct: false },
    { text: "Johann Sebastian Bach", correct: false },
    { text: "Franz Schubert", correct: false }
  ]
}

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

  currentQuestion.answers.forEach((answer) => {
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
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  setStatusClass(selectedBtn, isCorrect);
  Array.from(answerButtons.children).forEach((button) => {
    button.disabled = true;
    setStatusClass(button, button.dataset.correct === "true");
  });
  nextButton.style.display = "block";
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
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
  questionElement.innerText = "🎉 You've completed the quiz!";
  nextButton.innerText = "Restart";
  nextButton.style.display = "block";
  nextButton.addEventListener("click", startQuiz);
}

startQuiz();
