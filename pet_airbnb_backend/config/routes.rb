Rails.application.routes.draw do
  resources :schedules
  resources :companyservices
  resources :companies
  resources :services
  resources :users
  
  get '/schedules/thisUser/:user_id', to: 'schedules#index'
  namespace :api do
    namespace :v1 do
      resources :users, only: [:create,:update,:destroy]
      post '/login', to: 'auth#create'
      get '/profile', to: 'users#profile'
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
