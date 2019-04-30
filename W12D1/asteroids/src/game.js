const Asteroid = require("./asteroid.js")
const Ship = require("./ship.js")

function Game() {
  this.dimX = 500;
  this.dimY = 500;
  this.numAsteroids = 7;
  this.asteroids = [];
  this.addAsteroids();
  this.ship = new Ship( { game: this, pos: this.randomPosition() } );
}

Game.prototype.allObjects = function() {
  const allObjs = this.asteroids.concat([this.ship]);
  return allObjs;
}

Game.prototype.addAsteroids = function() {
  for (let n = 0; n < this.numAsteroids; n++) {
    this.asteroids.push( new Asteroid( { game: this, pos: this.randomPosition() } ) )
  }
}

Game.prototype.randomPosition = function() {
  const x = Math.random() * this.dimX;
  const y = Math.random() * this.dimY;
  return [x, y]
}

Game.prototype.draw = function(ctx) {
  ctx.clearRect(0, 0, this.dimX, this.dimY);
  this.allObjects().forEach( obj => {
    obj.draw(ctx);
  });
}

Game.prototype.moveObjects = function() {
  this.allObjects().forEach( obj => {
    obj.move();
  });
}

Game.prototype.wrap = function(pos) {
  const newPos = pos.map( (posEle, idx) => {
    if (posEle < 0) {
      return posEle = this.dimX; //idx === 0 ? this.dimX : this.dimY;
    } else if (posEle > this.dimX) { //idx === 0 ? this.dimX: this.dimY) {
      return posEle = 0;
    } else {
      return posEle;
    }
  })
  return newPos;
}

Game.prototype.checkCollisions = function() {
  const allObjs = this.allObjects()
  for (let i = 0; i < allObjs.length - 1; i++) {
    const ast1 = allObjs[i];
    for (let j = i + 1; j < allObjs.length; j++) {
      const ast2 = allObjs[j];
      if ( ast1.isCollidedWith(ast2) ) {
        ast1.collideWith(ast2);
      };
    }
  }
}

Game.prototype.step = function() {
  this.moveObjects();
  this.checkCollisions();
  console.log(this.asteroids)
}

Game.prototype.remove = function(obj) {
  this.asteroids = this.asteroids.filter( asteroid => obj !== asteroid)
}



module.exports = Game