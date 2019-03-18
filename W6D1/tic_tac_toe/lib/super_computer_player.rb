require_relative 'tic_tac_toe_node'
require "byebug"

class SuperComputerPlayer < ComputerPlayer
  def move(game, mark)
    game_state = TicTacToeNode.new(game.board, mark)
    game_state.children.each do |child|
      # debugger
      return child.prev_move_pos if child.winning_node?(mark)
      # return child.prev_move_pos if child.losing_node?(alternate_marker(mark))
    end

    game_state.children.each do |child|
      return child.prev_move_pos if !( child.losing_node?(mark) ) 
    end


    # game_state.children.find { |move| move.losing_node? }
    raise "all losing moves"
  end

  def alternate_marker(mark)
    if mark == :o
      :x
    else
      :o
    end
  end
end

if __FILE__ == $PROGRAM_NAME
  puts "Play the brilliant computer!"
  hp = HumanPlayer.new("Jeff")
  cp = SuperComputerPlayer.new

  TicTacToe.new(hp, cp).run
end
