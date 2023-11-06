// Function to generate random content
function generate(name) {
  const fortunes = [
    "suprising event",
    "challenging obstacles",
    "unexpected friendships",
    "exciting adventures",
    "significant change",
    "new beginnings"
  ];

  const activities = [
    "take a long walk",
    "read a book",
    "try cooking a new recipe",
    "start journaling",
    "learn a musical instrument",
    "practice meditation",
    "asking that guy/girl out"
  ];

  const outputElement = document.getElementById('output');
  const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  const randomActivity = activities[Math.floor(Math.random() * activities.length)];
  
  outputElement.textContent = `${name}, you will have ${randomFortune} ahead of you, and it's a great day to ${randomActivity}.`;

  // Call restyle function to apply new styles
  restyle(outputElement);
}

// Function to apply random CSS styles to the output
function restyle(element) {
  const colors = ["#FF6347", "#4682B4", "#32CD32", "#FFD700", "#FF69B4", "#6A5ACD"];
  const fonts = ["'Arial', sans-serif", "'Courier New', monospace", "'Lucida Console', monospace", "'Times New Roman', serif", "'Comic Sans MS', cursive"];
  const fontSizes = ["14px", "16px", "18px", "20px", "22px"];

  element.style.color = colors[Math.floor(Math.random() * colors.length)];
  element.style.fontFamily = fonts[Math.floor(Math.random() * fonts.length)];
  element.style.fontSize = fontSizes[Math.floor(Math.random() * fontSizes.length)];
}