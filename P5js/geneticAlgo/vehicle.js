
function Vehicle(){
  var x=100, y=100, xvel=0, yvel=-2, xaccel=0, yaccel=0;
  var velocity, position, acceleration;
  this.maxspeed = 5;
  this.maxforce = 0.5;
  position = createVector(x,y);
  velocity = createVector(xvel,yvel);
  acceleration = createVector(xaccel,yaccel);

  this.follow = function(target){
    var ideal = p5.Vector.sub(target, position);
    ideal.setMag(this.maxspeed);
    var steer = p5.Vector.sub(ideal, velocity);
    steer.limit(this.maxforce);
    console.log("Magnitude: "+ideal.mag());
    return steer;
  }

  this.applyForce = function(force){
      acceleration.add(force);
  }

  this.draw = function(){
    this.update();
    // Draw a triangle rotated in the direction of velocity
    var angle = velocity.heading() + PI / 2;

    push();
    translate(position.x, position.y);
    rotate(angle);

    beginShape(TRIANGLES);
    vertex(position.x+0,position.y+45);
    vertex(position.x+15,position.y+0);
    vertex(position.x+30,position.y+45);
    endShape();

    pop();
  }

  this.update = function(){
    velocity.add(acceleration);
    velocity.limit(this.maxspeed);
    position.add(velocity);
    acceleration.mult(0);
  }


}
