//Create variables here
var dog, dogImage;


function preload()
{
  //load images here
  dogImage = loadImage("dogImg.png");
}

function setup() {
	createCanvas(500, 500);
  
  dog = createSprite(250,250,10,10);
  dog.addImage(dogImage)
}


function draw() {  
  
  background(46,139,87)


  drawSprites();
  //add styles here

}



