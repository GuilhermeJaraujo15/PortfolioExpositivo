const projectAreas = [
  { name: ".format", detail: "Formata\u00e7\u00e3o de textos com vari\u00e1veis, \u00edndices e apresenta\u00e7\u00e3o de valores.", resources: [{ label: "Colab \u00b7 .format", url: "https://colab.research.google.com/drive/1mGVOP-KnlgpIwyIy_Pv6HVnsj5X0FOBS?usp=sharing" }] },
  { name: "Condicionais", detail: "Decis\u00f5es com if, elif e else para tratar diferentes situa\u00e7\u00f5es.", resources: [{ label: "Colab \u00b7 Condicionais", url: "https://colab.research.google.com/drive/1si_vHDcZ7FAX5d-uOQHXdbKWHVfKP82j?usp=sharing#scrollTo=qg5CDqnky8SD" }] },
  { name: "Listas", detail: "Cria\u00e7\u00e3o, acesso, atualiza\u00e7\u00e3o e percurso de cole\u00e7\u00f5es mut\u00e1veis.", resources: [{ label: "Colab \u00b7 Listas", url: "https://colab.research.google.com/drive/1n76ctdu5dzjdrNX4YcqYIXkaGLDwvfLw?usp=sharing" }] },
  { name: "La\u00e7os", detail: "Repeti\u00e7\u00f5es com for e while, contadores e condi\u00e7\u00f5es de parada.", resources: [{ label: "Colab \u00b7 For", url: "https://colab.research.google.com/drive/1iOP8a5a2o4g5bIFeNWCpRxOs6gf_0KyD?usp=sharing" }, { label: "Colab \u00b7 While", url: "https://colab.research.google.com/drive/1jUBg2ne-B7YAu6tv5twAGEMjUt6Yp8oW?usp=sharing" }] },
  { name: "Tuplas", detail: "Cole\u00e7\u00f5es ordenadas e imut\u00e1veis, desempacotamento e acesso a elementos.", resources: [{ label: "Colab \u00b7 Tuplas", url: "https://colab.research.google.com/drive/1-sd3p04tHwjvHVqW0MFVNma9PNZ8vxr1?usp=sharing" }] },
  { name: "Dicion\u00e1rios", detail: "Dados organizados em pares de chave e valor, consultas e atualiza\u00e7\u00f5es.", resources: [{ label: "Colab \u00b7 Dicion\u00e1rios", url: "https://colab.research.google.com/drive/1LUg_3v5i4ccRmtnluecqFQ9AK62-YUmX?usp=sharing" }] },
  { name: "Bibliotecas", detail: "Importa\u00e7\u00e3o de m\u00f3dulos e uso de fun\u00e7\u00f5es prontas para ampliar os programas.", resources: [{ label: "Colab \u00b7 Bibliotecas", url: "https://colab.research.google.com/drive/1cCd0IWusFMBYF39iinBalChDkuIpnxfN?usp=sharing" }] },
];

const semesterProjects = [
  {
    name: "Análise de vendas - Agência de Viagens",
    description: "A aplicação permite gerar métricas, filtrar dados por destino, consultar informações de vendas e visualizar gráficos gerados dinamicamente.",
    technologies: ["Python • Flask • Pandas • NumPy • Matplotlib • Seaborn • MySQL • HTML5 • CSS3"],
    url: "https://github.com/GuilhermeJaraujo15/Data_Analysis_With_Python",
  },
  {
    name: "Projeto 02",
    description: "Adicione uma descrição breve do objetivo e do que foi desenvolvido.",
    technologies: ["Tecnologias a definir"],
    url: "",
  },
  {
    name: "Projeto 03",
    description: "Adicione uma descrição breve do objetivo e do que foi desenvolvido.",
    technologies: ["Tecnologias a definir"],
    url: "",
  },
];

const projectList = document.querySelector("#project-list");
for (const [index, project] of projectAreas.entries()) {
  const article = document.createElement("article");
  article.className = "project-card";
  const title = document.createElement("h3");
  title.textContent = project.name;
  const description = document.createElement("p");
  description.textContent = project.detail;
  article.append(title, description);

  const actions = document.createElement("div");
  actions.className = "project-actions";

  for (const resource of project.resources) {
    if (resource.url) {
      const link = document.createElement("a");
      link.className = "project-link";
      link.href = resource.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = resource.label;
      actions.append(link);
    } else {
      const pending = document.createElement("span");
      pending.className = "project-link project-link-pending";
      pending.textContent = `${resource.label} \u00b7 link pendente`;
      actions.append(pending);
    }
  }

  article.append(actions);

  projectList.append(article);
}

const semesterProjectList = document.querySelector("#semester-project-list");
for (const project of semesterProjects) {
  const article = document.createElement("article");
  article.className = "semester-project-card";

  const title = document.createElement("h3");
  title.textContent = project.name;

  const description = document.createElement("p");
  description.textContent = project.description;

  const technologies = document.createElement("ul");
  technologies.className = "semester-project-technologies";
  technologies.setAttribute("aria-label", `Tecnologias de ${project.name}`);
  for (const technology of project.technologies) {
    const item = document.createElement("li");
    item.textContent = technology;
    technologies.append(item);
  }

  article.append(title, description, technologies);

  if (project.url) {
    const link = document.createElement("a");
    link.className = "semester-project-link";
    link.href = project.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "Acessar projeto";
    link.setAttribute("aria-label", `Acessar projeto: ${project.name} (abre em nova aba)`);
    article.append(link);
  }

  semesterProjectList.append(article);
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

document.querySelector(".footer-top")?.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: reducedMotion.matches ? "auto" : "smooth",
  });
});

configureTravel();
