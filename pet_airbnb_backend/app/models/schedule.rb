class Schedule < ApplicationRecord
  belongs_to :user
  belongs_to :companyservice

  has_one_attached :picture
end

