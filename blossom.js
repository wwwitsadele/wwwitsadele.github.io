let mouseX = window.innerWidth / 2;
let lastTrail = 0;

document.addEventListener("mousemove", e => {
  mouseX = e.clientX;
  const now = Date.now();
  if (now - lastTrail < 25) return;
  lastTrail = now;
  const b = document.createElement("div");
  b.className = "cursor-blossom";
  const size = 4 + Math.random() * 8;
  b.style.width = size + "px";
  b.style.height = size + "px";
  b.style.left = (e.clientX - size / 2) + "px";
  b.style.top = (e.clientY - size / 2) + "px";
  const colors = ["#ffb6c1", "#dda0dd", "#87cefa", "#f6d1e7", "#d8b4e2"];
  b.style.background = colors[Math.floor(Math.random() * colors.length)];
  document.body.appendChild(b);
  let opacity = 0.7;
  const fade = setInterval(() => {
    opacity -= 0.035;
    b.style.opacity = opacity;
    if (opacity <= 0) {
      clearInterval(fade);
      b.remove();
    }
  }, 30);
});

function createBlossom() {
  if (document.querySelectorAll(".blossom").length > 8) return;
  const blossom = document.createElement("img");
  blossom.src = "blom.png";
  blossom.classList.add("blossom");
  blossom.style.left = Math.random() * 100 + "vw";
  blossom.style.animationDuration = (5 + Math.random() * 5) + "s";
  blossom.style.width = (15 + Math.random() * 55) + "px";
  if (Math.random() < 0.75) {
    blossom.style.zIndex = 1;
  } else {
    blossom.style.zIndex = 3;
  }
  const wind = ((0.5 - mouseX / window.innerWidth)) * 40;
  blossom.style.setProperty("--wind", wind + "vw");
  document.body.appendChild(blossom);
  setTimeout(() => blossom.remove(), 10000);
}

setInterval(createBlossom, 1500);
