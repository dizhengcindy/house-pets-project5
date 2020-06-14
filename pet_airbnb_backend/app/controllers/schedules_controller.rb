class SchedulesController < ApplicationController
    def index
        schedules = Schedule.where("user_id=?", params[:user_id])
        render json: schedules
    end

    def create
        schedule = Schedule.new(schedule_params)
        if schedule.save
            render json: schedule
        else
            render json: {error: "failed to make a schedule"}
        end
    end

    def update
        schedule = Schedule.find(params[:id])
        if schedule.update(schedule_params)
            render json: schedule
        else
            render json: {error: "failed to make a schedule"}
        end
    end

    def destroy
        schedule = Schedule.find(params[:id])
        schedule.destroy
    end

    private
    def schedule_params
        params.require(:schedule).permit(:user_id,:companyservice_id,:num_of_pets,:start_date,:start_time,:end_date, :end_time, :rating, :comment,:done)
    end
end
