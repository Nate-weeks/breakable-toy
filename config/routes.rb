Rails.application.routes.draw do
  devise_for :users
  root 'schools#index'

  resources :schools do
    resources :classrooms do
    end
  end

  namespace :api do
    namespace :v1 do
      resources :classrooms, only: [:show] do
        resources :students
      end
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
