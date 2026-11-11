function initTimer() {
/* ---------- 2. Cronômetro de foco ---------- */
const display = document.getElementById("timer-display");
const startBtn = document.getElementById("timer-start");
const resetBtn = document.getElementById("timer-reset");
const modes = document.querySelectorAll(".mode");
let total = 25 * 60;
let remaining = total;
let interval = null;

const fmt = s => `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

function render() {
  display.textContent = fmt(remaining);
  document.title = interval ? `${fmt(remaining)} · Mente em Equilíbrio` : "Mente em Equilíbrio · Guia de bolso";
}

function beep() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    [0, 0.35, 0.7].forEach(t => {
      const o = ctx.createOscillator(), g = ctx.createGain();
      o.frequency.value = 660;
      g.gain.setValueAtTime(0.2, ctx.currentTime + t);
      g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + t + 0.3);
      o.connect(g).connect(ctx.destination);
      o.start(ctx.currentTime + t);
      o.stop(ctx.currentTime + t + 0.3);
    });
  } catch { /* sem áudio */ }
  if (navigator.vibrate) navigator.vibrate([200, 100, 200]);
}

function pause() {
  clearInterval(interval);
  interval = null;
  startBtn.textContent = "Continuar";
  render();
}

function start() {
  if (remaining <= 0) remaining = total;
  const end = Date.now() + remaining * 1000; // preciso mesmo com aba em segundo plano
  startBtn.textContent = "Pausar";
  interval = setInterval(() => {
    remaining = Math.max(0, Math.round((end - Date.now()) / 1000));
    render();
    if (remaining === 0) {
      pause();
      startBtn.textContent = "Iniciar";
      display.textContent = "Tempo!";
      beep();
    }
  }, 250);
  render();
}

function reset() {
  clearInterval(interval);
  interval = null;
  remaining = total;
  startBtn.textContent = "Iniciar";
  render();
}

startBtn.addEventListener("click", () => (interval ? pause() : start()));
resetBtn.addEventListener("click", reset);
modes.forEach(m => m.addEventListener("click", () => {
  modes.forEach(x => x.classList.remove("active"));
  m.classList.add("active");
  total = Number(m.dataset.minutes) * 60;
  reset();
}));

}
