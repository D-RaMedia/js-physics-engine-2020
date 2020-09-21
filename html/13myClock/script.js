const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let time,clockFace,hoursHand,minutesHand,secondsHand,dot;
let seconds,minutes,hours;

clockFace = new Image();
clockFace.src = "images/clockface1.png";

dot = new Image();
dot.src = "images/dot.png";

secondsHand = new Image();
secondsHand.src= "images/secondsHand.png";

minutesHand = new Image();
minutesHand.src= "images/minutesHand.png";

hoursHand = new Image();
hoursHand.src= "images/hoursHand.png";

time = new Date();

setInterval(animate,10)

function animate(){
  time = new Date();
  seconds = time.getSeconds();
  minutes = time.getMinutes();
  hours = time.getHours();
  console.log(seconds)

  context.clearRect(0,0,width,height);
  context.drawImage(clockFace,0,0);
  
  context.save();
  context.translate(clockFace.width/2,clockFace.height/2);
  context.rotate(seconds*2*Math.PI/60);
  context.drawImage(secondsHand,-secondsHand.width/2,-secondsHand.height,);
  context.restore();

  context.save();
  context.translate(clockFace.width/2,clockFace.height/2);
  context.rotate(minutes*2*Math.PI/60);
  context.drawImage(minutesHand,-minutesHand.width/2,-minutesHand.height);
  context.restore();

  context.save();
  context.translate(clockFace.width/2,clockFace.height/2);
  context.rotate(hours*2*Math.PI/12 + minutes*2*Math.PI/2);
  context.drawImage(hoursHand,-hoursHand.width/2,-hoursHand.height);
  context.restore();

  context.save();
  contezt.drawImage(dot,150,150);
  context.restore();
}