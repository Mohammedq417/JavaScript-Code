const quotes = [
  "Life is 10% what happens to us and 90% how we react to it.",
  "Do not watch the clock. Do what it does. Keep going.",
  "You only live once, but if you do it right, once is enough.",
  "Be the change that you wish to see in the world.",
  "The only limit to our realization of tomorrow is our doubts of today.",
  "It does not matter how slowly you go as long as you do not stop."
];

let lastQuote = "";

function showQuote() {
  let randomIndex;
  let randomQuote;

  do {
    randomIndex = Math.floor(Math.random() * quotes.length);
    randomQuote = quotes[randomIndex];
  } while (randomQuote === lastQuote);

  document.getElementById("quote").textContent = randomQuote;

  lastQuote = randomQuote;
}
