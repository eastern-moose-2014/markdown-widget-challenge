class WelcomeController < ActionController::Base
  def index
  end
  protect_from_forgery with: :exception
end
