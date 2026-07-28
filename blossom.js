let mouseX = window.innerWidth / 2;

document.addEventListener("mousemove", e => {
  mouseX = e.clientX;
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
