document.getElementById('year').textContent = new Date().getFullYear();
function toggleLetter(num) {
  const letter = document.getElementById('letter' + num);
  letter.style.display = letter.style.display === 'none' ? 'block' : 'none';
}
const messages = [
  "I love you 💕",
  "You are my person 🫶🏽",
  "Forever looks good on us 💖",
  "My heart chose you 💘",
  "Always you 🥰"
];

const lovePopup = document.getElementById("lovePopup");

function showLovePopup() {
  const msg = messages[Math.floor(Math.random() * messages.length)];
  lovePopup.textContent = msg;
  lovePopup.classList.add("show");

  setTimeout(() => {
    lovePopup.classList.remove("show");
  }, 3000);
}

function randomLovePopup() {
  const randomTime = Math.floor(Math.random() * 15000) + 8000;
  setTimeout(() => {
    showLovePopup();
    randomLovePopup();
  }, randomTime);
}

randomLovePopup();