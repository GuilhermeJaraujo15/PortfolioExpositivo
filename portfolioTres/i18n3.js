/* English translation layer for the third-semester portfolio. */
(() => {
  "use strict";

  const translations = new Map(Object.entries({
    "Pular para o conteúdo": "Skip to content",
    "Navegação principal": "Main navigation", "Navegação do rodapé": "Footer navigation",
    "Voltar à seleção de semestres": "Back to semester selection",
    "Voltar aos semestres": "Back to semesters",
    "Abrir menu": "Open menu", "Fechar menu": "Close menu",
    "Trilha": "Learning path", "Projetos": "Projects", "Certificações": "Certifications",
    "Desenvolvimento de Sistemas · 3º semestre": "Systems Development · 3rd semester",
    "Construindo sistemas que": "Building systems that",
    "coletam, armazenam, processam e relacionam dados": "collect, store, process, and connect data",
    "Momento dedicado à modelagem de banco de dados, consultas SQL e desenvolvimento de aplicações práticas full-stack.": "A semester focused on database modeling, SQL queries, and practical full-stack application development.",
    "Trilha de aprendizado": "Learning path",
    "Abaixo detalho os passos que percorri para consolidar os conceitos de modelagem e consulta de dados usando SQL como Linguagem principal durante o semestre. Cada etapa contém a síntese dos meus conhecimentos adquiridos através dos exercícios práticos realizados.": "Below are the steps I followed to strengthen my understanding of data modeling and querying, using SQL as the main language throughout the semester. Each step summarizes what I learned through hands-on exercises.",
    "Aplicações construídas para testar, na prática, cada conceito de dados e sistemas do semestre.": "Applications built to put the semester's data and systems concepts into practice.",
    "Cursos e formações complementares que sustentam o que venho construindo em sala de aula.": "Courses and additional training that support what I have been learning in class.",
    "Desenvolvedor de Sistemas · Full Stack": "Systems Developer · Full Stack",
    "Todos os direitos reservados.": "All rights reserved.", "Saber mais": "Learn more", "Mostrar menos": "Show less",
    "Conceitos em foco": "Key concepts", "Resumo dos comandos SQL": "SQL command summary",
    "Principais comandos:": "Main commands:", "Exercícios práticos": "Hands-on exercises",
    "Objetivo:": "Objective:", "Exemplo de aplicação": "Example application",
    "Funcionalidades": "Features", "Autenticação simulada": "Simulated authentication",
    "Painel de contatos": "Contacts dashboard", "Organização do código": "Code organization",
    "Funcionalidades extras": "Additional features", "Imagem em breve": "Image coming soon",
    "Ver projeto": "View project", "Ver certificado →": "View certificate →",
    "LocalStorage": "Local storage", "Persistência de pequenos conjuntos de dados no navegador, mantendo informações salvas temporariamente.": "Store small amounts of data temporarily in the browser.",
    "Modelagem de Banco de Dados": "Database Modeling", "Principais comandos SQL": "Key SQL Commands",
    "Ordenando e filtrando dados": "Sorting and Filtering Data", "Funções de agregação": "Aggregate Functions",
    "Agrupamentos": "Grouping", "Joins": "Joins",
    "Seleção e organização dos resultados para responder a perguntas específicas que envolvem critérios de busca.": "Select and organize results to answer specific questions using search criteria.",
    "Organização dos registros em grupos para comparar resultados por categoria.": "Organize records into groups to compare results by category.",
    "Combinação de dados entre tabelas para construir consultas mais completas.": "Combine data across tables to build more complete queries.",
    "Julho de 2026": "July 2026", "Abril de 2026": "April 2026", "Março de 2026": "March 2026", "março de 2026": "March 2026", "Junho de 2026": "June 2026",
    "Portfólio de Guilherme J. Araujo, estudante de Desenvolvimento de Sistemas com foco em Dados, Banco de Dados e SQL. Trilha de aprendizado, projetos e certificações do 3º semestre.": "Portfolio of Guilherme J. Araujo, Systems Development student focused on Data, Databases, and SQL. Learning path, projects, and certifications from the third semester.",
    "Guilherme J. Araujo — Desenvolvimento de Sistemas & Dados": "Guilherme J. Araujo — Systems Development & Data",
    "Ver projeto (abre em nova aba)": "View project (opens in a new tab)", "Certificado ainda não disponível": "Certificate not available yet", "Ver certificado: ": "View certificate: ",
    "Assistir à demonstração (abre em nova aba)": "Watch demo (opens in a new tab)",
    "Link do projeto em breve": "Project link coming soon", "Vídeo ainda não disponível": "Video not available yet",
    "Mostrar menos sobre ": "Show less about ", "Saber mais sobre ": "Learn more about ",
    "Ver projeto: ": "View project: ", " (abre em nova aba)": " (opens in a new tab)",
    "Prévia do projeto ": "Preview of the project ", "Vídeo de ": "Video for ", " ainda não disponível": " is not available yet",
    "O LocalStorage faz parte da API Web Storage e permite salvar informações no navegador, sem precisar de um servidor para esse armazenamento.": "LocalStorage is part of the Web Storage API and lets you save information in the browser without needing a server for storage.",
    "Os dados permanecem disponíveis entre sessões de navegação até serem removidos pelo usuário, pelo navegador ou pela aplicação.": "Data remains available across browsing sessions until it is removed by the user, browser, or application.",
    "Formulário com salvamento automático": "Form with automatic saving", "Sistema de carrinho de compras": "Shopping cart system", "Aplicação de gerenciamento de usuários": "User management application",
    "Construir um formulário de inscrição ou contato que salva o progresso no localStorage durante o preenchimento. Ao retornar à página, o usuário encontra os campos preenchidos com os dados anteriores.": "Build a signup or contact form that saves progress to localStorage as it is filled in. When returning to the page, the user finds the fields populated with the previously entered data.",
    "Criar uma página de produtos com um carrinho persistente. O carrinho deve manter os itens entre visitas e apresentar produtos, quantidades, subtotais e total geral.": "Create a product page with a persistent cart. The cart should retain items between visits and show products, quantities, subtotals, and the grand total.",
    "Desenvolver uma Single-Page Application (SPA) didática com registro, login simulado e um painel para gerenciar os contatos de cada usuário.": "Develop an educational single-page application (SPA) with registration, simulated login, and a dashboard for managing each user's contacts.",
    "Salvar os valores dos campos no localStorage à medida que são preenchidos.": "Save field values to localStorage as they are entered.", "Recuperar os dados e preencher o formulário ao carregar a página.": "Retrieve the data and populate the form when the page loads.", "Remover os dados salvos desse formulário após o envio bem-sucedido.": "Remove the form's saved data after successful submission.", "Oferecer um botão para limpar manualmente o formulário e seus dados salvos.": "Provide a button to manually clear the form and its saved data.",
    "Exibir uma lista de produtos disponíveis.": "Display a list of available products.", "Permitir adicionar produtos ao carrinho.": "Allow products to be added to the cart.", "Aumentar a quantidade quando um produto já estiver no carrinho, evitando duplicar o registro.": "Increase the quantity when a product is already in the cart, avoiding duplicate entries.", "Exibir o conteúdo do carrinho em uma área própria da página.": "Display the cart contents in a dedicated area of the page.", "Permitir alterar quantidades e remover itens.": "Allow quantities to be changed and items to be removed.", "Calcular e atualizar o subtotal de cada item e o total geral.": "Calculate and update each item's subtotal and the grand total.", "Persistir o estado do carrinho no localStorage e recuperá-lo ao abrir a página.": "Persist the cart state in localStorage and restore it when the page opens.",
    "Criar uma página de registro com nome, e-mail e senha de teste.": "Create a registration page with a name, email, and test password.", "Criar uma página de login.": "Create a login page.", "Demonstrar um hash simples no cliente, apenas para fins didáticos, sem tratar a simulação como autenticação segura para uso real.": "Demonstrate a simple client-side hash for educational purposes only; do not present the simulation as secure authentication for real-world use.", "Simular a sessão com um token local para manter o estado de login.": "Simulate a session with a local token to maintain the login state.", "Controlar o acesso ao painel conforme o estado da sessão simulada.": "Control dashboard access according to the simulated session state.",
    "Implementar criação, leitura, edição e exclusão de contatos com nome, telefone e e-mail.": "Implement contact creation, reading, editing, and deletion with name, phone, and email fields.", "Associar os contatos ao usuário da sessão e organizar os registros separadamente.": "Associate contacts with the session user and keep records separate.", "Centralizar as operações de localStorage em um storageService.": "Centralize localStorage operations in a storageService.", "Validar os dados de entrada.": "Validate input data.", "Renderizar os dados como texto, sem interpretar conteúdo do usuário como HTML.": "Render data as text without interpreting user content as HTML.", "Oferecer um botão de logout.": "Provide a logout button.", "Permitir exportar e importar os contatos em formato JSON.": "Allow contacts to be exported and imported in JSON format.",
    "Acesse os respectivos exemplos práticos mediante a ordem dos exercícios expostos:": "Open the practical examples in the same order as the exercises below:", "LocalStorage Básico": "LocalStorage Basics", "LocalStorage Intermediário": "Intermediate LocalStorage", "LocalStorage Avançado": "Advanced LocalStorage",
    "Planejamento da estrutura de um banco a partir das entidades, dos atributos e das regras do sistema.": "Plan a database structure based on the system's entities, attributes, and rules.", "Representar entidades, relacionamentos e cardinalidades em diagramas.": "Represent entities, relationships, and cardinalities in diagrams.", "Definir chaves primárias e estrangeiras e organizar as tabelas para reduzir redundâncias.": "Define primary and foreign keys and organize tables to reduce redundancy.", "Confira a modelagem que desenvolvi para um banco de dados de uma biblioteca. Acesse primeiro a proposta e depois o diagrama:": "Review the database model I developed for a library. Open the proposal first, then the diagram:", "Clique aqui para ver a proposta no Drive": "Click here to view the proposal on Drive", "Clique aqui para ver o diagrama no BRMW": "Click here to view the diagram on BRMW",
    "Com a estrutura do banco definida, utilizei comandos SQL para inserir, consultar, atualizar e excluir dados.": "With the database structure defined, I used SQL commands to insert, query, update, and delete data.", "Criei o banco com CREATE DATABASE, defini as tabelas com CREATE TABLE e inseri os registros com INSERT INTO ... VALUES.": "I created the database with CREATE DATABASE, defined tables with CREATE TABLE, and inserted records with INSERT INTO ... VALUES.", "Em seguida, pratiquei minhas primeiras consultas SQL, com ênfase nos DQL, DML e DDL.": "Then I practiced my first SQL queries, focusing on DQL, DML, and DDL.", "DQL: Consulta de dados": "DQL: Data queries", "DML: Manipulação de dados": "DML: Data manipulation", "DDL: Definição de estrutura": "DDL: Structure definition", "Permite consultar informações do banco sem alterar os registros. Tendo como principal expoente o comando SELECT.": "Queries database information without changing records. Its primary command is SELECT.", "Permite inserir, atualizar e excluir registros das tabelas.": "Inserts, updates, and deletes table records.", "Permite criar, modificar e remover objetos do banco. TRUNCATE esvazia uma tabela, mantendo sua estrutura.": "Creates, modifies, and removes database objects. TRUNCATE empties a table while preserving its structure.", "Confira os Exercícios propostos para consultas e alterações, e suas respectivas resoluções, neste Documento.": "Review the proposed query and update exercises, along with their solutions, in this document.", "Clique aqui para ver o que fora solicitado, e as resoluções, no Google Docs": "Click here to view the assignment and its solutions in Google Docs",
    "Combinar condições com WHERE, AND e OR e explorar filtros com LIKE, IN e BETWEEN.": "Combine conditions with WHERE, AND, and OR, and explore filters with LIKE, IN, and BETWEEN.", "Ordenar resultados com ORDER BY, ASC e DESC e verificar valores ausentes com IS NULL.": "Sort results with ORDER BY, ASC, and DESC, and check for missing values with IS NULL.", "Acesse este Documento contextualizado com os exercícios de ordenação e filtragem, e suas respectivas resoluções.": "Open this document with contextualized sorting and filtering exercises and their solutions.", "Clique para ter acesso ao Documento aferido acima": "Click to open the document mentioned above",
    "Síntese de conjuntos de registros por meio de contagens, somas, médias...": "Summarize sets of records using counts, sums, averages, and more.", "COUNT, SUM, AVG, MIN e MAX é utilizado para sintetizar dados de forma rápida e eficiente.": "COUNT, SUM, AVG, MIN, and MAX are used to summarize data quickly and efficiently.", "Consulte abaixo o Documento com os exercícios de funções de agregação, e suas respectivas resoluções.": "See the document below for aggregate function exercises and their solutions.", "Clique para visualizar o Documento mencionado anteriormente": "Click to view the document mentioned above",
    "Agrupar registros com GROUP BY e aplicar funções de agregação a fim de garantir uma melhor acuração dos dados.": "Group records with GROUP BY and apply aggregate functions to improve data accuracy.", "Pode-se usar métodos além do GROUP BY, como: ORDER BY, WHERE/HAVING, em conjunto com as funções de agregação, como COUNT, SUM, AVG etc.": "Other clauses can be used alongside GROUP BY, such as ORDER BY and WHERE/HAVING, together with aggregate functions like COUNT, SUM, and AVG.", "Acesse abaixo o Docs abaixo que contém explicações mais detalhadas sobre agrupamentos, e atividades práticas.": "Open the document below for more detailed explanations of grouping and hands-on activities.", "Sinta-se à vontade para acessar o Documento com os exercícios de agrupamento, com suas devidas resoluções": "Feel free to open the document with grouping exercises and their solutions",
    "Aqui aprendi um pouco mais sobre os Joins, mais especificamente o INNER JOIN, LEFT JOIN, FULL OUTER/ANTI JOIN e LEFT ANTI JOIN, os quais são utilizados para combinar registros de duas ou mais tabelas com base em uma condição de correspondência.": "Here I learned more about joins, especially INNER JOIN, LEFT JOIN, FULL OUTER/ANTI JOIN, and LEFT ANTI JOIN. They combine records from two or more tables based on a matching condition.", "Sinta-se à vontade para acessar o Documento mais detalhado sobre os mesmos, com os exercícios propostos e suas respectivas resoluções.": "Feel free to open the detailed document about these joins, with the proposed exercises and their solutions.", "Confira meu progresso nesta vertente mediante a resolução de situações reais na Análise de Dados.": "See my progress in this area through solutions to real-world data analysis scenarios.",
    "Woofy - Sistema Completo de uma Clínica Veterinária": "Woofy — Complete Veterinary Clinic Management System", "Este Sistema organiza o fluxo de atendimento aos clientes, retorno do médico, e administração da Clínica em um só lugar! Garantindo assim um completo ecossistema tanto para quem encaminha o PET ao Veterináro, como ao Administrador com as finanças.": "This system brings client appointments, veterinarian follow-ups, and clinic administration together in one place. It provides a complete ecosystem for pet owners and clinic administrators, including financial management.",
    "Sistema Gerenciador de Chamados": "Support Ticket Management System", "O HelpOn é um sistema de gestão de chamados da companhia aérea fictícia FlightOn. A plataforma centraliza todo o ciclo de vida das solicitações dos passageiros/usuários, em formato Kanban, garantindo que cada etapa do atendimento seja devidamente acompanhada e registrada.": "HelpOn is a ticket management system for the fictional airline FlightOn. Its Kanban-style platform centralizes the full lifecycle of passenger and user requests, ensuring every support stage is tracked and recorded.",
    "Sistema de Consulta e Decodificação de METAR": "METAR Lookup and Decoding System", "A plataforma permite a consulta de códigos ICAO de aeródromos, condições meteorológicas em tempo real (advindo de API's oficiais), e decodificação de METAR de maneira clara e intuitiva.": "The platform lets users look up ICAO aerodrome codes, check real-time weather conditions from official APIs, and decode METAR reports clearly and intuitively.",
    "Introdução à Ciência de Dados": "Introduction to Data Science", "Banco de Dados para Desenvolvedores": "Database for Developers", "Banco de Dados: fundamentos": "Database Fundamentals", "Instituto Federal de Educação, Ciência e Tecnologia de São Paulo - IFSP": "Federal Institute of Education, Science and Technology of São Paulo (IFSP)", "Implantação de Serviços de Inteligência Artificial em Nuvem - Microsoft AI-900": "Deploying Artificial Intelligence Services in the Cloud — Microsoft AI-900", "Programação em Inteligência Artificial Generativa": "Generative AI Programming", "Fundamentos da Gestão de Projetos Aplicados na Indústria": "Fundamentals of Project Management Applied to Industry"
  }));

  function translateText(root) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    for (const node of nodes) {
      let value = node.nodeValue;
      for (const [source, target] of [...translations].sort((a, b) => b[0].length - a[0].length)) {
        if (value.includes(source)) value = value.replaceAll(source, target);
      }
      if (value !== node.nodeValue) node.nodeValue = value;
    }
    root.querySelectorAll("[aria-label], [title], meta[name=description], meta[property^='og:']").forEach((el) => {
      for (const attr of ["aria-label", "title", "content"]) {
        const value = el.getAttribute(attr);
        if (value) {
          let translated = value;
          for (const [source, target] of [...translations].sort((a, b) => b[0].length - a[0].length)) {
            if (translated.includes(source)) translated = translated.replaceAll(source, target);
          }
          if (translated !== value) el.setAttribute(attr, translated);
        }
      }
    });
  }

  const button = document.getElementById("language-toggle");
  if (!button) return;
  let language = localStorage.getItem("portfolioTresLanguage") === "en" ? "en" : "pt-BR";
  const observer = new MutationObserver(() => {
    if (language === "en") translateText(document.body);
  });

  function applyLanguage(next) {
    language = next;
    document.documentElement.lang = next;
    button.setAttribute("aria-label", next === "en" ? "Switch language to Portuguese" : "Switch language to English");
    button.title = next === "en" ? "Português" : "English";
    button.querySelector(".language-toggle-label").textContent = next === "en" ? "PT" : "EN";
    if (next === "en") {
      const title = document.querySelector("title");
      if (title) title.textContent = translations.get(title.textContent) || title.textContent;
      translateText(document.body);
      observer.observe(document.body, { subtree: true, childList: true, characterData: true });
    } else {
      observer.disconnect();
    }
  }

  button.addEventListener("click", () => {
    const nextLanguage = language === "en" ? "pt-BR" : "en";
    localStorage.setItem("portfolioTresLanguage", nextLanguage === "en" ? "en" : "pt-BR");
    window.location.reload();
  });

  applyLanguage(language);
})();
