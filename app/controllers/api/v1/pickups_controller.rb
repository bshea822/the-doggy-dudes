class Api::V1::PickupsController < ApplicationController
  protect_from_forgery unless: -> {request.format.json?}

  prepend_before_action(only: [:index, :destroy]) { request.env["devise.skip_timeout"] = true }

  before_action :authenticate_user!, only: [:index, :destroy]

  def index
    render json: current_user.pickups
  end
end
