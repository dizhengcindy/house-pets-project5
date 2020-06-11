class SchedulesController < ApplicationController
    def create
        byebug
        schedule = Schedule.new(schedule_params)
        byebug
        if schedule.save
            render json: schedule
        else
            render json: {error: "failed to make a schedule"}
        end
    end

    def update
        schedule = Schedule.find(param[:id])
        if Schedule.update(schedule_params)
            render json: schedule
        else
            render json: {error: "failed to make a schedule"}
        end
    end

    def index
        schedules = Schedule.all
        render json: schedules
    end

    def destroy
        schedule = Schedule.find(params[:id])
        schedule.destroy
    end

    private
    def schedule_params
        params.require(:schedule).permit(:user_id,:companyservice_id,:num_of_pets,:start_date,:start_time,:end_date, :end_time, :rating, :comment)
    end
end
