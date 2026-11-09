# Portfólio do 3º semestre

Página estática em HTML, CSS e JavaScript, sem etapa de build.

## Organização

- `index.html`: estrutura e conteúdo semântico da página.
- `styles.css`: estilos da página.
- `main.js`: dados, renderização dos cartões e interações.
- `tailwind.config.js`: configuração do Tailwind CSS usado pela página.
- `i18n3.js`: alternância e conteúdo dos idiomas.

## Prévia local

Abra `index.html` no navegador ou sirva a pasta com `python -m http.server 8000` e acesse `http://localhost:8000/portfolioTres/`.

> O Tailwind continua sendo carregado pelo CDN para preservar a publicação sem build. Para otimizar a versão de produção, o próximo passo é compilar os estilos com o Tailwind CLI e servir o CSS gerado localmente.
