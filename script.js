const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas= [
    {
        enunciado: " Qual dos seguintes é um conceito mais relacionado à IA?",
        alternativas: [
         {
            texto: "Algoritmos de previsão do tempo",
            afirmacao: [
                "O algoritmo de previsão do tempo não é tão relacionada à IA.",
                "A previsão do tempo depende de moldagem fisica dos fenomenos atmosféricos",
                "E clima é um sistema caótico e não linear, onde pequenas váriações pode ter mudanças radicais."
            ]
         },
         {
             texto: "Redes neurais artificiais",
             afirmacao:[
                 "São uma das principais ferrasmesntas associadas à IA",
                 "Podem inspiradas na estrutura e no funcionamento do cérebro humano.",
                 "E elas também tem capacidade de aprender atravez de dados.  "
             ]
         }
            
            
        ]
    },
    {
        enunciado: "Em qual área a IA tem maior impacto atualmente? ",
        alternativas: [
        {
            texto:"Desenvolvimento de vacinas", 
            afirmacao:[
                "O desenvolvimento de vacinas não possui um impacto tão grande quando nos referimos à IA na atualidade,",
                "Porém, a IA já foi e é utilizada para a aceleração do desenvolvimento das vacinas.",
                
            ]
        },
        {
            texto: "Assistentes virtuais",
            afirmacao: [
                "Sobre assistentes virtuais, a Alexa é um bom exemplo disso.",
                 "As assistentes virtuais facilitam muito o dia à dia, pois com um simples comando, elas repassam várias informações úteis."
            ]
        }
            
           
            
        ]
    },
    {
        enunciado: "Qual destes é um desafio ético importante relacionado à IA?",
        alternativas: [
            {
                texto:"O uso de IA na agricultura.", 
                afirmacao:[
                    "O Uso das inteligências artificiais na Agricultura não apresentam um grande desáfio ético,",
                    "porém, a implementação da mesma pode deixar uma graznde diferença entre grandes empresas e pequenos agriculrores",
                ]
            },
            {
                texto:  "Viés algorítmico",
                afirmacao:[
                    "O viés esta sendo um grande desafio ético,",
                    "pois pode resultar em descriminação sobre certos grupos de pessoas.",
                ]
            }
            
           
        ]
    },
    {
        enunciado: "4-Qual dos seguintes é um campo interdisciplinar frequentemente associado à IA? ",
        alternativas: [
            {
                texto:"Biologia marinha", 
                afirmacao:[
                    "Por mais que seja um campo que tem participação da IA,",
                    "são poucas pessoas que sabem dessa ligação.",
                ]
            },
            {
                texto: "Ciência de dados",
                afirmacao:[
                    "A ciência de dados envolve técnicas computacionais entre outras coisas com o objetivo de resolver problemas complexos.",
                    "e por conta disso, é ligada á IA com muita frequência.",
                ]
            }
            
            
        ]
    },
    {
        enunciado: "Qual tecnologia é frequentemente usada para treinar IA?",
        alternativas: [
            {
                texto: "Energia solar", 
                afirmacao:[
                    "A energia solar é pouco ligada à IA.",
                    "sendo utilizada a ia apenas na previsão da produção de energia.",
                ]
            },
            {
                texto: "Computação de alto desempenho (HPC)",
                afirmacao:[
                    "Os processadores potentes HPC trabalham em paralelo e ajudam a treinar a IA",
                    "eles selecionam e organizam dados importantes para garantir o treinamento",
                ]
            }
            
            
        ]
    },
];
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta (){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent ="";
    mostraAlternativas();
}

function mostraAlternativas (){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa))
        caixaAlternativas.appendChild(botaoAlternativas);
    }
    
}
function respostaSelecionada(opcaoSelecionada){
            const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
            historiaFinal += afirmacoes + " ";
            atual++;
            mostraPergunta();
    
}
function mostraResultado(){
    caixaPerguntas.textContent ="Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent ="";
}

function aleatorio(Lista){
    const posicao =Math.floor( Math.random()* Lista.length);
    return Lista[posicao];
}

mostraPergunta();
