class Dog < ApplicationRecord
  belongs_to :user

  validates_presence_of :name, :breed, :size, :rabies, :rabies_docs
  validates :size, numericality: { only_integers: true }
end
