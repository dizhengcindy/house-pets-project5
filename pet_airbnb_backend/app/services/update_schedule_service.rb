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

    end
  
  
 
  

  end