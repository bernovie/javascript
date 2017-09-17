
function myPoint(){
  var x = 0;
  var y = 0;
  var string;

  this.setX = function(val){
    x = val;
  }

  this.setY = function(val){
    y = val;
  }

  this.draw = function(){
    ellipse(x,y,30,30);
    text(string,x-2,y+3);
  }
  this.setText = function(text){
      string = text;
  }
  this.getX = function(){
    return x;
  }

  this.getY = function(){
    return y;
  }
}

function NearestNeighbor(points){
 var minimum =  Number.MAX_SAFE_INTEGER;
 var index = 0;

  for(var i = 0; i < contador-1 && contador > 1; i++){
    line(points[i].getX(),points[i].getY(),points[i+1].getX(),points[i+1].getY());
  }
  if(contador > 0){
    line(points[contador-1].getX(),points[contador-1].getY(),points[0].getX(),points[0].getY());
  }
}

function ClosestPair(points){
var minimum =  Number.MAX_SAFE_INTEGER;
var distance = 0;
var index = 0;

  for(var i = 0; i < contador; i++){
    for(var e = i+1; e < contador; e++){
      if(e != i){
          distance = dist(points[i].getX(),points[i].getY(),points[e].getX(),points[e].getY());
          if(distance < minimum && (e != i-1)){
            minimum = distance;
            index = e;
          }
      }
    }
    line(points[i].getX(),points[i].getY(),points[index].getX(),points[index].getY());
    minimum =  Number.MAX_SAFE_INTEGER;
  }
  if(contador > 1){
    line(points[0].getX(),points[0].getY(),points[contador-1].getX(),points[contador-1].getY());
  }
}
function mouseClicked(){
  if(mouseX > 25 && mouseY > 70){
    points[contador] = new myPoint();
    points[contador].setX(mouseX);
    points[contador].setY(mouseY);
    points[contador].setText(contador);
    contador++;
  }
  return false;
}


//Global Variables
var points = [100];
var contador = 0;
var button, button2;
var neighborBool = false;
var closestBool = false;

function setup() {
    var middleX = windowWidth/2;
    var middleY = windowHeight/2;
    createCanvas(1280, 800);
    button = createButton('NearestNeighbor');
    button.position(25, 25);
    button2 = createButton('ClosestPair');
    button2.position(25, 50);
    /*for(var i = 0; i < 9; i++){
      points[i] = new myPoint();
    }
    points[0].setX(middleX+50);
    points[0].setY(100);
    points[1].setX(middleX+200);
    points[1].setY(200);
    points[2].setX(middleX+300);
    points[2].setY(300);
    points[3].setX(middleX+200);
    points[3].setY(550);
    points[4].setX(middleX+100);
    points[4].setY(600);
    points[5].setX(middleX-100);
    points[5].setY(600);
    points[6].setX(middleX-200);
    points[6].setY(500);
    points[7].setX(middleX-250);
    points[7].setY(300);
    points[8].setX(middleX-150);
    points[8].setY(150);*/

}
function toggleNearestNeighbor(){
  neighborBool = true;
  closestBool = false;
}

function toggleClosestPair(){
  neighborBool = false;
  closestBool = true;
}

function draw() {
    background(51);
    button.mouseClicked(toggleNearestNeighbor);
    button2.mouseClicked(toggleClosestPair);
    for(var i = 0; i < contador; i++){
      points[i].draw();
    }
    if(closestBool){
      ClosestPair(points);
    }

    if(neighborBool){
      NearestNeighbor(points);
    }
}
