var bgimg,z1,z2,z3,z4,p1,z1img,z2img,z3img,z4img,p1img
function preload(){
z1img=loadAnimation("backzombie/z1.png","backzombie/z2.png","backzombie/z3.png","backzombie/z4.png")
z2img=loadAnimation("bigzombie/z1.png","bigzombie/z2.png","bigzombie/z3.png","bigzombie/z4.png","bigzombie/z6.png")
z3img=loadAnimation("kidzombie2/z1.png","kidzombie2/z2.png","kidzombie2/z3.png","kidzombie2/z4.png")
p1img=loadAnimation("player/p1.png","player/p2.png","player/p3.png","player/p4.png")
bgimg=loadImage("maxresdefault.jpg")
bimg=loadImage("ghar.png")
bulletimg=loadImage("bullet.png")
}
function setup(){
createCanvas(displayWidth,displayHeight)
b=createSprite(40,displayHeight-170,40,120)
b.scale=2.5
b.addImage("building",bimg)
p=createSprite(300,90,40,100)

p.addAnimation("player",p1img)
p.scale=0.74
bz=createSprite(60,80,40,100)
bz.addAnimation("backzom",z1img)
bz.scale=0.85

invGr=createSprite(10,170,500,10)
invGr.velocityX=-3
invGr.visible=false
invGr2=createSprite(0,displayHeight-80,displayWidth,10)
invGr2.x=invGr2.width/2
invGr2.velocityX=-3

invGr2.visible=false
bulletGroup=new Group()
zombieGroup=new Group()
}
function draw(){

    if(invGr2.x<500){
        invGr2.x=invGr2.width/2
    }
    if(keyDown("space")&& p.y>displayHeight-250){
        p.velocityY=-10
    }
    p.velocityY+=1
    bz.velocityY+=1
background(bgimg)
p.collide(invGr)
p.collide(invGr2)
bz.collide(invGr)
bz.collide(invGr2)
zombies()
drawSprites();
bullets();
if(bulletGroup.isTouching(zombieGroup)){
    zombieGroup.destroyEach()
}
}

function zombies() {
    if(frameCount%120===0){
        zom=createSprite(displayWidth-20,displayHeight-160,50,50)
        zom.velocityX=-5
        zom.scale=0.7
        num=Math.round(random(1,2))
        switch(num){
        case 1: zom.addAnimation("biggy", z2img)
        break
        
        case 2: zom.addAnimation("shorty", z3img)
        break
        
        } zombieGroup.add(zom)

            }
           

}
function bullets(){
    bul=createSprite(300,displayHeight-210,10,10)
    bul.addImage("bullet",bulletimg)
    bul.scale=0.05
    bul.visible=false
    if(keyDown("5")){
        bul.visible=true
        bul.velocityX=5
    }
}