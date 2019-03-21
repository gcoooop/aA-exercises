require_relative "piece"
require_relative "pieces/rook_bishop_queen"
require_relative "pieces/knight_king"
require_relative "pieces/pawn"
require_relative "errors"
require "byebug"

class Board
  attr_reader :rows 

  WHITE_STARTING_POSITIONS = [ [0,0], [0,1], [0,2], [0,3], [0,4], [0,5], [0,6], [0,7],
                                [1,0], [1,1], [1,2], [1,3], [1,4], [1,5], [1,6], [1,7] ]

  BLACK_STARTING_POSITIONS = [ [6,0], [6,1], [6,2], [6,3], [6,4], [6,5], [6,6], [6,7],
                                [7,0], [7,1], [7,2], [7,3], [7,4], [7,5], [7,6], [7,7] ]

  NULL_STARTING_POSITIONS = [ [2,0], [2,1], [2,2], [2,3], [2,4], [2,5], [2,6], [2,7],
                              [3,0], [3,1], [3,2], [3,3], [3,4], [3,5], [3,6], [3,7],
                              [4,0], [4,1], [4,2], [4,3], [4,4], [4,5], [4,6], [4,7],
                              [5,0], [5,1], [5,2], [5,3], [5,4], [5,5], [5,6], [5,7] ]

  PIECE_POSITIONS = [:rook, :knight, :bishop, :queen, :king, :bishop, :knight, :rook]


  def initialize 
    @rows = Array.new(8) { Array.new(8, nil) }
    @sentinel = NullPiece.instance
    
    (0..7).each do |col|
      case PIECE_POSITIONS[col]
      when :rook 
        add_piece( Rook.new( :magenta, self, [0, col] ) )
      when :knight 
        add_piece( Knight.new( :magenta, self, [0, col] ) )
      when :bishop
        add_piece( Bishop.new( :magenta, self, [0, col] ) )
      when :queen 
        add_piece( Queen.new( :magenta, self, [0, col] ) )
      when :king
      end
    end

    WHITE_STARTING_POSITIONS.each do |pos|
      add_piece(Pawn.new(:magenta, self, pos), pos )
    end
    BLACK_STARTING_POSITIONS.each do |pos|
      add_piece(Pawn.new(:green, self, pos), pos )
    end
    NULL_STARTING_POSITIONS.each do |pos|
      add_piece(NullPiece.instance, pos)
    end
    
  end

  def [](pos)
    @rows[pos[0]][pos[1]]
  end

  def []=(pos, val)
    @rows[pos[0]][pos[1]] = val 
  end 

  def add_piece(piece, pos)
    #raise position not empty? 
    self[pos] = piece 
  end

  def move_piece(start_pos, end_pos)
    # begin 
      if self[start_pos].nil?
        raise NoPieceError.new("There is no piece in this position")
      elsif !valid_pos?(end_pos)
        raise InvalidMoveError.new("That is not a valid move")
      end
    # rescue NoPieceError || InvalidMoveError => error 
    #     puts error.message
    #     retry 
    # end
    self[start_pos], self[end_pos] = nil, self[start_pos]
  end

  def valid_pos?(end_pos)
    end_pos.all? { |i| i < 8 && i >= 0 } 
  end

end