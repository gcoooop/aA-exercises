class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el
    this.setupBoard();
  }

  bindEvents() {
    const $ul = $("ul");
    $ul.on('click', 'li', (event) => {
      const clickedLi = event.currentTarget;
      const $clickedLi = $(clickedLi);
      this.makeMove($clickedLi);
      console.log(clickedLi.prop());
    });
  }

  makeMove($square) {
    const position = $square.data("pos");
    this.game.playMove(position);
    const mark = this.game.currentPlayer;
    $square.text(mark);
    if (this.game.isOver()) {
      const $body = $("body");
      const $winningMessage = $("<h2>");
      $winningMessage.text(`${mark} has won!`);
      $body.append($winningMessage);
      this.winningCase();
    }
  }

  setupBoard() {
    const $ul = $("<ul>");
    for (let i = 0; i <= 2; i++) {
      for (let j = 0; j <= 2; j++) {
        const $li = $("<li>");
        $li.data( { pos: [i, j] } );
        $ul.append($li);
      }
    }

    this.$el.append($ul);
    this.bindEvents();
  }

  winningCase() {
    const $allElements = $("*");
    $allElements.off();
  }
}

module.exports = View;
