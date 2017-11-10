class ApplicationController < ActionController::Base
  if @current_user
    @user = @current_user
  end

  protect_from_forgery with: :exception
  before_action :configure_permitted_parameters, if: :devise_controller?

  private

  def configure_permitted_parameters
  devise_parameter_sanitizer.permit(:sign_up) { |u| u.permit(:first_name, :last_name, :email, :password,
    :password_confirmation, :avatar, :avatar_cache, :remove_avatar) }
  devise_parameter_sanitizer.permit(:account_update) { |u| u.permit(:first_name, :last_name, :username, :email, :password,
    :password_confirmation, :current_password, :avatar, :avatar_cache, :remove_avatar) }
  end
end
