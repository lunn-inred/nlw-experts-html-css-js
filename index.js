const perguntas = [
    {
      pergunta: "Qual o maior macaco de todos? ",
      respostas: [
        "Babuíno",
        "Orangotango",
        "Gorila",
        "Bugio"
      ],
      correta: 2
    },
    {
      pergunta: "Qual era o nome do macaco de estimação do cantor Latino? ",
      respostas: [
        "Toninho",
        "Tales",
        "Twelves",
        "Daniel Orivaldo da Silva"
      ],
      correta: 2
    },
    {
      pergunta: "Qual personagem da Disney foi criado por gorilas desde a sua infância? ",
      respostas: [
        "Mogli",
        "Rodney",
        "Dumbo",
        "Tarzan"
      ],
      correta: 3
    },
    {
      pergunta: "Macacos também são grandes atores de cinema, você sabe dizer qual o nome do protagonista do filme Planeta dos Macacos? ",
      respostas: [
        "César",
        "Rômulo",
        "Elizângelo",
        "Cluster"
      ],
      correta: 0
    },
    {
      pergunta: "Qual o nome do gorila que puxa as pessoas no programa do ratinho? ",
      respostas: [
        "Robinho",
        "Tataco",
        "Xaropinho",
        "Tacáca"
      ],
      correta: 1
    },
    {
      pergunta: "Quanto tempo dura a gestação de orangotangos, chimpanzés e gorilas? ",
      respostas: [
        "4 meses",
        "8 meses",
        "1 mês",
        "11 meses"
      ],
      correta: 1
    },
    {
      pergunta: "Quantos temos de semelhança genética com gorilas e chimpanzés? ",
      respostas: [
        "80%",
        "50%",
        "menos de 10%",
        "mais de 98%"
      ],
      correta: 3
    },
    {
      pergunta: "Chimpanzés são carnívoros, vegetarianos ou onívoros? ",
      respostas: [
        "Vegetarianos",
        "Carnívoros",
        "Onívoros",
        "Só comem bananas"
      ],
      correta: 2
    },
    {
      pergunta: "Qual o Gênero dos Chimpanzés? ",
      respostas: [
        "Homo erectus",
        "Monotremata",
        "Pan troglodytes",
        "Homo sapiens"
      ],
      correta: 2
    },
    {
      pergunta: "Qual o menor macaco de todos? ",
      respostas: [
        "Sagui-Pigmeu",
        "Lêmure",
        "Macaco-Prego",
        "Mico-leão-dourado"
      ],
      correta: 0
    },
  ];
  const quiz = document.querySelector("#quiz")
  const template = document.querySelector("template")
  const corretas = new Set()
  
  const TotalPerguntas = perguntas.length
  const mostrarTotal = document.querySelector("#acertos span")
  
  
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector("h3").textContent = item.pergunta
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector("dl dt").cloneNode(true)
  
      dt.querySelector("span").textContent = resposta
      dt.querySelector("input").setAttribute("name", "pergunta - "+ perguntas.indexOf(item))
      dt.querySelector("input").value = item.respostas.indexOf(resposta)
      dt.querySelector("input").onchange = (event) => {
        const Verdadeira = event.target.value == item.correta
        
        corretas.delete(item)
        if (Verdadeira) {
          corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + " de " + TotalPerguntas
      }
    
    
    
    
      quizItem.querySelector("dl").appendChild(dt)
    }
    quizItem.querySelector("dl dt").remove()
  
  
    quiz.appendChild(quizItem)
  
  } 