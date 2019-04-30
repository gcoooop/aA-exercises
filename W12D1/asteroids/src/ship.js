const MovingObject = require("./moving_object.js")
const Util = require("./utils.js")

Util.inherits(Ship, MovingObject);

function Ship(options) {
  this.radius = 5;
  this.color = "purple";
  this.vel = [0, 0];
  this.pos = options.pos;
  this.game = options.game;
  new MovingObject(this);
}

Ship.prototype.relocate = function() {
  this.pos = this.game.randomPosition();
  this.vel = [0, 0];
}

Ship.prototype.power = function(impulse) {
  // heres where i left off
}

module.exports = Ship;