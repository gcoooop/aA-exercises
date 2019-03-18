require_relative './PolyTreeNode/lib/00_tree_node.rb'

class KnightPathFinder
    attr_reader :root, :considered_positions
    def self.valid_moves(pos)
        valid_positions = []

        valid_positions << [pos[0] + 1, pos[1] + 2] if valid_position?( [pos[0] + 1, pos[1] + 2] )
        valid_positions << [pos[0] + 1, pos[1] - 2] if valid_position?( [pos[0] + 1, pos[1] - 2] )
        valid_positions << [pos[0] - 1, pos[1] + 2] if valid_position?( [pos[0] - 1, pos[1] + 2] )
        valid_positions << [pos[0] - 1, pos[1] - 2] if valid_position?( [pos[0] - 1, pos[1] - 2] )
        valid_positions << [pos[0] + 2, pos[1] + 1] if valid_position?( [pos[0] + 2, pos[1] + 1] )
        valid_positions << [pos[0] + 2, pos[1] - 1] if valid_position?( [pos[0] + 2, pos[1] - 1] )
        valid_positions << [pos[0] - 2, pos[1] + 1] if valid_position?( [pos[0] - 2, pos[1] + 1] )
        valid_positions << [pos[0] - 2, pos[1] - 1] if valid_position?( [pos[0] - 2, pos[1] - 1] )
        
        valid_positions
    end

    def self.valid_position?(pos)
        return true if (pos[0] >= 0 && pos[1] >= 0) && (pos[0] <= 7 && pos[1] <= 7)
        false
    end

    def initialize(starting_position)
        @root = PolyTreeNode.new(starting_position)
        @considered_positions = [starting_position]
        build_move_tree
    end

    def build_move_tree
        queue = [@root]
    
        until queue.empty?
            shifted_node = queue.shift
            new_moves_arr = new_move_positions(shifted_node.value)
            new_moves_arr.each do |new_move|
                child_node = PolyTreeNode.new(new_move)
                shifted_node.add_child(child_node)
                queue << child_node
            end
        end

    end

    def new_move_positions(pos)
        positions = KnightPathFinder.valid_moves(pos)
        new_positions = []

        positions.each do |position|
            new_positions << position if @considered_positions.none? { |con_pos| con_pos == position }
        end

        @considered_positions += new_positions
        new_positions
    end

    def find_path(end_pos)
        end_node = @root.dfs(end_pos)
        
        path = trace_back_path(end_node)
        path << end_node.value
        path
    end

    def trace_back_path(node)
        return [] if node.parent.nil?
        path = trace_back_path(node.parent)
        path << node.parent.value
        path
    end

end