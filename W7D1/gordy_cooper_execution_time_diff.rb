# my_min
# Given a list of integers find the smallest number in the list.

# Phase I
# First, write a function that compares each element to every other element of the list. Return the element if all other elements in the array are larger.
# What is the time complexity for this function?
def my_min_1(list)

  list.each do |num_1|
    return num_1 if list.all? { |num_2| num_1 <= num_2 }
  end
end

# Time Complexity: O(n^2)

# Phase II
# Now rewrite the function to iterate through the list just once while keeping track of the minimum. What is the time complexity?

def my_min_2(list)
  smallest = list.first 

  list.each do |num|
    smallest = num if num < smallest
  end
  
  smallest
end
# Time Complexity: O(n)

list = [ 0, 3, 5, 4, -5, 10, 1, 90 ]
my_min_1(list)  # =>  -5
my_min_2(list)  # =>  -5

# Largest Contiguous Sub-sum
# You have an array of integers and you want to find the largest contiguous (together in sequence) sub-sum. Find the sums of all contiguous sub-arrays and return the max.

# Phase I: Write a function that iterates through the array and finds all sub-arrays using nested loops. First make an array to hold all sub-arrays. Then find the sums of each sub-array and return the max.
# Discuss the time complexity of this solution.

def largest_contiguous_subsum_1(list)
  subarrays = []
  (0...list.length).each do |start_idx|
    (start_idx...list.length).each do |end_idx| # second nested loop -- n^2
      subarrays << list[start_idx..end_idx] 
    end
  end
  subarrays.map { |sub_arr| sub_arr.sum }.max # n^2 #not a nest?
end
# Time Complexity: O(n^2)


# Phase II
# Let's make a better version. Write a new function using O(n) time with O(1) memory. Keep a running tally of the largest sum.

def largest_contiguous_subsum_2(list)
  largest_sum = nil
  current_sum = 0
  
  list.each do |num|
    largest_sum = num if largest_sum.nil?
    current_sum += num 
    largest_sum = current_sum if current_sum > largest_sum
    current_sum = 0 if current_sum < 0
  end
  
  largest_sum
end
# Time Complexity: O(n)





list = [5, 3, -7] #[-5, -1, -3]
# largest_sum = -5 
#         num = -1
# current_sum = -1

largest_contiguous_subsum_1(list) # => 8
p largest_contiguous_subsum_2(list) # => 8

# possible sub-sums
[5]           # => 5
[5, 3]        # => 8 --> we want this one
[5, 3, -7]    # => 1
[3]           # => 3
[3, -7]       # => -4
[-7]          # => -7

# Example 2:
list = [2, 3, -6, 7, -6, 7]
largest_contiguous_subsum_1(list) # => 8 (from [7, -6, 7])
p largest_contiguous_subsum_2(list) # => 8 (from [7, -6, 7])

# Example 3:
list = [-5, -1, -3]
largest_contiguous_subsum_1(list) # => -1 (from [-1])
p largest_contiguous_subsum_2(list) # => -1 (from [-1])