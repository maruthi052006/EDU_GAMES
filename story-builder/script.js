const characters = [
  "a brave lion", "a clever girl", "a funny robot", "a wise owl",
  "an adventurous boy", "a sneaky fox", "a kind witch", "a tiny ant",
  "a giant turtle", "a cheerful elephant"
];

const settings = [
  "in a deep jungle", "at a magical school", "on a distant planet",
  "inside a volcano", "at the bottom of the ocean", "in a haunted castle",
  "on a flying ship", "in a frozen land", "on a floating island", "in a secret cave"
];

const actions = [
  "solved a mystery", "built a flying machine", "found a treasure",
  "saved the day", "discovered a hidden map", "learned a powerful spell",
  "befriended a dragon", "escaped from danger", "rescued a friend",
  "invented something amazing"
];

const sampleStories = [
  "A brave lion in a deep jungle solved a mystery. It was a day they would never forget!",
  "A clever girl at a magical school built a flying machine. It was a day she would never forget!",
  "A funny robot on a distant planet found a treasure. It was a day it would never forget!",
  "A wise owl inside a volcano saved the day. It was a moment of magic and adventure!",
  "An adventurous boy at the bottom of the ocean discovered a hidden map. It was a day he would never forget!",
  "A sneaky fox in a haunted castle learned a powerful spell. It changed everything!",
  "A kind witch on a flying ship befriended a dragon. The skies would never be the same!",
  "A tiny ant in a frozen land escaped from danger. It was a heroic feat!",
  "A giant turtle on a floating island rescued a friend. It was an unforgettable moment!",
  "A cheerful elephant in a secret cave invented something amazing. Everyone was amazed!",
  "A brave lion at a magical school found a treasure. It was a moment to remember!",
  "A clever girl in a deep jungle saved the day. Courage led the way!",
  "A funny robot on a flying ship solved a mystery. It became a legend!",
  "A wise owl in a frozen land learned a powerful spell. The world changed forever!",
  "An adventurous boy at the bottom of the ocean befriended a dragon. The journey was just beginning!",
  "A sneaky fox on a distant planet escaped from danger. What an adventure!",
  "A kind witch in a haunted castle discovered a hidden map. The treasure awaited!",
  "A tiny ant on a floating island rescued a friend. Teamwork made it possible!",
  "A giant turtle inside a volcano built a flying machine. What a spectacle!",
  "A cheerful elephant in a secret cave solved a mystery. It brought everyone together!"
];

function populateOptions(id, list) {
  const select = document.getElementById(id);
  list.forEach(item => {
    const option = document.createElement("option");
    option.value = item;
    option.textContent = item.charAt(0).toUpperCase() + item.slice(1);
    select.appendChild(option);
  });
}

function buildStory() {
  const character = document.getElementById("character").value;
  const setting = document.getElementById("setting").value;
  const action = document.getElementById("action").value;

  const story = `${character} ${setting} and ${action}. It was a day they would never forget!`;
  document.getElementById("story").textContent = story;
  document.getElementById("story-box").style.display = "block";
}

window.onload = () => {
  populateOptions("character", characters);
  populateOptions("setting", settings);
  populateOptions("action", actions);
};