require_relative "../modules/stepable"
require_relative "../piece"

class Knight < Piece
  include Stepable

  def initialize(color, board, pos)
    super
    @symbol = "♘"
  end

  def move_diffs
    [[2, 1], [2, -1], [1, 2], [-1, 2], [-2, 1], [-2, -1], [-1, 2], [-1, -2]]
  end

end

class King < Piece
  include Stepable

  def initialize(color, board, pos)
    super
    @symbol = "♔"
  end

  def move_diffs 
    [[1, 1], [1, 0], [0, 1], [1, -1], [-1, -1], [-1, 0], [0, -1], [-1, 1]]
  end
  
end