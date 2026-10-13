const states = [
  { state: "Andhra Pradesh", match: "Amaravati" },
  { state: "Arunachal Pradesh", match: "Itanagar" },
  { state: "Assam", match: "Dispur" },
  { state: "Bihar", match: "Patna" },
  { state: "Chhattisgarh", match: "Raipur" },
  { state: "Goa", match: "Panaji" },
  { state: "Gujarat", match: "Gandhinagar" },
  { state: "Haryana", match: "Chandigarh" },
  { state: "Himachal Pradesh", match: "Shimla" },
  { state: "Jharkhand", match: "Ranchi" },
  { state: "Karnataka", match: "Bengaluru" },
  { state: "Kerala", match: "Thiruvananthapuram" },
  { state: "Madhya Pradesh", match: "Bhopal" },
  { state: "Maharashtra", match: "Mumbai" },
  { state: "Manipur", match: "Imphal" },
  { state: "Meghalaya", match: "Shillong" },
  { state: "Mizoram", match: "Aizawl" },
  { state: "Nagaland", match: "Kohima" },
  { state: "Odisha", match: "Bhubaneswar" },
  { state: "Punjab", match: "Chandigarh" },
  { state: "Rajasthan", match: "Jaipur" },
  { state: "Sikkim", match: "Gangtok" },
  { state: "Tamil Nadu", match: "Chennai" },
  { state: "Telangana", match: "Hyderabad" },
  { state: "Tripura", match: "Agartala" },
  { state: "Uttar Pradesh", match: "Lucknow" },
  { state: "Uttarakhand", match: "Dehradun" },
  { state: "West Bengal", match: "Kolkata" }
];


let shuffledAnswers = [];

function initGame() {
  const statesList = document.getElementById("states-list");
  const answersList = document.getElementById("answers-list");

  statesList.innerHTML = "";
  answersList.innerHTML = "";
  document.getElementById("result").innerHTML = "";

  shuffledAnswers = [...states]
    .map(item => item.match)
    .sort(() => Math.random() - 0.5);

  states.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item.state;
    li.setAttribute("draggable", "true");
    li.dataset.state = item.state;
    statesList.appendChild(li);
  });

  shuffledAnswers.forEach(answer => {
    const li = document.createElement("li");
    li.textContent = answer;
    li.setAttribute("draggable", "true");
    li.dataset.match = answer;
    answersList.appendChild(li);
  });

  addDragEvents();
}

function addDragEvents() {
  const draggables = document.querySelectorAll("li");
  let dragged;

  draggables.forEach(item => {
    item.addEventListener("dragstart", function () {
      dragged = this;
      setTimeout(() => this.classList.add("dragging"), 0);
    });

    item.addEventListener("dragend", function () {
      this.classList.remove("dragging");
    });

    item.addEventListener("dragover", e => e.preventDefault());

    item.addEventListener("drop", function () {
      const parent = this.parentElement;
      const other = dragged.parentElement;

      if (parent !== other) {
        parent.appendChild(dragged);
        other.appendChild(this);
      }
    });
  });
}

function checkAnswers() {
  const statesItems = document.querySelectorAll("#states-list li");
  const answersItems = document.querySelectorAll("#answers-list li");

  let correct = 0;
  statesItems.forEach((stateEl, index) => {
    const state = stateEl.dataset.state;
    const match = answersItems[index]?.dataset.match;

    const actual = states.find(item => item.state === state)?.match;
    if (actual === match) correct++;
  });

  const total = states.length;
  const result = document.getElementById("result");
  result.textContent = `You got ${correct} out of ${total} correct.`;
}

function resetGame() {
  initGame();
}

initGame();
