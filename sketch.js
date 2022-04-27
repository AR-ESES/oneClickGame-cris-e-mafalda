let sapo;
let sImg;
let aImg;
let bImg;
let abelhas = [];
let soundClassifier;

function preload() {
  const options = {
    probabilityThreshold: 0.95
  };
  soundClassifier = ml5.soundClassifier('SpeechCommands18w', options);
  sImg = loadImage('sapo.png');
  aImg = loadImage('abelha.png');
  bImg = loadImage('background.png');
}

function mousePressed() {
  abelhas.push(new Abelha());
}

function setup() {
  createCanvas(800, 450);
  sapo = new Sapo();
  soundClassifier.classify(gotCommand);
}

function gotCommand(error, results) {
  if (error) {
    console.error(error);
  }
  console.log(results[0].label, results[0].confidence);
  if (results[0].label == 'up') {
    sapo.jump();
  }
}

function keyPressed() {
  if (key == ' ') {
    sapo.jump();
  }
}

function draw() {
  
  if (random(1) < 0.005) {
    abelhas.push(new Abelha());
  }
  
  background(bImg);
  for (let a of abelhas) {
    a.move();
    a.show();
    if (sapo.hits(a)) {
      console.log('game over');
      noLoop();
    }
  }

  sapo.show();
  sapo.move();
}