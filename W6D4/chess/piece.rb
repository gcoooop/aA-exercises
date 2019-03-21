require "singleton"


class Piece 
  attr_accessor :color, :pos, :symbol
  attr_reader :board
  
  def initialize(color, board, pos)
    @color = color 
    @board = board
    @pos = pos 
  end 

  def to_s
    self.symbol.colorize(@color)
  end
  
  def inspect 
    @symbol.inspect 
  end

end

class NullPiece < Piece 
  include Singleton

  def initialize
    @symbol = "" 
  end
end

