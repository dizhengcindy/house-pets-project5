class User < ApplicationRecord
    has_secure_password
    has_many :schedules, dependent: :destroy
    has_many :companyservices, through: :schedules
    
    validates :username, uniqueness: { case_sensitive: false }
    # validates :email, inclusion: { in: %w(@)
    # validates :username, length: { minimum: 3 }
    # validates :password, length: {minimum: 8}
end
