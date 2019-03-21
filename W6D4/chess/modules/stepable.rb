module Stepable
  def moves
    moves_arr = []

    move_diffs.each do |dx, dy|
      poss_move = [self.pos[0] + dx, self.pos[1] + dy]
      moves_arr << poss_move if self.board[poss_move].color != self.color 
    end

    moves_arr.select { |pos| pos[0].between?(0,7) && pos[1].between?(0,7) }
  end

end