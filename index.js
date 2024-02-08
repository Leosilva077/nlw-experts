const perguntas = [
    {
      pergunta: "Qual é a capital do Brasil?",
      respostas: [
        "São Paulo",
        "Rio de Janeiro",
        "Brasília",
      ],
      correta: 2,
    },
    {
      pergunta: "Quem escreveu a peça 'Romeu e Julieta'?",
      respostas: [
        "William Shakespeare",
        "Jane Austen",
        "Charles Dickens",
      ],
      correta: 0,
    },
    {
      pergunta: "Qual é o maior planeta do sistema solar?",
      respostas: [
        "Vênus",
        "Júpiter",
        "Marte",
      ],
      correta: 1,
    },
    {
      pergunta: "Qual é o símbolo químico para o elemento oxigênio?",
      respostas: [
        "O",
        "O2",
        "H2O",
      ],
      correta: 0,
    },
    {
      pergunta: "Quem pintou a Mona Lisa?",
      respostas: [
        "Vincent van Gogh",
        "Pablo Picasso",
        "Leonardo da Vinci",
      ],
      correta: 2,
    },
    {
      pergunta: "Qual é o nome da famosa estátua no Rio de Janeiro, Brasil?",
      respostas: [
        "Estátua da Liberdade",
        "Cristo Redentor",
        "Estátua de David",
      ],
      correta: 1,
    },
    {
      pergunta: "Qual é o maior animal terrestre?",
      respostas: [
        "Elefante",
        "Girafa",
        "Rinoceronte",
      ],
      correta: 0,
    },
    {
      pergunta: "Qual é o número atômico do hidrogênio?",
      respostas: [
        "1",
        "2",
        "3",
      ],
      correta: 0,
    },
    {
      pergunta: "Quem foi o primeiro presidente dos Estados Unidos?",
      respostas: [
        "George Washington",
        "Thomas Jefferson",
        "Abraham Lincoln",
      ],
      correta: 0,
    },
    {
      pergunta: "Qual é o nome da famosa ópera de Giuseppe Verdi?",
      respostas: [
        "A Flauta Mágica",
        "Carmen",
        "La Traviata",
      ],
      correta: 2,
    },
  ];
  
   const quiz = document.querySelector('#quiz')
    const template = document.querySelector('template')
  
    const corretas = new Set()
    const totalDePerguntas = perguntas.length
    const mostrarTotal = document.querySelector('#acertos span')
    mostrarTotal.textContent = corretas.size + 'de' + totalDePerguntas
  
    for(const item of perguntas) {
      const quizItem = template.content.cloneNode(true)
      quizItem.querySelector('h3').textContent = item.pergunta
  
      for(let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
          const estaCorreta = event.target.value == item.correta
  
          corretas.delete(item)
         if (estaCorreta) {
           corretas.add(item)
         }
          mostrarTotal.textContent = corretas.size  + ' de ' + totalDePerguntas
        }
  
        quizItem.querySelector('dl').appendChild(dt)
      }
  
  
      quizItem.querySelector('dl dt').remove()
  
  
      quiz.appendChild(quizItem)
    }
  