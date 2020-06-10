class Service < ApplicationRecord
    has_many :companyservices, dependent: :destroy
    has_many :companies, through: :companyservices
    
end
