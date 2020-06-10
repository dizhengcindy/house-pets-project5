class CompanyserviceSerializer < ActiveModel::Serializer
  attributes :id,:charge,:company,:services, :schedules
end
