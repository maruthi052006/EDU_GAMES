const words = [
  { original: "apple", scrambled: "elppa", hint: "A fruit that's red or green" },
  { original: "school", scrambled: "loohcs", hint: "A place to learn" },
  { original: "flower", scrambled: "rewolf", hint: "A plant that smells nice" },
  { original: "pencil", scrambled: "licnep", hint: "Used to write or draw" },
  { original: "tiger", scrambled: "griet", hint: "A striped wild animal" },
  { original: "planet", scrambled: "tenalp", hint: "Orbits around the sun" },
  { original: "mirror", scrambled: "rorrim", hint: "Reflects your image" },
  { original: "orange", scrambled: "egnaro", hint: "A citrus fruit and a color" },
  { original: "guitar", scrambled: "ratgiu", hint: "A musical instrument" },
  { original: "bottle", scrambled: "elttob", hint: "Holds liquids" },
  { original: "banana", scrambled: "ananab", hint: "A long yellow fruit" },
  { original: "camera", scrambled: "aremac", hint: "Used to take photos" },
  { original: "rocket", scrambled: "tekcor", hint: "Flies into space" },
  { original: "rabbit", scrambled: "tibbar", hint: "Hops and has long ears" },
  { original: "monkey", scrambled: "yeknom", hint: "Swings from trees" },
  { original: "dragon", scrambled: "nogard", hint: "Mythical creature that breathes fire" },
  { original: "window", scrambled: "wodniw", hint: "Look outside through this" },
  { original: "button", scrambled: "nottub", hint: "Used to fasten clothes" },
  { original: "garden", scrambled: "nedrag", hint: "Place with flowers and plants" },
  { original: "market", scrambled: "tekram", hint: "Place to buy things" },
  { original: "kitten", scrambled: "nettik", hint: "A baby cat" },
  { original: "parrot", scrambled: "rrotap", hint: "Colorful bird that talks" },
  { original: "castle", scrambled: "eltsac", hint: "A home for kings and queens" },
  { original: "clouds", scrambled: "sduolc", hint: "Float in the sky" },
  { original: "circle", scrambled: "elcric", hint: "A round shape" },
  { original: "purple", scrambled: "elprup", hint: "Color made by mixing red and blue" },
  { original: "rabbit", scrambled: "tibbar", hint: "Animal that loves carrots" },
  { original: "giraffe", scrambled: "effarig", hint: "Tall animal with a long neck" },
  { original: "island", scrambled: "dnalsi", hint: "Land surrounded by water" },
  { original: "bridge", scrambled: "egdirb", hint: "Used to cross rivers" },
  { original: "pillow", scrambled: "wollip", hint: "Used to rest your head" },
  { original: "singer", scrambled: "regnis", hint: "Performs songs" },
  { original: "doctor", scrambled: "rotcod", hint: "Helps sick people" },
  { original: "clocks", scrambled: "skcolc", hint: "Tells time" },
  { original: "spider", scrambled: "redips", hint: "Weaves a web" },
  { original: "rocket", scrambled: "tekcor", hint: "Launches into the sky" },
  { original: "yellow", scrambled: "wolleY", hint: "Color of the sun" },
  { original: "zebra", scrambled: "arbez", hint: "Striped animal" },
  { original: "button", scrambled: "nottub", hint: "Fastener on a shirt" },
  { original: "scooter", scrambled: "retcoos", hint: "Two-wheeled ride" },
  { original: "tomato", scrambled: "otamot", hint: "Red fruit often in salads" },
  { original: "cookie", scrambled: "eikooc", hint: "Sweet baked snack" },
  { original: "planet", scrambled: "tenalp", hint: "Orbits a star" },
  { original: "beach", scrambled: "hcaeb", hint: "Sandy place near water" },
  { original: "travel", scrambled: "levart", hint: "Going to new places" },
  { original: "sunset", scrambled: "tesnus", hint: "Happens in the evening" },
  { original: "silver", scrambled: "revlis", hint: "A shiny metal" },
  { original: "rocket", scrambled: "tekcor", hint: "Used in space travel" },
  { original: "forest", scrambled: "tserof", hint: "Full of trees" },
  { original: "kitten", scrambled: "nettik", hint: "Small fluffy pet" }
];

let current = 0;

function loadWord() {
  const word = words[current];
  document.getElementById("scrambledWord").textContent = word.scrambled;
  document.getElementById("hint").textContent = "Hint: " + word.hint;
  document.getElementById("userInput").value = "";
  document.getElementById("feedback").textContent = "";
  document.getElementById("feedback").className = "";
}

function checkAnswer() {
  const user = document.getElementById("userInput").value.trim().toLowerCase();
  const correct = words[current].original;
  const feedback = document.getElementById("feedback");

  if (user === correct) {
    feedback.textContent = "✅ Correct!";
    feedback.className = "text-success";
  } else {
    feedback.textContent = `❌ Wrong! The correct word was "${correct}"`;
    feedback.className = "text-danger";
  }
}

function nextWord() {
  current = (current + 1) % words.length;
  loadWord();
}

window.onload = loadWord;
