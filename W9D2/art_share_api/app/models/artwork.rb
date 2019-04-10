# == Schema Information
#
# Table name: artworks
#
#  id         :bigint(8)        not null, primary key
#  title      :string           not null
#  image_url  :string           not null
#  artist_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Artwork < ApplicationRecord
  belongs_to :artist,
    foreign_key: :artist_id,
    class_name: :User

  has_many :artwork_shares,
    foreign_key: :artwork_id,
    class_name: :ArtworkShare

  has_many :shared_viewers, 
    through: :artwork_shares, 
    source: :viewer

  def self.find_artworks(user_id)
    Artwork
      .joins(:artwork_shares)
      .where("artwork_shares.viewer_id = :id OR artworks.artist_id = :id", {:id => user_id})
      .distinct
  end

end
