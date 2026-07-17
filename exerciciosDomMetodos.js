//1-filter// 
 
 //chamamento//

      const nomes = document.getElementById("nomes");

      const botao1 = document.getElementById("botao1");

      const p1 = document.getElementById("p");

      //interação js//

      botao1.addEventListener("click", function () {
        const valorInput = nomes.value.trim().split(",");

        const minusculo = valorInput.map(item => item.trim());

        const analise = minusculo.filter(nome => nome.startsWith('a') || nome.startsWith('A') );

        p1.textContent = `O(s) nome(s) que começa(m) com 'A', é(são): ${analise.join(', ')}.`
      });

//2-filter//

//chamamento//

const input1 = document.getElementById("valores");

const botao2 = document.getElementById("botao2");

const p2 = document.getElementById("p2");

//interação//

botao2.addEventListener("click", function () {
  const pegarDados = input1.value.split(",").map(Number);

  const analiseDosDados = pegarDados.filter((numeros) => numeros >= 7);

  p.textContent = `O(s) número(s) maior(es) ou igual(is) a sete, é(são): ${analiseDosDados.join(", ")}`;
});

//3-filter//

//chamamento//

const input2 = document.getElementById("valores2");

const botao3 = document.getElementById("botao3");

const p3 = document.getElementById("p3");

//interação//

botao3.addEventListener('click', function(){

    const dadosInput = input2.value.split(',').map(Number);

    const analiseDosDadosdois = dadosInput.filter(dadosInputdois => dadosInputdois % 3 === 0);
    
    p3.textContent = `O(s) número(s) múltiplo(s) de três, é(são): ${analiseDosDadosdois.join(', ')}.`

})

//1-find//

//chamamento//

const input3 = document.getElementById("valores3");

const botao4 = document.getElementById("botao4");

const p4 = document.getElementById("p4");

//interação js//

botao4.addEventListener('click', function (){

    const dadosInputtres =  input3.value.split(',').map(Number);

    const analiseDosDadostres = dadosInputtres.find(dado => dado < 0);

    p4.textContent = `O número menor do que 0, entre os postos, é: ${analiseDosDadostres}.`

})

//2-find//

//chamamento//

const input = document.getElementById("num");

const botao = document.getElementById("botao");

const p = document.getElementById("p");

//interação//

botao.addEventListener("click", function () {
  const dStringPArray = input.value.split(",").map(Number);

  const analiseInput = dStringPArray.find((i) => i > 100);

  if (analiseInput === undefined) {
    p.textContent = `Nos números postos, não há maiores do que 100.`;
  } else {
    p.textContent = `O número maior do que cem, é: ${analiseInput}.`;
  }
});

//3-find//

//chamamento//

const input = document.getElementById("num");

const botao = document.getElementById("botao");

const p = document.getElementById("p");

//interação//

botao.addEventListener("click", function () {
  const nomeInput = input.value.split(",").map((i) => i.trim().toLowerCase());

  const analiseInput = nomeInput.find((d) => d.includes("z"));

  if (analiseInput != undefined) {
    p.textContent = `A primeira palavra com "z", é: ${analiseInput}.`;
  } else {
    p.textContent = `Não há a letra "z" nas palavras postas.`;
  }
});

//1-forEach//

//chamamento//

const input = document.getElementById("num");

const botao = document.getElementById("botao");

const p = document.getElementById("p");

//interação//

botao.addEventListener("click", function () {
  const dadosInput = input.value.split(",").map((d) => d.trim());

  let vazio = "";

  dadosInput.forEach((f) => {
    vazio += ` Eu gosto de ${f}.`;
  });

  p.textContent = vazio;
});

//2-forEach//

//chamamento//

const input = document.getElementById("num");

const botao = document.getElementById("botao");

const p = document.getElementById("p");

//interação//

botao.addEventListener("click", function () {
  const dadosInput = input.value.split(",").map((d) => Number(d.trim()));

  let vazio = "";

  dadosInput.forEach((f) => {
    f = f - 10;

    vazio += ` Preço com desconto de R$10.00: ${f}. `;
  });

  p.textContent = vazio;
});

//3-forEach//

//chamamento//

const input = document.getElementById("num");

const botao = document.getElementById("botao");

const p = document.getElementById("p");

//interação//

botao.addEventListener("click", function () {
  const dadosInput = input.value.split(",").map((d) => Number(d.trim()));

  let vazio = "";

  dadosInput.forEach((f) => {
    if (f >= 7) {
      vazio += ` Aprovado.`;
    } else {
      vazio += ` Reprovado.`;
    }
  });

  p.textContent = `${vazio}`;
});

//1-reduce//

//chamamento//

const input = document.getElementById("num");

const botao = document.getElementById("botao");

const p = document.getElementById("p");

//interação//

botao.addEventListener("click", function () {
  const dadosInput = input.value.split(",").map((d) => Number(d.trim()));

  const calculoMedia =
    dadosInput.reduce((a, b) => a + b, 0) / dadosInput.length;

  p.textContent = `A média dos números postos, é: ${calculoMedia}.`;
});

//2-reduce//

//chamamento//

const input = document.getElementById("num");

const botao = document.getElementById("botao");

const p = document.getElementById("p");

//interação//

botao.addEventListener("click", function () {
  const dadosInput = input.value.split(",").map((d) => Number(d.trim()));

  const calculoProduto = dadosInput.reduce((a, b) => a * b, 1);

  p.textContent = `A multiplicação dos números postos, é: ${calculoProduto}.`;
});

//3-reduce//

//chamamento//

const input = document.getElementById("num");

const botao = document.getElementById("botao");

const p = document.getElementById("p");

//interação//

botao.addEventListener("click", function () {
  const dadosInput = input.value.split(",").map((d) => d.trim());

  const juntar = dadosInput.reduce((a, b) => a + "" + b);

  p.textContent = juntar;
});