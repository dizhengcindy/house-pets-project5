Rails.application.routes.draw do
  resources :schedules, only: [:index,:create,:destory,:update]
  resources :companyservices, only: [:index]
  resources :companies, only: [:index, :show]
  resources :services, only: [:index]
  resources :users
  
  get '/schedules/userSchedules/:user_id', to: 'schedules#userSchedules'
  namespace :api do
    namespace :v1 do
      resources :users, only: [:create,:update,:destroy]
      post '/login', to: 'auth#create'
      get '/profile', to: 'users#profile'
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
