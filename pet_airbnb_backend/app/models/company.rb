class Company < ApplicationRecord
    has_many :companyservices, dependent: :destroy
    has_many :services, through: :companyservices

end
