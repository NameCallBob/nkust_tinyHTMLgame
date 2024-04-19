var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas)


// Load the background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
  // show the background image
  bgReady = true;
};
bgImage.src = "images/background.png";
// Load the hero image
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
  // show the here image
  heroReady = true;
};
heroImage.src = "images/hero.png";

// Load the monster image
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
  // show the monster image
  monsterReady = true;
};
monsterImage.src = "images/monster.png";

//test

var trapReady = false;
var trapImage = new Image();
trapImage.onload = function () {
  // show the monster image
  trapReady = true;
};
trapImage.src = "images/bomb1.png";

var monster1Ready = false;
var monster1Image = new Image();
monster1Image.onload = function () {
  // show the monster image
  monster1Ready = true;
};
monster1Image.src = "images/monster1.png";

var monster2Ready = false;
var monster2Image = new Image();
monster2Image.onload = function () {
  // show the monster image
  monster2Ready = true;
};
monster2Image.src = "images/monster2.png";

var monster3Ready = false;
var monster3Image = new Image();
monster3Image.onload = function () {
  // show the monster image
  monster3Ready = true;
};
monster3Image.src = "images/monster3.png";

var bossReady = false
var bossappear = false
var bossImage = new Image();
bossImage.src = "images/boss.png";
var BOSSlimit = 0


//test
var audio = new Audio('soundeffect.mp3')

var 來個蹦蹦 = new Audio('爆炸音效.mp3')


//test

// Create the game objects

var hero = {
  speed: 512// movement speed of hero in pixels per second
};

var score = 0;var scoretimes = 0
 var limit1 = 1 ; var limit2 = 1;var limit3 = 1;var limit4 = 1 ;var Tlimit = 1  ;var round = 1
var monster = {}; 
var monster1 = {}; //test
var monster2 = {}; //test
var monster3 = {}; //test

var boss ={}
var blood = 10

var trap = {}
var monstersCaught = 0;
// Handle keyboard controls
var keysDown = {};
// Check for keys pressed where key represents the keycode captured
addEventListener("keydown", function (key) {
  keysDown[key.keyCode] = true;
}, false);
addEventListener("keyup", function (key) {
  delete keysDown[key.keyCode];
}, false);
// Reset the player and monster positions when player catches a monster
var reset = function () {
  // Reset player's position to centre of canvas
  hero.x = canvas.width / 2;
  hero.y = canvas.height / 2;
  // Place the monster somewhere on the canvas randomly
  
  monster.x = 32 + (Math.random() * (canvas.width - 64));
  monster.y = 32 + (Math.random() * (canvas.height - 64));
  //test
  trap.x = 32 + (Math.random() * (canvas.width - 64));
  trap.y = 32 + (Math.random() * (canvas.width - 64));
  monster1.x = 32 + (Math.random() * (canvas.width - 64));
  monster1.y = 32 + (Math.random() * (canvas.height - 64));
  monster2.x = 32 + (Math.random() * (canvas.width - 64));
  monster2.y = 32 + (Math.random() * (canvas.height - 64));
  monster3.x = 32 + (Math.random() * (canvas.width - 64));
  monster3.y = 32 + (Math.random() * (canvas.height - 64));

  
  //test

  if (monster1.x == hero.x ){monster1.x + (Math.random()*15)}
  if (monster1.y == hero.y ){monster1.y + (Math.random()*15)}
  if (monster2.x == hero.x ){monster2.x + (Math.random()*15)}
  if (monster2.y == hero.y ){monster2.y + (Math.random()*15)}
  if (monster3.x == hero.x ){monster3.x + (Math.random()*15)}
  if (monster3.y == hero.y ){monster3.y + (Math.random()*15)}

  if (monster.x == hero.x ){monster.x + (Math.random()*15)}
  if (monster.y == hero.y ){monster.y + (Math.random()*15)}

  

  monsterReady = true
  monster1Ready = true
  monster2Ready = true
  monster3Ready = true
  trapReady =true

};
var Bossreset = function(){
  
  boss.x = 32 + (Math.random() * (canvas.width - 64));
  boss.y = 32 + (Math.random() * (canvas.height - 64));
  trap.x = 32 + (Math.random() * (canvas.width - 64));
  trap.y = 32 + (Math.random() * (canvas.width - 64));
  bossReady = true
  trapReady = true


}

