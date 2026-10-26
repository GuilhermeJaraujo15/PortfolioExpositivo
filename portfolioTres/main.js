/* ============================================================
   DATA — edite os arrays abaixo para atualizar o conteúdo
   ============================================================ */

      // Etapas do semestre; personalize as descrições e os exemplos.
      const trackData = [
        {
          level: 1,
          title: "LocalStorage",
          desc: "Persistência de pequenos conjuntos de dados no navegador, mantendo informações salvas temporariamente.",
          points: [
            "O LocalStorage faz parte da API Web Storage e permite salvar informações no navegador, sem precisar de um servidor para esse armazenamento.",
            "Os dados permanecem disponíveis entre sessões de navegação até serem removidos pelo usuário, pelo navegador ou pela aplicação.",
          ],
          exercises: [
            {
              title: "Formulário com salvamento automático",
              objective:
                "Construir um formulário de inscrição ou contato que salva o progresso no localStorage durante o preenchimento. Ao retornar à página, o usuário encontra os campos preenchidos com os dados anteriores.",
              sections: [
                {
                  title: "Funcionalidades",
                  items: [
                    "Salvar os valores dos campos no localStorage à medida que são preenchidos.",
                    "Recuperar os dados e preencher o formulário ao carregar a página.",
                    "Remover os dados salvos desse formulário após o envio bem-sucedido.",
                    "Oferecer um botão para limpar manualmente o formulário e seus dados salvos.",
                  ],
                },
              ],
            },
            {
              title: "Sistema de carrinho de compras",
              objective:
                "Criar uma página de produtos com um carrinho persistente. O carrinho deve manter os itens entre visitas e apresentar produtos, quantidades, subtotais e total geral.",
              sections: [
                {
                  title: "Funcionalidades",
                  items: [
                    "Exibir uma lista de produtos disponíveis.",
                    "Permitir adicionar produtos ao carrinho.",
                    "Aumentar a quantidade quando um produto já estiver no carrinho, evitando duplicar o registro.",
                    "Exibir o conteúdo do carrinho em uma área própria da página.",
                    "Permitir alterar quantidades e remover itens.",
                    "Calcular e atualizar o subtotal de cada item e o total geral.",
                    "Persistir o estado do carrinho no localStorage e recuperá-lo ao abrir a página.",
                  ],
                },
              ],
            },
            {
              title: "Aplicação de gerenciamento de usuários",
              objective:
                "Desenvolver uma Single-Page Application (SPA) didática com registro, login simulado e um painel para gerenciar os contatos de cada usuário.",
              sections: [
                {
                  title: "Autenticação simulada",
                  items: [
                    "Criar uma página de registro com nome, e-mail e senha de teste.",
                    "Criar uma página de login.",
                    "Demonstrar um hash simples no cliente, apenas para fins didáticos, sem tratar a simulação como autenticação segura para uso real.",
                    "Simular a sessão com um token local para manter o estado de login.",
                    "Controlar o acesso ao painel conforme o estado da sessão simulada.",
                  ],
                },
                {
                  title: "Painel de contatos",
                  items: [
                    "Implementar criação, leitura, edição e exclusão de contatos com nome, telefone e e-mail.",
                    "Associar os contatos ao usuário da sessão e organizar os registros separadamente.",
                  ],
                },
                {
                  title: "Organização do código",
                  items: [
                    "Centralizar as operações de localStorage em um storageService.",
                    "Validar os dados de entrada.",
                    "Renderizar os dados como texto, sem interpretar conteúdo do usuário como HTML.",
                  ],
                },
                {
                  title: "Funcionalidades extras",
                  items: [
                    "Oferecer um botão de logout.",
                    "Permitir exportar e importar os contatos em formato JSON.",
                  ],
                },
              ],
            },
          ],
          practice: "Acesse os respectivos exemplos práticos mediante a ordem dos exercícios expostos:",
          practiceLinks: [
            {
              label: "LocalStorage Básico",
              href: "https://guilhermejaraujo15.github.io/LocalStorage1/",
            },
            {
              label: "LocalStorage Intermediário",
              href: "https://guilhermejaraujo15.github.io/LocalStorage2/",
            },
            {
              label: "LocalStorage Avançado",
              href: "https://guilhermejaraujo15.github.io/LocalStorage3/",
            },
          ],
        },
        {
          level: 2,
          title: "Modelagem de Banco de Dados",
          desc: "Planejamento da estrutura de um banco a partir das entidades, dos atributos e das regras do sistema.",
          points: [
            "Representar entidades, relacionamentos e cardinalidades em diagramas.",
            "Definir chaves primárias e estrangeiras e organizar as tabelas para reduzir redundâncias.",
          ],
          practice:
            "Confira a modelagem que desenvolvi para um banco de dados de uma biblioteca. Acesse primeiro a proposta e depois o diagrama:",
          practiceLinks: [
            {
              label: "Clique aqui para ver a proposta no Drive",
              href: "https://drive.google.com/file/d/1mT7_mn835Px1zLpfrhhIEGxvxETyEqkF/view",
            },
            {
              label: "Clique aqui para ver o diagrama no BRMW",
              href: "https://app.brmodeloweb.com/publicview/69a599f30a4f1151d54f667e",
            },
          ],
        },
        {
          level: 3,
          title: "Principais comandos SQL",
          desc: "Com a estrutura do banco definida, utilizei comandos SQL para inserir, consultar, atualizar e excluir dados.",
          points: [
            "Criei o banco com CREATE DATABASE, defini as tabelas com CREATE TABLE e inseri os registros com INSERT INTO ... VALUES.",
            "Em seguida, pratiquei minhas primeiras consultas SQL, com ênfase nos DQL, DML e DDL.",
          ],
          commandGroups: [
            {
              title: "DQL: Consulta de dados",
              name: "Data Query Language",
              desc: "Permite consultar informações do banco sem alterar os registros. Tendo como principal expoente o comando SELECT.",
              
            },
            {
              title: "DML: Manipulação de dados",
              name: "Data Manipulation Language",
              desc: "Permite inserir, atualizar e excluir registros das tabelas.",
              commands: "INSERT, UPDATE, DELETE",
            },
            {
              title: "DDL: Definição de estrutura",
              name: "Data Definition Language",
              desc: "Permite criar, modificar e remover objetos do banco. TRUNCATE esvazia uma tabela, mantendo sua estrutura.",
              commands: "CREATE, ALTER, DROP, TRUNCATE",
            },

          ],
          practice:
            "Confira os Exercícios propostos para consultas e alterações, e suas respectivas resoluções, neste Documento.",
          practiceLinks: [
            {
              label: "Clique aqui para ver o que fora solicitado, e as resoluções, no Google Docs",
              href: "https://docs.google.com/document/d/1naueJy893eVB9EQHqKVnc-JJ4z6T044iWCnQEVZISUE/edit?usp=sharing",
            },
          ],
        },
        {
          level: 4,
          title: "Ordenando e filtrando dados",
          desc: "Seleção e organização dos resultados para responder a perguntas específicas que envolvem critérios de busca.",
          points: [
            "Combinar condições com WHERE, AND e OR e explorar filtros com LIKE, IN e BETWEEN.",
            "Ordenar resultados com ORDER BY, ASC e DESC e verificar valores ausentes com IS NULL.",
          ],
          practice:
            "Acesse este Documento contextualizado com os exercícios de ordenação e filtragem, e suas respectivas resoluções.",
          practiceLinks: [
            {
              label: "Clique para ter acesso ao Documento aferido acima",
              href: "https://docs.google.com/document/d/1n7HX0uQnrK8Z_eAsm3Cw5z5eKhNYGJa3nOGPTRZ1zHE/edit?usp=sharing",
            },
          ],
        },
        {
          level: 5,
          title: "Funções de agregação",
          desc: "Síntese de conjuntos de registros por meio de contagens, somas, médias...",
          points: [
            "COUNT, SUM, AVG, MIN e MAX é utilizado para sintetizar dados de forma rápida e eficiente.",
          ],
          practice:
            "Consulte abaixo o Documento com os exercícios de funções de agregação, e suas respectivas resoluções.",
          practiceLinks: [
            {
              label: "Clique para visualizar o Documento mencionado anteriormente",
              href: "https://docs.google.com/document/d/1bvCfudTakRyKox0kpIVjaMpzmFaNgG7OD6FEWJ45Psc/edit?usp=sharing",
            },
          ],
        },
        {
          level: 6,
          title: "Agrupamentos",
          desc: "Organização dos registros em grupos para comparar resultados por categoria.",
          points: [
            "Agrupar registros com GROUP BY e aplicar funções de agregação a fim de garantir uma melhor acuração dos dados.",
            "Pode-se usar métodos além do GROUP BY, como: ORDER BY, WHERE/HAVING, em conjunto com as funções de agregação, como COUNT, SUM, AVG etc.",
          ],
          practice:
            "Acesse abaixo o Docs abaixo que contém explicações mais detalhadas sobre agrupamentos, e atividades práticas.",
          practiceLinks: [
            {
              label: "Sinta-se à vontade para acessar o Documento com os exercícios de agrupamento, com suas devidas resoluções",
              href: "https://docs.google.com/document/d/1U-MEZwqzGXKvHaHlGsLAZ0ouI0bbJlt1BnjOJKSQMF0/edit?usp=sharing",
            },
          ],
        },
        {
          level: 7,
          title: "Joins",
          desc: "Combinação de dados entre tabelas para construir consultas mais completas.",
          points: [
            "Aqui aprendi um pouco mais sobre os Joins, mais especificamente o INNER JOIN, LEFT JOIN, FULL OUTER/ANTI JOIN e LEFT ANTI JOIN, os quais são utilizados para combinar registros de duas ou mais tabelas com base em uma condição de correspondência.",
          ],
          practice:
            "Sinta-se à vontade para acessar o Documento mais detalhado sobre os mesmos, com os exercícios propostos e suas respectivas resoluções.",
          practiceLinks: [
            {
              label: "Confira meu progresso nesta vertente mediante a resolução de situações reais na Análise de Dados.",
              href: "https://docs.google.com/document/d/1YpMiVxG1vmIE0E9loFrq-MiKocj72RHWTM8RVwep0dc/edit?usp=sharing",
            },
          ],
        },
      ];

      const projectData = [

        {
          name: "Woofy - Sistema Completo de uma Clínica Veterinária",
          videoUrl: "https://drive.google.com/file/d/1P5U_fOH0VTw6Z3V8c4NYtC0NEHZfaUI7/view?usp=sharing",
          url: "https://github.com/GuilhermeJaraujo15/Woofy-Final_Project_Nextjs.git",
          desc: "Este Sistema organiza o fluxo de atendimento aos clientes, retorno do médico, e administração da Clínica em um só lugar! Garantindo assim um completo ecossistema tanto para quem encaminha o PET ao Veterináro, como ao Administrador com as finanças.",
          image: "../img/woofy.png", 
        },
        {
          name: "Sistema Gerenciador de Chamados",
          videoUrl: "https://drive.google.com/file/d/1Zc-25fbr-sOCOIUXm2O5vPmkQJ3JK1Qr/view?usp=sharing", 
          url: "https://github.com/GuilhermeJaraujo15/HelpOn-AngularJS.git", 
          desc: "O HelpOn é um sistema de gestão de chamados da companhia aérea fictícia FlightOn. A plataforma centraliza todo o ciclo de vida das solicitações dos passageiros/usuários, em formato Kanban, garantindo que cada etapa do atendimento seja devidamente acompanhada e registrada.",
          image: "../img/helpOn.png",
        },
        {
          name: "Sistema de Consulta e Decodificação de METAR",
          videoUrl: "https://drive.google.com/file/d/12TRed2CVre6wuB7EL_2NvxMrfy05shN8/view?usp=sharing",
          url: "https://github.com/GuilhermeJaraujo15/DecMET.git",
          desc: "A plataforma permite a consulta de códigos ICAO de aeródromos, condições meteorológicas em tempo real (advindo de API's oficiais), e decodificação de METAR de maneira clara e intuitiva.",
          image: "../img/decmet.png", 
        },
      ];

      const certData = [

        {
          name: "Introdução à Ciência de Dados",
          inst: "Cisco Networking Academy",
          date: "Julho de 2026",
          logo: "../img/cisco.svg",
          url: "https://www.credly.com/badges/2ff33459-cc64-4a14-988a-1229c487c4c1",
          pct: 100,
        },
        {
          name: "Banco de Dados para Desenvolvedores",
          inst: "Oracle Academy",
          date: "Abril de 2026",
          logo: "../img/oracle.png",
          url: "https://drive.google.com/file/d/1t8-tCv87FCyya3f6QCJ0f-SkjEwcRPqM/view",
          pct: 100,
        },
        {
          name: "Banco de Dados: fundamentos",
          inst: "Instituto Federal de Educação, Ciência e Tecnologia de São Paulo - IFSP",
          date: "Março de 2026",
          logo: "../img/ifsp.png",
          url: "https://drive.google.com/file/d/1CWxg6aH5f7tsBC8h8NQ40SkNkB-X2tK9/view?usp=sharing",
          pct: 100,
        },
        {
          name: "Implantação de Serviços de Inteligência Artificial em Nuvem - Microsoft AI-900",
          inst: "SENAI",
          date: "março de 2026",
          logo: "../img/senai.png",
          url: "https://www.sp.senai.br/consulta-certificado?qrcode=10326198378/15750462",
          pct: 0,
        },
        {
          name: "Programação em Inteligência Artificial Generativa",
          inst: "SENAI",
          date: "Junho de 2026",
          logo: "../img/senai.png",
          url: "https://www.sp.senai.br/consulta-certificado?qrcode=10326199053/15826332",
          pct: 0,
        },
        {
          name: "Fundamentos da Gestão de Projetos Aplicados na Indústria",
          inst: "SENAI",
          date: "Abril de 2026",
          logo: "../img/senai.png",
          url: "https://www.sp.senai.br/consulta-certificado?qrcode=00059/7973270",
          pct: 0,
        },
      ];

      /* ============================================================
   RENDER: Trilha de aprendizado — degraus e detalhes
   ============================================================ */
      const trackList = document.getElementById("track-list");
      const trackMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
      let expandedTrack = null;
      let trackEntrance = null;

      // Content is inserted as text, keeping future edits safe from HTML injection.
      function trackElement(tag, className, text) {
        const el = document.createElement(tag);
        if (className) el.className = className;
        if (text !== undefined) el.textContent = text;
        return el;
      }

      for (
        let flightIndex = 0;
        flightIndex < Math.ceil(trackData.length / 7);
        flightIndex++
      ) {
        const flight = trackElement("div", "track-flight");
        const heading = trackElement("div", "track-flight-heading");
        const title = trackElement("h3", "", "");
        title.id = "track-flight-" + flightIndex;
        heading.append(title, trackElement("span", ""));
        const list = trackElement("ol", "track-steps");
        list.start = flightIndex * 7 + 1;
        list.setAttribute("aria-labelledby", title.id);
        list.id = "track-steps-" + flightIndex;
        const panels = trackElement("div", "track-panels");
        flight.append(heading, list, panels);
        trackList.append(flight);

        trackData
          .slice(flightIndex * 7, flightIndex * 7 + 7)
          .forEach((item, index) => {
            const number = String(item.level).padStart(2, "0");
            const li = trackElement("li");
            const button = trackElement("button", "track-step");
            button.type = "button";
            button.id = "track-step-" + item.level;
            button.setAttribute("aria-expanded", "false");
            button.setAttribute("aria-controls", "track-detail-" + item.level);
            const plot = trackElement("span", "track-step-plot");
            const bar = trackElement("span", "track-step-bar");
            bar.style.setProperty("--step-height", 58 + index * 14 + "px");
            bar.append(trackElement("span", "track-step-number", number));
            const mark = document.createElementNS(
              "http://www.w3.org/2000/svg",
              "svg",
            );
            mark.setAttribute("viewBox", "0 0 16 16");
            mark.setAttribute("class", "track-step-mark");
            mark.setAttribute("aria-hidden", "true");
            mark.innerHTML =
              '<path d="M8 3v10M3 8h10" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>';
            bar.append(mark);
            plot.append(bar);
            button.append(
              plot,
              trackElement("span", "track-step-title", item.title),
            );
            li.append(button);
            list.append(li);

            const panel = trackElement("section", "track-detail");
            panel.id = "track-detail-" + item.level;
            panel.hidden = true;
            panel.setAttribute("aria-labelledby", "track-title-" + item.level);
            const layout = trackElement("div", "track-detail-layout");
            const copy = trackElement("div");
            const panelTitle = trackElement("h4", "", item.title);
            panelTitle.id = "track-title-" + item.level;
            copy.append(panelTitle, trackElement("p", "", item.desc));
            const more = trackElement("button", "track-more", "Saber mais");
            more.type = "button";
            more.setAttribute("aria-expanded", "false");
            more.setAttribute("aria-controls", "track-more-" + item.level);
            more.setAttribute("aria-label", "Saber mais sobre " + item.title);
            const extra = trackElement("div", "track-more-content");
            extra.id = "track-more-" + item.level;
            extra.hidden = true;
            const points = trackElement("ul");
            item.points.forEach((point) =>
              points.append(trackElement("li", "", point)),
            );
            const practiceText = trackElement(
              "p",
              "track-practice",
              item.practice,
            );
            // Keep labels and URLs separate; render links without interpreting HTML.
            const practiceLinks = item.practiceLinks || [];
            extra.append(trackElement("h5", "", "Conceitos em foco"), points);
            if (item.commandGroups?.length) {
              const groups = trackElement("div", "track-command-groups");
              groups.append(trackElement("h5", "", "Resumo dos comandos SQL"));
              item.commandGroups.forEach((group, index) => {
                const article = trackElement("article", "track-command-group");
                const title = trackElement("h6", "", group.title);
                title.id = `track-command-${item.level}-${index + 1}`;
                article.setAttribute("aria-labelledby", title.id);
                const commands = trackElement("p");
                commands.append(
                  trackElement("strong", "", "Principais comandos: "),
                  trackElement("code", "", group.commands),
                );
                article.append(
                  title,
                  trackElement("small", "", group.name),
                  trackElement("p", "", group.desc),
                  ...(group.commands ? [commands] : []),
                );
                groups.append(article);
              });
              extra.append(groups);
            }
            if (item.exercises?.length) {
              const exercises = trackElement("div", "track-exercises");
              exercises.append(trackElement("h5", "", "Exercícios práticos"));
              item.exercises.forEach((exercise, index) => {
                const article = trackElement("article", "track-exercise");
                const title = trackElement(
                  "h6",
                  "",
                  `Exercício ${index + 1} — ${exercise.title}`,
                );
                title.id = `track-exercise-${item.level}-${index + 1}`;
                article.setAttribute("aria-labelledby", title.id);
                const objective = trackElement("p");
                objective.append(
                  trackElement("strong", "", "Objetivo: "),
                  exercise.objective,
                );
                article.append(title, objective);
                exercise.sections.forEach((section) => {
                  const group = trackElement("div", "track-exercise-group");
                  const list = trackElement("ul");
                  section.items.forEach((text) =>
                    list.append(trackElement("li", "", text)),
                  );
                  group.append(trackElement("strong", "", section.title), list);
                  article.append(group);
                });
                exercises.append(article);
              });
              extra.append(exercises);
            }
            extra.append(
              trackElement("h5", "", "Exemplo de aplicação"),
              practiceText,
            );
            if (practiceLinks.length) {
              const linkList = trackElement("ul", "track-practice");
              practiceLinks.forEach(({ label, href }, linkIndex) => {
                const listItem = trackElement("li");
                const link = trackElement("a", "", label);
                link.href = href;
                link.dataset.trackLevel = String(item.level);
                link.dataset.practiceLinkIndex = String(linkIndex);
                link.target = "_blank";
                link.rel = "noopener noreferrer";
                listItem.append(link);
                linkList.append(listItem);
              });
              extra.append(linkList);
            }
            more.addEventListener("click", () => {
              const open = more.getAttribute("aria-expanded") !== "true";
              more.setAttribute("aria-expanded", String(open));
              more.textContent = open ? "Mostrar menos" : "Saber mais";
              more.setAttribute(
                "aria-label",
                (open ? "Mostrar menos sobre " : "Saber mais sobre ") +
                  item.title,
              );
              extra.hidden = !open;
            });
            layout.append(copy, more);
            panel.append(layout, extra);
            panels.append(panel);

            button.addEventListener("click", () => {
              const open = button.getAttribute("aria-expanded") !== "true";
              if (trackEntrance) {
                trackEntrance.cancel();
                trackEntrance = null;
              }
              if (expandedTrack) {
                expandedTrack.button.setAttribute("aria-expanded", "false");
                expandedTrack.panel.hidden = true;
              }
              expandedTrack = null;
              if (!open) return;
              button.setAttribute("aria-expanded", "true");
              panel.hidden = false;
              expandedTrack = { button, panel };
              if (!trackMotion.matches && panel.animate) {
                trackEntrance = panel.animate(
                  [
                    { opacity: 0, transform: "translateY(-6px)" },
                    { opacity: 1, transform: "translateY(0)" },
                  ],
                  { duration: 240, easing: "cubic-bezier(.2,.8,.2,1)" },
                );
              }
            });
          });
        // Keyboard users can move through the staircase without traversing every link.
        list.addEventListener("keydown", (event) => {
          if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key))
            return;
          const buttons = Array.from(list.querySelectorAll(".track-step"));
          const current = buttons.indexOf(document.activeElement);
          if (current < 0) return;
          event.preventDefault();
          const next =
            event.key === "Home"
              ? 0
              : event.key === "End"
                ? buttons.length - 1
                : Math.max(
                    0,
                    Math.min(
                      buttons.length - 1,
                      current + (event.key === "ArrowRight" ? 1 : -1),
                    ),
                  );
          buttons[next].focus({ preventScroll: true });
          const target = buttons[next];
          list.scrollTo({
            left:
              list.scrollLeft +
              target.getBoundingClientRect().left -
              list.getBoundingClientRect().left -
              4,
            behavior: trackMotion.matches ? "instant" : "smooth",
          });
        });
      }
      trackMotion.addEventListener("change", () => {
        if (trackEntrance) trackEntrance.cancel();
      });

      /* ============================================================
   RENDER: Projetos
   ============================================================ */
      const projectGrid = document.getElementById("project-grid");
      projectData.forEach((p, i) => {
        const el = document.createElement("article");
        el.className =
          "reveal group card-hover flex flex-col rounded-xl border border-graphite-200 bg-white/80 backdrop-blur-sm overflow-hidden hover:border-cyan-500/50 hover:shadow-card-hover transition-all";
        el.style.transitionDelay = i * 80 + "ms";
        el.innerHTML = `
    <div class="project-cover aspect-[16/10] shrink-0 bg-graphite-100 relative overflow-hidden flex items-center justify-center">
      <span class="text-sm text-graphite-500">Imagem em breve</span>
    </div>
    <div class="p-6 flex flex-col flex-1">
      <h3 class="font-display text-lg font-medium text-graphite-900">${p.name}</h3>
      <p class="text-sm text-graphite-600 mt-2 leading-relaxed flex-1">${p.desc}</p>
      <div class="flex items-center justify-between gap-4 mt-5 pt-5 border-t border-graphite-100">
        <a class="project-link text-sm font-medium"><span class="project-link-label">Ver projeto</span></a>
        <a class="project-video-link">
          <svg width="24" height="24" viewBox="0 0 32 32" fill="none"
            stroke="currentColor" stroke-width="1.6" stroke-linecap="round"
            stroke-linejoin="round" aria-hidden="true" focusable="false">
            <defs>
              <linearGradient id="video-sheen-${i}" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stop-color="#00856a" stop-opacity="0" />
                <stop offset="0.35" stop-color="#00856a" />
                <stop offset="0.5" stop-color="#007fbd" />
                <stop offset="0.65" stop-color="#00856a" />
                <stop offset="1" stop-color="#00856a" stop-opacity="0" />
              </linearGradient>
              <mask id="video-mask-${i}" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
                <use href="#video-shape-${i}" stroke="white" />
              </mask>
            </defs>
            <g id="video-shape-${i}">
            <circle cx="9" cy="7" r="3.5" />
            <circle cx="19" cy="6" r="4.5" />
            <circle cx="19" cy="6" r="1.5" />
            <rect x="3" y="13" width="21" height="16" rx="1.5" />
            <path d="m24 18 6-3v12l-6-3M11 17l7 4-7 4Z" />
            </g>
            <g class="project-video-flow" mask="url(#video-mask-${i})" stroke="none">
              <rect class="project-video-sheen" x="-64" y="0" width="64" height="32" fill="url(#video-sheen-${i})" />
            </g>
          </svg>
        </a>
      </div>
    </div>
  `;
        if (p.image?.trim()) {
          const cover = el.querySelector(".project-cover");
          const image = document.createElement("img");
          image.alt = `Prévia do projeto ${p.name}`;
          image.loading = "lazy";
          image.decoding = "async";
          image.className = "absolute inset-0 w-full h-full object-cover";
          image.addEventListener("load", () => {
            cover.querySelector("span").hidden = true;
          }, { once: true });
          image.addEventListener("error", () => image.remove(), { once: true });
          image.src = p.image.trim();
          cover.append(image);
        }
        const projectLink = el.querySelector(".project-link");
        if (p.url.trim()) {
          projectLink.href = p.url.trim();
          projectLink.target = "_blank";
          projectLink.rel = "noopener noreferrer";
          projectLink.title = "Ver projeto (abre em nova aba)";
          projectLink.setAttribute("aria-label", `Ver projeto: ${p.name} (abre em nova aba)`);
        } else {
          projectLink.setAttribute("role", "link");
          projectLink.setAttribute("aria-disabled", "true");
          projectLink.title = "Link do projeto em breve";
          projectLink.classList.add("opacity-50", "cursor-default");
        }
        const videoLink = el.querySelector(".project-video-link");
        if (p.videoUrl?.trim()) {
          videoLink.href = p.videoUrl.trim();
          videoLink.target = "_blank";
          videoLink.rel = "noopener noreferrer";
          videoLink.title = "Assistir à demonstração (abre em nova aba)";
          videoLink.setAttribute("aria-label", `Assistir à demonstração de ${p.name} (abre em nova aba)`);
        } else {
          videoLink.setAttribute("role", "link");
          videoLink.setAttribute("aria-disabled", "true");
          videoLink.setAttribute("aria-label", `Vídeo de ${p.name} ainda não disponível`);
          videoLink.title = "Vídeo ainda não disponível";
        }
        projectGrid.appendChild(el);
      });

      /* ============================================================
   RENDER: Certificações
   ============================================================ */
      const certList = document.getElementById("cert-list");
      certData.forEach((c, i) => {
        const el = document.createElement("li");
        el.className =
          "reveal flex flex-col sm:flex-row sm:items-center gap-4 py-6";
        el.style.transitionDelay = i * 70 + "ms";
        el.innerHTML = `
    <div class="flex items-center gap-4 w-full sm:w-auto">
      <div class="cert-emblem">
      <svg width="52" height="52" viewBox="0 0 90 90" aria-hidden="true" focusable="false">
        <circle cx="45" cy="45" r="40" fill="none" stroke="#DDE4E8" stroke-width="8"/>
      </svg>
      </div>
      <div class="flex-1 min-w-0">
        <h3 class="cert-name font-display text-graphite-900 font-medium"></h3>
        <p class="cert-meta text-sm text-graphite-500 mt-0.5"></p>
      </div>
    </div>
    <div class="flex items-center gap-4 w-full sm:w-auto sm:ml-auto">
      <a class="cert-link text-sm font-medium text-teal-700 hover:text-teal-800 transition-colors whitespace-nowrap">Ver certificado →</a>
    </div>
  `;
        el.querySelector(".cert-name").textContent = c.name;
        el.querySelector(".cert-meta").textContent = [c.inst, c.date].filter(Boolean).join(" · ");
        if (c.logo?.trim()) {
          const logo = document.createElement("img");
          logo.className = "cert-logo";
          logo.alt = ""; // A instituição já está identificada no texto ao lado.
          logo.width = 36;
          logo.height = 36;
          logo.loading = "lazy";
          logo.decoding = "async";
          logo.addEventListener("error", () => logo.remove(), { once: true });
          logo.src = c.logo.trim();
          el.querySelector(".cert-emblem").append(logo);
        }
        const certLink = el.querySelector(".cert-link");
        if (c.url?.trim()) {
          certLink.href = c.url.trim();
          certLink.target = "_blank";
          certLink.rel = "noopener noreferrer";
          certLink.setAttribute("aria-label", `Ver certificado: ${c.name} (abre em nova aba)`);
        } else {
          certLink.setAttribute("role", "link");
          certLink.setAttribute("aria-disabled", "true");
          certLink.title = "Certificado ainda não disponível";
          certLink.classList.add("opacity-50", "cursor-default");
        }
        certList.appendChild(el);
      });

      /* ============================================================
   HEADER: comportamento ao scroll + scroll-spy + animações de ícone
   ============================================================ */
      const navPill = document.getElementById("navPill");
      const menuToggle = document.getElementById("menu-toggle");
      const mobileMenuPanel = document.getElementById("mobile-menu-panel");
      const mobileNavShell = document.querySelector(".mobile-nav-shell");

      // Mede a seção atrás do centro da barra, não o link ativo do scroll-spy.
      const navbar = document.getElementById("navbar");
      const navSurfaces = Array.from(document.querySelectorAll("[data-nav-surface]"));
      let navbarFrame = null;
      function updateNavbar() {
        navbarFrame = null;
        const bounds = navPill.getBoundingClientRect();
        const sampleY = bounds.top + bounds.height / 2;
        let theme = "light";
        for (const surface of navSurfaces) {
          const rect = surface.getBoundingClientRect();
          if (rect.top <= sampleY && rect.bottom > sampleY) {
            theme = surface.dataset.navSurface;
            // Pequena margem evita alternância por oscilações junto à divisa.
            if (navbar.dataset.navTheme &&
                Math.min(sampleY - rect.top, rect.bottom - sampleY) < 4) {
              theme = navbar.dataset.navTheme;
            }
            break;
          }
        }
        navPill.classList.toggle("scrolled", window.scrollY > 20);
        if (navbar.dataset.navTheme !== theme) navbar.dataset.navTheme = theme;
      }
      function scheduleNavbarUpdate() {
        if (navbarFrame === null) {
          navbarFrame = requestAnimationFrame(updateNavbar);
        }
      }
      window.addEventListener("scroll", scheduleNavbarUpdate, { passive: true });
      window.addEventListener("resize", scheduleNavbarUpdate, { passive: true });
      window.addEventListener("pageshow", scheduleNavbarUpdate);
      if (typeof ResizeObserver !== "undefined") {
        const navSurfaceObserver = new ResizeObserver(scheduleNavbarUpdate);
        navSurfaces.forEach((surface) => navSurfaceObserver.observe(surface));
      }
      updateNavbar();

      // Mobile structure owns separate elements from the semantic icon animations.
      const mobileMotionQuery = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      );
      const mobileViewportQuery = window.matchMedia("(max-width: 767px)");
      let menuState = "closed";
      let menuRun = 0;
      let menuAnimations = [];
      const menuParts = [
        {
          el: document.querySelector(".mobile-menu-surface"),
          closed: {
            clipPath: "inset(0px 25px calc(100% - 48px) 25px round 24px)",
          },
          open: {
            clipPath: "inset(0px 0px 0px 0px round 26px)",
          },
          enter: [70, 390],
          exit: [110, 290],
        },
        {
          el: mobileMenuPanel,
          closed: {
            opacity: "0",
            transform: "translateY(-8px) scale(.96)",
            filter: "blur(3px)",
          },
          open: {
            opacity: "1",
            transform: "translateY(0px) scale(1)",
            filter: "blur(0px)",
          },
          enter: [140, 280],
          exit: [100, 200],
        },
        ...["top", "middle", "bottom"].map((name, i) => ({
          el: menuToggle.querySelector(".menu-line-" + name),
          closed: {
            transform: "translateY(0px) rotate(0deg) scaleX(1)",
            opacity: "1",
          },
          open: {
            transform: [
              "translateY(6px) rotate(45deg) scaleX(1)",
              "translateY(0px) rotate(0deg) scaleX(0)",
              "translateY(-6px) rotate(-45deg) scaleX(1)",
            ][i],
            opacity: i === 1 ? "0" : "1",
          },
          enter: [50, 260],
          exit: [130, 260],
        })),
        ...Array.from(mobileMenuPanel.querySelectorAll("li"), (el, i) => ({
          el,
          closed: { opacity: "0", transform: "translateY(-5px) scale(.98)" },
          open: { opacity: "1", transform: "translateY(0px) scale(1)" },
          enter: [190 + i * 45, 260],
          exit: [
            (mobileMenuPanel.querySelectorAll("li").length - 1 - i) * 30,
            150,
          ],
        })),
      ];

      function setMenuState(state) {
        menuState = state;
        mobileNavShell.dataset.menuState = state;
      }

      async function setMobileMenu(open, instant = false) {
        if (open && !mobileViewportQuery.matches) return;
        if (
          !instant &&
          (open ? ["opening", "open"] : ["closing", "closed"]).includes(
            menuState,
          )
        )
          return;
        const interrupted = menuState === "opening" || menuState === "closing";
        const run = ++menuRun;
        // Snapshot every current value before cancelling: quick toggles stay continuous.
        const snapshots = menuParts.map((part) => {
          const style = getComputedStyle(part.el);
          return Object.fromEntries(
            Object.keys(part.closed).map((key) => [key, style[key]]),
          );
        });
        menuAnimations.forEach((animation) => animation.cancel());
        menuAnimations = [];
        setMenuState(open ? "opening" : "closing");
        menuToggle.setAttribute("aria-expanded", String(open));
        menuToggle.setAttribute(
          "aria-label",
          open ? "Fechar menu" : "Abrir menu",
        );
        if (!open && mobileMenuPanel.contains(document.activeElement))
          menuToggle.focus({ preventScroll: true });
        mobileMenuPanel.inert = !open;
        mobileMenuPanel.setAttribute("aria-hidden", String(!open));
        mobileMenuPanel.style.visibility = "visible";

        const immediate =
          instant || mobileMotionQuery.matches || !mobileMenuPanel.animate;
        menuParts.forEach((part, i) => {
          const target = open ? part.open : part.closed;
          Object.assign(part.el.style, target);
          if (immediate) return;
          const [delay, duration] = open ? part.enter : part.exit;
          menuAnimations.push(
            part.el.animate([snapshots[i], target], {
              duration,
              delay: interrupted ? 0 : delay,
              fill: "both",
              easing: open
                ? "cubic-bezier(.2,.85,.25,1.03)"
                : "cubic-bezier(.4,0,.2,1)",
            }),
          );
        });
        await Promise.all(
          menuAnimations.map((animation) => animation.finished.catch(() => {})),
        );
        if (run !== menuRun) return;
        menuAnimations.forEach((animation) => animation.cancel());
        menuAnimations = [];
        mobileMenuPanel.style.visibility = open ? "visible" : "hidden";
        setMenuState(open ? "open" : "closed");
      }

      menuToggle.addEventListener("pointerdown", () =>
        menuToggle.classList.add("is-pressed"),
      );
      const releaseMenuPress = () => menuToggle.classList.remove("is-pressed");
      window.addEventListener("pointerup", releaseMenuPress, { passive: true });
      window.addEventListener("pointercancel", releaseMenuPress, {
        passive: true,
      });
      menuToggle.addEventListener("pointerleave", releaseMenuPress);
      menuToggle.addEventListener("click", () =>
        setMobileMenu(menuState === "closed" || menuState === "closing"),
      );
      mobileMenuPanel.querySelectorAll(".mobile-link").forEach((link) => {
        // Native anchor navigation begins immediately, alongside the closing motion.
        link.addEventListener("click", () => setMobileMenu(false));
      });
      document.addEventListener(
        "pointerdown",
        (event) => {
          if (!mobileNavShell.contains(event.target)) setMobileMenu(false);
        },
        { passive: true },
      );
      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && menuState !== "closed") {
          setMobileMenu(false);
          menuToggle.focus({ preventScroll: true });
        }
      });
      mobileViewportQuery.addEventListener("change", () =>
        setMobileMenu(false, true),
      );
      mobileMotionQuery.addEventListener("change", () =>
        setMobileMenu(menuState === "open" || menuState === "opening", true),
      );

      // Scroll-spy: atualizar links ativos com base na seção visível
      const sections = ["trilha", "projetos", "certificacoes"];
      const navLinks = document.querySelectorAll(".nav-link[data-section]");
      const mobileLinks = document.querySelectorAll(
        ".mobile-link[data-section]",
      );
      const allSectionLinks = document.querySelectorAll(
        ".nav-link[data-section], .mobile-link[data-section]",
      );
      const desktopNavQuery = window.matchMedia("(min-width: 768px)");

      function setLinkActiveState(link, currentSection, receivesCurrent) {
        const isActive = link.dataset.section === currentSection;
        link.classList.toggle("active", isActive);
        if (isActive && receivesCurrent) {
          link.setAttribute("aria-current", "page");
        } else {
          link.removeAttribute("aria-current");
        }
      }

      function updateActiveSection() {
        let currentSection = "";
        for (const id of sections) {
          const el = document.getElementById(id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= window.innerHeight * 0.35) {
              currentSection = id;
            } else {
              break;
            }
          }
        }
        if (!currentSection && sections.length) currentSection = sections[0];

        navLinks.forEach((link) =>
          setLinkActiveState(link, currentSection, desktopNavQuery.matches),
        );
        mobileLinks.forEach((link) =>
          setLinkActiveState(link, currentSection, !desktopNavQuery.matches),
        );
      }

      window.addEventListener("scroll", updateActiveSection, { passive: true });
      window.addEventListener("resize", updateActiveSection, { passive: true });
      if (desktopNavQuery.addEventListener) {
        desktopNavQuery.addEventListener("change", updateActiveSection);
      } else {
        desktopNavQuery.addListener(updateActiveSection);
      }
      updateActiveSection();

      /* ============================================================
   NAV ICONS: replay chart on entry; reverse other icons on exit
   ============================================================ */
      const reducedMotionQuery = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      );
      let prefersReducedMotion = reducedMotionQuery.matches;
      const navMotionControllers = [];

      allSectionLinks.forEach((link) => {
        const svg = link.querySelector("svg");
        let animations = [];
        let hovered = false;
        let engaged = false;

        // Every part shares a 720ms clock and reverses smoothly on pointer exit.
        function part(selector, from, to, start = 0, end = 1, rest = null) {
          svg.querySelectorAll(selector).forEach((el) => {
            const frames = [{ ...(rest || from), offset: 0 }];
            if (rest) frames.push({ ...from, offset: 0.1 });
            if (start > 0) frames.push({ ...from, offset: start });
            frames[frames.length - 1].easing = "cubic-bezier(.2,.8,.2,1)";
            frames.push({ ...to, offset: end });
            if (end < 1) frames.push({ ...to, offset: 1 });
            const animation = el.animate(frames, {
              duration: 720,
              fill: "both",
            });
            animation.pause();
            animation.currentTime = 0;
            animations.push(animation);
          });
        }

        function build() {
          if (link.dataset.section === "trilha") {
            svg.querySelectorAll(".chart-rect").forEach((bar, i) => {
              // Static icon remains complete; only interaction reconstructs it.
              bar.dataset.bar = i;
              part(
                '[data-bar="' + i + '"]',
                { transform: "scaleY(.2)", opacity: 0.5 },
                { transform: "scaleY(1)", opacity: 1 },
                0.12 + i * 0.07,
                0.48 + i * 0.07,
                { transform: "scaleY(1)", opacity: 1 },
              );
            });
            part(
              ".chart-line",
              { strokeDashoffset: 1, opacity: 0 },
              { strokeDashoffset: 0, opacity: 1 },
              0.18,
              0.82,
              { strokeDashoffset: 0, opacity: 1 },
            );
          } else if (link.dataset.section === "projetos") {
            part(
              ".folder-lid",
              { transform: "scaleY(1)" },
              { transform: "scaleY(.72)" },
              0,
              0.5,
            );
            part(
              ".folder-doc",
              { opacity: 0, transform: "translateY(2px)" },
              { opacity: 1, transform: "translateY(-3.5px)" },
              0.48,
              0.95,
            );
          } else if (link.dataset.section === "certificacoes") {
            part(
              ".star-body",
              { transform: "scale(1)" },
              { transform: "scale(1.07)" },
              0,
              0.65,
            );
            part(".star-glow", { opacity: 0 }, { opacity: 0.12 }, 0.2, 0.85);
          }
        }

        function reset() {
          animations.forEach((animation) => animation.cancel());
          animations = [];
        }
        function sync() {
          const next = hovered || link.matches(":focus-visible");
          link.classList.toggle("is-engaged", next);
          if (next === engaged) return;
          engaged = next;
          if (prefersReducedMotion || !svg.animate) return;
          if (link.dataset.section === "trilha") {
            // Finish drawing on exit and keep the complete static chart.
            // Each new entry starts a fresh run without stacking animations.
            if (!engaged) return;
            reset();
            build();
            animations.forEach((animation) => {
              animation.onfinish = () => {
                if (animations.every((a) => a.playState === "finished"))
                  reset();
              };
              animation.play();
            });
            return;
          }
          if (engaged && !animations.length) build();
          animations.forEach((animation) => {
            animation.onfinish = () => {
              if (!engaged && animations.every((a) => a.currentTime === 0))
                reset();
            };
            animation.updatePlaybackRate(engaged ? 1 : -1.5);
            animation.play();
          });
        }
        link.addEventListener("pointerenter", (event) => {
          if (event.pointerType === "touch") return;
          hovered = true;
          sync();
        });
        link.addEventListener("pointerleave", () => {
          hovered = false;
          sync();
        });
        link.addEventListener("pointercancel", () => {
          hovered = false;
          sync();
        });
        link.addEventListener("focus", sync);
        link.addEventListener("blur", sync);
        navMotionControllers.push({ reset });
      });

      reducedMotionQuery.addEventListener("change", (event) => {
        prefersReducedMotion = event.matches;
        navMotionControllers.forEach((controller) => controller.reset());
      });

      /* ============================================================
   REVEAL ON SCROLL (mantido)
   ============================================================ */
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 },
      );

      document
        .querySelectorAll(
          ".reveal, .donut-arc, .chart-draw, .chart-point, .chart-bar-grow, .chart-fade",
        )
        .forEach((el) => {
          if (!el.closest("#hero-chart")) revealObserver.observe(el);
        });

      /* ------------------------------------------------------------
   DATA COUNTERS
   ------------------------------------------------------------ */
      function animateCount(el) {
        const target = parseInt(el.dataset.countTo, 10) || 0;
        const suffix = el.dataset.suffix || "";
        const pad = parseInt(el.dataset.pad, 10) || 0;

        if (prefersReducedMotion) {
          el.textContent = String(target).padStart(pad, "0") + suffix;
          return;
        }

        const duration = 1400;
        const start = performance.now();

        function tick(now) {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const value = Math.round(target * eased);
          el.textContent = String(value).padStart(pad, "0") + suffix;
          if (progress < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      }

      function animateHeroDonut() {
        const arc = document.getElementById("hero-donut");
        const label = document.getElementById("hero-donut-label");
        if (!arc || !label) return;
        arc.classList.add("is-visible");

        if (prefersReducedMotion) {
          label.textContent = "62%";
          return;
        }
        const duration = 1400;
        // Explicit keyframes preserve the draw-in even when the chart is
        // revealed before the browser paints its initial CSS state.
        if (arc.animate) {
          const circumference = 2 * Math.PI * arc.r.baseVal.value;
          const finalOffset = getComputedStyle(arc).getPropertyValue("--fill").trim();
          arc.animate(
            [
              { strokeDashoffset: String(circumference) },
              { strokeDashoffset: finalOffset },
            ],
            {
              duration,
              easing: "cubic-bezier(0.16, 0.8, 0.24, 1)",
            },
          );
        }
        label.textContent = "0%";
        const start = performance.now();
        function tick(now) {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          label.textContent = Math.round(62 * eased) + "%";
          if (progress < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      }

      const countObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateCount(entry.target);
              countObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.4 },
      );
      document
        .querySelectorAll(".count-num")
        .forEach((el) => countObserver.observe(el));

      const heroChart = document.getElementById("hero-chart");
      if (heroChart && !prefersReducedMotion && "IntersectionObserver" in window) {
        heroChart.classList.add("is-pending");
        const heroChartObserver = new IntersectionObserver((entries) => {
          if (!entries.some((entry) => entry.isIntersecting)) return;
          // SVG children may have zero-area bounds while scaled to zero.
          // Reveal the whole composition from the untransformed container.
          heroChart.classList.remove("is-pending");
          heroChartObserver.disconnect();
        }, { threshold: 0.1 });
        heroChartObserver.observe(heroChart);
      }

      // On mobile the ring sits below the line chart. Start its animation
      // when the ring itself is visible, after font loading settles the layout.
      const donutTrack = document.getElementById("hero-donut-track");
      if (donutTrack && "IntersectionObserver" in window) {
        const donutObserver = new IntersectionObserver(([entry]) => {
          if (!entry.isIntersecting || entry.intersectionRatio < 0.65) return;
          animateHeroDonut();
          donutObserver.disconnect();
        }, { threshold: 0.65 });
        document.fonts.ready.then(() => donutObserver.observe(donutTrack));
      }

      // Let CSS run the ambient motion; JS only manages visibility and preference.
      if (heroChart && "IntersectionObserver" in window) {
        let chartInView = false;
        function syncHeroFlow() {
          const reduced = reducedMotionQuery.matches;
          heroChart.dataset.flow = chartInView && !document.hidden && !reduced
            ? "running" : "paused";
        }
        const flowObserver = new IntersectionObserver(([entry]) => {
          chartInView = entry.isIntersecting;
          syncHeroFlow();
        });
        flowObserver.observe(heroChart);
        document.addEventListener("visibilitychange", syncHeroFlow);
        reducedMotionQuery.addEventListener("change", syncHeroFlow);
        syncHeroFlow();
      }

      /* ============================================================
   SUBTLE PARALLAX
   ============================================================ */
      if (!prefersReducedMotion) {
        const depthEls = Array.from(
          document.querySelectorAll(".depth-mid, .depth-near"),
        ).map((el) => ({
          el,
          factor: el.classList.contains("depth-near") ? 0.03 : 0.018,
        }));
        let ticking = false;
        function updateDepth() {
          const y = window.scrollY;
          depthEls.forEach(({ el, factor }) => {
            const offset = Math.max(-14, Math.min(14, y * factor * 0.02));
            el.style.transform = `translateY(${offset}px)`;
          });
          ticking = false;
        }
        window.addEventListener(
          "scroll",
          () => {
            if (!ticking) {
              requestAnimationFrame(updateDepth);
              ticking = true;
            }
          },
          { passive: true },
        );
      }

      /* ============================================================
   HERO GRID — preserve a quiet area around the actual content bounds
   ============================================================ */
      const heroSection = document.getElementById("hero");
      const heroContent = document.getElementById("hero-content");
      const heroGridClearance = document.getElementById("hero-grid-clearance");
      const heroGridContinuation = document.getElementById(
        "hero-grid-continuation",
      );

      function updateHeroGridClearance() {
        const section = heroSection.getBoundingClientRect();
        const content = heroContent.getBoundingClientRect();
        // The extra space and feathered edge prevent a visible cutout around text.
        const padding = window.innerWidth < 768 ? 28 : 48;
        const bounds = {
          x: content.left - section.left - padding,
          y: content.top - section.top - padding,
          width: content.width + padding * 2,
          height: content.height + padding * 2,
        };
        Object.entries(bounds).forEach(([name, value]) =>
          heroGridClearance.setAttribute(name, value),
        );
        // Continue the same 40px cells across the section boundary.
        heroGridContinuation.setAttribute(
          "patternTransform",
          "translate(0 " + -(section.height % 40) + ")",
        );
      }
      const heroGridObserver = new ResizeObserver(updateHeroGridClearance);
      heroGridObserver.observe(heroSection);
      heroGridObserver.observe(heroContent);
      updateHeroGridClearance();

      /* ============================================================
   MISC
   ============================================================ */
      document.getElementById("year").textContent = new Date().getFullYear();
