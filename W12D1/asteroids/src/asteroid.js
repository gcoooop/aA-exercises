const MovingObject = require("./moving_object.js")
const Util = require("./utils.js")
const Ship = require("./ship.js")

Util.inherits(Asteroid, MovingObject)

function Asteroid(options) {
  this.color = "gray";
  this.radius = 25;
  this.pos = options.pos;
  this.vel = Util.randomVec(3);
  this.game = options.game;
  new MovingObject(this);
}

Asteroid.prototype.collideWith = function(otherObject) {
  if (otherObject instanceof Ship) {
    otherObject.relocate();
  }
}

module.exports = Asteroid;