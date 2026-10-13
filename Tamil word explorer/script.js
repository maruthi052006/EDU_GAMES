const wordPairs = [
  { word: "நாய்", meaning: "ஒரு செல்லப்பிராணி" },
  { word: "மழை", meaning: "வானில் இருந்து நீர் விழுதல்" },
  { word: "புத்தகம்", meaning: "படிக்க பயன்படும் பொருள்" },
  { word: "மலை", meaning: "உயரமான நிலப்பரப்பு" },
  { word: "சூரியன்", meaning: "ஒளி தரும் விண்மீன்" },
  { word: "தந்தி", meaning: "தகவல் அனுப்பும் கருவி" },
  { word: "மஞ்சள்", meaning: "ஒரு வகை மூலிகை" },
  { word: "வானவில்", meaning: "மழைக்கு பிறகு தோன்றும் நிறங்கள்" },
  { word: "பசு", meaning: "பால் தரும் விலங்கு" },
  { word: "கடல்", meaning: "பெரிய நீர்நிலையம்" },
  { word: "முடி", meaning: "தலைக்கு மேல் உள்ள தலைமுடி" },
  { word: "மணி", meaning: "நேரத்தை காட்டும் சாதனம்" },
  { word: "தீ", meaning: "வெப்பம் தரும் எரிப்பு" },
  { word: "மின்சாரம்", meaning: "ஒளி மற்றும் சக்தியை வழங்கும்" },
  { word: "வெண்ணிலா", meaning: "இரவு நேரத்தில் தோன்றும் விண்மீன்" },
  { word: "மீன்", meaning: "நீரில் வாழும் உயிரினம்" },
  { word: "பாம்பு", meaning: "நஞ்சு உள்ள விலங்கு" },
  { word: "வானம்", meaning: "மேலே இருக்கும் அகலமான இடம்" },
  { word: "வீடு", meaning: "வாழும் இடம்" },
  { word: "மரம்", meaning: "இலைகளும் கிளைகளும் உடையது" },
  { word: "பூ", meaning: "மணமும் நிறமுள்ள தாவரம்" },
  { word: "கடிகாரம்", meaning: "நேரத்தை காட்டும் கருவி" },
  { word: "வீதி", meaning: "வாகனங்கள் செல்லும் பாதை" },
  { word: "வந்தி", meaning: "நகரும் வாகனம்" },
  { word: "நதிகரை", meaning: "நதியின் பக்கப்பக்கம்" },
  { word: "காகிதம்", meaning: "எழுத பயன்படும் பொருள்" },
  { word: "கேமரா", meaning: "படம் எடுக்கும் கருவி" },
  { word: "வானொலி", meaning: "ஒலி ஒலிக்கும் கருவி" },
  { word: "கண்ணாடி", meaning: "பார்வை சரிசெய்யும் சாதனம்" },
  { word: "சில்லரை", meaning: "காசுகள்" },
  { word: "பூனை", meaning: "மென்மையான செல்லப்பிராணி" },
  { word: "தண்ணீர்", meaning: "குடிக்க பயன்படும் திரவம்" },
  { word: "பூமி", meaning: "நாம் வாழும் கோள்" },
  { word: "சங்கு", meaning: "இராணுவ ஒலி கருவி" },
  { word: "சக்கரம்", meaning: "சுழலும் வட்டம்" },
  { word: "தபால்", meaning: "தகவல் அனுப்பும் சேவை" },
  { word: "வண்ணம்", meaning: "நிறம்" },
  { word: "மழலையர்", meaning: "சிறுவர்கள்" },
  { word: "நிலா", meaning: "இரவு வெளிச்சம் தரும் விண்மீன்" },
  { word: "மழைக்காலம்", meaning: "மழை அதிகம் பொழியும் காலம்" },
  { word: "பந்தயம்", meaning: "போட்டி அல்லது விளையாட்டு" },
  { word: "கேள்வி", meaning: "தகவல் தேடும் செயல்" },
  { word: "பதில்", meaning: "கேள்விக்கு அளிக்கப்படும் தகவல்" },
  { word: "நேரம்", meaning: "ஒரு நிகழ்வு நடைபெறும் காலம்" },
  { word: "வாய்ப்பு", meaning: "ஒரு சாத்தியமான சூழ்நிலை" },
  { word: "பாடசாலை", meaning: "கற்றல் நடைபெறும் இடம்" },
  { word: "முதலமைச்சர்", meaning: "ஒரு மாநிலத்தின் தலைவர்" },
  { word: "தோல்வி", meaning: "வெற்றியின்மை" }
];

let currentSet = [];
let selectedWordIndex = null;

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function loadNewRound() {
  const shuffled = shuffle([...wordPairs]).slice(0, 4);
  currentSet = shuffled;

  const wordsList = document.getElementById("wordsList");
  const meaningsList = document.getElementById("meaningsList");
  const feedback = document.getElementById("feedback");
  feedback.textContent = "";

  wordsList.innerHTML = "";
  meaningsList.innerHTML = "";

  shuffled.forEach((pair, index) => {
    const wordItem = document.createElement("li");
    wordItem.textContent = pair.word;
    wordItem.dataset.index = index;
    wordItem.onclick = () => selectWord(index);
    wordsList.appendChild(wordItem);
  });

  const meaningsShuffled = shuffle(shuffled.map(p => p.meaning));
  meaningsShuffled.forEach((meaning) => {
    const meaningItem = document.createElement("li");
    meaningItem.textContent = meaning;
    meaningItem.onclick = () => checkMatch(meaning);
    meaningsList.appendChild(meaningItem);
  });
}

function selectWord(index) {
  selectedWordIndex = index;
}

function checkMatch(selectedMeaning) {
  const feedback = document.getElementById("feedback");

  if (selectedWordIndex === null) {
    feedback.textContent = "முதலில் ஒரு சொல்லைத் தேர்ந்தெடுக்கவும்.";
    feedback.style.color = "orange";
    return;
  }

  const correctMeaning = currentSet[selectedWordIndex].meaning;
  if (selectedMeaning === correctMeaning) {
    feedback.textContent = "✅ சரியான பொருத்தம்!";
    feedback.style.color = "green";
  } else {
    feedback.textContent = `❌ தவறு! சரியான பொருள்: ${correctMeaning}`;
    feedback.style.color = "red";
  }

  selectedWordIndex = null;
}

window.onload = loadNewRound;
