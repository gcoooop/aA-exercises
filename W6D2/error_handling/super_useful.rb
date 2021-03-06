# PHASE 2
def convert_to_int(str)
  begin
    Integer(str)
  rescue ArgumentError => error
    puts "Input must be a numeric string! #{error.message}"
    nil
  end
end

# PHASE 3
FRUITS = ["apple", "banana", "orange"]
class CoffeeError < StandardError; end 

def reaction(maybe_fruit)
  if FRUITS.include? maybe_fruit
    puts "OMG, thanks so much for the #{maybe_fruit}!"
  elsif maybe_fruit == "coffee"
    raise CoffeeError.new("That's not a fruit, but I really like coffee so you can try again!")
  else
    raise StandardError 
  end 
end

def feed_me_a_fruit
  puts "Hello, I am a friendly monster. :)"

  puts "Feed me a fruit! (Enter the name of a fruit:)"
  begin
    maybe_fruit = gets.chomp
    reaction(maybe_fruit) 
  rescue CoffeeError => error 
    puts error.message
    retry 
  end
end  

# PHASE 4
class BestieError < RuntimeError; end

class BestFriend
  def initialize(name, yrs_known, fav_pastime)
    @name = name
    @yrs_known = yrs_known
    @fav_pastime = fav_pastime
    begin
      if @yrs_known < 5
        raise BestieError.new("Sorry...we're not besties...")
      elsif @name == "" || @fav_pastime == ""
        raise ArgumentError.new("Must input name and favorite pastime")
      end
    end
  end

  def talk_about_friendship
    puts "Wowza, we've been friends for #{@yrs_known}. Let's be friends for another #{1000 * @yrs_known}."
  end

  def do_friendstuff
    puts "Hey bestie, let's go #{@fav_pastime}. Wait, why don't you choose. 😄"
  end

  def give_friendship_bracelet
    puts "Hey bestie, I made you a friendship bracelet. It says my name, #{@name}, so you never forget me." 
  end
end



