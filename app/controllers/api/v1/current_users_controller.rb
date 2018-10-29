class Api::V1::CurrentUsersController < ApplicationController
  protect_from_forgery unless: -> {request.format.json?}
  skip_before_action :authenticate_user!

  def index
    render json: current_user
  end
end
