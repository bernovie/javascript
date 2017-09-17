//Global Variables
var vehicle;

function setup() {
    createCanvas(1280, 800);
    vehicle = new Vehicle();
}

function draw() {
    var target = createVector(mouseX,mouseY);
    background(51);
    vehicle.draw();
    vehicle.applyForce(vehicle.follow(target));
}
