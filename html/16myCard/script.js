const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht
let image,numberOnARow,numberOnAColumn,sx,sy,sw,sh,x,y,w,h,index;
let sx2,sx3,sx4,sx5,sy2,sy3,sy4,sy5,card_2,card_3,card_4,card_5;

image = new Image();
image.src = "images/cardDeck.png"

numberOnARow = 13;
numberOnAColumn = 5;

index = Math.floor(Math.random()*52);3
card_2 = Math.floor(Math.random()*52);
card_3 = Math.floor(Math.random()*52);
card_4 = Math.floor(Math.random()*52);
card_5 = Math.floor(Math.random()*52);

image.addEventListener('load',()=>{
  sw = image.width/numberOnARow;
  sh = image.height/numberOnAColumn;
  animate();
})

function animate(){
  sx = (index%numberOnARow)*sw;
  sy = Math.floor(index/numberOnARow)*sh;

  sx2 = (card_2%numberOnARow)*sw;
  sy2= Math.floor(card_2/numberOnARow)*sh;

  sx3 = (card_3%numberOnARow)*sw;
  sy3 = Math.floor(card_3/numberOnARow)*sh;

  sx4 = (card_4%numberOnARow)*sw;
  sy4 = Math.floor(card_4/numberOnARow)*sh;
  
  sx5 = (card_5%numberOnARow)*sw;
  sy5 = Math.floor(card_5/numberOnARow)*sh;


  context.drawImage(image,sx,sy,sw,sh,200,100,sw,sh);
  context.drawImage(image,sx2,sy2,sw,sh,400,100,sw,sh);
  context.drawImage(image,sx3,sy3,sw,sh,600,100,sw,sh);
  context.drawImage(image,sx4,sy4,sw,sh,800,100,sw,sh);
  context.drawImage(image,sx5,sy5,sw,sh,1000,100,sw,sh);

}
