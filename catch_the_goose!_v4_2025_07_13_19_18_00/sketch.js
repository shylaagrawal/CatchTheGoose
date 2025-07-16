//-----------------------------------------------------
// Shyla Agrawal
// 6/30/2024
// A game in which you have to use your arrow keys to move a bucket to catch a falling goose... but there's more
//-----------------------------------------------------

let goose;
let levelOne = true;
let levelTwo = false;
let levelThree = false;

function preload(){
  //preloading all of my images and sounds
  headPeeking = loadImage('assets/headpeeking.png');
  goose = loadImage('assets/goosefr.png');
  bucket = loadImage('assets/bucketfr.png');
  heart = loadImage('assets/heartfr.png');
  brokenHeart = loadImage('assets/brokenheartfr.png');
  gooseFell = loadImage('assets/goosefell.png')
  gooseStarved = loadImage('assets/goosestarved.png')
  cookie = loadImage('assets/cookie.png')
  bkg2 = loadImage('assets/bkg2.png')
  bkg3 = loadImage('assets/bkg3.png')
  gooseCaught = loadSound('assets/caught.wav');
  gooseMissed = loadSound('assets/missed.wav');
  youLost = loadSound('assets/loseSong.wav');
  youWon = loadSound('assets/winSong.wav');
  munch = loadSound('assets/munch.mp3')
  gameFont = loadFont('assets/IBMPlex.ttf');
  accentFont = loadFont('assets/accentfont.ttf');
  trans1 = loadImage('assets/trans1.gif')
  trans2 = loadImage('assets/trans2.gif')
  bkgMusic = loadSound('assets/bkgmusic.mp3')
  bkgMusic2 = loadSound('assets/bkgmusic.mp3')
  bkgMusic3 = loadSound('assets/bkgmusic.mp3')
  live1 = heart;
  live2 = heart;
  live3 = heart;
}

function setup() {
  createCanvas(400, 400);
  bkgMusic.play();
}

//ROUND #1 GLOBAL VARIABLES
let bucket;
let headPeeking;
let gameFont;
let bkgMusic;
let youWon;
let youLost;
let trans1;
let won = true;
let lost = true;
let fallRate = 3;
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
let hit = false;

//ROUND #2 GLOBAL VARIABLES
let score2 = 0;
let randGooseX = 200;
let randGooseY = 200;
let randTime;
let timer = 0; 
let timeLeft;
let startMusic2;
let won2 = true;
let lost2 = true;
let checkedClicked = true;
let status;
let trans2;
let winText = true;

//ROUND #3 GLOBAL VARIABLES
let startMusic3;


