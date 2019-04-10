# == Schema Information
#
# Table name: cat_rental_requests
#
#  id         :integer          not null, primary key
#  cat_id     :integer          not null
#  start_date :date             not null
#  end_date   :date             not null
#  status     :string           default("PENDING")
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class CatRentalRequest < ApplicationRecord
    STATUSES = ['PENDING', 'APPROVED', 'DENIED']
    
    validates :cat_id, :start_date, :end_date, :status, presence: true
    validates :status, inclusion: {in: STATUSES,
        message: "Invalid status"} 

    belongs_to :cat,
        foreign_key: :cat_id,
        class_name: :Cat
    
    def overlapping_requests
        requests_on_cat = CatRentalRequest
            .where("cat_id = #{self.cat_id} AND id != #{self.id}")
            .where("start_date BETWEEN '#{self.start_date}' AND '#{self.end_date}' OR end_date BETWEEN '#{self.start_date}' AND '#{self.end_date}'")
    end

    def overlapping_approved_request
        overlapping_requests.where(status: "APPROVED")
        #test out tomorrow
    end

    def does_not_overlap_approved_request
        
    end
end
