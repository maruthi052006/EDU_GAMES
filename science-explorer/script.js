const data = [
  { id: "Sun", label: "☀️ Sun", match: "Provides heat and light" },
  { id: "Leaf", label: "🍃 Leaf", match: "Part of a plant" },
  { id: "Magnet", label: "🧲 Magnet", match: "Attracts iron" },
  { id: "Cloud", label: "☁️ Cloud", match: "Forms from water vapor" },
  { id: "Bone", label: "🦴 Bone", match: "Supports the body" },
  { id: "Lungs", label: "🫁 Lungs", match: "Used for breathing" },
  { id: "Heart", label: "❤️ Heart", match: "Pumps blood" },
  { id: "Rocket", label: "🚀 Rocket", match: "Used for space travel" },
  { id: "Volcano", label: "🌋 Volcano", match: "Erupts with lava" },
  { id: "Planet", label: "🪐 Planet", match: "Orbits a star" },
  { id: "Telescope", label: "🔭 Telescope", match: "Used to see far objects" },
  { id: "Microscope", label: "🔬 Microscope", match: "Used to see tiny objects" },
  { id: "Drop", label: "💧 Drop", match: "Form of water" },
  { id: "Battery", label: "🔋 Battery", match: "Stores electrical energy" },
  { id: "Fire", label: "🔥 Fire", match: "Release of heat and light" },
  { id: "Snow", label: "❄️ Snow", match: "Frozen water vapor" },
  { id: "Tree", label: "🌳 Tree", match: "Large plant" },
  { id: "Seedling", label: "🌱 Seedling", match: "Young plant" },
  { id: "Earthquake", label: "🌎 Earthquake", match: "Shaking of the ground" },
  { id: "Bee", label: "🐝 Bee", match: "Pollinates flowers" },
  { id: "Dog", label: "🐶 Dog", match: "Domesticated mammal" },
  { id: "Cat", label: "🐱 Cat", match: "Feline animal" },
  { id: "Fish", label: "🐟 Fish", match: "Lives in water" },
  { id: "Bird", label: "🐦 Bird", match: "Has feathers" },
  { id: "Elephant", label: "🐘 Elephant", match: "Large land mammal" },
  { id: "DNA", label: "🧬 DNA", match: "Carries genetic information" },
  { id: "Robot", label: "🤖 Robot", match: "Machine with intelligence" },
  { id: "TestTube", label: "🧪 Test Tube", match: "Used in lab experiments" },
  { id: "Brain", label: "🧠 Brain", match: "Controls body functions" },
  { id: "Electric", label: "⚡ Electricity", match: "Form of energy" },
  { id: "Compass", label: "🧭 Compass", match: "Shows direction" },
  { id: "Earth", label: "🌍 Earth", match: "Our home planet" },
  { id: "Wind", label: "🍃 Wind", match: "Moving air" },
  { id: "Light", label: "💡 Light", match: "Visible energy" },
  { id: "Recycling", label: "♻️ Recycling", match: "Reusing materials" },
  { id: "Thermometer", label: "🌡️ Thermometer", match: "Measures temperature" },
  { id: "Moon", label: "🌕 Moon", match: "Orbits the Earth" },
  { id: "Atom", label: "⚛️ Atom", match: "Smallest unit of matter" },
  { id: "Time", label: "⌛ Hourglass", match: "Measures time" },
  { id: "RocketFuel", label: "🧯 Rocket Fuel", match: "Propels a rocket" },
  { id: "Energy", label: "🔌 Plug", match: "Source of power" },
  { id: "Ice", label: "🧊 Ice", match: "Frozen water" },
  { id: "Thermos", label: "🧃 Thermos", match: "Keeps drinks hot/cold" },
  { id: "Stethoscope", label: "🩺 Stethoscope", match: "Listens to heartbeats" },
  { id: "Virus", label: "🦠 Virus", match: "Causes disease" },
  { id: "Nucleus", label: "🎯 Nucleus", match: "Center of an atom/cell" },
  { id: "Gravity", label: "⬇️ Gravity", match: "Pulls objects downward" },
  { id: "Rain", label: "🌧️ Rain", match: "Falls from clouds" },
  { id: "Thermal", label: "🔥 Heat", match: "Raises temperature" },
  { id: "Keyboard", label: "⌨️ Keyboard", match: "Input device for computers" }
];

import data from './data.js';

let remaining = [];

function initGame() {
  const itemsDiv = document.getElementById("items");
  const dropzonesDiv = document.getElementById("dropzones");
  const feedback = document.getElementById("feedback");

  itemsDiv.innerHTML = "";
  dropzonesDiv.innerHTML = "";
  feedback.textContent = "Match all correctly to win!";
  feedback.className = "mt-4 fs-5 text-info";

  remaining = [...data].sort(() => Math.random() - 0.5);

  // Shuffle and render draggable items
  remaining.forEach(obj => {
    const el = document.createElement("div");
    el.className = "item";
    el.id = obj.id;
    el.textContent = obj.label;
    el.setAttribute("draggable", "true");
    el.addEventListener("dragstart", () => el.classList.add("dragging"));
    el.addEventListener("dragend", () => el.classList.remove("dragging"));
    itemsDiv.appendChild(el);
  });

  // Shuffle and render drop zones
  const zones = [...data].sort(() => Math.random() - 0.5);
  zones.forEach(obj => {
    const zone = document.createElement("div");
    zone.className = "drop-zone";
    zone.setAttribute("data-match", obj.id);
    zone.textContent = obj.match;

    zone.addEventListener("dragover", (e) => e.preventDefault());
    zone.addEventListener("drop", () => handleDrop(zone));
    dropzonesDiv.appendChild(zone);
  });
}

function handleDrop(zone) {
  const dragged = document.querySelector(".dragging");
  const correctId = zone.getAttribute("data-match");

  if (!dragged) return;

  if (dragged.id === correctId) {
    zone.textContent = `${dragged.textContent} - ${zone.textContent}`;
    zone.classList.add("correct");
    zone.classList.remove("wrong");
    dragged.remove();
    document.getElementById("feedback").textContent = "✅ Correct!";
    document.getElementById("feedback").className = "text-success mt-4 fs-5";
    remaining = remaining.filter(item => item.id !== dragged.id);

    if (remaining.length === 0) {
      document.getElementById("feedback").textContent = "🎉 All matched! Well done!";
      document.getElementById("feedback").className = "text-success mt-4 fs-5";
    }

  } else {
    zone.classList.add("wrong");
    document.getElementById("feedback").textContent = "❌ Try again!";
    document.getElementById("feedback").className = "text-danger mt-4 fs-5";
  }
}

window.onload = initGame;
