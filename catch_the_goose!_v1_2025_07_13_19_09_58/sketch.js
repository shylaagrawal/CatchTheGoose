//-----------------------------------------------------
// Shyla Agrawal
// 6/30/2024
// A game in which you have to use your arrow keys to move a bucket to catch a falling goose
//-----------------------------------------------------

//all my global variables - im sorry...
let goose;
let bucket;
let headPeeking;
let fallRate = 2;
let y = 10;
let x = 200;
let randValueX = 200;
let score = 0;
let gooseCaught;
let ball;
let lives = 3;
let heart;
let live1;
let live2;
let live3;
let checkedLives = true;
let gameFont;
let bkgMusic;

function setup() {
  createCanvas(400, 400);
  bkgMusic.play();
}

function preload(){
  //preloading all of my images and sounds
  headPeeking = loadImage('assets/headpeeking.png')
  goose = loadImage('assets/goosefr.png')
  bucket = loadImage('assets/bucketfr.png')
  heart = loadImage('assets/heartfr.png')
  brokenHeart = loadImage('assets/brokenheartfr.png')
  gooseCaught = loadSound('assets/caught.wav')
  gooseMissed = loadSound('assets/missed.wav')
  gameFont = loadFont('assets/IBMPlex.ttf')
  accentFont = loadFont('assets/accentfont.ttf')
  bkgMusic = loadSound('assets/bkgmusic.mp3')
  live1 = heart
  live2 = heart
  live3 = heart
}

function mousePressed(){
  console.log(mouseX, mouseY)
}

function draw() {
  //drawing background
  background(0);
  
  
  //drawing the bucket
  imageMode(CENTER)
  image(bucket, x, 370, 60, 60)
  
  //making the bucket move with arrow keys
  if(keyIsDown(LEFT_ARROW)) {
    x -= fallRate + 1.5
  }
  else if(keyIsDown(RIGHT_ARROW)) {
    x += fallRate + 1.5
  }
  
  //making the goose fall/wrap around the screen/speed up
  y += fallRate
  if(y > 390){
    y -= 380
    randValueX = Math.floor(random(400))
    fallRate += 0.15
    checkedLives = true
  }
  
  //changing lives and scores and the sounds for missed/caught
  if (y > 350) {
    if (x <= randValueX + 30 && x >= randValueX - 30) {
      score += 1
      gooseCaught.play();
      background(0)
      image(headPeeking, randValueX, 370, 60, 60)
    }  
    else if ((x >= randValueX + 30 || x <= randValueX - 30) && checkedLives) {
      lives -= 1
      gooseMissed.play()
      checkedLives = false;
    }
  }
  
  else {
  //the amazing goose himself
  image(goose, randValueX, y, 70, 70)
  }
  
  //drawing text for rules and score
  fill(225);
  textAlign(CENTER)
  textFont(gameFont)
  text("Score: " + score, 200, 200)
  text("Catch 30 geese to win :)", 200, 50)
  
  //drawingf hearts
  image(live1, 185, 215, 20, 20)
  image(live2, 200, 215, 20, 20)
  image(live3, 215, 215, 20, 20)

  
  //making sure the speed doesnt become too fast
  if (fallRate > 5) {
    fallRate = 5
  }
  
  //managing hearts on screen
  if (lives == 3) {
    live1 = heart
    live2 = heart
    live3 = heart
  }
  
  else if (lives == 2) {
    live1 = heart
    live2 = heart
    live3 = brokenHeart
  }
  
  else if (lives == 1) {
    live1 = heart
    live2 = brokenHeart
    live3 = brokenHeart
  }
  
  else if (lives == 0) {
    live1 = brokenHeart
    live2 = brokenHeart
    live3 = brokenHeart
  }
  
  //if you win!
  if(score >= 300000) {
    clear();
    background(0);
    fallRate = 0
    textFont(accentFont)
    textSize(50)
    text("You Won!", 200, 150)
    image(headPeeking, 200, 200, 70, 70)
  }
  
  //if you lose!
  if (lives == 0){
    clear()
    background(0);
    fallRate = 0
  }
}