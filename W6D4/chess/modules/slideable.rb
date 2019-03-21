module Slideable 
  HORIZONTAL_DIRS = [[0, 1], [1, 0], [0, -1], [-1, 0]]
  DIAGONAL_DIRS = [[1, 1], [1, -1], [-1, -1], [-1, 1]]

  def horizontal_dirs 
    HORIZONTAL_DIRS
  end

  def diagonal_dirs 
    DIAGONAL_DIRS
  end

  def moves
    moves_arr = []

    move_dirs.each do |dx, dy|
      moves_arr.concat( grow_unblocked_moves(dx, dy) )
    end 

    moves_arr
  end

  def grow_unblocked_moves(dx, dy)

    poss_moves = []
    # conditions: if enemy piece is in the square, end on that square
    #             if our own piece is there, end before that square
    #             cant run off the board
    #             make sure the next sq != self.pos
      # x = self.pos[0] + dx
      # y = self.pos[1] + dy
    current_pos = self.pos
    7.times do |x|
      new_x = current_pos[0] + dx
      new_y = current_pos[1] + dy
      poss_moves << [new_x, new_y]
      current_pos = [new_x, new_y]
    end

    poss_moves.select! { |pos| pos[0].between?(0,7) && pos[1].between?(0,7) }

    poss_moves.each_with_index do |pos, idx|
      existing_piece = self.board[pos]
      if existing_piece.is_a?(Piece) && existing_piece.color != self.color && !existing_piece.is_a?(NullPiece)
        return poss_moves[0..idx]
      elsif existing_piece.is_a?(Piece) && existing_piece.color == self.color && !existing_piece.is_a?(NullPiece)
        return poss_moves[0...idx]
      end
    end
    
  end

end

