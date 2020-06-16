class ScheduleSerializer < ActiveModel::Serializer
  attributes :id,:num_of_pets,:start_date,:start_time,:end_date,
  :end_time, :rating, :comment, :done,:totalCost,:companyservice, :user
end
