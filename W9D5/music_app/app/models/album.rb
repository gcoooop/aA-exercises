# == Schema Information
#
# Table name: albums
#
#  id           :bigint(8)        not null, primary key
#  band_id      :integer          not null
#  title        :string           not null
#  yr           :integer          not null
#  studio_album :boolean          default(TRUE), not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Album < ApplicationRecord
  validates :band_id, :title, :yr, :studio_album, presence: true

  belongs_to :band
  
  has_many :tracks,
    dependent: :destroy
end
