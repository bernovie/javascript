//drag mouse to toggle the world!
//there's no vanish point
function setup(){
  createCanvas(1280, 800, WEBGL);
  ortho(-width/2, width/2, height/2, -height/2, 0, 1280);
}
function draw(){
 background(63);
 orbitControl();
 for(var i = -2; i < 3; i++){
    for(var j = -2; j < 3; j++){
      push();
      translate(i*160, 0, j*160);
      box(40, 40, 40);
      pop();
    }
  }
}
