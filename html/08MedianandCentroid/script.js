const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

// create namespace
let A,B,C;
let lAB,lBC,lCA;
let MAB,MBC,MCA;
let lAMBC,lBMAC,lCMAB;

A = new Point(500,100,20,"green",true);
B = new Point(1100,150,50,"aqua",true);
C = new Point(700,500,20,"orange",true);

MBC = new Point(50,50,10,"black",false);
MAB = new Point(50,50,10,"black",false);
MCA = new Point(50,50,10,"black",false);
MABC = new Point(50,50,10,"purple",false);

lAB = new LinearFunction(0.5,1);
lBC = new LinearFunction(0.5,1);
lCA = new LinearFunction(0.5,1);
lAMBC = new LinearFunction(2,100);
lBMCA = new LinearFunction(2,100);
lCMAB = new LinearFunction(2,100);

function animate(){
  context.clearRect(0,0,width,height)
  A.draw();
  B.draw();
  C.draw();


  MBC.x = (B.x + C.x)/2; 
  MBC.y = (B.y + C.y)/2;
  MBC.draw();

  MAB.x = (B.x + A.x)/2; 
  MAB.y = (B.y + A.y)/2;
  MAB.draw();

  MCA.x = (A.x + C.x)/2; 
  MCA.y = (A.y + C.y)/2;
  MCA.draw();

  MABC.x = (A.x + B.x + C.x)/3; 
  MABC.y = (A.y + B.y + C.y)/3;
  MABC.draw();

  lAB.slope = (B.y - A.y)/(B.x - A.x);
  lAB.intercept = B.y - B.x * lAB.slope;

  lBC.slope = (C.y - B.y)/(C.x - B.x);
  lBC.intercept = C.y - C.x * lBC.slope;

  lCA.slope = (C.y - A.y)/(C.x - A.x);
  lCA.intercept = A.y - A.x * lCA.slope;

  lAMBC.slope = (A.y - MBC.y)/(A.x - MBC.x);
  lAMBC.intercept = A.y - A.x * lAMBC.slope;

  lBMCA.slope = (B.y - MCA.y)/(B.x - MCA.x);
  lBMCA.intercept = B.y - B.x * lBMCA.slope;

  lCMAB.slope = (C.y - MAB.y)/(C.x - MAB.x);
  lCMAB.intercept = C.y - C.x * lCMAB.slope;

  lAB.draw(context,"lime")
  lBC.draw(context,"lime")
  lCA.draw(context,"lime")
  lAMBC.draw(context,"gray")
  lBMCA.draw(context,"gray")
  lCMAB.draw(context,"gray")
}
setInterval(animate,10);