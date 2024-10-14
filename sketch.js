// variáveis da raquete
let xbolinha = 300;
let ybolinha = 200;
let diametro = 13;
let raio = diametro / 2;

// variaveis velocidade bolinha
let velocidadexBolinha = 6;
let velocidadeyBolinha = 6;

// variáveis raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

// variáveis raquete oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

// colidiu
let colidiu = false;

// placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

//sons do jogo
let raquetada;
let ponto;
let trilha;


function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
    background(0);
    mostraBolinha();
    movimentaBolinha();
    verificaColisaoBorda();
    mostraRaquete(xRaquete, yRaquete);
    movimentaMinhaRaquete();
    mostraRaqueteOponente(xRaqueteOponente, yRaqueteOponente);
    movimentaRaqueteOponente();
    verificaColisaoRaquete (xRaqueteOponente, yRaqueteOponente);
    verificaColisaoRaquete (xRaquete, yRaquete);
    incluiPlacar();
    marcaPonto();
    bolinhaNaoFicaPresa();
    
}

function mostraBolinha(){
  
  circle(xbolinha, ybolinha, diametro);
  
}


 function movimentaBolinha() {
   xbolinha += velocidadexBolinha ;
   ybolinha += velocidadeyBolinha ;
 }
  
function verificaColisaoBorda(){
  if (xbolinha + raio > width || xbolinha - raio < 0) {
    velocidadexBolinha *= -1;
                   
    }
  if (ybolinha + raio > height || ybolinha - raio < 0) {
    velocidadeyBolinha *= -1;
                   
    }
  
}
function mostraRaquete (xRaquete, yRaquete) {
  rect(xRaquete, yRaquete, raqueteComprimento, raqueteAltura);
}

function movimentaMinhaRaquete () {
  if(keyIsDown(UP_ARROW)) { 
  yRaquete -= 10;
  }
  
  if(keyIsDown(DOWN_ARROW)) { 
    yRaquete += 10;
    
  }
}
function mostraRaqueteOponente(xRaqueteOponente, yRaqueteOponente) {
rect (xRaqueteOponente, yRaqueteOponente, raqueteComprimento, raqueteAltura)
}

function movimentaRaqueteOponente() {
    velocidadeYOponente = ybolinha - yRaqueteOponente - raqueteComprimento / 2 - 30;
    yRaqueteOponente += velocidadeYOponente
}
 
function verificaColisaoRaquete (x, y) {
  colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xbolinha, ybolinha, raio);
  if (colidiu) { 
    velocidadexBolinha *= -1; 
    raquetada.play();
  }
}
function incluiPlacar(){
    stroke(255)
    textAlign(CENTER);
    textSize(16);
    fill(color(255,140, 0));
    rect(150, 10, 40, 20);
    fill(255);
    text(meusPontos, 170, 26);
    fill(color(255,140, 0));
    rect(450, 10, 40, 20);
    fill(255);
    text(pontosDoOponente, 470, 26);
  
}
function marcaPonto() {
  if (xbolinha > 590) {
    meusPontos += 1;
    ponto.play();
  }
  if (xbolinha < 10) {
    pontosDoOponente += 1;
    ponto.play();
  }
}
function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

function bolinhaNaoFicaPresa(){
    if (xbolinha - raio < 0){
    xbolinha = 23
    }
}


