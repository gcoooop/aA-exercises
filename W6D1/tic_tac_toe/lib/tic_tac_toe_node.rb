require_relative 'tic_tac_toe'

class TicTacToeNode
  attr_accessor :board, :next_mover_mark, :prev_move_pos

  def initialize(board, next_mover_mark, prev_move_pos = nil)
    @board = board
    @next_mover_mark = next_mover_mark
    @prev_move_pos = prev_move_pos
  end

  def losing_node?(evaluator)
     # over && :x != :o
    return false if @board.over? && @board.winner == evaluator
    return true if @board.over? && @board.winner != evaluator
     
    if evaluator == @next_mover_mark
      self.children.all? {|child| child.losing_node?(evaluator)}
      #(true, true, true, false) 
    else
      #opponent has a losing node
      # {false,false,true,false} 
      self.children.any? {|child| child.losing_node?(evaluator)}
    end
  end

  def winning_node?(evaluator)
      !losing_node?(evaluator)

      # if evaluator == @next_mover_mark
      #   self.children.any? {|child| child.winning_node?(evaluator)}
      # else
      #   self.children.all? {|child| child.winning_node?(evaluator)}
      # end
  end

  # This method generates an array of all moves that can be made after
  # the current move.
  def children
    children = []
    next_marker = self.alternate_marker
    @board.rows.each.with_index do |row, row_i|
      row.each.with_index do |space, space_i|
        if @board.empty?( [row_i, space_i] )
          new_game_state = TicTacToeNode.new(@board.dup, next_marker, [row_i, space_i])
          new_game_state.board[ [row_i, space_i] ] = @next_mover_mark
          #@prev_move_pos = [row_i, space_i]
          children << new_game_state
        end
      end
    end
    children
  end
  
  def alternate_marker
    if @next_mover_mark == :o
      :x
    else
      :o
    end
  end
end

# game = TicTacToeNode.new(Board.new, :x)
# game.children.each do |child|
#   puts "#{child.board.rows} \n\n"
# end

# TicTacToeNode Instance:  @board = 2D array shown below, @next_mover_mark = :x, @prev_move_pos = nil
#  _ _ _ 
#  _ _ _
#  _ _ _ 
# 
# TicTacToeNode Instance:  @board = 2D array shown below, @next_mover_mark = :o, @prev_move_pos = [0,0]
# X _ _
# _ _ _
# _ _ _
