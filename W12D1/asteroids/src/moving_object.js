const Utils = require("./utils.js")

function MovingObject(options) {
  this.pos = options.pos;
  this.vel = options.vel;
  this.radius = options.radius;
  this.color = options.color;
  this.game = options.game;
}

MovingObject.prototype.draw = function(ctx) {
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
  ctx.fill();
}

MovingObject.prototype.move = function() {
  const newX = this.pos[0] + this.vel[0];
  const newY = this.pos[1] + this.vel[1];
  this.pos = this.game.wrap( [newX, newY] )
}

MovingObject.prototype.isCollidedWith = function(otherObject) {
  const distBtwn = Utils.distBtwn(this.pos, otherObject.pos);
  if ( distBtwn < this.radius + otherObject.radius ) return true;
  return false;
}

MovingObject.prototype.collideWith = function(otherObject) {
}

module.exports = MovingObject