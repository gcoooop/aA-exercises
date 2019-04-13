# == Schema Information
#
# Table name: tracks
#
#  id          :bigint(8)        not null, primary key
#  album_id    :integer          not null
#  title       :string           not null
#  ord         :integer          not null
#  lyrics      :text
#  bonus_track :boolean          default(FALSE), not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Track < ApplicationRecord
  validates :album_id, :title, :ord, :bonus_track, presence: true

  belongs_to :album
end
