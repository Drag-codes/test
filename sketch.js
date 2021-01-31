//add proper collision, a score system, restart button functionality, and somehow make it get faster

posy = 1000
function setup() {
  createCanvas(600, 400);
  sky = loadImage('sky.png')
  grass = loadImage('grass.jpg')
  apple = loadImage('apple.png')
  restart = createButton('Restart')
  restart.position(0, posy)
  restart.mousePressed(restart1);
}
applex = Math.floor(Math.random() * 500) + 100;
appley = -50
score = 0
speed = 2
gameover = "neutral"
gameovershow = false
function draw() {
  hit = collideRectRect(mouseX, 200, 50, 50, applex, appley, 50, 50); //collision for apple and basket
  restart.position(0, posy)
  appley = appley + speed
  background(sky);
  fill(0, 200, 0);
  image(grass, 0, 350)
  image(grass, 250, 350)
  image(grass, 500, 350)
  image(apple, applex, appley, 50, 50)
  fill(0)
  textSize(50)
  text(score, 0, 35)
  fill(181, 101, 29)
  rect(mouseX, 200, 50, 50)
  if(appley > 400) {
    gameover = "you lost!"
    gameovershow = true
  }
  
  if(gameovershow == true) {
    posy = 0
  } if(hit == true) {
      score = score + 1
      appley = -50
      applex = Math.floor(Math.random() * 450) + 100;
      speed = speed + 0.2

  } if(gameovershow == false) {
    posy = 1000
  }
}

function applefall() {
  
}

function restart1() {
  score = 0
  gameovershow = false
  appley = -50
  applex = Math.floor(Math.random() * 450) + 100;
  speed = 2
}