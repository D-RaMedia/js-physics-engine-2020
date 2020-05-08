const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;



let colors = ["red", "pink", "blue", "green", "purple", "yellow", "orange"];

function getRandomNumber(max){
  return Math.floor(Math.random()*max);
}

function spawnCircle(){
  let myCircle = new Point(getRandomNumber(width), getRandomNumber(height), getRandomNumber(50), colors[getRandomNumber(colors.length)]);
  myCircle.draw();
}

function repeat(){
  spawnCircle();
}


let points = [];

for(let i =0; i<3; i++){
  let x = getRandomInt(0,width);
  let y = getRandomInt(0,height);
  let myPoint = new Point(x,y,5,"black",i);
  points.push(myPoint);
}

let myPolygon = new Polygon(point);
myPolygon.draw(context);

class Polygon{
  constructor(points){
    this.points = points;
    Polygon.add(point)
  }

  draw(context){
  }

}

setInterval(repeat,10);

let myPolygon = new Polygon(points);
myPolygon.draw(context);

