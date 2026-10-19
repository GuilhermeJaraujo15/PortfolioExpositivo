const projectAreas = [
  { name: ".format", detail: "Formatação de textos com variáveis, índices e apresentação de valores.", colabUrl: "https://colab.research.google.com/drive/1mGVOP-KnlgpIwyIy_Pv6HVnsj5X0FOBS?usp=sharing" },
  { name: "Condicionais", detail: "Decisões com if, elif e else para tratar diferentes situações.", colabUrl: "https://colab.research.google.com/drive/1si_vHDcZ7FAX5d-uOQHXdbKWHVfKP82j?usp=sharing" },
  { name: "Listas", detail: "Criação, acesso, atualização e percurso de coleções mutáveis.", colabUrl: "" },
  { name: "Laços", detail: "Repetições com for e while, contadores e condições de parada.", colabUrl: "" },
  { name: "Tuplas", detail: "Coleções ordenadas e imutáveis, desempacotamento e acesso a elementos.", colabUrl: "" },
  { name: "Dicionários", detail: "Dados organizados em pares de chave e valor, consultas e atualizações.", colabUrl: "" },
  { name: "Bibliotecas", detail: "Importação de módulos e uso de funções prontas para ampliar os programas.", colabUrl: "" },
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
  article.append(number, title, description);

  if (project.colabUrl) {
    const link = document.createElement("a");
    link.className = "project-state project-link";
    link.href = project.colabUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "Abrir resolução no Google Colab ↗";
    article.append(link);
  } else {
    const status = document.createElement("span");
    status.className = "project-state";
    status.textContent = "Notebook do Colab a vincular";
    article.append(status);
  }

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
