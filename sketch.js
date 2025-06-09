let cidade = 0;
let campo = 0;
let pontoCidade = 0;
let pontoCampo = 0;
let jogoAtivo = true;

function setup() {
  createCanvas(600, 350);
  textAlign(LEFT, CENTER);
}

function draw() {
  ativaJogo();
  desenhacidadeecampo();
  desenhaLinhaDeChegada();
  mostraPontuacao();

  if (jogoAtivo) {
    verificaVencedor();
  }
}

function ativaJogo() {
  if (document.hasFocus()) {
    background("blue");  // Quando o jogo está em foco, o fundo é azul
  } else {
    background("green");  // Quando não está em foco, o fundo é verde
  }
}

function desenhacidadeecampo() {
  textSize(40);
  text("🧑‍🦱", cidade, 100);
  text("🧑‍🌾", campo, 300);
}

function desenhaLinhaDeChegada() {
  fill("white");
  rect(550, 0, 10, 400);
  fill("black");
  for (let yAtual = 0; yAtual < 400; yAtual += 20) {
    rect(550, yAtual, 10, 10);
  }
}

function mostraPontuacao() {
  fill("white");
  textSize(20);
  text("Pontos Cidade: " + pontoCidade, 20, 30);
  text("Pontos Campo: " + pontoCampo, 20, 60);
}

function verificaVencedor() {
  if (cidade > 550) {
    text("Cidade venceu!", 50, 200);
    pontoCidade++;
    jogoAtivo = false;
    noLoop();
  }
  if (campo > 550) {
    text("Campo venceu!", 50, 200);
    pontoCampo++;
    jogoAtivo = false;
    noLoop();
  }
}

function keyReleased() {
  if (!jogoAtivo) return;

  if (key == "a") {
    cidade += random(10, 20);
  }
  if (key == "s") {
    campo += random(10, 20);
  }
}

