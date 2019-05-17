class Bench < ApplicationRecord

  def self.in_bounds(bounds)
    Bench.where("lat BETWEEN #{bounds["SouthWest"]["lat"]} AND #{bounds["NorthEast"]["lat"]}")
      .where("long BETWEEN #{bounds["SouthWest"]["lng"]} AND #{bounds["NorthEast"]["lng"]}")
  end

end

  # {
  #   "northEast"=> {"lat"=>"37.80971", "lng"=>"-122.39208"},
  #   "southWest"=> {"lat"=>"37.74187", "lng"=>"-122.47791"}
  # }