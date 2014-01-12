function init() {
  dude = new Player(23, 42);
  dude.talk();
  alert('game board ' + dude.speed);
}

var person = { age:23, speed:21 }

function Player(age, speed) {
  this.age = age;
  this.speed = speed;
  this.talk = function() {
    console.log('Im not a talker');
  }
}

window.onload = init;