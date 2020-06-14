class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email
  # ,:schedules
end
