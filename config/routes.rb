Rails.application.routes.draw do
  devise_for :users
  root 'schools#index'
  authenticate :user do
    resources :schools do
        resources :users, only: [:update] do
        end
      resources :classrooms do
        resources :users, only: [:update] do
          member do
            patch :update_number_two
            put :update_number_two
          end
        end
      end
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
