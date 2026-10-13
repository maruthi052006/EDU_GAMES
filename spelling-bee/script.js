const words = [
  { word: "apple", hint: "A red or green fruit" },
  { word: "tiger", hint: "A big cat with stripes" },
  { word: "school", hint: "A place where you learn" },
  { word: "rainbow", hint: "Appears after rain with many colors" },
  { word: "balloon", hint: "It floats in the air and is used in parties" },
  { word: "elephant", hint: "The largest land animal" },
  { word: "giraffe", hint: "Animal with a long neck" },
  { word: "planet", hint: "Orbits around a star" },
  { word: "pencil", hint: "Used for writing or drawing" },
  { word: "mirror", hint: "Reflects your image" },
  { word: "banana", hint: "A long yellow fruit" },
  { word: "ocean", hint: "A large body of salt water" },
  { word: "desert", hint: "A hot, dry place with sand" },
  { word: "mountain", hint: "Very high land" },
  { word: "river", hint: "A flowing body of water" },
  { word: "cloud", hint: "White and fluffy in the sky" },
  { word: "flower", hint: "Blooms and smells nice" },
  { word: "kangaroo", hint: "Hops and has a pouch" },
  { word: "zebra", hint: "Striped black and white animal" },
  { word: "lion", hint: "King of the jungle" },
  { word: "monkey", hint: "Swings from trees" },
  { word: "grape", hint: "A small purple or green fruit" },
  { word: "robot", hint: "A machine that acts like a human" },
  { word: "rocket", hint: "Flies into space" },
  { word: "globe", hint: "A model of Earth" },
  { word: "penguin", hint: "A bird that can't fly but swims" },
  { word: "clock", hint: "Tells time" },
  { word: "ladder", hint: "Used to climb" },
  { word: "puzzle", hint: "A game to solve" },
  { word: "guitar", hint: "A musical instrument with strings" },
  { word: "violin", hint: "A small string instrument" },
  { word: "carrot", hint: "An orange root vegetable" },
  { word: "peacock", hint: "A bird with a colorful tail" },
  { word: "train", hint: "Runs on tracks" },
  { word: "whale", hint: "Largest animal in the sea" },
  { word: "eagle", hint: "A bird with sharp eyes" },
  { word: "sunflower", hint: "A tall flower that follows the sun" },
  { word: "scooter", hint: "Two-wheeled ride for kids" },
  { word: "shark", hint: "A big fish with sharp teeth" },
  { word: "toothbrush", hint: "Used to clean teeth" },
  { word: "notebook", hint: "Used for writing notes" },
  { word: "hammer", hint: "Tool for hitting nails" },
  { word: "honey", hint: "Made by bees" },
  { word: "leaf", hint: "Part of a plant" },
  { word: "fox", hint: "Cunning forest animal" },
  { word: "grill", hint: "Used to cook food outdoors" },
  { word: "bridge", hint: "Used to cross rivers" },
  { word: "parrot", hint: "A colorful talking bird" },
  { word: "camera", hint: "Takes photos" },
  { word: "mouse", hint: "Small rodent or a computer device" },
  { word: "button", hint: "Fastens shirts" },
  { word: "candle", hint: "Gives light when lit" },
  { word: "zoo", hint: "Place where animals are kept" },
  { word: "circle", hint: "A round shape" },
  { word: "square", hint: "Shape with four equal sides" },
  { word: "triangle", hint: "Shape with three sides" },
  { word: "rain", hint: "Water falling from clouds" },
  { word: "snow", hint: "Frozen water falling from sky" },
  { word: "fog", hint: "Thick cloud near the ground" },
  { word: "ice", hint: "Frozen water" },
  { word: "storm", hint: "Bad weather with thunder" },
  { word: "wind", hint: "Air in motion" },
  { word: "jungle", hint: "Thick forest" },
  { word: "forest", hint: "Large area with trees" },
  { word: "village", hint: "Smaller than a town" },
  { word: "city", hint: "Large urban area" },
  { word: "planet", hint: "Orbits the sun" },
  { word: "moon", hint: "Orbits the earth" },
  { word: "star", hint: "Shines at night in sky" },
  { word: "comet", hint: "Has a glowing tail in space" },
  { word: "saturn", hint: "Planet with rings" },
  { word: "jupiter", hint: "Biggest planet in solar system" },
  { word: "earth", hint: "Our home planet" },
  { word: "mercury", hint: "Closest planet to the sun" },
  { word: "venus", hint: "Brightest planet" },
  { word: "mars", hint: "Red planet" },
  { word: "uranus", hint: "Tilts on its side" },
  { word: "neptune", hint: "Furthest planet from sun" },
  { word: "asteroid", hint: "Rocky object in space" },
  { word: "robot", hint: "A machine that acts like a human" },
  { word: "computer", hint: "Used for calculations and tasks" },
  { word: "internet", hint: "Connects the world online" },
  { word: "keyboard", hint: "Used to type" },
  { word: "mouse", hint: "Moves pointer on screen" },
  { word: "monitor", hint: "Displays the screen" },
  { word: "laptop", hint: "Portable computer" },
  { word: "tablet", hint: "Touch screen device" },
  { word: "phone", hint: "Used to call" },
  { word: "radio", hint: "Plays music and news" },
  { word: "television", hint: "Displays video programs" },
  { word: "fan", hint: "Cools the air" },
  { word: "lamp", hint: "Lights up a room" },
  { word: "sofa", hint: "Comfortable seat for many people" },
  { word: "bed", hint: "Used for sleeping" },
  { word: "chair", hint: "You sit on it" },
  { word: "table", hint: "Used for eating or working" },
  { word: "door", hint: "Used to enter or exit" },
  { word: "window", hint: "Let's you see outside" },
  { word: "roof", hint: "Top covering of a house" },
  { word: "wall", hint: "Side of a room" },
  { word: "floor", hint: "You walk on it" },
  { word: "ceiling", hint: "Top part inside a room" }
];

let currentIndex = 0;

function loadWord() {
  document.getElementById("wordHint").textContent = words[currentIndex].hint;
  document.getElementById("userInput").value = "";
  document.getElementById("feedback").textContent = "";
  document.getElementById("feedback").className = "";
}

function checkSpelling() {
  const input = document.getElementById("userInput").value.trim().toLowerCase();
  const correct = words[currentIndex].word;
  const feedback = document.getElementById("feedback");

  if (input === correct) {
    feedback.textContent = "✅ Correct!";
    feedback.className = "text-success fs-5 fw-bold";
  } else {
    feedback.textContent = `❌ Incorrect! Correct spelling: ${correct}`;
    feedback.className = "text-danger fs-5 fw-bold";
  }
}

function nextWord() {
  currentIndex = (currentIndex + 1) % words.length;
  loadWord();
}

window.onload = loadWord;
