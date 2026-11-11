
function initMood() {
/* ---------- 1. Como você está hoje? ---------- */
const tips = {
  cansado: "Beba um copo de água e levante por 2 minutos. Se der, durma 20 minutos antes de estudar — cochilo curto rende mais que café.",
  ansioso: "Experimente respirar 4 segundos, segurar 4 e soltar em 6. Repita cinco vezes antes da aula ou da prova. Use o exercício abaixo:",
  sobrecarregado: "Escreva tudo o que está na cabeça e escolha só 3 prioridades para hoje (tem espaço para isso na seção 2). O resto pode esperar.",
  bem: "Que bom! Aproveite para marcar seu dia de movimento e mandar uma mensagem para alguém da turma que pode estar precisando."
};

const chips = document.querySelectorAll(".chip");
const tipBox = document.getElementById("mood-tip");
const breathBox = document.getElementById("breath");

function selectMood(mood) {
  chips.forEach(c => c.setAttribute("aria-checked", String(c.dataset.mood === mood)));
  tipBox.textContent = tips[mood];
  tipBox.hidden = false;
  breathBox.hidden = mood !== "ansioso";
  if (mood !== "ansioso") stopBreathing();
  store.set("me-humor", { mood, date: new Date().toDateString() });
}

chips.forEach(chip => chip.addEventListener("click", () => selectMood(chip.dataset.mood)));

// Restaura o humor escolhido hoje
const savedMood = store.get("me-humor", null);
if (savedMood && savedMood.date === new Date().toDateString()) selectMood(savedMood.mood);

/* ---------- Exercício de respiração 4-4-6 ---------- */
const circle = document.getElementById("breath-circle");
const label = document.getElementById("breath-label");
const countEl = document.getElementById("breath-count");
const breathBtn = document.getElementById("breath-btn");
const CYCLES = 5;
let breathTimers = [];
let breathing = false;

function stopBreathing() {
  breathTimers.forEach(clearTimeout);
  breathTimers = [];
  breathing = false;
  circle.className = "breath-circle";
  label.textContent = "Pronto?";
  countEl.textContent = `Ciclo 0 de ${CYCLES}`;
  breathBtn.textContent = "Começar respiração";
}

function runCycle(n) {
  if (n > CYCLES) {
    label.textContent = "Muito bem!";
    countEl.textContent = "Exercício concluído";
    breathBtn.textContent = "Repetir";
    breathing = false;
    return;
  }
  countEl.textContent = `Ciclo ${n} de ${CYCLES}`;
  circle.className = "breath-circle inhale";
  label.textContent = "Inspire";
  breathTimers.push(setTimeout(() => { label.textContent = "Segure"; }, 4000));
  breathTimers.push(setTimeout(() => {
    circle.className = "breath-circle exhale";
    label.textContent = "Solte";
  }, 8000));
  breathTimers.push(setTimeout(() => runCycle(n + 1), 14000));
}

breathBtn.addEventListener("click", () => {
  if (breathing) { stopBreathing(); return; }
  stopBreathing();
  breathing = true;
  breathBtn.textContent = "Parar";
  runCycle(1);
});

}
