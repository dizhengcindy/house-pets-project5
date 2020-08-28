class Schedule < ApplicationRecord
  belongs_to :user
  belongs_to :companyservice

  has_many_attached :pictures
end

