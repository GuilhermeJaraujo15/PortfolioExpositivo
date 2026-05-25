(() => {
  const STORAGE_KEY = "portfolio-language";
  const DEFAULT_LANG = "pt";
  const SUPPORTED_LANGS = ["pt", "en"];

  const translations = {
    pt: {
      pageLang: "pt-br",
      pageTitle: "Portfólio-Dev Sistemas",
      pageDescription: "Portfólio de Guilherme, estudante de Desenvolvimento de Sistemas",
      toggleAria: "Abrir seleção de idioma",
      languageLabel: "Português",
      languageFlag: "🇧🇷",
      logoAria: "Logo gui_Dev",
      index: {
        pageTitle: "Portfólio Expositivo",
        pageDescription: "Página inicial do portfólio expositivo de Guilherme",
        hero: {
          line1: "PORTFÓLIO",
          line2: "EXPOSITIVO",
          author: "Por Guilherme Jorge de Araujo",
        },
        advance: "Avançar",
        advanceAria: "Avançar para introdução",
      },
      nav: {
        about: "Sobre Mim",
        projects: "Projetos",
        courses: "Cursos Realizados",
        skills: "Relações de Habilidades",
        nextSteps: "Próximos Passos",
      },
      about: {
        title: "Sobre Mim",
        p1: "Olá! Sou Guilherme, estudante de Desenvolvimento de Sistemas!",
        p2: "Aprofundando meus conhecimentos no ramo da tecnologia, até agora vi muitas de suas vertentes. Consoante ao hardware, prototipagem, Metodologias Ágeis, Sistemas Operacionais, Cores, Gestalt's, Versionamento e Desenvolvimento Web em HTML e CSS.",
        p3: "Agora, fique à vontade para dar uma olhada nos projetos feitos e, certificações adquiridas durante esta trajetória!",
      },
      projects: {
        title: "Linha do Tempo Dos Projetos",
        tooltip: "Ver Projeto",
        openWindow: "Abrir em nova janela",
        p1: { title: "Síntese dos Conteúdos", desc: "Resumo visual de hardware, metodologias ágeis e sistemas operacionais.", date: "Fevereiro à Março de 2025", aria: "Ver projeto Síntese dos Conteúdos (nova janela)" },
        p2: { title: "Protótipo de App", desc: "Aplicativo de vendas de bicicletas com interface moderna.", date: "Ainda em Março de 2025", aria: "Ver projeto Protótipo de App (nova janela)" },
        p3: { title: "Site sobre Nuvens", desc: "Portal educativo sobre formação e tipos de nuvens.", date: "Meados de Abril de 2025", aria: "Ver projeto Site sobre Nuvens (nova janela)" },
        p4: { title: "Site sobre Ventos", desc: "Explicação interativa sobre Radiação Solar, Pressão Atmosférica e, por conseguinte, Ventos!", date: "Início de Maio de 2025", aria: "Ver projeto Site sobre Ventos (nova janela)" },
        p5: { title: "Site informativo sobre a Atmosfera Terrestre", desc: "Site expositivo sobre as características da Atmosfera!", date: "Primeiros dias de Maio de 2025", aria: "Ver projeto Site sobre Atmosfera Terrestre (nova janela)" },
        p6: { title: "Site de um Restaurante Árabe", desc: "Aqui, você se encantará conhecendo os mais diversos sabores do Oriente!", date: "Entrando na metade de Maio de 2025", aria: "Ver projeto Site de Restaurante Árabe (nova janela)" },
        p7: { title: "Sistema Solar", desc: "Nesta, você conhecerá um pouco mais sobre a incrível ordenação do Sistema Solar, de forma esquemática!", date: "Meados de Maio de 2025", aria: "Ver projeto Sistema Solar (nova janela)" },
        p8: { title: "Formas Em CSS", desc: "Já aqui, será exibido diferentes formas como Robô, Carro, Gráficos e entre outras, utilizando somente a estilização do css!", date: "Fim de Maio de 2025", aria: "Ver projeto Formas em CSS (nova janela)" },
      },
      courses: {
        title: "Cursos Realizados",
        credentialBtn: "Ver Credencial",
        c1: { title: "Hardware Basics", org: "Cisco Networking Academy", aria: "Ver credencial Hardware Basics (nova janela)" },
        c2: { title: "Operating Systems Basics", org: "Cisco Networking Academy", aria: "Ver credencial Operating Systems Basics (nova janela)" },
        c3: { title: "Descarbonização", org: "Senai", aria: "Ver credencial Descarbonização (nova janela)" },
        c4: { title: "Fundamentos da IA", org: "Senai", aria: "Ver credencial Fundamentos da IA (nova janela)" },
        c5: { title: "Ética na IA", org: "Senai", aria: "Ver credencial Ética na IA (nova janela)" },
        c6: { title: "Segurança Cibernética", org: "Senai", aria: "Ver credencial Segurança Cibernética (nova janela)" },
        dates: [
          "19 de Fevereiro de 2025",
          "06 de Junho de 2025",
          "8 de Abril de 2025",
          "23 de Abril de 2025",
          "28 de Abril de 2025",
          "04 de Junho 2025",
        ],
      },
      skills: {
        title: "Relações de Habilidades em Desenvolvimento",
        lines: [
          "├── HTML",
          "│   └── Semântica ( h1, h2, h3, header, body, footer...);",
          "├── CSS",
          "│   ├── UX/UI ( Tipografia, Cores, Gestalt...);",
          "│   ├── Layout (Flexbox/Grid);",
          "│   └── Animações @Keyframes;",
          "├── Git & GitHub",
          "│   └── Versionamento;",
          "└── Figma",
          "    └── Protótipos de Baixa/Alta Fidelidade.",
        ],
      },
      nextSteps: {
        title: "Próximos Passos",
        subtitle: "Metas para os Próximo Semestres",
        goals: [
          "Aprofundar conhecimentos em back-end (javascript, python...);",
          "Estudar bancos de dados relacionais (MySQL, PostgreSQL);",
          "Programação em Dispositivos Móveis;",
          "Projetos desenvolvidos utilizando os conhecimentos adquiridos tanto no front, quanto no back-end.",
        ],
      },
      footer: {
        title: "Portfólio do 1º Semestre - Desenvolvimento de Sistemas",
        emailCopied: "E-mail copiado!",
        copyEmail: "Copiar e-mail",
        openLow: "Abrir protótipo de baixa fidelidade",
        openHigh: "Abrir protótipo de alta fidelidade",
      },
      prototypes: {
        low: {
          title: "Protótipo de Baixa Fidelidade do Portfólio",
          desc: "Primeiro esboço estrutural da ideia do portfólio no papel, focado em organização e usabilidade.",
          aria: "Acessar protótipo de baixa fidelidade (nova janela)",
        },
        high: {
          title: "Protótipo de Alta<br>Fidelidade do Portfólio",
          desc: "Visual final mais realista do sistema, com o layout mais refinado.",
          aria: "Acessar protótipo de alta fidelidade (nova janela)",
        },
        access: "Acessar Protótipo",
        closeAria: "Fechar card",
      },
       intro: {
         pageTitle: "Seleção de Semestres | Portfólio",
         pageDescription: "Página de seleção de semestres do portfólio de Guilherme",
         back: "Voltar",
         backAria: "Voltar para a página inicial",
         title: "Selecione o Semestre",
         subtitleDesktop: "Explore a evolução técnica através de animações interativas",
         subtitleMobile: "Toque uma vez para visualizar a animação. Toque novamente no mesmo semestre para acessar o portfólio.",
         navAria: "Navegação por semestres",
         semesters: {
           s1: {
             label: "1º Semestre",
             aria: "Ver 1º Semestre — Front-end",
           },
           s2: {
             label: "2º Semestre",
             aria: "Ver 2º Semestre — JavaScript",
           },
           s3: {
             label: "3º Semestre",
             aria: "Ver 3º Semestre — Banco de Dados",
           },
           s4: {
             label: "4º Semestre",
             aria: "Ver 4º Semestre — Python",
           },
         },
       },
      semester2: {
        pageTitle: "Portfólio 2º Semestre | JavaScript",
        pageDescription: "Portfólio do 2º semestre focado em JavaScript e interfaces interativas",
        nav: {
          aprendizado: "Aprendizado",
          projetos: "Projetos",
          cursos: "Cursos",
          habilidades: "Habilidades",
          evolucao: "Evolução Técnica",
          nextSteps: "Próximos Passos",
          contato: "Contato",
          back: "Voltar ao Hub",
        },
        hero: {
          pretitle: "2º Semestre • JavaScript",
          headline: "JavaScript Developer",
          subtitle: "Este semestre foi dedicado à lógica, interação e interfaces dinâmicas usando DOM, eventos e comportamento web.",
          ctaProjects: "Ver Projetos",
          ctaSkills: "Ver Habilidades",
        },
        learning: {
          title: "O que aprendi neste 2º Semestre",
          description: "Conhecimentos e práticas que evoluíram o desenvolvimento de interfaces mais interativas.",
          item1: {
            title: "Fundamentos da linguagem JavaScript",
            desc: "Sintaxe, variáveis e controle de fluxo para raciocínio lógico.",
          },
          item2: {
            title: "Variáveis, tipos de dados e operadores",
            desc: "Uso de valores, operadores e expressão de resultados no navegador.",
          },
          item3: {
            title: "Condicionais e estruturas de repetição",
            desc: "Fluxo de decisão e repetição para comportamento mais inteligente.",
          },
          item4: {
            title: "Funções e organização de lógica",
            desc: "Blocos reutilizáveis que tornam o JavaScript mais legível e modular.",
          },
          item5: {
            title: "Arrays e objetos",
            desc: "Estruturas para organizar dados e estados de aplicações.",
          },
          item6: {
            title: "Manipulação do DOM",
            desc: "Atualização de conteúdo, classes e estrutura a partir de código.",
          },
          item7: {
            title: "Eventos e interatividade",
            desc: "Ações do usuário transformadas em resposta e feedback visual.",
          },
          item8: {
            title: "Validação de formulários",
            desc: "Verificação de dados e orientações antes do envio.",
          },
          item9: {
            title: "LocalStorage e armazenamento",
            desc: "Persistência simples de dados no navegador para experiências contínuas.",
          },
          item10: {
            title: "Lógica aplicada a interfaces web",
            desc: "Construção de páginas que reagem e se adaptam ao usuário.",
          },
        },
        projects: {
          title: "Projetos",
          intro: "Estudos e protótipos que reforçam a prática em JavaScript e interação.",
          card1: {
            title: "Projeto de Manipulação do DOM",
            desc: "Exercício para atualizar elementos e estado visual com JavaScript.",
            tech: "HTML, CSS, JavaScript",
            status: "Em desenvolvimento",
            date: "2º Semestre",
            cta: "Ver detalhes",
          },
          card2: {
            title: "Validador de Formulários",
            desc: "Formulário com validação e retorno em tempo real.",
            tech: "HTML, CSS, JavaScript",
            status: "Protótipo",
            date: "2º Semestre",
            cta: "Em breve",
          },
          card3: {
            title: "Mini Sistema Interativo",
            desc: "Interface com filtros, listas e respostas do usuário em tempo real.",
            tech: "JavaScript, DOM, Eventos",
            status: "Em criação",
            date: "2º Semestre",
            cta: "Em breve",
          },
          card4: {
            title: "Projeto Final do 2º Semestre",
            desc: "Integração de lógica e estrutura para uma experiência mais robusta.",
            tech: "JavaScript, LocalStorage, DOM",
            status: "Planejado",
            date: "2º Semestre",
            cta: "Em breve",
          },
        },
        courses: {
          title: "Cursos",
          intro: "Formação e aprendizado que complementam a jornada em JavaScript.",
          statusUpdating: "Em atualização",
          card1: {
            title: "Curso de JavaScript Básico",
            org: "Plataforma de Estudo",
            date: "2025",
            status: "Concluído",
            aria: "Ver detalhes do curso de JavaScript Básico",
          },
          card2: {
            title: "Fundamentos de DOM",
            org: "Curso Interno",
            date: "2025",
            status: "Em andamento",
            aria: "Ver detalhes do curso de DOM",
          },
        },
        skills: {
          title: "Relações de Habilidades",
          intro: "Mapa de competências usado para a construção de interfaces com JavaScript.",
          group1: {
            label: "JavaScript",
            items: ["Sintaxe", "Condicionais", "Loops", "Funções", "Arrays", "Objetos", "DOM", "Eventos", "Formulários", "LocalStorage"],
          },
          group2: {
            label: "HTML",
            items: ["Semântica", "Estrutura"],
          },
          group3: {
            label: "CSS",
            items: ["Responsividade", "Layout", "Estados visuais"],
          },
          group4: {
            label: "Git & GitHub",
            items: ["Versionamento", "Organização de projetos"],
          },
        },
        evolution: {
          title: "Evolução Técnica",
          subtitle: "Da primeira página estática para interfaces mais dinâmicas e interativas.",
          point1: "Primeiro semestre com foco em HTML e CSS.",
          point2: "Segundo semestre com foco em JavaScript e comportamento web.",
          point3: "Aplicação de lógica nas rotinas de usuário.",
          point4: "Visão mais madura de página como produto.",
        },
        nextSteps: {
          title: "Próximos Passos",
          intro: "Planejamento para os próximos semestres com foco em código mais organizado e integração.",
          item1: "Aprofundar JavaScript moderno.",
          item2: "Estudar APIs e consumo de dados.",
          item3: "Evoluir para frameworks como React.",
          item4: "Integrar front-end com back-end.",
          item5: "Iniciar banco de dados com mais profundidade.",
          item6: "Melhorar organização de código e boas práticas.",
        },
        footer: {
          copyright: "2025 • Guilherme Jorge de Araujo",
          email: "contato@portfolio.dev",
          backToTop: "Voltar ao topo",
          hub: "Voltar à seleção de semestres",
        },
      },
    },
    en: {
      pageLang: "en",
      pageTitle: "Portfolio - Systems Development",
      pageDescription: "Guilherme's portfolio, Systems Development student",
      toggleAria: "Open language selection",
      languageLabel: "English",
      languageFlag: "🇺🇸",
      logoAria: "gui_Dev logo",
      index: {
        pageTitle: "Showcase Portfolio",
        pageDescription: "Landing page of Guilherme's showcase portfolio",
        hero: {
          line1: "PORTFOLIO",
          line2: "SHOWCASE",
          author: "By Guilherme Jorge de Araujo",
        },
        advance: "Continue",
        advanceAria: "Continue to introduction",
      },
      nav: {
        about: "About Me",
        projects: "Projects",
        courses: "Courses",
        skills: "Skills Relationships",
        nextSteps: "Next Steps",
      },
      about: {
        title: "About Me",
        p1: "Hi! I'm Guilherme, a Systems Development student!",
        p2: "I have been deepening my knowledge in technology and exploring different areas, including hardware, prototyping, Agile Methodologies, Operating Systems, Colors, Gestalt principles, version control, and Web Development with HTML and CSS.",
        p3: "Now feel free to explore the projects I have built and the certifications I earned during this journey!",
      },
      projects: {
        title: "Project Timeline",
        tooltip: "View Project",
        openWindow: "Open in a new window",
        p1: { title: "Content Synthesis", desc: "Visual summary of hardware, agile methodologies, and operating systems.", date: "February to March 2025", aria: "View Content Synthesis project (new window)" },
        p2: { title: "App Prototype", desc: "Bicycle sales app with a modern interface.", date: "Still in March 2025", aria: "View App Prototype project (new window)" },
        p3: { title: "Cloud Website", desc: "Educational portal about cloud formation and types.", date: "Mid-April 2025", aria: "View Cloud Website project (new window)" },
        p4: { title: "Winds Website", desc: "Interactive explanation about Solar Radiation, Atmospheric Pressure, and therefore Winds.", date: "Early May 2025", aria: "View Winds Website project (new window)" },
        p5: { title: "Earth Atmosphere Website", desc: "Informational site about atmosphere characteristics.", date: "First days of May 2025", aria: "View Earth Atmosphere Website project (new window)" },
        p6: { title: "Arabic Restaurant Website", desc: "Discover a range of flavors from the East.", date: "Mid-May 2025", aria: "View Arabic Restaurant Website project (new window)" },
        p7: { title: "Solar System", desc: "A schematic overview of the incredible organization of the Solar System.", date: "Mid-May 2025", aria: "View Solar System project (new window)" },
        p8: { title: "CSS Shapes", desc: "Different shapes such as robot, car, charts and more, built only with CSS styling.", date: "End of May 2025", aria: "View CSS Shapes project (new window)" },
      },
      courses: {
        title: "Courses",
        credentialBtn: "View Credential",
        c1: { title: "Hardware Basics", org: "Cisco Networking Academy", aria: "View Hardware Basics credential (new window)" },
        c2: { title: "Operating Systems Basics", org: "Cisco Networking Academy", aria: "View Operating Systems Basics credential (new window)" },
        c3: { title: "Decarbonization", org: "Senai", aria: "View Decarbonization credential (new window)" },
        c4: { title: "AI Fundamentals", org: "Senai", aria: "View AI Fundamentals credential (new window)" },
        c5: { title: "AI Ethics", org: "Senai", aria: "View AI Ethics credential (new window)" },
        c6: { title: "Cybersecurity", org: "Senai", aria: "View Cybersecurity credential (new window)" },
        dates: [
          "February 19, 2025",
          "June 6, 2025",
          "April 8, 2025",
          "April 23, 2025",
          "April 28, 2025",
          "June 4, 2025",
        ],
      },
      skills: {
        title: "Skill Relationships in Development",
        lines: [
          "├── HTML",
          "│   └── Semantics ( h1, h2, h3, header, body, footer...);",
          "├── CSS",
          "│   ├── UX/UI ( Typography, Colors, Gestalt...);",
          "│   ├── Layout (Flexbox/Grid);",
          "│   └── Animations @Keyframes;",
          "├── Git & GitHub",
          "│   └── Version Control;",
          "└── Figma",
          "    └── Low/High Fidelity Prototypes.",
        ],
      },
      nextSteps: {
        title: "Next Steps",
        subtitle: "Goals for the Next Semesters",
        goals: [
          "Deepen back-end knowledge (JavaScript, Python...);",
          "Study relational databases (MySQL, PostgreSQL);",
          "Mobile Device Programming;",
          "Build projects using both front-end and back-end knowledge.",
        ],
      },
      footer: {
        title: "1st Semester Portfolio - Systems Development",
        emailCopied: "Email copied!",
        copyEmail: "Copy email",
        openLow: "Open low-fidelity prototype",
        openHigh: "Open high-fidelity prototype",
      },
      prototypes: {
        low: {
          title: "Low-Fidelity Portfolio Prototype",
          desc: "First structural sketch of the portfolio idea on paper, focused on organization and usability.",
          aria: "Access low-fidelity prototype (new window)",
        },
        high: {
          title: "High-Fidelity<br>Portfolio Prototype",
          desc: "More realistic final view of the system with a refined layout.",
          aria: "Access high-fidelity prototype (new window)",
        },
        access: "Access Prototype",
        closeAria: "Close card",
      },
       intro: {
         pageTitle: "Semester Selection | Portfolio",
         pageDescription: "Semester selection page of Guilherme's portfolio",
         back: "Back",
         backAria: "Back to the home page",
         title: "Select the Semester",
         subtitleDesktop: "Explore technical evolution through interactive animations",
         subtitleMobile: "Tap once to preview the animation. Tap the same semester again to access the portfolio.",
         navAria: "Semester navigation",
         semesters: {
           s1: {
             label: "1st Semester",
             aria: "View 1st Semester — Front-end",
           },
           s2: {
             label: "2nd Semester",
             aria: "View 2nd Semester — JavaScript",
           },
           s3: {
             label: "3rd Semester",
             aria: "View 3rd Semester — Databases",
           },
           s4: {
             label: "4th Semester",
             aria: "View 4th Semester — Python",
           },
         },
       },
      semester2: {
        pageTitle: "2nd Semester Portfolio | JavaScript",
        pageDescription: "2nd semester portfolio focused on JavaScript and interactive web interfaces.",
        nav: {
          aprendizado: "Learning",
          projetos: "Projects",
          cursos: "Courses",
          habilidades: "Skills",
          evolucao: "Technical Evolution",
          nextSteps: "Next Steps",
          contato: "Contact",
          back: "Back to Hub",
        },
        hero: {
          pretitle: "2nd Semester • JavaScript",
          headline: "JavaScript Developer",
          subtitle: "This semester focused on logic, interaction and dynamic interfaces using DOM, events and web behavior.",
          ctaProjects: "View Projects",
          ctaSkills: "View Skills",
        },
        learning: {
          title: "What I learned this 2nd Semester",
          description: "Knowledge and practice that evolved the development of more interactive interfaces.",
          item1: {
            title: "JavaScript language fundamentals",
            desc: "Syntax, variables and control flow for logical thinking.",
          },
          item2: {
            title: "Variables, data types and operators",
            desc: "Using values, operators and expressions in browser logic.",
          },
          item3: {
            title: "Conditionals and loops",
            desc: "Decision and repetition flow for smarter behavior.",
          },
          item4: {
            title: "Functions and logic organization",
            desc: "Reusable blocks that make JavaScript more modular and readable.",
          },
          item5: {
            title: "Arrays and objects",
            desc: "Structures for organizing data and application state.",
          },
          item6: {
            title: "DOM manipulation",
            desc: "Updating content, classes and structure from code.",
          },
          item7: {
            title: "Events and interactivity",
            desc: "User actions turned into response and visual feedback.",
          },
          item8: {
            title: "Form validation",
            desc: "Data checks and guidance before submission.",
          },
          item9: {
            title: "LocalStorage and storage",
            desc: "Simple browser persistence for continuous experiences.",
          },
          item10: {
            title: "Logic applied to web interfaces",
            desc: "Building pages that react and adapt to the user.",
          },
        },
        projects: {
          title: "Projects",
          intro: "Study cases and prototypes that reinforce JavaScript practice and interaction.",
          card1: {
            title: "DOM Manipulation Project",
            desc: "Exercise to update elements and visual state with JavaScript.",
            tech: "HTML, CSS, JavaScript",
            status: "In development",
            date: "2nd Semester",
            cta: "View details",
          },
          card2: {
            title: "Form Validator",
            desc: "Form with validation and real-time feedback.",
            tech: "HTML, CSS, JavaScript",
            status: "Prototype",
            date: "2nd Semester",
            cta: "Coming soon",
          },
          card3: {
            title: "Mini Interactive System",
            desc: "Interface with filters, lists and real-time user responses.",
            tech: "JavaScript, DOM, Events",
            status: "In progress",
            date: "2nd Semester",
            cta: "Coming soon",
          },
          card4: {
            title: "2nd Semester Final Project",
            desc: "Integration of logic and structure for a more robust experience.",
            tech: "JavaScript, LocalStorage, DOM",
            status: "Planned",
            date: "2nd Semester",
            cta: "Coming soon",
          },
        },
        courses: {
          title: "Courses",
          intro: "Training and learning that complements the JavaScript journey.",
          statusUpdating: "Updating",
          card1: {
            title: "Basic JavaScript Course",
            org: "Study Platform",
            date: "2025",
            status: "Completed",
            aria: "View Basic JavaScript course details",
          },
          card2: {
            title: "DOM Fundamentals",
            org: "Internal Course",
            date: "2025",
            status: "In progress",
            aria: "View DOM Fundamentals course details",
          },
        },
        skills: {
          title: "Skills Relationships",
          intro: "Competency map used for building JavaScript-powered interfaces.",
          group1: {
            label: "JavaScript",
            items: ["Syntax", "Conditionals", "Loops", "Functions", "Arrays", "Objects", "DOM", "Events", "Forms", "LocalStorage"],
          },
          group2: {
            label: "HTML",
            items: ["Semantics", "Structure"],
          },
          group3: {
            label: "CSS",
            items: ["Responsiveness", "Layout", "Visual states"],
          },
          group4: {
            label: "Git & GitHub",
            items: ["Version control", "Project organization"],
          },
        },
        evolution: {
          title: "Technical Evolution",
          subtitle: "From the first static page to more mature, interactive interfaces.",
          point1: "First semester focused on HTML and CSS.",
          point2: "Second semester focused on JavaScript and web behavior.",
          point3: "Applied logic to user routines.",
          point4: "A more mature product vision of the page.",
        },
        nextSteps: {
          title: "Next Steps",
          intro: "Planning the next semesters with a focus on cleaner code and integration.",
          item1: "Deepen modern JavaScript.",
          item2: "Study APIs and data consumption.",
          item3: "Evolve toward frameworks like React.",
          item4: "Integrate front-end with back-end.",
          item5: "Start deeper database work.",
          item6: "Improve code organization and best practices.",
        },
        footer: {
          copyright: "2025 • Guilherme Jorge de Araujo",
          email: "contact@portfolio.dev",
          backToTop: "Back to top",
          hub: "Back to semester selection",
        },
      },
    },
  };

  const projectKeys = ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8"];

  function setText(selector, value) {
    const element = document.querySelector(selector);
    if (element) element.textContent = value;
  }

  function setHTML(selector, value) {
    const element = document.querySelector(selector);
    if (element) element.innerHTML = value;
  }

  function setAttr(selector, attr, value) {
    const element = document.querySelector(selector);
    if (element) element.setAttribute(attr, value);
  }

  function setAllText(selector, value) {
    document.querySelectorAll(selector).forEach((element) => {
      element.textContent = value;
    });
  }

  function setDateWithIcon(selector, dateText) {
    const dateEl = document.querySelector(selector);
    if (!dateEl) return;
    const icon = dateEl.querySelector("i");
    dateEl.innerHTML = "";
    if (icon) dateEl.appendChild(icon);
    dateEl.appendChild(document.createTextNode(` ${dateText}`));
  }

  function setButtonLabelKeepingIcon(selector, label) {
    document.querySelectorAll(selector).forEach((button) => {
      const icon = button.querySelector("i");
      button.innerHTML = "";
      if (icon) {
        button.appendChild(icon);
        button.appendChild(document.createTextNode(` ${label}`));
      } else {
        button.textContent = label;
      }
    });
  }

  function applyLanguage(lang) {
    const t = translations[lang] || translations[DEFAULT_LANG];

    document.documentElement.lang = t.pageLang;

    const isIndexPage = !!document.querySelector("#main-content.overlay");
    const isIntroPage = !!document.querySelector("main.hub .hub__grid");
    const isPortfolioTwoPage = !!document.querySelector("[data-page='portfolio-two']");

    if (isIndexPage) {
      document.title = t.index.pageTitle;
    } else if (isIntroPage && t.intro) {
      document.title = t.intro.pageTitle;
    } else if (isPortfolioTwoPage && t.semester2) {
      document.title = t.semester2.pageTitle;
    } else {
      document.title = t.pageTitle;
    }

    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) {
      if (isIndexPage) {
        descMeta.setAttribute("content", t.index.pageDescription);
      } else if (isIntroPage && t.intro) {
        descMeta.setAttribute("content", t.intro.pageDescription);
      } else if (isPortfolioTwoPage && t.semester2) {
        descMeta.setAttribute("content", t.semester2.pageDescription);
      } else {
        descMeta.setAttribute("content", t.pageDescription);
      }
    }

    setAttr(".logo", "aria-label", t.logoAria);
    setText("#language-current-label", t.languageLabel);
    setText("#language-current-flag", t.languageFlag);

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const keyPath = element.getAttribute("data-i18n");
      const value = keyPath.split(".").reduce((acc, key) => (acc ? acc[key] : undefined), t);
      if (typeof value === "string") {
        if (value.includes("<br>")) {
          element.innerHTML = value;
        } else {
          element.textContent = value;
        }
      }
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
      const keyPath = element.getAttribute("data-i18n-aria");
      const value = keyPath.split(".").reduce((acc, key) => (acc ? acc[key] : undefined), t);
      if (typeof value === "string") {
        element.setAttribute("aria-label", value);
      }
    });

    projectKeys.forEach((key, index) => {
      const item = t.projects[key];
      const cardIndex = index + 1;
      setDateWithIcon(`#Projetos .timeline-item:nth-of-type(${cardIndex}) .timeline-date`, item.date);
      setAttr(`#Projetos .timeline-item:nth-of-type(${cardIndex}) .timeline-link`, "aria-label", item.aria);
    });

    document.querySelectorAll("#Projetos .timeline-link").forEach((link) => {
      link.setAttribute("data-tooltip", t.projects.tooltip);
    });

    setAllText(".timeline-link .sr-only", t.projects.openWindow);
    setAllText(".prototype-content .proto-link span", t.prototypes.access);

    setAttr('#prototype-low .proto-link', "aria-label", t.prototypes.low.aria);
    setAttr('#prototype-high .proto-link', "aria-label", t.prototypes.high.aria);
    setAttr('#prototype-low .close-prototype', "aria-label", t.prototypes.closeAria);
    setAttr('#prototype-high .close-prototype', "aria-label", t.prototypes.closeAria);
    setAttr(".tech-email-icon", "aria-label", t.footer.copyEmail);
    setAttr(".footer-icon-left i", "aria-label", t.footer.openLow);
    setAttr(".footer-icon-right i", "aria-label", t.footer.openHigh);

    const treeLines = document.querySelectorAll("#tree-branches .typewriter-line");
    treeLines.forEach((line, idx) => {
      if (t.skills.lines[idx]) line.textContent = t.skills.lines[idx];
    });

    const nextStepItems = document.querySelectorAll("[id='Próximos Passos'] ol li");
    nextStepItems.forEach((item, idx) => {
      if (t.nextSteps.goals[idx]) item.textContent = t.nextSteps.goals[idx];
    });

    const courseDateSpans = document.querySelectorAll(".certificate-meta span");
    courseDateSpans.forEach((span, idx) => {
      const icon = span.querySelector("i");
      span.innerHTML = "";
      if (icon) span.appendChild(icon);
      span.appendChild(document.createTextNode(` ${t.courses.dates[idx] || ""}`));
    });

    const main = document.querySelector("main");
    if (main) {
      main.classList.remove("fade-i18n");
      requestAnimationFrame(() => main.classList.add("fade-i18n"));
    }
  }

  function getInitialLanguage() {
    const persisted = localStorage.getItem(STORAGE_KEY);
    if (SUPPORTED_LANGS.includes(persisted)) return persisted;
    return DEFAULT_LANG;
  }

  document.addEventListener("DOMContentLoaded", () => {
    const switcher = document.querySelector(".language-switcher");
    const menuToggle = document.getElementById("language-menu-toggle");
    const altOption = document.getElementById("language-alt-option");
    const altFlag = document.getElementById("language-alt-flag");
    const altLabel = document.getElementById("language-alt-label");

    if (!switcher || !menuToggle || !altOption || !altFlag || !altLabel) return;

    function closeLanguageMenu() {
      switcher.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    }

    function updateLanguageMenu(lang) {
      const altLang = lang === "pt" ? "en" : "pt";
      const altText = translations[altLang];
      if (!altText) return;

      menuToggle.setAttribute("aria-label", (translations[lang] || translations[DEFAULT_LANG]).toggleAria);
      altFlag.textContent = altText.languageFlag;
      altLabel.textContent = altText.languageLabel;
      altOption.setAttribute("data-lang", altLang);
      altOption.setAttribute("aria-label", altText.languageLabel);
    }

    const initialLang = getInitialLanguage();
    applyLanguage(initialLang);
    updateLanguageMenu(initialLang);

    menuToggle.addEventListener("click", (event) => {
      event.stopPropagation();
      const isOpen = switcher.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    altOption.addEventListener("click", () => {
      const nextLang = altOption.getAttribute("data-lang");
      if (!SUPPORTED_LANGS.includes(nextLang)) return;
      
      // Adicionar classe de animação visual
      switcher.classList.add("is-switching-language");
      
      localStorage.setItem(STORAGE_KEY, nextLang);
      applyLanguage(nextLang);
      updateLanguageMenu(nextLang);
      closeLanguageMenu();
      
      // Remover classe de animação após 450ms
      setTimeout(() => {
        switcher.classList.remove("is-switching-language");
      }, 450);
    });

    document.addEventListener("click", (event) => {
      if (!switcher.contains(event.target)) {
        closeLanguageMenu();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeLanguageMenu();
      }
    });
  });
})();
