const projectAreas = [
  { name: "Math", focus: "CÃ¡lculos e lÃ³gica", detail: "Registre exercÃ­cios e aplicaÃ§Ãµes construÃ­dos com o mÃ³dulo padrÃ£o math." },
  { name: "Pandas", focus: "ManipulaÃ§Ã£o de dados", detail: "Descreva anÃ¡lises e transformaÃ§Ãµes feitas com estruturas de dados tabulares." },
  { name: "NumPy", focus: "ComputaÃ§Ã£o numÃ©rica", detail: "Adicione estudos com arrays, operaÃ§Ãµes vetorizadas e mÃ©todos numÃ©ricos." },
  { name: "Seaborn", focus: "VisualizaÃ§Ã£o de dados", detail: "Apresente visualizaÃ§Ãµes e as perguntas que cada anÃ¡lise procurou responder." },
];

const projectList = document.querySelector("#project-list");
for (const [index, project] of projectAreas.entries()) {
  const article = document.createElement("article");
  article.className = "project-card";
  const number = document.createElement("span");
  number.className = "project-index";
  number.textContent = `0${index + 1} / PY`;
  const title = document.createElement("h3");
  title.textContent = project.name;
  const description = document.createElement("p");
  description.textContent = project.detail;
  const status = document.createElement("span");
  status.className = "project-state";
  status.textContent = "ÃREA RESERVADA Â· A PREENCHER";
  article.append(number, title, description, status);
  projectList.append(article);
}

document.querySelector("#year").textContent = new Date().getFullYear();

const journey = document.querySelector(".journey");
const track = document.querySelector("#track");
const progress = document.querySelector(".journey-progress span");
const wideFinePointer = window.matchMedia("(min-width: 701px) and (pointer: fine)");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let frame = 0;
let travel = 0;

function updateTravel() {
  frame = 0;
  if (!document.documentElement.classList.contains("js-horizontal")) return;
  const rect = journey.getBoundingClientRect();
  const passed = Math.min(Math.max(-rect.top, 0), travel);
  track.style.transform = `translate3d(${-passed}px, 0, 0)`;
  progress.style.transform = `scaleX(${travel ? passed / travel : 0})`;
}

function scheduleTravel() {
  if (!frame) frame = requestAnimationFrame(updateTravel);
}

function configureTravel() {
  const enabled = wideFinePointer.matches && !reducedMotion.matches;
  document.documentElement.classList.toggle("js-horizontal", enabled);
  if (enabled) {
    travel = Math.max(0, track.scrollWidth - window.innerWidth);
    journey.style.height = `${window.innerHeight + travel}px`;
    scheduleTravel();
  } else {
    travel = 0;
    journey.style.removeProperty("height");
    track.style.removeProperty("transform");
    progress.style.removeProperty("transform");
  }
}

window.addEventListener("scroll", scheduleTravel, { passive: true });
window.addEventListener("resize", configureTravel, { passive: true });
window.addEventListener("pageshow", configureTravel);
wideFinePointer.addEventListener("change", configureTravel);
reducedMotion.addEventListener("change", configureTravel);
configureTravel();