function draw() {
  
  if(levelOne) {
    
  //drawing background
  background(0);
  
  //drawing the bucket and goose :D
  imageMode(CENTER);
  image(bucket, x, 380, 40, 40);
  
  if(hit){
    image(headPeeking, x, 380, 40, 40);
  }
  
  else{
    image(goose, randValueX, y, 40, 40);
  }
  
  //making the bucket move with arrow keys
  if(keyIsDown(LEFT_ARROW)) {
    x -= fallRate + 1.5;
  }
  else if(keyIsDown(RIGHT_ARROW)) {
    x += fallRate + 1.5;
  }
  
  //making the goose fall/wrap around the screen/speed up
  y += fallRate
  if(y > 400){
    randValueX = Math.floor(random(400))
    fallRate += 0.15;
    checkedLives = true;
  }
    
  //distance formula between centers of goose and bucket
  const d = sqrt(pow(x - randValueX, 2) + pow(385 - y, 2));
  
  //changing lives and scores
  if(d <= 30 && !hit) {
    hit = true;
  }
    
  if(hit && d > 30){
    hit = false;
    score++;
    gooseCaught.play();
    y = 10;
  }
  
  if(!hit && y > 380) {
    lives--;
    gooseMissed.play();
    y = 10;
    checkedLives = false;
  }
    
  //drawing text for rules and score
  fill(225);
  textAlign(CENTER);
  textFont(gameFont);
  textSize(12);
  text("Score: " + score, 200, 200);
  text("Catch 30 geese to win :)", 200, 50);
  
  //drawingf hearts
  image(live1, 185, 215, 20, 20);
  image(live2, 200, 215, 20, 20);
  image(live3, 215, 215, 20, 20);

  
  //making sure the speed doesnt become too fast
  if (fallRate > 5) {
    fallRate = 5;
  }
  
  //managing hearts on screen
  if (lives == 3) {
    live1 = heart;
    live2 = heart;
    live3 = heart;
  }
  else if (lives == 2) {
    live1 = heart;
    live2 = heart;
    live3 = brokenHeart;
  }
  else if (lives == 1) {
    live1 = heart;
    live2 = brokenHeart;
    live3 = brokenHeart;
  }
  else if (lives == 0) {
    live1 = brokenHeart;
    live2 = brokenHeart;
    live3 = brokenHeart;
  }
  
  //if you lose!
  if (lives == 0){
    clear();
    background(0);
    fallRate = 0;
    textFont(accentFont);
    textSize(50);
    text("You lost :(", 200, 130);
    textSize(15)
    textFont(gameFont)
    text("Gerald fell to his demise", 200, 165)
    image(gooseFell, 200, 220, 100, 100)
    bkgMusic.pause();
    if(lost){
      youLost.play();
      lost = false;
    }
  }
    
  //if you win!
  if(score >= 30) {
    clear();
    background(0);
    fallRate = 0;
    textFont(accentFont);
    textSize(30);
    text("Lvl 1 COMPLETED!", 200, 80);
    bkgMusic.pause();
    if(won){
      youWon.play();
      won = false;
    }
    image(trans1, 200, 200)
    //yo this is making sure you go to the next level if you win
    setTimeout(() => {
      levelOne = false;
      levelTwo = true;
    }, 6000)
  }
    
  }
  
  if(levelTwo) {
    //drawing the background and cursor
    image(bkg2, 200, 200);
    cursor('assets/cookie.png');
    
    //background music!        
    if (!startMusic2){
      startMusic2 = setTimeout(() => {    
        bkgMusic2.play();
      })
    }
    
    //drawing the goose and the rules
    imageMode(CENTER)
    image(goose, randGooseX, randGooseY, 60, 60)
    fill(225);
    textFont(gameFont);
    textAlign(CENTER)
    textSize(12);
    text("Have you ever given a goose a cookie...?", 200, 75);
    text("Cookies: " + score2 + "/15", 200, 100)
    
    
    //displaying the timer
    if(timeLeft >= 25)
      status = "green"
    else if(timeLeft >= 11)
      status = "yellow"
    else
      status = "red"
    stroke(status)
    if (timeLeft >= 10)
      text("00:" + timeLeft, 200, 200)
    if(timeLeft < 10)
      text ("00:0" + timeLeft, 200, 200)
    noStroke()
    
    //making the goose appear around the screen
    if(!randTime)
      randTime = setInterval(() => {
        randGooseX = Math.floor(random(400))
        randGooseY = Math.floor(random(400))
        checkedClicked = true;
      }, 500)
    
    //making a timer
    timer += deltaTime/1000
    timeLeft = 50 - ceil(timer)
    
    //scoring
    if(mouseIsPressed == true) {
      const d = sqrt(pow(mouseX - randGooseX, 2) + pow(mouseY - randGooseY, 2));
      if(d <= 70 && checkedClicked) {
        score2++
        munch.play()
        checkedClicked = false;
      }
    }
    
    //if you win!
    if(score2 >= 15){
      clear();
      background(0);
      textFont(accentFont);
      textSize(30);
      image(trans2, 200, 200)
      if(winText){
        text("LVL 2 COMPLETED!", 200, 80);
      }
      setTimeout(() => {
        winText = false;
      }, 4150)
      bkgMusic2.pause();
      cursor(ARROW)
      if(won2){
        youWon.play();
        won2 = false;
      }
      setTimeout(() => {
      levelTwo = false;
      levelThree = true;
      }, 6000)
    }
    
    //if you lose!
    if(timeLeft <= 0) {
      clear();
      background(0);
      textFont(accentFont);
      textSize(50);
      text("You lost :(", 200, 130);
      textSize(15)
      textFont(gameFont)
      text("Gerald starved to death", 200, 165)
      image(gooseStarved, 200, 220, 120, 120)
      bkgMusic2.pause();
      cursor(ARROW)
      if(lost2){
        youLost.play();
        lost2 = false;
      }
    }
  }
  
  if (levelThree){
    //drawing the background
    image(bkg3, 200, 200)
    
    //background music once again
    if (!startMusic3){
      startMusic3 = setTimeout(() => {    
        bkgMusic3.play();
      })
    }
    
  }
  
}