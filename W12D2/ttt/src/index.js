const View = require('./ttt-view.js')
const Game = require('../ttt_solution/game.js')

  $(() => {
    const game = new Game();
    const $container = $("figure");
    const view = new View(game, $container);
  });
