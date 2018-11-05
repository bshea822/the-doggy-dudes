class Api::V1::DogsController < ApplicationController
  protect_from_forgery unless: -> {request.format.json?}
  protect_from_forgery except: :create

  prepend_before_action(only: [:index, :destroy]) { request.env["devise.skip_timeout"] = true }

  before_action :authenticate_user!, only: [:destroy]



  def create
		dog = Dog.new(dog_params)
    binding.pry
		if dog.save!
			render json: current_user.dogs
		else
			render json: {error: dog.errors.full_messages.join(', ') }, status: :unprocessable_entity
		end
	end

  private

  def dog_params
    params.require(:dog).permit(:name, :breed, :size, :birthday, :rabies, :rabies_docs, :shots, :dog_handling, :voice_commands, :dog_aggression, :fixed, :dog_return, :dog_issues, :tos_accept, :tos_name).merge(tos_date: Time.now, user: current_user)
  end
end
