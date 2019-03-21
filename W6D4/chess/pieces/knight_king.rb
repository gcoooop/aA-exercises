class Knight < Piece

  def initialize(color, board, pos)
    super
    @symbol = "♘"
  end
end

class King < Piece

  def initialize(color, board, pos)
    super
    @symbol = "♔"
  end
end