class PostsController < ActionController::Base
  def index
  end

  def new
  end

  protect_from_forgery with: :exception
end
