class PickupsController < ApplicationController
  before_action :authenticate_user!
  def index
    render "homes/index"
  end
end
