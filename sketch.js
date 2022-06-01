let unicorn;
let uImg;
let tImg;
let bImg;
let trains = [];

function preload() {
  uImg = loadImage('sapo.png');
  tImg = loadImage('lixo.png');
  bImg = loadImage('background.jpg');
}

function mousePressed() {
  trains.push(new Train());
}

function setup() {
  createCanvas(800, 450);
  unicorn = new Unicorn();

}

function keyPressed() {
  if (key == ' ') {
    unicorn.jump();
  }
}

function draw() {
  if (random(1) < 0.003) {
    trains.push(new Train());
  }
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
