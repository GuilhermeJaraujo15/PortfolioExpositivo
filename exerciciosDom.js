//1//

//chamamento html//
const titulo1 = document.getElementById("titulo");
const input1 = document.getElementById("input");
const botao1 = document.getElementById("botao");
const resultado = document.getElementById("result");

//ação js no html//
botao1.addEventListener("click", function () {
  const valorObtido = input.value; //pega o dado do input//

  resultado.textContent = `Olá, ${valorObtido}, Seja bem-vindo!`;

  resultado.style.color = "blue";

  resultado.appendChild("p");
});

//2//

//chamar do html//

const titulo2 = document.getElementById("title"); //h1//

const p = document.getElementById("texto"); //p//

const botao2 = document.getElementById("botao"); //button//

//interação dos elementos html com js//

botao2.addEventListener("click", function () {

  const mudarCor = (p.style.color = "green");

  const mudarCorNovamente = (p.style.backgroundColor = "yellow");
});

//3//

//puxando elementos do html//

const botao3 = document.getElementById("botao");

const div = document.getElementById("adicionado");

//interagindo com eles usando o js//

botao3.addEventListener("click", () => {
  const novoItem = document.createElement("p");

  novoItem.textContent = "Novo item adicionado!";

  div.appendChild(novoItem);
});

//4//

//chamando do html//

const paragrafos = document.querySelectorAll(".item");

const botao4 = document.getElementById("mudar");

//interação com js//

botao4.addEventListener("click", () => {
  paragrafos.forEach(function (paragrafos) {
    paragrafos.textContent = "Guilherme Jorge de Araujo";
  });
});

//Desafio Final//

const input = document.getElementById("input");

const botao5 = document.getElementById("botao");

const amostra = document.getElementById("amostra");

botao5.addEventListener("click", function () {
  const produtoAdicionado = input.value;

  const p = document.createElement("p");

  p.textContent = produtoAdicionado;

  amostra.appendChild(p);
});