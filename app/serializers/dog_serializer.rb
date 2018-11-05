class DogSerializer < ActiveModel::Serializer
  attributes :id, :name, :user
  belongs_to :user
end
