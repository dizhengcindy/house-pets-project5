class CompaniesController < ApplicationController
    def index
        companies = Company.all
        render json: companies
        #  render json: CompanySerializer.new(companies) 
      
    end

    def show
        company = Company.find(params[:id])
        render json: company
    end
end
