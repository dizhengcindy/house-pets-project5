class UpdateScheduleService
    def initialize(schedule, params)
      @schedule = schedule
      @params = params
    end
  
    def call
      if @params[:pictures] && !file?(@params[:pictures])
        delete_pictures if @schedule.pictures.attached?
        @params.delete(:pictures)
      end
  byebug
      @schedule.update(@params)
    end
  
    private
  
    def file?(param)
      param.is_a?(ActionDispatch::Http::UploadedFile)
    end
  
    def delete_pictures
      @schedule.pictures.purge
    end
  end