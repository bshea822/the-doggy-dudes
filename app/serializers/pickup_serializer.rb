class PickupSerializer < ActiveModel::Serializer
  attributes :id, :pickup_date, :instructions, :user, :dog, :service
  
  belongs_to :user
  belongs_to :dog
  belongs_to :service
end
