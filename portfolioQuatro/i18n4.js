(() => {
  "use strict";

  const translations = new Map(Object.entries({
    "Portfólio acadêmico do quarto semestre, com ênfase em Python.": "Fourth-semester academic portfolio focused on Python.",
    "Ênfase em Python — Portfólio do 4º semestre": "Python Focus — 4th-Semester Portfolio",
    "Pular para o conteúdo": "Skip to content",
    "Voltar à introdução": "Back to Introduction",
    "Símbolo do Python": "Python logo",
    "PORTFÓLIO ACADÊMICO": "ACADEMIC PORTFOLIO",
    "4º SEMESTRE": "4TH SEMESTER",
    "Foco em": "Focused on",
    "e": "&",
    "Dados": "Data",
    "Estudos, exercícios e projetos que exploram programação e dados ao longo do semestre.": "Coursework, exercises, and projects exploring programming and data throughout the semester.",
    "Descer para o conteúdo": "Scroll to content",
    "Portfólio: introdução, exercícios, projetos e certificações": "Portfolio: introduction, exercises, projects, and certifications",
    "DESLIZE!": "SCROLL!",
    "CONTEXTO": "CONTEXT",
    "LÓGICA DE PROGRAMAÇÃO": "PROGRAMMING LOGIC",
    "Aprender fazendo.": "Learn by doing.",
    "Entender construindo.": "Understand by building.",
    "Neste semestre, pratiquei lógica de programação para ganhar fluência na sintaxe de Python. Os desafios a seguir registram esse percurso, dos primeiros começando de estruturas mais simples, como cálculos matemáticos com variáveis numéricas, até a feitura de sistemas mais complexos - com dados agregados, e bibliotecas Python.": "This semester, I practiced programming logic to become more fluent in Python. The challenges below trace that journey—from basic operations with numeric variables to more complex systems using aggregated data and Python libraries.",
    "Uma etapa de cada vez": "One step at a time",
    "PRÁTICA": "PRACTICE",
    "DESAFIOS RESOLVIDOS": "SOLVED CHALLENGES",
    "Lógica em": "Logic in",
    "prática.": "practice.",
    "Exercícios organizados por nicho. Abra cada notebook para acompanhar as propostas e as resoluções no Google Colab.": "Exercises grouped by topic. Open each notebook to explore the prompts and solutions in Google Colab.",
    "Desafios de lógica de programação em Python": "Python programming logic challenges",
    "Atividades acadêmicas": "Coursework",
    "PROJETOS": "PROJECTS",
    "PROJETOS DO SEMESTRE": "SEMESTER PROJECTS",
    "Ideias em": "Ideas in",
    "execução.": "action.",
    "Avante expresso alguns dos projetos desenvolvidos durante o quarto semestre, pelos quais pude ter aprimorado minhas habilidades em programação e resolução de problemas com maior ênfase na área de Análise e Visualização de Dados.": "Here are some of the projects I worked on during my fourth semester, where I strengthened my programming and problem-solving skills, with a particular focus on data analysis and visualization.",
    "Projetos desenvolvidos no quarto semestre": "Projects developed during the fourth semester",
    "Projetos do 4º semestre": "4th-semester projects",
    "FORMAÇÃO": "EDUCATION",
    "REGISTROS DE APRENDIZADO": "LEARNING HIGHLIGHTS",
    "Certificações": "Certifications",
    "e cursos.": "and Courses.",
    "Recortes de alguns cursos complementares feitos durante esta trajetória até então, com foco em Python e Análise de Dados. Clique nos cartões para vê-los.": "A selection of supplementary courses I've taken so far, focused on Python and data analysis. Click a card to view its details.",
    "Ver certificado Python Essentials, Cisco Networking Academy (abre em nova aba)": "View certificate: Python Essentials, Cisco Networking Academy (opens in a new tab)",
    "CONCLUÍDO EM": "COMPLETED",
    "Set. de 2026": "Sep 2026",
    "Ver certificado": "View certificate",
    "Power BI e Análise de Dados com IA, SENAI (em andamento)": "Power BI and AI-Powered Data Analytics, SENAI (in progress)",
    "Power BI e Análise de Dados com IA": "Power BI and AI-Powered Data Analytics",
    "STATUS": "STATUS",
    "Em andamento": "In progress",
    "Ver certificado Criação de Agentes de IA com o Microsoft Foundry, Senai (abre em nova aba)": "View certificate: Building AI Agents with Microsoft Foundry, SENAI (opens in a new tab)",
    "Criação de Agentes de IA com o Microsoft Foundry": "Building AI Agents with Microsoft Foundry",
    "Out. 2026": "Oct 2026",
    "Formação complementar": "Additional education",
    "Voltar ao topo": "Back to top",
    "Redes sociais": "Social media",
    "Formatação de textos com variáveis, índices e apresentação de valores.": "Format strings with variables, indexes, and value formatting.",
    "Condicionais": "Conditionals",
    "Decisões com if, elif e else para tratar diferentes situações.": "Use if, elif, and else to handle different scenarios.",
    "Listas": "Lists",
    "Criação, acesso, atualização e percurso de coleções mutáveis.": "Create, access, update, and iterate over mutable collections.",
    "Laços": "Loops",
    "Repetições com for e while, contadores e condições de parada.": "Use for and while loops, counters, and stopping conditions.",
    "Tuplas": "Tuples",
    "Coleções ordenadas e imutáveis, desempacotamento e acesso a elementos.": "Work with ordered, immutable collections, unpacking, and element access.",
    "Dicionários": "Dictionaries",
    "Dados organizados em pares de chave e valor, consultas e atualizações.": "Organize data into key-value pairs, then look up and update entries.",
    "Bibliotecas": "Libraries",
    "Importação de módulos e uso de funções prontas para ampliar os programas.": "Import modules and use built-in functions to extend your programs.",
    "Colab · Condicionais": "Colab · Conditionals",
    "Colab · Listas": "Colab · Lists",
    "Colab · For": "Colab · For",
    "Colab · While": "Colab · While",
    "Colab · Tuplas": "Colab · Tuples",
    "Colab · Dicionários": "Colab · Dictionaries",
    "Colab · Bibliotecas": "Colab · Libraries",
    "link pendente": "link coming soon",
    "Análise de vendas - Agência de Viagens": "Travel Agency Sales Analysis",
    "A aplicação permite gerar métricas, filtrar dados por destino, consultar informações de vendas e visualizar gráficos gerados dinamicamente.": "Explore sales metrics, filter data by destination, look up sales details, and view dynamically generated charts.",
    "Acessar projeto": "View project",
    "Dashboards utilizando Business Intelligence": "Business Intelligence Dashboards",
    "Neste projeto, desenvolvi diversos dashboards com propósito de gerar insights para tomada de decisão no âmbito empresarial, utilizando do Power BI para análise de dados e visualização de informações advindas de diversas fontes, de maneira limpa e com foco profissional.": "I built dashboards to surface insights for business decision-making, using Power BI to analyze data and present information from multiple sources in a clear, professional format.",
    "Vídeo demonstrativo": "Watch demo",
    "Plataforma Completa para Entidade de Ensino Superior - Instituto Socrático (Disponível em breve)": "End-to-End Platform for a Higher Education Institution — Instituto Socrático (Coming Soon)",
    "Esta plataforma está sendo desenvolvida para atender às necessidades de uma entidade de ensino superior, oferecendo funcionalidades como gestão acadêmica, comunicação entre alunos e professores, análise de desempenho, acompanhamento de atividades, gerenciamento financeiro e muito mais, em um único lugar.": "This platform is being developed for a higher education institution, bringing together academic administration, student-faculty communication, performance analysis, activity tracking, financial management, and more in one place.",
    "Tecnologias de Análise de vendas - Agência de Viagens": "Technologies used for Travel Agency Sales Analysis",
    "Tecnologias de Dashboards utilizando Business Intelligence": "Technologies used for Business Intelligence Dashboards",
    "Tecnologias de Plataforma Completa para Entidade de Ensino Superior - Instituto Socrático (Disponível em breve)": "Technologies used for End-to-End Platform for a Higher Education Institution — Instituto Socrático (Coming Soon)",
    "Acessar projeto: Análise de vendas - Agência de Viagens (abre em nova aba)": "View project: Travel Agency Sales Analysis (opens in a new tab)",
    "Vídeo demonstrativo: Dashboards utilizando Business Intelligence (abre em nova aba)": "Watch demo: Business Intelligence Dashboards (opens in a new tab)",
    " (abre em nova aba)": " (opens in a new tab)",
    "Toque novamente para ver": "Tap again to view"
  }));
  const reverseTranslations = new Map(
    [...translations].map(([source, translated]) => [translated, source])
  );
  const storageKey = "portfolioQuatroLanguage";
  const button = document.querySelector("#language-toggle");
  if (!button) return;

  let language = localStorage.getItem(storageKey) === "en" ? "en" : "pt-BR";

  function translateValue(value, dictionary) {
    const leading = value.match(/^\s*/)[0];
    const trailing = value.match(/\s*$/)[0];
    const text = value.trim().replace(/\s+/g, " ");
    const translated = dictionary.get(text);
    return translated ? `${leading}${translated}${trailing}` : value;
  }

  function translateContent(nextLanguage) {
    const dictionary = nextLanguage === "en" ? translations : reverseTranslations;
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;

    while ((node = walker.nextNode())) {
      const translated = translateValue(node.nodeValue, dictionary);
      if (translated !== node.nodeValue) node.nodeValue = translated;
    }

    document
      .querySelectorAll("[aria-label], [title], meta[name='description']")
      .forEach((element) => {
        for (const attribute of ["aria-label", "title", "content"]) {
          if (!element.hasAttribute(attribute)) continue;
          const value = element.getAttribute(attribute);
          const translated = translateValue(value, dictionary);
          if (translated !== value) element.setAttribute(attribute, translated);
        }
      });

    const title = document.querySelector("title");
    if (title) title.textContent = translateValue(title.textContent, dictionary);
  }

  function applyLanguage(nextLanguage) {
    language = nextLanguage;
    document.documentElement.lang = nextLanguage === "en" ? "en-US" : "pt-BR";
    translateContent(nextLanguage);

    const label = nextLanguage === "en" ? "PT" : "EN";
    const ariaLabel = nextLanguage === "en"
      ? "Switch language to Portuguese"
      : "Mudar idioma para inglês";
    const title = nextLanguage === "en" ? "Português" : "English";
    const labelElement = button.querySelector(".language-toggle-label");

    if (button.getAttribute("aria-label") !== ariaLabel) {
      button.setAttribute("aria-label", ariaLabel);
    }
    if (button.title !== title) button.title = title;
    if (labelElement.textContent !== label) labelElement.textContent = label;
  }

  const contentObserver = new MutationObserver(() => {
    translateContent(language);
  });
  contentObserver.observe(document.body, {
    childList: true,
    subtree: true,
    characterData: true,
  });

  button.addEventListener("click", () => {
    const nextLanguage = language === "en" ? "pt-BR" : "en";
    localStorage.setItem(storageKey, nextLanguage === "en" ? "en" : "pt-BR");
    applyLanguage(nextLanguage);
  });

  applyLanguage(language);
})();