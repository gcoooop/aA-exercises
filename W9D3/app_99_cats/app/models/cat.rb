# == Schema Information
#
# Table name: cats
#
#  id          :integer          not null, primary key
#  birth_date  :date             not null
#  name        :string           not null
#  color       :string           not null
#  sex         :string(1)        not null
#  description :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Cat < ApplicationRecord
  include ActionView

  COLORS = ["red", "blue", "white", "green", "purple", "black", "grey", "TIGER", "brown"]
  SEXES = ["M", "F"]

  validates :birth_date, :name, :color, :sex, :description, presence: true
  validates :color, inclusion: { in: COLORS,
    message: "Not a valid cat color" }
  validates :sex, inclusion: { in: SEXES,
    message: "Not a valid cat sex" }

    has_many :rental_requests,
      foreign_key: :cat_id,
      class_name: :CatRentalRequest,
      dependent: :destroy

  def age
    now = Time.now
    now.year - birth_date.year - ((now.month > birth_date.month || (now.month == birth_date.month && now.day >= birth_date.day)) ? 0 : 1)
  end

  def self.colors
    COLORS
  end

  def self.sexes
    SEXES
  end
end
