let mouseX = window.innerWidth / 2;
let trail = [];

document.addEventListener("mousemove", e => {
  mouseX = e.clientX;
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
  trail.push({ el: b, opacity: 0.7 });
  if (trail.length > 80) {
    const old = trail.shift();
    old.el.remove();
  }
});

function fadeTrail() {
  for (let i = trail.length - 1; i >= 0; i--) {
    trail[i].opacity -= 0.035;
    trail[i].el.style.opacity = trail[i].opacity;
    if (trail[i].opacity <= 0) {
      trail[i].el.remove();
      trail.splice(i, 1);
    }
  }
  requestAnimationFrame(fadeTrail);
}
requestAnimationFrame(fadeTrail);

function createBlossom() {
  if (document.querySelectorAll(".blossom").length > 8) return;
  const blossom = document.createElement("img");
  blossom.src = "blom.png";
  blossom.classList.add("blossom");
  blossom.style.left = Math.random() * 100 + "vw";
  blossom.style.animationDuration = (20 + Math.random() * 15) + "s";
  blossom.style.width = (15 + Math.random() * 55) + "px";
  blossom.style.zIndex = Math.random() < 0.75 ? 1 : 3;
  blossom.addEventListener("mouseenter", () => blossom.remove(), { once: true });
  const wind = ((0.5 - mouseX / window.innerWidth)) * 40;
  blossom.style.setProperty("--wind", wind + "vw");
  document.body.appendChild(blossom);
  setTimeout(() => blossom.remove(), 35000);
}

setInterval(createBlossom, 1500);
