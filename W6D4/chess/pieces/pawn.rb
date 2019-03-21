require_relative "../piece"

class Pawn < Piece 

  def initialize(color, board, pos)
    super
    @symbol = "♙"
  end

  def move_dirs
    
    if self.pos[0] == 1 && self.color == :magenta
      [ [2, 0], [1, 0] ]
    elsif self.pos[0] == 6 && self.color == :green
      [ [-2, 0], [-1, 0] ]
    elsif self.color == :magenta
      [ [1, 0] ]
    elsif self.color == :green
      [ [-1, 0] ]
    end

  end

  def attack_dirs

    if self.pos[0] == 1 && self.color == :magenta
      [ [1, 1], [1, -1] ]
    elsif self.pos[0] == 6 && self.color == :green
      [ [-1, 1], [-1, -1] ]
    end

  end

  def moves 
    moves_arr = []

    move_dirs.each do |dx, dy|
      poss_move = [self.pos[0] + dx, self.pos[1] + dy]
      moves_arr << poss_move if self.board[poss_move].is_a?(NullPiece)
    end

    attack_dirs.each do |dx, dy|
      poss_move = [self.pos[0] + dx, self.pos[1] + dy]
      moves_arr << poss_move if self.board[poss_move].color != self.color && !self.board[poss_move].is_a?(NullPiece)
    end 

    moves_arr
  end



end