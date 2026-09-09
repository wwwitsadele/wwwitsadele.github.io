(function () {
  var motionKey = "blossom-motion";
  var pauseKey = "blossom-pause";
  var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var motionOn = localStorage.getItem(motionKey) !== null
    ? localStorage.getItem(motionKey) === "true"
    : !prefersReduced;
  var paused = localStorage.getItem(pauseKey) === "true";

  var mouseX = window.innerWidth / 2;
  var trail = [];
  var trailRaf = null;
  var blossomInterval = null;

  // --- Controls ---
  var motionBtn = document.getElementById("motion-btn");
  var motionLabel = document.getElementById("motion-label");
  var pauseBtn = document.getElementById("pause-btn");

  function applyMotion() {
    if (motionOn) {
      document.body.classList.remove("no-motion");
      if (motionLabel) motionLabel.textContent = "On";
      if (motionBtn) motionBtn.classList.remove("off");
      startTrailLoop();
    } else {
      document.body.classList.add("no-motion");
      if (motionLabel) motionLabel.textContent = "Off";
      if (motionBtn) motionBtn.classList.add("off");
      clearTrail();
      stopTrailLoop();
      clearBlossoms();
    }
  }

  function applyPause() {
    if (paused) {
      if (pauseBtn) pauseBtn.classList.add("off");
      clearBlossoms();
    } else {
      if (pauseBtn) pauseBtn.classList.remove("off");
      if (motionOn) startBlossoms();
    }
  }

  function clearTrail() {
    trail.forEach(function (t) { t.el.remove(); });
    trail = [];
  }

  function clearBlossoms() {
    if (blossomInterval) {
      clearInterval(blossomInterval);
      blossomInterval = null;
    }
  }

  function startBlossoms() {
    clearBlossoms();
    blossomInterval = setInterval(createBlossom, 1500);
  }

  if (motionBtn) {
    motionBtn.addEventListener("click", function () {
      motionOn = !motionOn;
      localStorage.setItem(motionKey, motionOn);
      applyMotion();
      if (motionOn && !paused) startBlossoms();
    });
  }

  if (pauseBtn) {
    pauseBtn.addEventListener("click", function () {
      paused = !paused;
      localStorage.setItem(pauseKey, paused);
      applyPause();
    });
  }

  applyMotion();
  applyPause();

  // --- Cursor trail ---
  document.addEventListener("mousemove", function (e) {
    if (!motionOn) return;
    mouseX = e.clientX;
    var b = document.createElement("div");
    b.className = "cursor-blossom";
    var size = 4 + Math.random() * 8;
    b.style.width = size + "px";
    b.style.height = size + "px";
    b.style.left = (e.clientX - size / 2) + "px";
    b.style.top = (e.clientY - size / 2) + "px";
    var colors = ["#ffb6c1", "#dda0dd", "#87cefa", "#f6d1e7", "#d8b4e2"];
    b.style.background = colors[Math.floor(Math.random() * colors.length)];
    document.body.appendChild(b);
    trail.push({ el: b, opacity: 0.7 });
    if (trail.length > 80) {
      var old = trail.shift();
      old.el.remove();
    }
  });

  function fadeTrail() {
    for (var i = trail.length - 1; i >= 0; i--) {
      trail[i].opacity -= 0.035;
      trail[i].el.style.opacity = trail[i].opacity;
      if (trail[i].opacity <= 0) {
        trail[i].el.remove();
        trail.splice(i, 1);
      }
    }
    trailRaf = requestAnimationFrame(fadeTrail);
  }

  function startTrailLoop() {
    stopTrailLoop();
    trailRaf = requestAnimationFrame(fadeTrail);
  }

  function stopTrailLoop() {
    if (trailRaf) {
      cancelAnimationFrame(trailRaf);
      trailRaf = null;
    }
  }

  if (motionOn) startTrailLoop();

  // --- Falling blossoms ---
  function createBlossom() {
    if (document.querySelectorAll(".blossom").length > 8) return;
    var blossom = document.createElement("img");
    blossom.src = "blossom.png";
    blossom.classList.add("blossom");
    blossom.style.left = Math.random() * 100 + "vw";
    blossom.style.animationDuration = (20 + Math.random() * 15) + "s";
    blossom.style.width = (15 + Math.random() * 55) + "px";
    blossom.style.zIndex = Math.random() < 0.75 ? 1 : 3;
    blossom.addEventListener("mouseenter", function () { blossom.remove(); }, { once: true });
    var wind = ((0.5 - mouseX / window.innerWidth)) * 40;
    blossom.style.setProperty("--wind", wind + "vw");
    document.body.appendChild(blossom);
    setTimeout(function () { blossom.remove(); }, 35000);
  }

  if (motionOn && !paused) startBlossoms();

  // --- Tagline click-to-cycle ---
  var taglineEl = document.getElementById("tagline");
  if (taglineEl && typeof pickTagline === "function") {
    taglineEl.addEventListener("click", pickTagline);
  }
})();
