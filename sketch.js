function preload() {
  groundimg=loadImage("images/ground.png");
  stairsimg=loadImage("images/stairs.png")
  mariorightrunningimg=loadAnimation("images/rman1.png","images/rman2.png","images/rman3.png")
  marioleftrunningimg=loadAnimation("images/lman1.png","images/lman2.png","images/lman3.png")
  mariouprunningimg=loadAnimation("images/jman2.png","images/jman2.png")
  pipeimg=loadImage("images/pipe.png")
  brickimg=loadImage("images/brick.jpg")
  turtleimgright=loadAnimation("images/enemy1right.png","images/enemy2right.png")
  turtleimgleft=loadAnimation("images/enemy1left.png","images/enemy2left.png")
  shortpipeimg=loadImage("images/shortpipe.png")
  cactusimg=loadImage("images/cactus.png")
  enemy1img=loadAnimation("images/nail1.png","images/nail2.png")
  arrowimg=loadAnimation("images/a1.png","images/a2.png","images/a3.png","images/a4.png")
  castleimg=loadImage("images/castle.png")
  flagimg=loadImage("images/flag.png")
  qbrickimg=loadImage("images/qbrick.jpg")
  fstickimg=loadImage("images/fstick.jpg")
  coinimg=loadImage("images/coin.png")
  bg=loadImage("images/bg.png")
  skullimg=loadImage("images/skuld.png")
  heartimg=loadImage("images/heart.png")
  rboaredimg=loadImage("images/rboared.png")
  restartimg=loadImage("images/restart.png")
  youwinimg=loadImage("images/youwin.jpg")
  gameoverimg=loadImage("images/gameover.png")
  //loading sound
  coinc=loadSound("sound/coinc.wav")
  jumpsound=loadSound("sound/jump.wav")
  mariodiesound=loadSound("sound/mariodied.wav")
  nextlvlsound=loadSound("sound/nextlevel.mp3")
  stagecsound=loadSound("sound/stagec.wav")



}