// Update game objects - change player position based on key pressed
var update = function (modifier) {
  if (38 in keysDown||83 in keysDown) { // Player is holding up key
    hero.y -= hero.speed * modifier;
  }
  if (40 in keysDown||87 in keysDown) { // Player is holding down key
    hero.y += hero.speed * modifier;
  }
  if (37 in keysDown||65 in keysDown) { // Player is holding left key
    hero.x -= hero.speed * modifier;
  }
  if (39 in keysDown||68 in keysDown) { // Player is holding right key
    hero.x += hero.speed * modifier;
  }
  
  
  // Check if player and monster collider
  if (limit4 == round &&
    hero.x <= (monster.x + 32)
    && monster.x <= (hero.x + 32)
    && hero.y <= (monster.y + 32)
    && monster.y <= (hero.y + 32)
  ) {
    monsterReady = false;
    monstersCaught++;score+=10;audio.play();++limit4 
    
    ;
  }
  // //test
  if (limit1 == round &&
    hero.x <= (monster1.x + 32)
    && monster1.x <= (hero.x + 32)
    && hero.y <= (monster1.y + 32) 
    && monster1.y <= (hero.y + 32)
  ) {
    monster1Ready = false;
    monstersCaught++;score+=10;audio.play() ;++limit1
    ;
  }

  

  if (limit2 == round &&
    hero.x <= (monster2.x + 32)
    && monster2.x <= (hero.x + 32)
    && hero.y <= (monster2.y + 28)
    && monster2.y <= (hero.y + 28)
  ) {
    monster2Ready = false;
    monstersCaught++ ;score+=10;++limit2;audio.play()
    ;
  }

  if (limit3 == round &&
    hero.x <= (monster3.x + 32)
    && monster3.x <= (hero.x + 32)
    && hero.y <= (monster3.y + 28)
    && monster3.y <= (hero.y + 28)
  ) {
    monster3Ready = false;
    ;monstersCaught++ ;score+=10 ;++limit3;audio.play()
    
    
  }

  if (
    hero.x <= (trap.x + 28)
    && trap.x <= (hero.x + 28)
    && hero.y <= (trap.y + 41) 
    && trap.y <= (hero.y + 41)
  ) {
    if(trapReady == true && bossReady == true){score-=100;來個蹦蹦.play();trapReady = false;Bossreset()}
    if(trapReady == true && bossReady == false) {score-=30;來個蹦蹦.play();trapReady = false;reset()}
    
    
    
    
        ;
  }
  
  if(monstersCaught >= 4 * round){reset();}

 
    //


  
  if (bossappear = true){
  if (BOSSlimit == round &&
    hero.x <= (boss.x + 50)
    && boss.x <= (hero.x + 50)
    && hero.y <= (boss.y + 41)
    && boss.y <= (hero.y + 41)
  ) {
    bossReady = false;
    blood = blood - 1
    score = score + 300;BOSSlimit++;round++;
    if(trapReady == false){Tlimit++};audio.play();Bossreset()
    
  }

  if(Math.floor(monstersCaught / 4)  == round){
    round = round + 1
    Tlimit = round
    ;}  
    
    if (monstersCaught == 16 ){monstersCaught--,Bossreset(),BOSS()}}}
  
  
  

  

  




var BOSS = function() {
    monsterReady = false
    monster1Ready = false
    monster2Ready = false
    monster3Ready = false
   
    bossappear = true ;bossReady = true
    BOSSlimit = round
}



// Draw everything on the canvas
var render = function () {
  if (bgReady) {
    ctx.drawImage(bgImage, 0, 0);
  }
  if (heroReady) {
    ctx.drawImage(heroImage, hero.x, hero.y);
  }
  if (monsterReady) {
    ctx.drawImage(monsterImage, monster.x, monster.y);
  }
  //test
  if (monster1Ready) {
    ctx.drawImage(monster1Image, monster1.x, monster1.y);
  }
  if (monster2Ready) {
    ctx.drawImage(monster2Image, monster2.x, monster2.y);
  }
  if (monster3Ready) {
    ctx.drawImage(monster3Image, monster3.x, monster3.y);
  }
  if(bossReady){
    ctx.drawImage(bossImage,boss.x,boss.y)
  }
  if (trapReady) {
    ctx.drawImage(trapImage, trap.x, trap.y);
  }
  // Display score and time 
  ctx.fillStyle = "rgb(250, 250, 250)";
  ctx.font = "24px Helvetica";
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  ctx.fillText("分數: " + score, 20, 20);
  ctx.fillText("時間: " + count, 20, 50);
  ctx.fillText("回合 :" + round , 400 , 20);
  ctx.fillText("Boss血量 :" + blood ,200,20)
  // Display game over message when timer finished
  if(score <= -500) {ctx.fillText("遊戲結束 ! !", 200, 220);ctx.fillText("你死了", 200, 180)}
  if(finished==true && blood == 0 && score >= -500){if(blood == 0 && scoretimes == 0){score=score+1000,scoretimes++}
    ctx.fillText("遊戲結束 ! !", 200, 220); ctx.fillText("分數 ="+ score, 200, 180)
  }
  if(finished == true && count == 0 && blood > 0){
    ctx.fillText("遊戲結束 ! !", 200, 220); ctx.fillText("你未能殺死怪物", 200, 280)
  }
  
  
  
};
var count = 60; // how many seconds the game lasts for - default 30
var finished = false;
var counter =function(){
  
  count=count-1; 
  // countown by 1 every second
  // when count reaches 0 clear the timer, hide monster and
  // hero and finish the game
  if (count <= 60) {
    if (16 in keysDown) {
      update(0.1)
    }
  }
  
  if (count <= 0 || blood == 0 || score <= -500)
    {
      // stop the timer
       clearInterval(counter);
       // set game to finished
       finished = true;
       count=0;
       // hider monster and hero
       monsterReady=false;trapReady = false
       monster1Ready=false;monster2Ready=false;monster3Ready=false
       heroReady=false;
       bossReady= false
    }
  if (blood <= -10){
    alert("看來你玩到出Bug了，強制中止搂")
    document.location.reload()
  }
}
// timer interval is every second (1000ms)
setInterval(counter, 1000);
// The main game loop
var main = function () {
  // run the update function
  update(0.01); // do not change
  // run the render function
  render();
  // Request to do this again ASAP
  requestAnimationFrame(main);
};
// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.requestAnimationFrame || w.mozRequestAnimationFrame;
// Let's play this game!
reset();
main();

