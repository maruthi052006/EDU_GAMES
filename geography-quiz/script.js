// 📜 script.js – Full Script with 250 Geography Questions (Sample Only Shows Few)

const questions = [
  { q: "What is the capital of India (1)?", options: ["Mumbai", "Delhi", "Chennai", "Kolkata"], answer: "Delhi" },
  { q: "Which continent is Egypt located in (2)?", options: ["Europe", "Asia", "Africa", "Australia"], answer: "Africa" },
  { q: "Where is the Eiffel Tower located (3)?", options: ["Germany", "Spain", "France", "Italy"], answer: "France" },
  { q: "What is the largest ocean (4)?", options: ["Atlantic", "Pacific", "Indian", "Arctic"], answer: "Pacific" },
  { q: "Which country has the Great Wall (5)?", options: ["India", "Thailand", "China", "Japan"], answer: "China" },
  { q: "What is the capital of Japan (6)?", options: ["Tokyo", "Kyoto", "Osaka", "Nagoya"], answer: "Tokyo" },
  { q: "Which river flows through Egypt (7)?", options: ["Yangtze", "Mississippi", "Amazon", "Nile"], answer: "Nile" },
  { q: "Which is the tallest mountain in the world (8)?", options: ["Everest", "K2", "Kangchenjunga", "Lhotse"], answer: "Everest" },
  { q: "Where is the Great Barrier Reef (9)?", options: ["India", "Mexico", "USA", "Australia"], answer: "Australia" },
  { q: "Which country is known as the Land of the Rising Sun (10)?", options: ["China", "Japan", "Thailand", "South Korea"], answer: "Japan" },
  { q: "What is the capital of Canada (11)?", options: ["Toronto", "Vancouver", "Ottawa", "Montreal"], answer: "Ottawa" },
  { q: "Where is Machu Picchu located (12)?", options: ["Mexico", "Peru", "Brazil", "Argentina"], answer: "Peru" },
  { q: "Which country is known for the Taj Mahal (13)?", options: ["Pakistan", "Bangladesh", "India", "Nepal"], answer: "India" },
  { q: "Which U.S. state is the Grand Canyon located in (14)?", options: ["California", "Nevada", "Arizona", "Utah"], answer: "Arizona" },
  { q: "Mount Kilimanjaro is located in which country (15)?", options: ["Kenya", "South Africa", "Tanzania", "Ethiopia"], answer: "Tanzania" },
  { q: "Which river is the longest in the world (16)?", options: ["Amazon", "Yangtze", "Nile", "Mississippi"], answer: "Nile" },
  { q: "What is the capital of France (17)?", options: ["Berlin", "Madrid", "Paris", "Rome"], answer: "Paris" },
  { q: "Which continent has the most countries (18)?", options: ["Asia", "Europe", "Africa", "South America"], answer: "Africa" },
  { q: "What is the smallest country in the world (19)?", options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"], answer: "Vatican City" },
  { q: "What is the capital of Germany (20)?", options: ["Hamburg", "Munich", "Frankfurt", "Berlin"], answer: "Berlin" },
  { q: "Which U.S. state is known for Hollywood (21)?", options: ["California", "Nevada", "New York", "Florida"], answer: "California" },
  { q: "Which country is famous for the Colosseum (22)?", options: ["Greece", "Italy", "Turkey", "Spain"], answer: "Italy" },
  { q: "Which country borders both Germany and France (23)?", options: ["Belgium", "Italy", "Austria", "Switzerland"], answer: "Switzerland" },
  { q: "Which is the largest desert in the world (24)?", options: ["Sahara", "Gobi", "Kalahari", "Atacama"], answer: "Sahara" },
  { q: "Which country is home to the Amazon Rainforest (25)?", options: ["Brazil", "Peru", "Colombia", "Ecuador"], answer: "Brazil" },
  { q: "Which country is known as the Land of a Thousand Lakes (26)?", options: ["Norway", "Canada", "Finland", "Sweden"], answer: "Finland" },
  { q: "Which is the capital of Australia (27)?", options: ["Sydney", "Melbourne", "Canberra", "Brisbane"], answer: "Canberra" },
  { q: "Which mountain range runs through South America (28)?", options: ["Alps", "Rockies", "Andes", "Urals"], answer: "Andes" },
  { q: "Which is the capital of New Zealand (29)?", options: ["Auckland", "Christchurch", "Wellington", "Hamilton"], answer: "Wellington" },
  { q: "What is the national animal of Canada (30)?", options: ["Moose", "Beaver", "Bear", "Caribou"], answer: "Beaver" },
  { q: "Which city is known as the Big Apple (31)?", options: ["Los Angeles", "Chicago", "New York", "Miami"], answer: "New York" },
  { q: "Which ocean is off the west coast of India (32)?", options: ["Indian", "Pacific", "Atlantic", "Arctic"], answer: "Indian" },
  { q: "Which desert is located in Botswana (33)?", options: ["Sahara", "Kalahari", "Atacama", "Namib"], answer: "Kalahari" },
  { q: "What is the capital of Egypt (34)?", options: ["Cairo", "Alexandria", "Giza", "Luxor"], answer: "Cairo" },
  { q: "Which sea separates Europe and Africa (35)?", options: ["Baltic Sea", "Red Sea", "Mediterranean Sea", "Caspian Sea"], answer: "Mediterranean Sea" },
  { q: "Which mountain is sacred in Japan (36)?", options: ["Fuji", "Everest", "Kilimanjaro", "Denali"], answer: "Fuji" },
  { q: "Which Asian country is famous for Mount Fuji (37)?", options: ["Japan", "China", "Vietnam", "Thailand"], answer: "Japan" },
  { q: "Which country is home to the city of Dubai (38)?", options: ["Oman", "Qatar", "UAE", "Saudi Arabia"], answer: "UAE" },
  { q: "Which river flows through London (39)?", options: ["Seine", "Thames", "Danube", "Rhine"], answer: "Thames" },
  { q: "Which European river runs through Paris (40)?", options: ["Thames", "Seine", "Danube", "Rhine"], answer: "Seine" },
  { q: "Which is the longest river in Europe (41)?", options: ["Danube", "Volga", "Rhine", "Thames"], answer: "Volga" },
  { q: "Which European city is famous for the Acropolis (42)?", options: ["Rome", "Athens", "Istanbul", "Lisbon"], answer: "Athens" },
  { q: "What is the capital of South Korea (43)?", options: ["Busan", "Incheon", "Seoul", "Daegu"], answer: "Seoul" },
  { q: "Which country has the most volcanoes (44)?", options: ["Indonesia", "Japan", "USA", "Italy"], answer: "Indonesia" },
  { q: "What is the capital of Thailand (45)?", options: ["Chiang Mai", "Phuket", "Bangkok", "Pattaya"], answer: "Bangkok" },
  { q: "Which is the largest island in the world (46)?", options: ["Australia", "Greenland", "New Guinea", "Borneo"], answer: "Greenland" },
  { q: "Which mountain range separates Europe and Asia (47)?", options: ["Alps", "Urals", "Andes", "Himalayas"], answer: "Urals" },
  { q: "What is the capital of Norway (48)?", options: ["Bergen", "Oslo", "Trondheim", "Stavanger"], answer: "Oslo" },
  { q: "What is the smallest continent (49)?", options: ["Europe", "Australia", "Antarctica", "South America"], answer: "Australia" },
  { q: "Which country is home to the Leaning Tower of Pisa (50)?", options: ["Italy", "Spain", "France", "Greece"], answer: "Italy" }
];


let currentIndex = 0;
let score = 0;

document.getElementById("total-questions").textContent = questions.length;

function loadQuestion() {
  if (currentIndex >= questions.length) {
    document.getElementById("question").textContent = "🎉 You've completed the quiz!";
    document.getElementById("options").innerHTML = "";
    document.getElementById("result").textContent = `Your final score: ${score} / ${questions.length}`;
    document.querySelector("button").style.display = "none";
    return;
  }

  const q = questions[currentIndex];
  document.getElementById("question").textContent = q.q;
  document.getElementById("current-number").textContent = currentIndex + 1;
  const optionsBox = document.getElementById("options");
  optionsBox.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.className = "btn btn-outline-dark";
    btn.textContent = option;
    btn.onclick = () => checkAnswer(option);
    optionsBox.appendChild(btn);
  });

  document.getElementById("result").textContent = "";
}

function checkAnswer(selected) {
  const correct = questions[currentIndex].answer;
  const result = document.getElementById("result");
  if (selected === correct) {
    score++;
    result.textContent = "✅ Correct!";
    result.className = "text-success";
  } else {
    result.textContent = `❌ Wrong! Correct answer is ${correct}.`;
    result.className = "text-danger";
  }
  document.getElementById("score").textContent = score;
}

function nextQuestion() {
  currentIndex++;
  loadQuestion();
}

window.onload = loadQuestion;
