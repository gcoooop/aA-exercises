class PolyTreeNode
    attr_reader :value, :parent, :children

    def initialize(value)
        @value = value
        @parent = nil
        @children = []
    end

    def parent=(node)
        unless @parent.nil?  
            @parent.children.reject! { |child| child == self }
        end

        @parent = node
        return nil if @parent.nil?

        unless node.children.include?(self)
            node.children << self
        end
    end
   
    def add_child(node)
        node.parent = self
    end

    def remove_child(node)
        if node.parent.nil?
            raise "no parent"
        else
            node.parent = nil
        end
    end 

    def dfs(target)
        return self if self.value == target
        result = nil
        self.children.each do |child|
            result = child.dfs(target)
            return result if !result.nil?
        end
        nil
    end
 
    def bfs(target)
        queue = [self]
        until queue.empty?
            node = queue.shift
            return node if node.value == target
            node.children.each { |child| queue.push(child) }
        end
        nil
    end

end
