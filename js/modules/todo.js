
function initTodo() {
/* ---------- 2b. Três prioridades do dia ---------- */
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const todoHint = document.getElementById("todo-hint");
const MAX_TODOS = 3;
const today = new Date().toDateString();

let todoData = store.get("me-prioridades", { date: today, items: [] });
if (todoData.date !== today) todoData = { date: today, items: [] }; // renova a cada dia

function saveTodos() { store.set("me-prioridades", todoData); }

function renderTodos() {
  todoList.innerHTML = "";
  todoData.items.forEach((item, i) => {
    const li = document.createElement("li");
    li.className = "todo-item" + (item.done ? " done" : "");

    const lbl = document.createElement("label");
    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.checked = item.done;
    cb.addEventListener("change", () => { item.done = cb.checked; saveTodos(); renderTodos(); });
    const span = document.createElement("span");
    span.textContent = item.text;
    lbl.append(cb, span);

    const del = document.createElement("button");
    del.className = "todo-del";
    del.setAttribute("aria-label", `Remover ${item.text}`);
    del.textContent = "×";
    del.addEventListener("click", () => { todoData.items.splice(i, 1); saveTodos(); renderTodos(); });

    li.append(lbl, del);
    todoList.appendChild(li);
  });

  const n = todoData.items.length;
  const done = todoData.items.filter(t => t.done).length;
  todoInput.disabled = n >= MAX_TODOS;
  todoInput.placeholder = n >= MAX_TODOS ? "Limite de 3 — foque nelas!" : "Ex.: entregar a atividade";
  if (n === 0) todoHint.textContent = "Escolha até 3. Menos é mais.";
  else if (done === n) todoHint.textContent = "Tudo feito! Hoje valeu. 🎉";
  else todoHint.textContent = `${done} de ${n} concluída(s).`;
}

todoForm.addEventListener("submit", e => {
  e.preventDefault();
  const text = todoInput.value.trim();
  if (!text || todoData.items.length >= MAX_TODOS) return;
  todoData.items.push({ text, done: false });
  todoInput.value = "";
  saveTodos();
  renderTodos();
});

renderTodos();

}
