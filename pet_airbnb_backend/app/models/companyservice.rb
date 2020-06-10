class Companyservice < ApplicationRecord
  belongs_to :company
  belongs_to :service
  has_many :schedules, dependent: :destroy
  has_many :users, through: :schedules
end