function setup(){
canvas=createCanvas(1300,650)

//creating grounds

pipe1=createSprite(400,570)
pipe1.addImage(pipeimg)
pipe1.scale=0.3

pipe2=createSprite(1400,500)
pipe2.addImage(pipeimg)
pipe2.scale=0.3
pipe3=createSprite(1500,550)
pipe3.addImage(pipeimg)
pipe3.scale=0.3
pipe4=createSprite(1600,600)
pipe4.addImage(pipeimg)
pipe4.scale=0.3
pipe5=createSprite(1700,650)
pipe5.addImage(pipeimg)
pipe5.scale=0.3

pipe6=createSprite(2100,485)
pipe6.addImage(pipeimg)
pipe6.scale=0.3
pipe7=createSprite(2200,550)
pipe7.addImage(pipeimg)
pipe7.scale=0.3
pipe8=createSprite(2300,600)
pipe8.addImage(pipeimg)
pipe8.scale=0.3

pipe9=createSprite(3100,600)
pipe9.addImage(pipeimg)
pipe9.scale=0.3
pipe10=createSprite(3200,640)
pipe10.addImage(pipeimg)
pipe10.scale=0.3

pipe11=createSprite(3620,640)
pipe11.addImage(pipeimg)
pipe11.scale=0.3

pipe12=createSprite(3980,640)
pipe12.addImage(pipeimg)
pipe12.scale=0.3
pipe13=createSprite(4080,540)
pipe13.addImage(pipeimg)
pipe13.scale=0.3

pipe14=createSprite(5200,500)
pipe14.addImage(pipeimg)
pipe14.scale=0.3
pipe15=createSprite(5300,550)
pipe15.addImage(pipeimg)
pipe15.scale=0.3

shortpipe=createSprite(1990,150)
shortpipe.addImage( shortpipeimg)
shortpipe.scale=0.3
line1=createSprite(1600,470,100,10)
line1.visible=false
line2=createSprite(1600,375,100,10)
line2.visible=false

cactus=createSprite(1600,550)
cactus.addImage(cactusimg)
cactus.scale=0.4
cactus.visible=false

flagstick=createSprite(6400,450)
flagstick.addImage(fstickimg)
flagstick.scale=1.5

flag=createSprite(6370,240)
flag.addImage(flagimg)
flag.scale=1.8

b=createSprite(6400,590)
b.addImage(brickimg)
b.scale=0.4

wall1=createSprite(1900,100)
wall1.addImage(groundimg)
wall1.rotation=90
wall1.scale=1.2
wall2=createSprite(1930,100)
wall2.addImage(groundimg)
wall2.rotation=90
wall2.scale=1.2

brick1=createSprite(600,400)
brick1.addImage(brickimg)
brick1.scale=0.4
brick2=createSprite(650,400)
brick2.addImage(brickimg)
brick2.scale=0.4
brick3=createSprite(700,400)
brick3.addImage(brickimg)
brick3.scale=0.4
brick4=createSprite(750,400)
brick4.addImage(brickimg)
brick4.scale=0.4
brick5=createSprite(800,400)
brick5.addImage(brickimg)
brick5.scale=0.4

brick6=createSprite(1000,300)
brick6.addImage(brickimg)
brick6.scale=0.4
brick7=createSprite(1050,300)
brick7.addImage(brickimg)
brick7.scale=0.4
brick8=createSprite(1100,300)
brick8.addImage(brickimg)
brick8.scale=0.4
brick9=createSprite(1150,300)
brick9.addImage(brickimg)
brick9.scale=0.4
brick10=createSprite(1200,300)
brick10.addImage(brickimg)
brick10.scale=0.4

brick11=createSprite(2500,350)
brick11.addImage(brickimg)
brick11.scale=0.4
brick12=createSprite(2550,350)
brick12.addImage(brickimg)
brick12.scale=0.4
brick13=createSprite(2600,350)
brick13.addImage(qbrickimg)
brick13.scale=0.3
brick14=createSprite(2650,350)
brick14.addImage(brickimg)
brick14.scale=0.4

brick15=createSprite(2800,400)
brick15.addImage(brickimg)
brick15.scale=0.4
brick16=createSprite(2850,400)
brick16.addImage(brickimg)
brick16.scale=0.4
brick17=createSprite(2900,400)
brick17.addImage(qbrickimg)
brick17.scale=0.3
brick18=createSprite(2950,400)
brick18.addImage(brickimg)
brick18.scale=0.4

brick19=createSprite(3350,400)
brick19.addImage(brickimg)
brick19.scale=0.4
brick20=createSprite(3400,400)
brick20.addImage(brickimg)
brick20.scale=0.4
brick21=createSprite(3450,400)
brick21.addImage(brickimg)
brick21.scale=0.4
brick22=createSprite(3500,400)
brick22.addImage(brickimg)
brick22.scale=0.4

brick23=createSprite(4200,390)
brick23.addImage(brickimg)
brick23.scale=0.4
brick24=createSprite(4250,390)
brick24.addImage(brickimg)
brick24.scale=0.4
brick25=createSprite(4300,390)
brick25.addImage(brickimg)
brick25.scale=0.4
brick26=createSprite(4350,390)
brick26.addImage(brickimg)
brick26.scale=0.4
brick27=createSprite(4400,390)
brick27.addImage(brickimg)
brick27.scale=0.4

brick28=createSprite(4550,260)
brick28.addImage(brickimg)
brick28.scale=0.4
brick29=createSprite(4600,260)
brick29.addImage(brickimg)
brick29.scale=0.4
brick30=createSprite(4650,260)
brick30.addImage(brickimg)
brick30.scale=0.4
brick31=createSprite(4700,260)
brick31.addImage(brickimg)
brick31.scale=0.4
brick32=createSprite(4750,260)
brick32.addImage(brickimg)
brick32.scale=0.4

brick33=createSprite(4900,160)
brick33.addImage(brickimg)
brick33.scale=0.4
brick34=createSprite(4950,160)
brick34.addImage(brickimg)
brick34.scale=0.4
brick35=createSprite(5000,160)
brick35.addImage(brickimg)
brick35.scale=0.4
brick36=createSprite(5050,160)
brick36.addImage(brickimg)
brick36.scale=0.4
brick37=createSprite(5100,160)
brick37.addImage(brickimg)
brick37.scale=0.4


//last stairs

brick38=createSprite(5750,585)
brick38.addImage(brickimg)
brick38.scale=0.4
brick39=createSprite(5800,585)
brick39.addImage(brickimg)
brick39.scale=0.4
brick40=createSprite(5800,535)
brick40.addImage(brickimg)
brick40.scale=0.4
brick41=createSprite(5850,585)
brick41.addImage(brickimg)
brick41.scale=0.4
brick42=createSprite(5850,535)
brick42.addImage(brickimg)
brick42.scale=0.4
brick43=createSprite(5850,485)
brick43.addImage(brickimg)
brick43.scale=0.4
brick44=createSprite(5900,585)
brick44.addImage(brickimg)
brick44.scale=0.4
brick45=createSprite(5900,535)
brick45.addImage(brickimg)
brick45.scale=0.4
brick46=createSprite(5900,485)
brick46.addImage(brickimg)
brick46.scale=0.4
brick47=createSprite(5900,435)
brick47.addImage(brickimg)
brick47.scale=0.4
brick48=createSprite(5950,585)
brick48.addImage(brickimg)
brick48.scale=0.4
brick49=createSprite(5950,535)
brick49.addImage(brickimg)
brick49.scale=0.4
brick50=createSprite(5950,485)
brick50.addImage(brickimg)
brick50.scale=0.4
brick51=createSprite(5950,435)
brick51.addImage(brickimg)
brick51.scale=0.4
brick52=createSprite(5950,385)
brick52.addImage(brickimg)
brick52.scale=0.4
brick53=createSprite(6000,585)
brick53.addImage(brickimg)
brick53.scale=0.4
brick54=createSprite(6000,535)
brick54.addImage(brickimg)
brick54.scale=0.4
brick55=createSprite(6000,485)
brick55.addImage(brickimg)
brick55.scale=0.4
brick56=createSprite(6000,435)
brick56.addImage(brickimg)
brick56.scale=0.4
brick57=createSprite(6000,385)
brick57.addImage(brickimg)
brick57.scale=0.4
brick58=createSprite(6000,335)
brick58.addImage(brickimg)
brick58.scale=0.4

brick59=createSprite(6050,585)
brick59.addImage(brickimg)
brick59.scale=0.4
brick60=createSprite(6050,535)
brick60.addImage(brickimg)
brick60.scale=0.4
brick61=createSprite(6050,485)
brick61.addImage(brickimg)
brick61.scale=0.4
brick62=createSprite(6050,435)
brick62.addImage(brickimg)
brick62.scale=0.4
brick63=createSprite(6050,385)
brick63.addImage(brickimg)
brick63.scale=0.4
brick64=createSprite(6050,335)
brick64.addImage(brickimg)
brick64.scale=0.4
brick65=createSprite(6050,285)
brick65.addImage(brickimg)
brick65.scale=0.4

brick66=createSprite(6100,585)
brick66.addImage(brickimg)
brick66.scale=0.4
brick67=createSprite(6100,535)
brick67.addImage(brickimg)
brick67.scale=0.4
brick68=createSprite(6100,485)
brick68.addImage(brickimg)
brick68.scale=0.4
brick69=createSprite(6100,435)
brick69.addImage(brickimg)
brick69.scale=0.4
brick70=createSprite(6100,385)
brick70.addImage(brickimg)
brick70.scale=0.4
brick71=createSprite(6100,335)
brick71.addImage(brickimg)
brick71.scale=0.4
brick72=createSprite(6100,285)
brick72.addImage(brickimg)
brick72.scale=0.4
brick73=createSprite(6100,235)
brick73.addImage(brickimg)
brick73.scale=0.4

arrow=createSprite(1700,400)
arrow.addAnimation("sh",arrowimg)
arrow.scale=0.6

arrow=createSprite(2050,60)
arrow.addAnimation("sh",arrowimg)
arrow.scale=0.6
arrow.rotation=-90

castle=createSprite(6650,497)
castle.addImage(castleimg)
castle.scale=0.6

aline=createSprite(1700,520,80,10)
aline.visible=false

turtle1=createSprite(1000,580)
turtle1.addAnimation("acc",turtleimgright)
turtle1.scale=0.6
turtle1.velocityX=5

turtle2=createSprite(600,580)
turtle2.addAnimation("acc",turtleimgright)
turtle2.scale=0.6
turtle2.velocityX=-5

turtle3=createSprite(3300,580)
turtle3.addAnimation("acc",turtleimgright)
turtle3.scale=0.6
turtle3.velocityX=3

turtle4=createSprite(2400,580)
turtle4.addAnimation("acc",turtleimgright)
turtle4.scale=0.6
turtle4.velocityX=5

turtle5=createSprite(3300,580)
turtle5.addAnimation("acc",turtleimgright)
turtle5.scale=0.6
turtle5.velocityX=-5

turtle6=createSprite(4300,580)
turtle6.addAnimation("acc",turtleimgright)
turtle6.scale=0.6
turtle6.velocityX=5

turtle7=createSprite(5300,580)
turtle7.addAnimation("acc",turtleimgright)
turtle7.scale=0.6
turtle7.velocityX=-5

turtle8=createSprite(5350,580)
turtle8.addAnimation("acc",turtleimgright)
turtle8.scale=0.6
turtle8.velocityX=3

enemy1=createSprite(3800,550)
enemy1.addAnimation("ajjj",enemy1img)
enemy1.scale=0.4
enemy1.velocityY=3

eline=createSprite(3800,660,300,3)
eline1=createSprite(3800,360,300,3)
eline1.visible=false;

ground=createSprite(650,630)
ground.addImage(groundimg)
ground.scale=1.1

bacground=createSprite(10,630)
bacground.addImage(groundimg)
bacground.scale=1.1

forwardground1=createSprite(1800,630)
forwardground1.addImage(groundimg)
forwardground1.scale=1.1

forwardground2=createSprite(3000,630)
forwardground2.addImage(groundimg)
forwardground2.scale=1.1

forwardground3=createSprite(4600,630)
forwardground3.addImage(groundimg)
forwardground3.scale=1.1

forwardground4=createSprite(5800,630)
forwardground4.addImage(groundimg)
forwardground4.scale=1.1

forwardground5=createSprite(5800,630)
forwardground5.addImage(groundimg)
forwardground5.scale=1.1

forwardground6=createSprite(7000,630)
forwardground6.addImage(groundimg)
forwardground6.scale=1.1

//created grounds

// leftwall for the mario donot go backward

leftwall=createSprite(-270,358,10,650)
leftwall.addImage(stairsimg)
leftwall.scale=4

//creating mario
mario=createSprite(100,600,50,50)
mario.addAnimation("abc",mariorightrunningimg)
mario.scale=0.6

mariohead=createSprite(200,200,30,4)
mariohead.visible=false


//creating coins

coin1=createSprite(600,350)
coin1.addImage(coinimg)
coin1.scale=0.4
coin2=createSprite(650,350)
coin2.addImage(coinimg)
coin2.scale=0.4
coin3=createSprite(700,350)
coin3.addImage(coinimg)
coin3.scale=0.4
coin4=createSprite(750,350)
coin4.addImage(coinimg)
coin4.scale=0.4
coin5=createSprite(800,350)
coin5.addImage(coinimg)
coin5.scale=0.4

coin6=createSprite(1000,250)
coin6.addImage(coinimg)
coin6.scale=0.4
coin7=createSprite(1050,250)
coin7.addImage(coinimg)
coin7.scale=0.4
coin8=createSprite(1100,250)
coin8.addImage(coinimg)
coin8.scale=0.4
coin9=createSprite(1150,250)
coin9.addImage(coinimg)
coin9.scale=0.4
coin10=createSprite(1200,250)
coin10.addImage(coinimg)
coin10.scale=0.4

coin11=createSprite(1400,340)
coin11.addImage(coinimg)
coin11.scale=0.4
coin12=createSprite(1500,390)
coin12.addImage(coinimg)
coin12.scale=0.4
coin13=createSprite(1600,440)
coin13.addImage(coinimg)
coin13.scale=0.4

coin14=createSprite(2100,330)
coin14.addImage(coinimg)
coin14.scale=0.4
coin15=createSprite(2200,390)
coin15.addImage(coinimg)
coin15.scale=0.4
coin16=createSprite(2300,440)
coin16.addImage(coinimg)
coin16.scale=0.4

coin17=createSprite(2500,300)
coin17.addImage(coinimg)
coin17.scale=0.4
coin18=createSprite(2550,300)
coin18.addImage(coinimg)
coin18.scale=0.4
coin19=createSprite(2600,300)
coin19.addImage(coinimg)
coin19.scale=0.4
coin20=createSprite(2650,300)
coin20.addImage(coinimg)
coin20.scale=0.4

coin21=createSprite(2400,585)
coin21.addImage(coinimg)
coin21.scale=0.4
coin22=createSprite(2500,585)
coin22.addImage(coinimg)
coin22.scale=0.4
coin23=createSprite(2600,585)
coin23.addImage(coinimg)
coin23.scale=0.4
coin24=createSprite(2700,585)
coin24.addImage(coinimg)
coin24.scale=0.4
coin25=createSprite(2800,585)
coin25.addImage(coinimg)
coin25.scale=0.4
coin26=createSprite(2900,585)
coin26.addImage(coinimg)
coin26.scale=0.4
coin27=createSprite(3000,585)
coin27.addImage(coinimg)
coin27.scale=0.4

coin28=createSprite(2800,350)
coin28.addImage(coinimg)
coin28.scale=0.4
coin29=createSprite(2850,350)
coin29.addImage(coinimg)
coin29.scale=0.4
coin30=createSprite(2900,350)
coin30.addImage(coinimg)
coin30.scale=0.4
coin31=createSprite(2950,350)
coin31.addImage(coinimg)
coin31.scale=0.4

coin32=createSprite(3350,350)
coin32.addImage(coinimg)
coin32.scale=0.4
coin33=createSprite(3400,350)
coin33.addImage(coinimg)
coin33.scale=0.4
coin34=createSprite(3450,350)
coin34.addImage(coinimg)
coin34.scale=0.4
coin35=createSprite(3500,350)
coin35.addImage(coinimg)
coin35.scale=0.4

coin36=createSprite(3350,585)
coin36.addImage(coinimg)
coin36.scale=0.4
coin37=createSprite(3450,585)
coin37.addImage(coinimg)
coin37.scale=0.4

coin38=createSprite(3620,485)
coin38.addImage(coinimg)
coin38.scale=0.4
coin39=createSprite(3980,485)
coin39.addImage(coinimg)
coin39.scale=0.4

coin40=createSprite(4080,385)
coin40.addImage(coinimg)
coin40.scale=0.4

coin41=createSprite(4250,340)
coin41.addImage(coinimg)
coin41.scale=0.4
coin42=createSprite(4300,340)
coin42.addImage(coinimg)
coin42.scale=0.4
coin43=createSprite(4350,340)
coin43.addImage(coinimg)
coin43.scale=0.4
coin44=createSprite(4300,290)
coin44.addImage(coinimg)
coin44.scale=0.4

coin45=createSprite(4550,210)
coin45.addImage(coinimg)
coin45.scale=0.4
coin46=createSprite(4600,210)
coin46.addImage(coinimg)
coin46.scale=0.4
coin47=createSprite(4650,210)
coin47.addImage(coinimg)
coin47.scale=0.4
coin48=createSprite(4700,210)
coin48.addImage(coinimg)
coin48.scale=0.4
coin49=createSprite(4750,210)
coin49.addImage(coinimg)
coin49.scale=0.4

coin50=createSprite(4600,160)
coin50.addImage(coinimg)
coin50.scale=0.4
coin51=createSprite(4650,160)
coin51.addImage(coinimg)
coin51.scale=0.4
coin52=createSprite(4700,160)
coin52.addImage(coinimg)
coin52.scale=0.4

coin53=createSprite(4650,110)
coin53.addImage(coinimg)
coin53.scale=0.4

coin54=createSprite(4900,110)
coin54.addImage(coinimg)
coin54.scale=0.4
coin55=createSprite(4950,110)
coin55.addImage(coinimg)
coin55.scale=0.4
coin56=createSprite(5000,110)
coin56.addImage(coinimg)
coin56.scale=0.4
coin57=createSprite(5050,110)
coin57.addImage(coinimg)
coin57.scale=0.4
coin58=createSprite(5100,110)
coin58.addImage(coinimg)
coin58.scale=0.4

coin59=createSprite(5200,340)
coin59.addImage(coinimg)
coin59.scale=0.4
coin60=createSprite(5300,390)
coin60.addImage(coinimg)
coin60.scale=0.4

coin61=createSprite(5380,580)
coin61.addImage(coinimg)
coin61.scale=0.4
coin62=createSprite(5480,580)
coin62.addImage(coinimg)
coin62.scale=0.4
coin63=createSprite(5580,580)
coin63.addImage(coinimg)
coin63.scale=0.4
coin64=createSprite(5680,580)
coin64.addImage(coinimg)
coin64.scale=0.4

coin65=createSprite(5750,530)
coin65.addImage(coinimg)
coin65.scale=0.4
coin66=createSprite(5800,480)
coin66.addImage(coinimg)
coin66.scale=0.4
coin67=createSprite(5850,430)
coin67.addImage(coinimg)
coin67.scale=0.4
coin68=createSprite(5900,380)
coin68.addImage(coinimg)
coin68.scale=0.4
coin69=createSprite(5950,330)
coin69.addImage(coinimg)
coin69.scale=0.4
coin70=createSprite(6000,280)
coin70.addImage(coinimg)
coin70.scale=0.4
coin71=createSprite(6050,230)
coin71.addImage(coinimg)
coin71.scale=0.4
coin72=createSprite(6100,180)
coin72.addImage(coinimg)
coin72.scale=0.4

coin73=createSprite(6200,580)
coin73.addImage(coinimg)
coin73.scale=0.4
coin74=createSprite(6300,580)
coin74.addImage(coinimg)
coin74.scale=0.4

coin75=createSprite(4200,580)
coin75.addImage(coinimg)
coin75.scale=0.4
coin76=createSprite(4300,580)
coin76.addImage(coinimg)
coin76.scale=0.4
coin77=createSprite(4400,580)
coin77.addImage(coinimg)
coin77.scale=0.4
coin78=createSprite(4500,580)
coin78.addImage(coinimg)
coin78.scale=0.4
coin79=createSprite(4600,580)
coin79.addImage(coinimg)
coin79.scale=0.4
coin80=createSprite(4700,580)
coin80.addImage(coinimg)
coin80.scale=0.4
coin81=createSprite(4800,580)
coin81.addImage(coinimg)
coin81.scale=0.4
coin82=createSprite(4900,580)
coin82.addImage(coinimg)
coin82.scale=0.4
coin83=createSprite(5000,580)
coin83.addImage(coinimg)
coin83.scale=0.4
coin84=createSprite(5100,580)
coin84.addImage(coinimg)
coin84.scale=0.4


skull=createSprite(1600,550)
skull.addImage(skullimg);
skull.scale=0.3


heart1=createSprite(mario.x+500,30)
heart1.addImage(heartimg)
heart1.scale=0.2

heart2=createSprite(mario.x+550,30)
heart2.addImage(heartimg)
heart2.scale=0.2

heart3=createSprite(mario.x+600,30)
heart3.addImage(heartimg)
heart3.scale=0.2

bgre=createSprite(620,325,450,650)
bgre.shapeColor="white"
bgre.visible=false
bgre1=createSprite(-360,325,450,650)
bgre1.shapeColor="white"
bgre1.visible=false

rboared=createSprite(130,340)
rboared.addImage(rboaredimg)
rboared.scale=1.8
rboared.visible=false

restart=createSprite(120,2550)
restart.addImage(restartimg)
restart.scale=0.3

gameover=createSprite(130,200)
gameover.addImage(gameoverimg)
gameover.scale=2.4
gameover.visible=false

castleline=createSprite(6750,325,10,650)
castleline.visible=false

coin=0
life=3
}


