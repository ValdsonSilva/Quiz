const data = [
  {
    question: "O que é Vanilla JavaScript?",
    options: [
      "JavaScript puro",
      "Uma biblioteca JavaScript",
      "Um framework JavaScript",
      "Um compilador de JavaScript",
    ],
    answer: "JavaScript puro",
  },
  {
    question: "Com qual instrução declaramos uma constante em JavaScript?",
    options: ["const", "let", "var", "define"],
    answer: "const",
  },
  {
    question: "Qual dos tipos de dado a seguir não existe em JavaScript?",
    options: ["string", "number", "boolean", "float"],
    answer: "float",
  },
  {
    question: "Qual dos métodos a seguir seleciona um elemento?",
    options: ["querySelector", "parseInt", "sort", "reduce"],
    answer: "querySelector",
  },
  {
    question:"Qual destas propriedades da a quantidade de elementos de um array?",
    options: ["qty", "length", "items", "index"],
    answer: "length",
  },
  {
    question: "Qual é a diferença entre == e === em JavaScript?",
    options: ["== compara valores e tipos, === compara apenas valores.", 
              "== compara apenas valores, === compara valores e tipos.", 
              "Ambos comparam apenas valores.", 
              "Ambos comparam valores e tipos."],
    answer: "== compara apenas valores, === compara valores e tipos.", 
  },
  {
    question: "O que é hoisting em JavaScript?",
    options:  ["É uma técnica de otimização de código",
               "É a elevação de declarações de variáveis e funções durante a fase de compilação.",
               "É o processo de criar closures em tempo de execução.",
                "Não é um conceito válido em JavaScript."],

    answer: "É a elevação de declarações de variáveis e funções durante a fase de compilação.",
  },
  {
    question: "O que é o DOM em JavaScript?",
    options:  ["Uma linguagem de programação.",
               "Uma abordagem de programação assíncrona.",
               "Um modelo de objetos para representar documentos HTML e XML.",
                "Uma biblioteca JavaScript popular."],
                
    answer: "Um modelo de objetos para representar documentos HTML e XML.",
  },
  {
    question: "Como você adicionaria um evento de clique a um elemento HTML usando JavaScript?",
    options:  ["element.onclick = minhaFuncao;",
               "element.addEventListener('click', minhaFuncao);",
               "element.click(meuEvento);",
               "element.attachEvent('click', minhaFuncao);"],
                
    answer: "element.addEventListener('click', minhaFuncao);",
  }
];

export default data;
