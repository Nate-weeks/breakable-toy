Rails.application.routes.draw do
  devise_for :users
  root 'schools#index'
  authenticate :user do
    resources :schools do
        resources :users, only: [:update, :destroy] do
          member do
            patch :update_school_approval
            put :update_school_approval
          end
        end
      resources :classrooms do
        resources :users, only: [:update] do
          member do
            patch :update_number_two
            put :update_number_two
            delete :destroy_number_two
            patch :update_class_approval
            put :update_class_approval
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
