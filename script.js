// Efek partikel gelembung laut
const canvas = document.querySelector(".particles");
const ctx = canvas.getContext("2d");
let w, h, particles;

function init() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
  particles = Array.from({ length: 80 }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    r: Math.random() * 3 + 1,
    d: Math.random() * 1 + 0.5
  }));
}

function draw() {
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = "rgba(0,168,255,0.6)";
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
  });
  update();
}

function update() {
  particles.forEach(p => {
    p.y -= p.d;
    if (p.y < 0) {
      p.y = h;
      p.x = Math.random() * w;
    }
  });
}

function animate() {
  draw();
  requestAnimationFrame(animate);
}

window.addEventListener("resize", init);
init();
animate();
