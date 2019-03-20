require "colorize"
require_relative "board.rb"
require_relative "cursor.rb"
require "byebug"

class Display
  attr_reader :board, :cursor

  def initialize
    @board = Board.new
    @cursor = Cursor.new( [0,0], @board )
  end
  
  def render 
    self.board.rows.each.with_index do |row, idx_x|
      row.each.with_index do |space, idx_y|
        if self.cursor.cursor_pos == [idx_x, idx_y]
          puts "#{space}\s".blue
        else
          puts "#{space}\s"
        end
      end
      puts "\n"
    end
  end

  def get_move
    while true 
      self.render
      self.cursor.get_input 
      system "clear"
    end
  end
#render shouldn't loop or get input
#loop
#get user input 
#call handle_key/get_input => update_pos
#call render again once pos_updated 
end

p Display.new.get_move