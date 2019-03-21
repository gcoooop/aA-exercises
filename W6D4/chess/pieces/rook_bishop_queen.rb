require_relative "../modules/slideable.rb"
require_relative "../piece.rb"

class Rook < Piece 
  include Slideable 

  def move_dirs
    horizontal_dirs
  end

  def symbol
    self.symbol = "♖"
  end
end

class Bishop < Piece 
  include Slideable
  
  def move_dirs
    diagonal_dirs 
  end

  def symbol
    self.symbol = "♗"
  end
end


class Queen < Piece
  include Slideable
  
  def move_dirs
    horizontal_dirs + diagonal_dirs
  end

  def symbol
    self.symbol = "♕"
  end
end