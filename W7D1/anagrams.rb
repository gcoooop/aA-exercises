def first_anagram?(string_1, string_2)
  anagrams = string_1.chars.permutation.to_a
  anagrams.map(&:join).include?(string_2) 
end
# Time Complexity: O(n!)

def second_anagram?(string_1, string_2)
  characters_1 = string_1.chars
  characters_2 = string_2.chars
  characters_1.each do |char|
    char_idx = characters_2.find_index(char)
    if char_idx
      characters_2.delete_at(char_idx)
    end
  end
  characters_2.empty?
end
# Time Complexity: O(n^2)

def third_anagram?(string_1, string_2)
  string_1.chars.sort == string_2.chars.sort
end
# Time Complexity: O(n log n)

def fourth_anagram?(string_1, string_2)
  characters_1 = Hash.new(0)
  characters_2 = Hash.new(0)
  string_1.chars.each { |ch| characters_1[ch] += 1 }
  string_2.chars.each { |ch| characters_2[ch] += 1 }
  characters_1 == characters_2
end
# Time Complexity: O(n)

def fourth_anagram_one_hash?(string_1, string_2)
  char_hash = Hash.new { |h, k| h[k] = 0 }
  string_1.chars.each { |ch| char_hash[ch] += 1 }
  string_2.chars.all? { |ch| char_hash.has_key?(ch) && char_hash[ch] == string_2.count(ch) }
end
# Time Complexity: O(n^2)

# p first_anagram?("dog", "god")    #=> true
# p first_anagram?("dog", "gordy")    #=> false
# p second_anagram?("dog", "god")    #=> true
# p second_anagram?("dog", "gordy")    #=> false
# p third_anagram?("dog", "god")    #=> true
# p third_anagram?("dog", "gordy")    #=> false
p fourth_anagram_one_hash?("dog", "god")    #=> true
p fourth_anagram_one_hash?("dog", "gordy")    #=> false

# p first_anagram?("gizmo", "sally")    #=> false
# p first_anagram?("elvis", "lives")    #=> true
# p second_anagram?("gizmo", "sally")    #=> false
# p second_anagram?("elvis", "lives")    #=> true
# p third_anagram?("gizmo", "sally")    #=> false
# p third_anagram?("elvis", "lives")    #=> true
p fourth_anagram_one_hash?("gizmo", "sally")    #=> false
p fourth_anagram_one_hash?("elvis", "lives")    #=> true
