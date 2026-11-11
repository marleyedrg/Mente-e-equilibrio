
function initWeek() {
/* ---------- 4. Mexa-se: desafio semanal ---------- */
const DAYS = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];
const weekEl = document.getElementById("week");
const weekTotal = document.getElementById("week-total");
const weekBar = document.getElementById("week-bar");
const weekMsg = document.getElementById("week-msg");

// Identifica a semana pela data da segunda-feira
function mondayKey(d = new Date()) {
  const date = new Date(d);
  const diff = (date.getDay() + 6) % 7; // 0 = segunda
  date.setDate(date.getDate() - diff);
  return date.toDateString();
}
const todayIndex = (new Date().getDay() + 6) % 7;

let weekData = store.get("me-semana", { week: mondayKey(), days: Array(7).fill(false) });
if (weekData.week !== mondayKey()) weekData = { week: mondayKey(), days: Array(7).fill(false) };

function renderWeek() {
  const count = weekData.days.filter(Boolean).length;
  weekTotal.textContent = count;
  weekBar.style.width = `${(count / 7) * 100}%`;
  const msgs = [
    "Comece hoje: descer um ponto antes já conta.",
    "Primeiro dia marcado. Boa!",
    "Dois dias! O corpo agradece.",
    "Três dias — quase metade da semana.",
    "Quatro dias! Você está criando um hábito.",
    "Cinco dias. Que constância!",
    "Seis dias. Falta só um!",
    "Semana completa! Parabéns. 💪"
  ];
  weekMsg.textContent = msgs[count];
}

DAYS.forEach((name, i) => {
  const btn = document.createElement("button");
  btn.className = "day" + (i === todayIndex ? " today" : "");
  btn.textContent = name;
  btn.setAttribute("aria-pressed", String(weekData.days[i]));
  btn.setAttribute("aria-label", `${name}${i === todayIndex ? " (hoje)" : ""}`);
  btn.addEventListener("click", () => {
    weekData.days[i] = !weekData.days[i];
    btn.setAttribute("aria-pressed", String(weekData.days[i]));
    store.set("me-semana", weekData);
    renderWeek();
  });
  weekEl.appendChild(btn);
});

renderWeek();
}
