var aeroplane,gift,ground
var aeroplaneImg,giftImg,groundImg,backgroundImg
var gameOver,reset
var gameOverImg, resetImg
function preload() {
 aeroplaneImg = loadImage("aeroplane.png")
 giftImg = loadImage("gift.png")
 backgroundImg = loadImage("bg.png")
 gameOverImg = loadImage("gameOver.png")
resetImg = loadImage("restart.png")
}


function setup() {
createCanvas(600,800)
aeroplane = createSprite(40,300)
aeroplane.addImage(aeroplaneImg)
aeroplane.scale = 0.5

}


function draw() {
 // background(backgroundImg);
 aeroplane.velocityX += 3
  if(keyDown(RIGHT_ARROW)){
    console.log("move")
    aeroplane.x = aeroplane.x + 10
  }
  aeroplane.x = mouseX
  drawSprites()
  }

