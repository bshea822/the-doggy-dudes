class Api::V1::PickupsController < ApplicationController
  protect_from_forgery unless: -> {request.format.json?}

  prepend_before_action(only: [:index, :destroy]) { request.env["devise.skip_timeout"] = true }

  before_action :authenticate_user!, only: [:index, :destroy]

  def index
    render json: current_user.pickups
  end

  def create
    pickup_params[:pickups].each do |payload|
      pickup = Pickup.new(payload)
      pickup.save
    end
    render json: current_user.pickups
  end

  private

  def pickup_params
    params.permit(pickups: [:dog_id, :service_id, :user_id, :pickup_date, :instructions])
  end

  # def check_for_errors(array)
  #   check_count = 0
  #   errors = []
  #   array.each do |element|
  #     test_pickup = Pickup.new(element)
  #     if test_pickup.valid?
  #       check_count ++
  #     else
  #       binding.pry
  #     end
  # end
  #
  # if array.length === check_count
  #   return true
  # else
  #   return false
  # end
end
