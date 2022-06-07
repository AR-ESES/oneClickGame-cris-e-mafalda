let jump;
let snd;
let unicorn;
let uImg;
let tImg;
let bImg;
let trains = [];


function preload() {
   soundFormats('mp3');
  snd = loadSound("buddy.mp3");
  jump = loadSound("jump.mp3");
  uImg = loadImage('sapo.png');
  tImg = loadImage('lixo.png');
  bImg = loadImage('cenário.png');
  
}

function setup() {
  createCanvas(800, 450);
  unicorn = new Unicorn(); 
}

function keyPressed() {
  if (key == ' ') {
    unicorn.jump(); //sapo salta
     jump.play();
  }
}

function draw() {
  if (random(1) < 0.005) {
    trains.push(new Train()); //aparecem novos obstáculos
  }

  background(bImg);
  for (let t of trains) {
    t.move();
    t.show();
    if (unicorn.hits(t)) {
      console.log('game over');
      noLoop();

  }
  }
  unicorn.show();
  unicorn.move();
}

  function mouseClicked() {
  snd.play();
}
