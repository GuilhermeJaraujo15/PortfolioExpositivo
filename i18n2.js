(() => {
  const STORAGE_KEY = "portfolio-language";
  const DEFAULT_LANG = "pt";
  const SUPPORTED_LANGS = ["pt", "en"];

  const translations = {
    pt: {
      pageLang: "pt-BR",
      pageTitle: "Portfólio 2º Semestre | JavaScript",
      pageDescription:
        "Portfólio do 2º semestre focado em JavaScript e interfaces interativas",
      toggleAria: "Abrir seleção de idioma",
      languageLabel: "Português",
      languageFlag: "",
      logoAria: "Logo guilherme_Araujo",

      ui: {
        navAria: "Navegação principal",
        menuOpen: "Abrir menu",
        back: "← Voltar",
        backAria: "Voltar para seleção de semestres",
        langSwitcher: "Seletor de idioma",
        langChoose: "Escolher idioma",
        boltAria: "Raio de energia amarelo",
      },

      nav: {
        context: "Contextualização",
        learning: "Aprendizado",
        projects: "Projetos",
        courses: "Cursos",
      },

      hero: {
        pretitle: "2º Semestre • JavaScript",
        headline: "JavaScript Developer",
        subtitle:
          "Este semestre foi dedicado à lógica, interação e interfaces dinâmicas usando DOM, eventos e comportamento web.",
      },

      context: {
        title: "Contextualização",
        text: "Este período foi empenhado a aprofundar meus conhecimentos em JavaScript, linguagem fundamental no Desenvolvimento Web, Servidores (Node.js) e até mesmo IoT. É necessário dizer que neste semestre foquei em entender sua lógica e comportamento, não focando tanto em frameworks ou bibliotecas. Em contrapartida, este semestre foi essencial para afeiçoar-me no que tange à lógica de programação e a entender melhor como desenvolver sistemas com ênfase já em interatividade.",
      },

      learning: {
        title: "O que aprendi neste 2º Semestre",
        description:
          "Abaixo estão listados os principais tópicos estudados, com links para os objetivos e resoluções de cada um. Estes tópicos estão dispostos cronologicamente, e cada um deles foi consolidado em exercícios e em projetos práticos.",
        viewSolution: "Ver resolução",
        prevAria: "Card anterior",
        nextAria: "Próximo card",
        items: {
          i1: {
            date: "20 Ago. 2025",
            title: "Variáveis e Tipos de Dados",
            desc: "Compreensão de `let`, `const`, `string`, `number` e operadores matemáticos básicos.",
          },
          i2: {
            date: "22 Ago. 2025",
            title: "Condicionais",
            desc: "Estudo sobre as estruturas `if`, `else if` e `else`.",
          },
          i3: {
            date: "27 Ago. 2025",
            title: "Switch",
            desc: "Exercícios de múltiplas condições usando agora o Switch. Por meio destes, tive a oportunidade de aprender o uso do `case`, `break` e `default`.",
          },
          i4: {
            date: "03 Set. 2025",
            title: "Objetos",
            desc: "Criação e manipulação de estruturas de dados baseadas em pares de chave e valor, com ênfase em tópicos do mundo real.",
          },
          i5: {
            date: "03 Set. 2025",
            title: "Arrays",
            desc: "Manipulação de listas com métodos como `push`, `pop`, `map`, `filter`, `reduce` e entre outros...",
          },
          i6: {
            date: "10 Set. 2025",
            title: "Aninhamento de Objetos",
            desc: "Controle de estruturas de dados hierárquicos em JavaScript, aplicando cálculos matemáticos e condicionais.",
          },
          i7: {
            date: "12 Set. 2025",
            title: "Do...While",
            desc: "Controle de fluxos de repetição em JavaScript com execução inicial garantida. Aplicado na manipulação, atualização e validação segura de dados em objetos aninhados.",
          },
          i8: {
            date: "03 Out. 2025",
            title: "Funções",
            desc: "Desenvolvimento de blocos reutilizáveis que processam parâmetros dinâmicos para automatizar cálculos, validar dados e isolar a lógica do sistema visando uma melhor organização e manutenibilidade.",
          },
          i9: {
            date: "08 Out. 2025",
            title: "Callbacks",
            desc: "Uso de funções enviadas como parâmetros para executar ações no momento certo. Essencial para responder a cliques do usuário, controlar o tempo e processar dados dinamicamente.",
          },
          i10: {
            date: "29 Out. 2025",
            title: "Métodos",
            desc: "Uso prático de funções integradas do JavaScript para transformar dados com mais agilidade. Manipulando Strings, Objetos e Arrays e aplicação de .map(), .filter(), .split() e entre outros métodos que facilitam a manipulação de dados e a construção de soluções mais eficientes.",
          },
          i11: {
            date: "07 Dez. 2025",
            title: "DOM",
            desc: "Alteração e controle de elementos da página em tempo real com JavaScript. Desenvolvimento de lógica para capturar cliques do usuário, modificar textos e criar componentes dinâmicos.",
          },
        },
      },

      projects: {
        title: "Projetos Práticos",
        description:
          "Além de exercícios de fixação avulsos, fomos impelidos à resolver problemas práticos mais complexos, que exigiam a junção de diversos conceitos estudados. Estes projetos foram desenvolvidos em grupo, e cada um deles ajudaram na consolidação do meu aprendizado de uma forma mais concreta.",
        viewProject: "Ver projeto",
        p1: {
          alt: "Preview do Projeto 1",
          title:
            "Lógicas JS para Sistemas simples de Cadastro, Vendas, Conta Bancária e Avaliação de Funcionários.",
          desc: "Quatro aplicações desenvolvidas para consolidar os conceitos estudados em Variáveis, Objetos e condicional (if/else)...",
        },
        p2: {
          alt: "Preview do Projeto 2",
          title: "Ficha Nutricional de Anamnese",
          desc: "Aplicação prática dos principais conceitos de JavaScript aprendidos no semestre, destacando a integração do DOM, manipulação do BOM e o uso estruturado de condicionais, laços de repetição e objetos.",
        },
        p3: {
          alt: "Preview do Projeto 3",
          title: "Blog Interativo sobre a Escola SENAI",
          desc: "Trabalho de fechamento do segundo semestre do Curso de Desenvolvimento de Sistemas, usando HTML, CSS e JS. O projeto gira entorno da exposição de um blog do próprio SENAI, com um CRUD interativo no final.",
        },
      },

      courses: {
        title: "Cursos Realizados",
        description:
          "Como disse anteriormente, meu foco durante este semestre foi em lógica com ênfase em JavaScript, todavia, pareceu por bem ainda durante as férias de transição entre o 1º e o 2º semestre, continuar estudando HTML e CSS, e por conseguinte, realizei estes dois cursos da Cisco Networking Academy, que me ajudaram a relembrar e fixar sintexes importantes no desenvolvimento front-end.",
        viewCertificate: "Ver certificado",
        c1: {
          date: "Jul 2025",
          title: "HTML Essentials",
          desc: "Entendendo os Fundamentos da linguagem de marcação: elementos semânticos ( <code>&lt;div&gt;</code>, <code>&lt;h1&gt;</code>, <code>&lt;p&gt;</code>), atributos como <code>id</code>, <code>class</code> e <code>target</code>, além de formulários, usando <code>&lt;form&gt;</code>, <code>&lt;input&gt;</code> e <code>&lt;button&gt;</code>, acessibilidade com <code>alt</code> e boas práticas a seguir na construção de páginas Web.",
        },
        c2: {
          date: "Ago 2025",
          title: "CSS Essentials",
          desc: "Conhecendo melhor como funciona a estilização de páginas web, analisando de forma mais acurada os layouts <code>flexbox</code> e <code>grid</code>, animações com <code>@keyframes</code>, responsividade com <code>@media</code>, acessibilidade visual, boas práticas de organização de código e entre outros tópicos que tangem a esfera do Desenvolvimento Web, unindo uma estrutura sólida a um design mais fluido e atraente.",
        },
      },

      contact: {
        title: "Contato",
        description:
          "Interessado em ver os próximos passos ou colaborar em projetos de estudo? Vamos conversar.",
        name: "Nome",
        namePlaceholder: "Seu nome completo",
        email: "E-mail",
        emailPlaceholder: "seu@email.com",
        message: "Mensagem",
        messagePlaceholder: "Escreva sua mensagem aqui...",
        submit: "Enviar mensagem",
        toastFill: "Preencha todos os campos corretamente.",
        toastGmail: "Abrindo Gmail…",
        toastMailto: "Abrindo aplicativo de e-mail…",
        confirmGmail:
          "Deseja enviar a mensagem pelo Gmail?\n\nOK → Gmail Web\nCancelar → Aplicativo de e-mail",
        mailSubject: "Novo contato via Portfólio Expositivo - 2° Semestre",
        mailName: "Nome",
        mailEmail: "Email",
        mailMessage: "Mensagem",
      },

      footer: {
        rights: "Todos os direitos reservados.",
        backToTop: "↑ Voltar ao topo",
        backToTopAria: "Voltar ao topo da página",
      },
      links: {
        learning: {
          variablesAndDataTypes: "https://lunar-dentist-9df.notion.site/1-Vari-veis-e-tipos-de-dados-2156469b1dad8298a93c011aac4e3634",
          conditionals: "https://lunar-dentist-9df.notion.site/2-Condicionais-if-else-39a6469b1dad80ab974efa70836967b0#39a6469b1dad80dd9622fc23107479f3",
          switch: "https://lunar-dentist-9df.notion.site/3-Switch-Case-39a6469b1dad8079b18befa37615953f",
          objects: "https://lunar-dentist-9df.notion.site/4-Objects-39c6469b1dad80bcaa92efed99644838",
          arrays: "https://lunar-dentist-9df.notion.site/5-Arrays-39d6469b1dad80f584c8f95a2f569bb5?pvs=74",
          nestedObjects: "https://lunar-dentist-9df.notion.site/6-Aninhamento-de-Objetos-39d6469b1dad800a92fed4f173c0a429",
          doWhile: "https://lunar-dentist-9df.notion.site/7-Do-While-39d6469b1dad805ba88dcf84a87b82ae",
          functions: "https://lunar-dentist-9df.notion.site/8-Fun-es-39d6469b1dad80d094d4c80cac25f76a",
          callbacks: "https://lunar-dentist-9df.notion.site/9-Callbacks-39e6469b1dad802582b8c1c8c9de0f38",
          methods: "https://lunar-dentist-9df.notion.site/10-M-todos-39e6469b1dad8044a19ec51939c4ff7b",
          dom: "https://lunar-dentist-9df.notion.site/11-DOM-3a06469b1dad801d9e3ef26ce0f339ef",
        },
        projects: {
          registrationSystems: "https://lunar-dentist-9df.notion.site/1-Projetos-Pr-ticos-Reais-para-Treino-de-Vari-veis-Objetos-e-Condicional-if-else-f180c82f53fd4df982ee990ef3a698f1?source=copy_link",
          nutritionalForm: "https://lunar-dentist-9df.notion.site/2-Ficha-de-Anamnese-com-JS-1-10-3a36469b1dad80758912f44d73db87fa",
          senaiBlog: "https://guilhermejaraujo15.github.io/Blog-Senai/",
        },
      },
    },

    en: {
      pageLang: "en",
      pageTitle: "2nd Semester Portfolio | JavaScript",
      pageDescription:
        "2nd semester portfolio focused on JavaScript and interactive interfaces",
      toggleAria: "Open language selection",
      languageLabel: "English",
      languageFlag: "",
      logoAria: "guilherme_Araujo logo",

      ui: {
        navAria: "Main navigation",
        menuOpen: "Open menu",
        back: "← Back",
        backAria: "Back to semester selection",
        langSwitcher: "Language selector",
        langChoose: "Choose language",
        boltAria: "Yellow energy lightning bolt",
      },

      nav: {
        context: "Context",
        learning: "Learning",
        projects: "Projects",
        courses: "Courses",
      },

      hero: {
        pretitle: "2nd Semester • JavaScript",
        headline: "JavaScript Developer",
        subtitle:
          "This semester focused on logic, interaction, and dynamic interfaces using the DOM, events, and web behavior.",
      },

      context: {
        title: "Context",
        text: "This period was dedicated to deepening my knowledge of JavaScript — a fundamental language for Web Development, servers (Node.js), and even IoT. Throughout the semester I focused on understanding its logic and behavior, rather than frameworks or libraries. In return, it was essential for strengthening my programming logic and for learning how to build systems with a clear emphasis on interactivity.",
      },

      learning: {
        title: "What I Learned in the 2nd Semester",
        description:
          "Below are the main topics studied, with links to the objectives and solutions for each one. They are listed chronologically, and each was reinforced through exercises and practical projects.",
        viewSolution: "View solution",
        prevAria: "Previous card",
        nextAria: "Next card",
        items: {
          i1: {
            date: "Aug 20, 2025",
            title: "Variables and Data Types",
            desc: "Understanding `let`, `const`, `string`, `number`, and basic mathematical operators.",
          },
          i2: {
            date: "Aug 22, 2025",
            title: "Conditionals",
            desc: "Study of the `if`, `else if`, and `else` structures.",
          },
          i3: {
            date: "Aug 27, 2025",
            title: "Switch",
            desc: "Exercises with multiple conditions using Switch. Through them, I learned how to use `case`, `break`, and `default`.",
          },
          i4: {
            date: "Sep 3, 2025",
            title: "Objects",
            desc: "Creating and manipulating key-value data structures, with an emphasis on real-world topics.",
          },
          i5: {
            date: "Sep 3, 2025",
            title: "Arrays",
            desc: "Working with lists using methods such as `push`, `pop`, `map`, `filter`, `reduce`, and others.",
          },
          i6: {
            date: "Sep 10, 2025",
            title: "Nested Objects",
            desc: "Managing hierarchical data structures in JavaScript, applying mathematical calculations and conditionals.",
          },
          i7: {
            date: "Sep 12, 2025",
            title: "Do...While",
            desc: "Controlling repetition flows in JavaScript with a guaranteed initial execution. Applied to safely manipulate, update, and validate data in nested objects.",
          },
          i8: {
            date: "Oct 3, 2025",
            title: "Functions",
            desc: "Building reusable blocks that process dynamic parameters to automate calculations, validate data, and isolate system logic for better organization and maintainability.",
          },
          i9: {
            date: "Oct 8, 2025",
            title: "Callbacks",
            desc: "Using functions passed as parameters to run actions at the right time. Essential for responding to user clicks, controlling timing, and processing data dynamically.",
          },
          i10: {
            date: "Oct 29, 2025",
            title: "Methods",
            desc: "Practical use of built-in JavaScript functions to transform data more efficiently — working with Strings, Objects, and Arrays, and applying .map(), .filter(), .split(), among other methods that streamline data handling and solution building.",
          },
          i11: {
            date: "Dec 7, 2025",
            title: "DOM",
            desc: "Updating and controlling page elements in real time with JavaScript. Building logic to capture user clicks, modify text, and create dynamic components.",
          },
        },
      },

      projects: {
        title: "Practical Projects",
        description:
          "Beyond standalone practice exercises, we were challenged to solve more complex real-world problems that required combining several concepts we had studied. These projects were developed in groups, and each one helped consolidate my learning in a more concrete way.",
        viewProject: "View project",
        p1: {
          alt: "Project 1 preview",
          title:
            "JS Logic for Simple Systems: Registration, Sales, Bank Account, and Employee Evaluation.",
          desc: "Four applications built to consolidate the concepts studied in Variables, Objects, and conditionals (if/else)...",
        },
        p2: {
          alt: "Project 2 preview",
          title: "Nutritional Anamnesis Form",
          desc: "A hands-on application of the main JavaScript concepts learned during the semester, highlighting DOM integration, BOM manipulation, and the structured use of conditionals, loops, and objects.",
        },
        p3: {
          alt: "Project 3 preview",
          title: "Interactive Blog about the SENAI School",
          desc: "End-of-semester project for the Systems Development course, using HTML, CSS, and JS. The project centers on showcasing a SENAI blog, featuring an interactive CRUD interface at the end.",
        },
      },

      courses: {
        title: "Completed Courses",
        description:
          "As mentioned earlier, my focus this semester was on logic with an emphasis on JavaScript. Still, during the break between the 1st and 2nd semesters, I chose to keep studying HTML and CSS — and completed these two Cisco Networking Academy courses, which helped me review and reinforce important front-end syntax.",
        viewCertificate: "View certificate",
        c1: {
          date: "Jul 2025",
          title: "HTML Essentials",
          desc: "Understanding the fundamentals of markup: semantic elements (<code>&lt;div&gt;</code>, <code>&lt;h1&gt;</code>, <code>&lt;p&gt;</code>), attributes such as <code>id</code>, <code>class</code>, and <code>target</code>, plus forms using <code>&lt;form&gt;</code>, <code>&lt;input&gt;</code>, and <code>&lt;button&gt;</code>, accessibility with <code>alt</code>, and best practices for building web pages.",
        },
        c2: {
          date: "Aug 2025",
          title: "CSS Essentials",
          desc: "A deeper look at styling web pages — covering <code>flexbox</code> and <code>grid</code> layouts, animations with <code>@keyframes</code>, responsiveness with <code>@media</code>, visual accessibility, code organization best practices, and other Web Development topics that help combine solid structure with a more fluid, appealing design.",
        },
      },

      contact: {
        title: "Contact",
        description:
          "Interested in seeing the next steps or collaborating on study projects? Let's talk.",
        name: "Name",
        namePlaceholder: "Your full name",
        email: "Email",
        emailPlaceholder: "you@email.com",
        message: "Message",
        messagePlaceholder: "Write your message here...",
        submit: "Send message",
        toastFill: "Please fill in all fields correctly.",
        toastGmail: "Opening Gmail…",
        toastMailto: "Opening email app…",
        confirmGmail:
          "Would you like to send the message through Gmail?\n\nOK → Gmail Web\nCancel → Email app",
        mailSubject: "New contact via Showcase Portfolio - 2nd Semester",
        mailName: "Name",
        mailEmail: "Email",
        mailMessage: "Message",
      },

      footer: {
        rights: "All rights reserved.",
        backToTop: "↑ Back to top",
        backToTopAria: "Back to top of the page",
      },
      links: {
        learning: {
          variablesAndDataTypes: "",
          conditionals: "",
          switch: "",
          objects: "",
          arrays: "",
          nestedObjects: "",
          doWhile: "",
          functions: "",
          callbacks: "",
          methods: "",
          dom: "",
        },
        projects: {
          registrationSystems: "https://lunar-dentist-9df.notion.site/1-Practical-Projects-for-Practicing-Variables-Objects-and-Conditional-Statements-if-else-Sept-ffa6469b1dad82aba79a01b7587b71bf",
          nutritionalForm: "https://lunar-dentist-9df.notion.site/2-Nutrition-Medical-History-Form-with-JS-October-1-9ab6469b1dad83b592c3014499e44230", 
          senaiBlog: "https://guilhermejaraujo15.github.io/Blog-Senai/",
        },
      },
    },
  };

  function resolveKey(langPack, keyPath) {
    return keyPath
      .split(".")
      .reduce((acc, key) => (acc == null ? undefined : acc[key]), langPack);
  }

  function applyValue(element, value, asHTML) {
    if (typeof value !== "string") return;
    if (asHTML || value.includes("<br>") || value.includes("<code>")) {
      element.innerHTML = value;
    } else {
      element.textContent = value;
    }
  }

  function applyLanguage(lang) {
    const t = translations[lang] || translations[DEFAULT_LANG];

    document.documentElement.lang = t.pageLang;
    document.title = t.pageTitle;

    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) descMeta.setAttribute("content", t.pageDescription);

    const logo = document.querySelector(".logo, #logo");
    if (logo) logo.setAttribute("aria-label", t.logoAria);

    const currentLabel = document.getElementById("language-current-label");
    if (currentLabel) currentLabel.textContent = t.languageLabel;

    const currentFlag = document.getElementById("language-current-flag");
    if (currentFlag) currentFlag.textContent = t.languageFlag;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const keyPath = element.getAttribute("data-i18n");
      applyValue(element, resolveKey(t, keyPath), false);
    });

    document.querySelectorAll("[data-i18n-html]").forEach((element) => {
      const keyPath = element.getAttribute("data-i18n-html");
      applyValue(element, resolveKey(t, keyPath), true);
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
      const keyPath = element.getAttribute("data-i18n-aria");
      const value = resolveKey(t, keyPath);
      if (typeof value === "string") element.setAttribute("aria-label", value);
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      const keyPath = element.getAttribute("data-i18n-placeholder");
      const value = resolveKey(t, keyPath);
      if (typeof value === "string") element.setAttribute("placeholder", value);
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
      const keyPath = element.getAttribute("data-i18n-alt");
      const value = resolveKey(t, keyPath);
      if (typeof value === "string") element.setAttribute("alt", value);
    });

    document.querySelectorAll("[data-i18n-href]").forEach((element) => {
      const keyPath = element.getAttribute("data-i18n-href");
      const value = resolveKey(t, keyPath);
      if (typeof value === "string") element.setAttribute("href", value);
    });

    const main = document.querySelector("main");
    if (main) {
      main.classList.remove("fade-i18n");
      requestAnimationFrame(() => main.classList.add("fade-i18n"));
    }

    window.PortfolioI18n = {
      lang,
      t: (keyPath) => resolveKey(t, keyPath),
      pack: t,
    };

    document.dispatchEvent(
      new CustomEvent("portfolio:languagechange", { detail: { lang } }),
    );
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

      menuToggle.setAttribute(
        "aria-label",
        (translations[lang] || translations[DEFAULT_LANG]).toggleAria,
      );
      altFlag.textContent = altText.languageFlag;
      altLabel.textContent = altText.languageLabel;
      altOption.setAttribute("data-lang", altLang);
      altOption.setAttribute("aria-label", altText.languageLabel);
    }

    const initialLang = getInitialLanguage();
    applyLanguage(initialLang);
    updateLanguageMenu(initialLang);
    setTimeout(() => window.dispatchEvent(new Event("resize")), 60);

    menuToggle.addEventListener("click", (event) => {
      event.stopPropagation();
      const isOpen = switcher.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    altOption.addEventListener("click", () => {
      const nextLang = altOption.getAttribute("data-lang");
      if (!SUPPORTED_LANGS.includes(nextLang)) return;

      switcher.classList.add("is-switching-language");
      localStorage.setItem(STORAGE_KEY, nextLang);
      applyLanguage(nextLang);
      updateLanguageMenu(nextLang);
      closeLanguageMenu();

      setTimeout(() => window.dispatchEvent(new Event("resize")), 80);
      setTimeout(() => {
        switcher.classList.remove("is-switching-language");
      }, 450);
    });

    document.addEventListener("click", (event) => {
      if (!switcher.contains(event.target)) closeLanguageMenu();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeLanguageMenu();
    });
  });
})();