function draw(){
  background(bg)

  textSize(24)
  fill("white")
  stroke("white")
  strokeWeight(2)
  textFont("Courier")
  text("COIN:"+coin,mario.x-600,50)

  heart1.x=mario.x+500
  heart2.x=mario.x+550
  heart3.x=mario.x+600

  mario.collide(pipe1)
  mario.collide(pipe3)
  mario.collide(shortpipe)
  mario.collide(pipe4)
  mario.collide(pipe5)
  mario.collide(pipe6)
  mario.collide(pipe7)
  mario.collide(pipe8)
  mario.collide(pipe9)
  mario.collide(pipe10)
  mario.collide(pipe11)
  mario.collide(pipe12)
  mario.collide(pipe13)
  mario.collide(pipe14)
  mario.collide(pipe15)
  mario.collide(brick1)
  mario.collide(brick2)
  mario.collide(brick3)
  mario.collide(brick4)
  mario.collide(brick5)
  mario.collide(pipe2)
  mario.collide(brick6)
  mario.collide(brick7)
  mario.collide(brick8)
  mario.collide(brick9)
  mario.collide(brick10)
  mario.collide(brick11)
  mario.collide(brick12)
  mario.collide(brick13)
  mario.collide(brick14)
  mario.collide(brick15)
  mario.collide(brick16)
  mario.collide(brick17)
  mario.collide(brick18)
  mario.collide(brick19)
  mario.collide(brick20)
  mario.collide(brick21)
  mario.collide(brick22)
  mario.collide(brick23)
  mario.collide(brick24)
  mario.collide(brick25)
  mario.collide(brick26)
  mario.collide(brick27)
  mario.collide(brick28)
  mario.collide(brick29)
  mario.collide(brick30)
  mario.collide(brick31)
  mario.collide(brick32)
  mario.collide(brick33)
  mario.collide(brick34)
  mario.collide(brick35)
  mario.collide(brick36)
  mario.collide(brick37)

  mario.collide(brick38)
  mario.collide(brick39)

  mario.collide(brick40)
  mario.collide(brick41)
  mario.collide(brick42)
  mario.collide(brick43)
  mario.collide(brick44)
  mario.collide(brick45)
  mario.collide(brick46)
  mario.collide(brick47)
  mario.collide(brick48)
  mario.collide(brick49)

  mario.collide(brick50)
  mario.collide(brick51)
  mario.collide(brick52)
  mario.collide(brick53)
  mario.collide(brick54)
  mario.collide(brick55)
  mario.collide(brick56)
  mario.collide(brick57)
  mario.collide(brick58)
  mario.collide(brick59)

  mario.collide(brick60)
  mario.collide(brick61)
  mario.collide(brick62)
  mario.collide(brick63)
  mario.collide(brick64)
  mario.collide(brick65)
  mario.collide(brick66)
  mario.collide(brick67)
  mario.collide(brick68)
  mario.collide(brick69)

  mario.collide(brick70)
  mario.collide(brick71)
  mario.collide(brick72)
  mario.collide(brick73)
  
  mario.collide(wall1)
  mario.collide(wall2)
  
  mario.collide(castleline)

  mario.collide(leftwall)
  mario.collide(ground)
  mario.collide(bacground)
  mario.collide(forwardground1)
  mario.collide(forwardground2)
  mario.collide(forwardground3)
  mario.collide(forwardground4)
  mario.collide(forwardground5)
  mario.collide(forwardground6)



  if(mario.isTouching(flagstick)){
    flag.velocityY=5
    mario.y=flag.y
  
  }
  if(flag.isTouching(b)){
    flag.velocityY=0
  }

  if(enemy1.isTouching(eline)){
    enemy1.velocityY=-3
  }

  if(enemy1.isTouching(eline1)){
    enemy1.velocityY=3
  }

  if(mario.isTouching(aline)){
    mario.x=2100
    mario.y=300
    nextlvlsound.play()
  }


  if(cactus.isTouching(line2)){
    cactus.velocityY=0
  }

  if(mario.isTouching(line1)){
    cactus.velocityY=-5
    line1.y=2000
  }

  if(line1.y===2000){
    cactus.visible=true
  }

  if(mario.isTouching(turtle1)){
    life=life-1
    mario.x=400
    mario.y=400
    mario.addAnimation("abc",mariorightrunningimg)
    mariodiesound.play()
  }

  if(mario.isTouching(turtle2)){
    life=life-1
    mario.x=400
    mario.y=400
    mariodiesound.play()
    mario.addAnimation("abc",mariorightrunningimg)
  }

  if(mario.isTouching(turtle3)){
    life=life-1
    mariodiesound.play()
    mario.x=3100
    mario.y=400
    mario.addAnimation("abc",mariorightrunningimg)
  }

  if(mario.isTouching(turtle4)){
    life=life-1
    mariodiesound.play()
    mario.x=2100
    mario.y=300
    mario.addAnimation("abc",mariorightrunningimg)
  }

  if(mario.isTouching(turtle5)){
    life=life-1
    mariodiesound.play()
    mario.x=2100
    mario.y=300
    mario.addAnimation("abc",mariorightrunningimg)
  }

  mariohead.x=mario.x
  mariohead.y=mario.y-45


  if(mariohead.isTouching(brick13)){
    brick13.y=2000
    coin=coin+5
    coinc.play()
  }
  if(mariohead.isTouching(brick17)){
    brick17.y=2000
    coin=coin+20
    coinc.play()
  }



 

  if(mario.isTouching(turtle6)){
    life=life-1
    mariodiesound.play()
    mario.x=4082
    mario.y=350
    mario.addAnimation("abc",mariorightrunningimg)
  }

  if(mario.isTouching(turtle7)){
    life=life-1
    mariodiesound.play()
    mario.x=4082
    mario.y=350
    mario.addAnimation("abc",mariorightrunningimg)
  }

  if(mario.isTouching(turtle8)){
    life=life-1
    mariodiesound.play()
    mario.x=5200
    mario.y=330
    mario.addAnimation("abc",mariorightrunningimg)
  }

  if(mario.isTouching(enemy1)){
    life=life-1
    mariodiesound.play()
    mario.x=3100
    mario.y=400
    mario.addAnimation("abc",mariorightrunningimg)
  }

  if(mario.isTouching(eline)){
    life=life-1
    mariodiesound.play()
    mario.x=3100
    mario.y=400
    mario.addAnimation("abc",mariorightrunningimg)
  }

  if(mario.isTouching(cactus)){
    life=life-1
    mariodiesound.play()
    mario.x=1400
    mario.y=310
  }

if(life===2){
  heart1.visible=false
  heart2.visible=true
  heart3.visible=true
}
if(life===1){
  heart2.visible=false
  heart3.visible=true
}
if(life===0){
  heart3.visible=false

  bgre.visible=true
  bgre1.visible=true
  rboared.visible=true
  restart.y=550
  gameover.visible=true
  gameover.addImage(gameoverimg)
  mario.x=100


}

if(mousePressedOver(restart)){
  bgre1.visible=false
  bgre.visible=false
  rboared.visible=false
  restart.y=2550
  gameover.visible=false
  mario.visible=true
  mario.x=100
  coin=0
  life=3
  heart1.visible=true
  heart2.visible=true
  heart3.visible=true
  line1.y=470
  cactus.y=550
  cactus.visible=false
  //coins y position

  brick13.y=350
  brick17.y=400

  flag.y=240

  coin1.y=350
  coin2.y=350
  coin3.y=350
  coin4.y=350
  coin5.y=350

  coin6.y=250
  coin7.y=250
  coin8.y=250
  coin9.y=250
  coin10.y=250

  coin11.y=340
  coin12.y=390
  coin13.y=440
  coin14.y=330
  coin15.y=390
  coin16.y=440
  coin17.y=300
  coin18.y=300
  coin19.y=300
  coin20.y=300

  coin21.y=585
  coin22.y=585
  coin23.y=585
  coin24.y=585
  coin25.y=585
  coin26.y=585
  coin27.y=585

  coin28.y=350
  coin29.y=350
  coin30.y=350
  coin31.y=350
  coin32.y=350
  coin33.y=350
  coin34.y=350
  coin35.y=350

  coin36.y=585
  coin37.y=585
  coin38.y=485
  coin39.y=485
  coin40.y=385

  coin40.y=385
  coin41.y=340
  coin42.y=340
  coin43.y=340
  coin44.y=290
  coin45.y=210
  coin46.y=210
  coin47.y=210
  coin48.y=210
  coin49.y=210

  coin50.y=160
  coin51.y=160
  coin52.y=160
  coin53.y=110
  coin54.y=110
  coin55.y=110
  coin56.y=110
  coin57.y=110
  coin58.y=110
  coin59.y=340
  coin60.y=390

  coin60.y=390
  coin61.y=580
  coin62.y=580
  coin63.y=580
  coin64.y=540
  coin65.y=530
  coin66.y=480
  coin67.y=430
  coin68.y=380
  coin69.y=330

  coin70.y=280
  coin71.y=230
  coin72.y=180
  coin73.y=580
  coin74.y=580
  coin75.y=580
  coin76.y=580
  coin77.y=580
  coin78.y=580
  coin79.y=580
  coin80.y=580
  coin81.y=580
  coin82.y=580
  coin83.y=580
  coin84.y=580




}













  if(turtle1.isTouching(pipe2)){
    turtle1.velocityX=-5;
    turtle1.addAnimation("acc",turtleimgleft)
  }
  if(turtle1.isTouching(pipe1)){
    turtle1.velocityX=5;
    turtle1.addAnimation("acc",turtleimgright)
  }

  if(turtle2.isTouching(pipe2)){
    turtle2.velocityX=-5;
    turtle2.addAnimation("acc",turtleimgleft)
  }
  if(turtle2.isTouching(pipe1)){
    turtle2.velocityX=5;
    turtle2.addAnimation("acc",turtleimgright)
  }

  if(turtle3.isTouching(pipe11)){
    turtle3.velocityX=-3;
    turtle3.addAnimation("acc",turtleimgleft)
  }
  if(turtle3.isTouching(pipe10)){
    turtle3.velocityX=3;
    turtle3.addAnimation("acc",turtleimgright)
  }

  if(turtle4.isTouching(pipe9)){
    turtle4.velocityX=-5;
    turtle4.addAnimation("acc",turtleimgleft)
  }
  if(turtle4.isTouching(pipe8)){
    turtle4.velocityX=5;
    turtle4.addAnimation("acc",turtleimgright)
  }

  if(turtle5.isTouching(pipe9)){
    turtle5.velocityX=-5;
    turtle5.addAnimation("acc",turtleimgleft)
  }
  if(turtle5.isTouching(pipe8)){
    turtle5.velocityX=5;
    turtle5.addAnimation("acc",turtleimgright)
  }

  if(turtle6.isTouching(pipe13)){
    turtle6.velocityX=6;
    turtle6.addAnimation("acc",turtleimgright)
  }
  if(turtle6.isTouching(pipe14)){
    turtle6.velocityX=-6;
    turtle6.addAnimation("acc",turtleimgleft)
  }

  if(turtle7.isTouching(pipe13)){
    turtle7.velocityX=6;
    turtle7.addAnimation("acc",turtleimgright)
  }
  if(turtle7.isTouching(pipe14)){
    turtle7.velocityX=-6;
    turtle7.addAnimation("acc",turtleimgleft)
  }

  if(turtle8.isTouching(pipe15)){
    turtle8.velocityX=3;
    turtle8.addAnimation("acc",turtleimgright)
  }
  if(turtle8.isTouching(brick38)){
    turtle8.velocityX=-3;
    turtle8.addAnimation("acc",turtleimgleft)
  }

  if(keyWentDown("up") && mario.y >=  180) {
    mario.velocityY = -16;
    mario.addAnimation("abc",mariouprunningimg)
    jumpsound.play()
  }

  mario.velocityY = mario.velocityY + 0.8;


  if(keyDown("right")){
    mario.x=mario.x+8
    mario.addAnimation("abc",mariorightrunningimg)
  }

  if(keyDown("left")){
    mario.x=mario.x-8
    mario.addAnimation("abc",marioleftrunningimg)
  }

  if(mario.isTouching(castle)){
    mario.visible=false
    bgre.visible=true
    bgre1.visible=true
    rboared.visible=true
    restart.y=550
    gameover.visible=true
    gameover.addImage(youwinimg)
    mario.x=100
    gameover.scale=1.3
    stagecsound.play()
  }

  

  camera.x=mario.x
  console.log(mario.x)
   console.log(mario.y)

  //coins destroy

  if(mario.isTouching(coin1)){
    coin1.y=2000
    coin=coin+1
    coinc.play()
  }
  if(mario.isTouching(coin2)){
    coin2.y=2000
    coin=coin+1
    coinc.play()
  }
  if(mario.isTouching(coin3)){
    coin3.y=2000
    coin=coin+1
    coinc.play()
  }
  if(mario.isTouching(coin4)){
    coin4.y=2000
    coin=coin+1
    coinc.play()
  }
  if(mario.isTouching(coin5)){
    coin5.y=2000
    coin=coin+1
    coinc.play()
  }




  if(mario.isTouching(coin6)){
    coin6.y=2000
    coin=coin+1
    coinc.play()
  }
  if(mario.isTouching(coin7)){
    coin7.y=2000
    coin=coin+1
    coinc.play()
  }
  if(mario.isTouching(coin8)){
    coin8.y=2000
    coin=coin+1
    coinc.play()
  }
  if(mario.isTouching(coin9)){
    coin9.y=2000
    coin=coin+1
    coinc.play()
  }
  if(mario.isTouching(coin10)){
    coin10.y=2000
    coin=coin+1
    coinc.play()
  }


  if(mario.isTouching(coin11)){
    coin11.y=2000
    coin=coin+1
    coinc.play()
  }
  if(mario.isTouching(coin12)){
    coin12.y=2000
    coin=coin+1
    coinc.play()
  }
  if(mario.isTouching(coin13)){
    coin13.y=2000
    coin=coin+1
    coinc.play()
  }


  if(mario.isTouching(coin14)){
    coin14.y=2000
    coin=coin+1
    coinc.play()
  }
  if(mario.isTouching(coin15)){
    coin15.y=2000
    coin=coin+1
    coinc.play()
  }
  if(mario.isTouching(coin16)){
    coin16.y=2000
    coin=coin+1
    coinc.play()
  }

  if(mario.isTouching(coin17)){
    coin17.y=2000
    coin=coin+1
    coinc.play()
  }
  if(mario.isTouching(coin18)){
    coin18.y=2000
    coin=coin+1
    coinc.play()
  }
  if(mario.isTouching(coin19)){
    coin19.y=2000
    coin=coin+1
    coinc.play()
  }
  if(mario.isTouching(coin20)){
    coin20.y=2000
    coin=coin+1
    coinc.play()
  }
  if(mario.isTouching(coin21)){
    coin21.y=2000
    coin=coin+1
    coinc.play()
  }
  if(mario.isTouching(coin22)){
    coin22.y=2000
    coin=coin+1
    coinc.play()
  }
  if(mario.isTouching(coin23)){
    coin23.y=2000
    coin=coin+1
    coinc.play()
  }
  if(mario.isTouching(coin24)){
    coin24.y=2000
    coin=coin+1
    coinc.play()
  }
  if(mario.isTouching(coin25)){
    coin25.y=2000
    coin=coin+1
    coinc.play()
  }
  if(mario.isTouching(coin26)){
    coin26.y=2000
    coin=coin+1
    coinc.play()
  }

  if(mario.isTouching(coin27)){
    coin27.y=2000
    coin=coin+1
    coinc.play()
  }
  if(mario.isTouching(coin28)){
    coin28.y=2000
    coin=coin+1
    coinc.play()
  }
  if(mario.isTouching(coin29)){
    coin29.y=2000
    coin=coin+1
    coinc.play()
  }
  if(mario.isTouching(coin30)){
    coin30.y=2000
    coin=coin+1
    coinc.play()
  }
  if(mario.isTouching(coin31)){
    coin31.y=2000
    coin=coin+1
    coinc.play()
  }
  if(mario.isTouching(coin32)){
    coin32.y=2000
    coin=coin+1
    coinc.play()
  }
  if(mario.isTouching(coin33)){
    coin33.y=2000
    coin=coin+1
    coinc.play()
  }
  if(mario.isTouching(coin34)){
    coin34.y=2000
    coin=coin+1
    coinc.play()
  }
  if(mario.isTouching(coin35)){
    coin35.y=2000
    coin=coin+1
    coinc.play()
  }
  if(mario.isTouching(coin36)){
    coin36.y=2000
    coin=coin+1
    coinc.play()
  }
  if(mario.isTouching(coin37)){
    coin37.y=2000
    coin=coin+1
    coinc.play()
  }
  if(mario.isTouching(coin38)){
    coin38.y=2000
    coin=coin+1
    coinc.play()
  }
  if(mario.isTouching(coin39)){
    coin39.y=2000
    coin=coin+1
    coinc.play()
  }
  if(mario.isTouching(coin40)){
    coin40.y=2000
    coin=coin+1
    coinc.play()
  }
  if(mario.isTouching(coin41)){
    coin41.y=2000
    coin=coin+1
    coinc.play()
  }
  if(mario.isTouching(coin42)){
    coin42.y=2000
    coin=coin+1
    coinc.play()
  }
  if(mario.isTouching(coin43)){
    coin43.y=2000
    coin=coin+1
    coinc.play()
  }
  if(mario.isTouching(coin44)){
    coin44.y=2000
    coin=coin+1
    coinc.play()
  }
  if(mario.isTouching(coin45)){
    coin45.y=2000
    coin=coin+1
    coinc.play()
  }
  if(mario.isTouching(coin46)){
    coin46.y=2000
    coin=coin+1
    coinc.play()
  }
  if(mario.isTouching(coin47)){
    coin47.y=2000
    coin=coin+1
    coinc.play()
  }
  if(mario.isTouching(coin48)){
    coin48.y=2000
    coin=coin+1
    coinc.play()
  }
  if(mario.isTouching(coin49)){
    coin49.y=2000
    coin=coin+1
    coinc.play()
  }
  if(mario.isTouching(coin50)){
    coin50.y=2000
    coin=coin+1
    coinc.play()
  }
  if(mario.isTouching(coin51)){
    coin51.y=2000
    coin=coin+1
    coinc.play()
  }
  if(mario.isTouching(coin52)){
    coin52.y=2000
    coin=coin+1
    coinc.play()
  }
  if(mario.isTouching(coin53)){
    coin53.y=2000
    coin=coin+1
    coinc.play()
  }

  if(mario.isTouching(coin54)){
    coin54.y=2000
    coin=coin+1
    coinc.play()
  }
  if(mario.isTouching(coin55)){
    coin55.y=2000
    coin=coin+1
    coinc.play()
  }
  if(mario.isTouching(coin56)){
    coin56.y=2000
    coin=coin+1
    coinc.play()
  }
  if(mario.isTouching(coin57)){
    coin57.y=2000
    coin=coin+1
    coinc.play()
  }
  if(mario.isTouching(coin58)){
    coin58.y=2000
    coin=coin+1
    coinc.play()
  }
  if(mario.isTouching(coin59)){
    coin59.y=2000
    coin=coin+1
    coinc.play()
  }
  if(mario.isTouching(coin60)){
    coin60.y=2000
    coin=coin+1
    coinc.play()
  }
  if(mario.isTouching(coin61)){
    coin61.y=2000
    coin=coin+1
    coinc.play()
  }
  if(mario.isTouching(coin62)){
    coin62.y=2000
    coin=coin+1
    coinc.play()
  }
  if(mario.isTouching(coin63)){
    coin63.y=2000
    coin=coin+1
    coinc.play()
  }
  if(mario.isTouching(coin64)){
    coin64.y=2000
    coin=coin+1
    coinc.play()
  }
  if(mario.isTouching(coin65)){
    coin65.y=2000
    coin=coin+1
    coinc.play()
  }
  if(mario.isTouching(coin66)){
    coin66.y=2000
    coin=coin+1
    coinc.play()
  }
  if(mario.isTouching(coin67)){
    coin67.y=2000
    coin=coin+1
    coinc.play()
  }
  if(mario.isTouching(coin68)){
    coin68.y=2000
    coin=coin+1
    coinc.play()
  }
  if(mario.isTouching(coin69)){
    coin69.y=2000
    coin=coin+1
    coinc.play()
  }
  if(mario.isTouching(coin70)){
    coin70.y=2000
    coin=coin+1
    coinc.play()
  }
  if(mario.isTouching(coin71)){
    coin71.y=2000
    coin=coin+1
    coinc.play()
  }
  if(mario.isTouching(coin72)){
    coin72.y=2000
    coin=coin+1
    coinc.play()
  }
  if(mario.isTouching(coin73)){
    coin73.y=2000
    coin=coin+1
    coinc.play()
  }
  if(mario.isTouching(coin74)){
    coin74.y=2000
    coin=coin+1
    coinc.play()
  }
  if(mario.isTouching(coin75)){
    coin75.y=2000
    coin=coin+1
    coinc.play()
  }

  if(mario.isTouching(coin76)){
    coin76.y=2000
    coin=coin+1
    coinc.play()
  }
  if(mario.isTouching(coin79)){
    coin79.y=2000
    coin=coin+1
    coinc.play()
  }
  if(mario.isTouching(coin77)){
    coin77.y=2000
    coin=coin+1
    coinc.play()
  }
  if(mario.isTouching(coin78)){
    coin78.y=2000
    coin=coin+1
    coinc.play()
  }
  if(mario.isTouching(coin80)){
    coin80.y=2000
    coin=coin+1
    coinc.play()
  }
  if(mario.isTouching(coin81)){
    coin81.y=2000
    coin=coin+1
    coinc.play()
  }
  if(mario.isTouching(coin82)){
    coin82.y=2000
    coin=coin+1
    coinc.play()
  }
  if(mario.isTouching(coin83)){
    coin83.y=2000
    coin=coin+1
    coinc.play()
  }
  if(mario.isTouching(coin84)){
    coin84.y=2000
    coin=coin+1
    coinc.play()
  }

  drawSprites()
}