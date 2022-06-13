// Quais são as variáveis?
// Quais são os dados de entrada?
// Quais são os dados de saída?

const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const respostas = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
]


//Clicar em fazer pergunta
function fazerPergunta() {
  if(inputPergunta.value === "") {
    alert("Digite sua pergunta");
    return
  }
  const pergunta = "<div>" + inputPergunta.value + "</div>"
  // gerar número aleatório
  const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

  console.log(respostas[numeroAleatorio])
  elementoResposta.innerHTML = pergunta + "&#x1F52E" + respostas[numeroAleatorio]
  
  //Sumir a resposta depois de 3 segundos
  setTimeout(()=> {
    elementoResposta.style.opacity = 0;
  }, 3000)

  //Recarregar a página após 5 segundos
  setTimeout(()=> {
    document.location.reload();
  }, 4000)


}

// Melhorar aplicação
  // Monstrar resposta sem que precise recarregar a página para isso.

// Refazer do zero aplicando conceitos novos, como utlizar uma api por exemplo?
