class WelcomeController < ApplicationController
  def index
  end
  protect_from_forgery with: :exception
end
