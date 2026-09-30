const globe = document.querySelector("#globe");
const button = document.querySelector("#shake");
const message = document.querySelector("#message");

const messages = [
  "you are someones's favorite person to sit next to.",
  "The thing you are building counts, even half finsihed.",
  "you are allowed to be a beginner for as long as you need.",
  "someone is going to love what you make with this.",
  "hot chocolate taste better after a hard day. you've everned one.",
]

button.addEventListener("click", () => {
  globe.classList.add ("shaking");
  setTimeout(() => globe.classList.remove("shaking"), 600);


const pick = Math.floor(Math.random() * message.length);
message.textContent = messages[pick];

});