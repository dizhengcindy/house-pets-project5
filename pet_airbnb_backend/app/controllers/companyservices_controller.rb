class CompanyservicesController < ApplicationController
    def index
        companyServices = Companyservice.all
        render json: companyServices
    end


end
