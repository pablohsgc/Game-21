const mao_jogador = document.querySelector("#mao-jogador");
const botao = document.querySelector("#botao");
const botao_parar = document.querySelector("#botao-parar");
const span_parar = document.querySelector("#span-parar");
const span_pontuacao = document.querySelector("#span-pontuacao");
var pontos = 0;

var baralho = new Baralho(["A","2","3","4","5","6","7","8","9","10","Q","J","K"],["espadas","paus","copas","ouros"]);
var cartas_jogo = [];
var cartas_em_campo = [];

function distribuiCarta(quantidade_cartas){
    let novas_cartas = baralho.distribuiCartas(quantidade_cartas);
    cartas_jogo = cartas_jogo.concat(novas_cartas);
    
    let cartas = "";

    cartas_jogo.forEach((carta,index) => {
        let cor = (carta.nipe == "ouros" || carta.nipe == "copas") ? "red":"black";
        cartas += montaCarta(carta.simbolo,carta.nipe,cor,index);
        cartas_em_campo.push(carta);
    });

    mao_jogador.innerHTML = cartas;
    
    cartas_jogo.forEach((carta,index) => {
        if (carta.simbolo === "A") {
            document.querySelector(`#card_${index}`).onclick = () => altera_peso(index);
        }
    });
}

function pontuacao(){
    pontos = 0;

    for ( let carta of cartas_jogo) {
        pontos += carta.peso;
    }

    span_pontuacao.innerHTML = pontos;

    if ( pontos == 21) {
        venceu();
        botao.onclick = null;
    }

    if ( pontos > 21) {
        perdeu();
        botao.onclick = null;
    }
}

function altera_peso(id){
    cartas_jogo[id].peso = (cartas_jogo[id].peso == 1) ? 11 : 1;
    pontuacao();
}

function venceu(){
    botao.className = "carta-baralho label-game verde";
    botao.innerHTML = "21!!!";
}

function perdeu(){
    botao.className = "carta-baralho label-game vermelho";
    botao.innerHTML = "Estourou! Clique no botão abaixo";
}

// callback para pedir carta
function pedirCarta(){
    distribuiCarta(1);
    pontuacao();
}

// callback para parar o jogo
function pararJogo(){
    if ( pontos >= 12) {
        novoJogo();
    } else {
        alert("Você ainda não pode parar o jogo!");
    }
}

botao.onclick = null;
botao_parar.onclick = () => pararJogo();

const novoJogo = () => {
    //inicializa cartas
    cartas_jogo = [];
    baralho.montaBaralho();
    baralho.embaralha();
    distribuiCarta(2);
    pontuacao();

    //inicializa botoes
    botao.onclick = () => pedirCarta();

    //inicializa spans
    span_pontuacao.style.display = "block";
    span_parar.style.display = "none"

    botao.className = "carta-baralho label-game azul";
    botao.innerHTML = "Pedir Carta";
}

botao_parar.addEventListener("mouseout", function() {
  // Código a ser executado quando o mouse estiver sobre o elemento
  span_pontuacao.style.display = "block";
  span_parar.style.display = "none";
});

// Adiciona o evento de mouseout
botao_parar.addEventListener("mouseover", function() {
  // Código a ser executado quando o mouse sair do elemento
  span_pontuacao.style.display = "none";
  span_parar.style.display = "block";
});

novoJogo();