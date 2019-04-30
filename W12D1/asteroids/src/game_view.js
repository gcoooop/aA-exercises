const Game = require("./game.js")

function GameView(game, ctx) {
  this.game = game;
  this.ctx = ctx;
}

GameView.prototype.start = function() {
  setInterval( () => {
    this.game.step();
    this.game.draw(this.ctx);
  }, 20);
}

GameView.prototype.bindKeyHandlers = function() {

}

module.exports = GameView