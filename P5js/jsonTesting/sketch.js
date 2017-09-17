//Global Variables
var data;

function preload(){
  data = loadJSON("birds_antarctica.json");
}

function setup() {
    createCanvas(1280, 1600);
    //noCanvas();
    background(52);
    var currentY = 0;

    for(var i = 0; i < data.birds.length; i++){
      fill(200, 200, 0);
      textSize(20);
      console.log(data.birds.length);
      currentY = currentY+40;
      //createElement('h1', data.birds[i].family);
      text(data.birds[i].family, 10, currentY);
      textSize(12);
      fill(random(70,256), random(70,256), random(70,256));

      for(var j = 0; j < data.birds[i].members.length; j++){
         currentY = currentY + 20;
         text(data.birds[i].members[j], 30, currentY);
      }

    }
}

/*function draw() {
    background(51);
    //fill(birds[1].r, birds[1].g, birds[1].b);
    var bird = data.birds[1].members[2];
    createP(bird);

}*/
