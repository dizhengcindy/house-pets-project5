class ScheduleSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id,:num_of_pets,:start_date,:start_time,:end_date,
  :end_time, :rating, :comment, :done,:totalCost,:companyservice, :user, pictures:[]


  def picture
    return unless object.picture.attached?
  
    object.picture.blob.attributes
          .slice('filename', 'byte_size')
          .merge(url: picture_url)
          .tap { |attrs| attrs['name'] = attrs.delete('filename') }
  end

end
