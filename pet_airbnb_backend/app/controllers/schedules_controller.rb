class SchedulesController < ApplicationController
#sending all schedules to the frontend
    def userSchedules
        schedules = Schedule.where("user_id=?", params[:user_id])
    
        render json: schedules.with_attached_pictures
    end
#sending this user's schedules to the frontend
    def index
        schedules = Schedule.all.with_attached_pictures
        render json: schedules
    end
#make new schedule
    def create
        schedule = Schedule.new(schedule_params)
  
        if schedule.save
            
            render json: schedule
        else
            render json: {error: "failed to make a schedule"}
        end
    end
# update rating, comment and upload pictures
    def update
        schedule = Schedule.find(params[:id])
        byebug
        if UpdateScheduleService.new(schedule,schedule_params).call
            
            render json: schedule
        else
            
            render json: {error: "failed to make a schedule"}
        end
    end
# cancel schedule:
    def destroy
        schedule = Schedule.find(params[:id])
        schedule.destroy
    end

    private
    def schedule_params
        params.require(:schedule).permit(:user_id,:companyservice_id,:num_of_pets,
        :start_date,:start_time,:end_date, :end_time, :rating, :comment,:done,:totalCost,pictures:[])
    end
end
