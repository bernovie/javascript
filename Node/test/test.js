/*const scribble = require('scribbletune');

let c = scribble.clip({
    notes: ['c4'],
    pattern: 'x-'.repeat(8)
});

scribble.midi(c);*/

var node = function(){
  this.value = null;
  this.next = null;

  this.getValue = function(){
    return this.value;
  }

  this.getNext = function(){
    return this.next;
  }

  this.setValue = function(val){
      this.value = val;
  }

  this.setNext = function(nex){
    this.next = nex;
  }

}

var node1 = new node();
var node2 = new node();

node1.setValue(10);
console.log(node1.getValue());
node1.value = 20;
console.log(node1.value);
node1.next = node2;
node2.value = 30;
console.log(node1.next.value);
console.log("Hola");
