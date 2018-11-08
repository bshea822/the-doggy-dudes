class DogSerializer < ActiveModel::Serializer
  attributes :id, :name, :pickups
  belongs_to :user
  has_many :pickups
end
