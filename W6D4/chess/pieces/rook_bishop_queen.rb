require_relative "../modules/slideable"
require_relative "../piece"

class Rook < Piece 
  include Slideable 

  def initialize(color, board, pos)
    super 
    @symbol = "♖"
  end

  def move_dirs
    horizontal_dirs
  end

  # def symbol
  #   self.symbol = "♖"
  # end
end

class Bishop < Piece 
  include Slideable

  def initialize(color, board, pos)
    super 
    @symbol = "♗"
  end
  
  def move_dirs
    diagonal_dirs 
  end

  # def symbol
  #   self.symbol = "♗"
  # end
end


class Queen < Piece
  include Slideable

  def initialize(color, board, pos)
    super
    @symbol = "♕"
  end


  
  def move_dirs
    horizontal_dirs + diagonal_dirs
  end

  # def symbol
  #   self.symbol = "♕"
  # end
end