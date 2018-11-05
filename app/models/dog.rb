class Dog < ApplicationRecord
  belongs_to :user

  validates_presence_of :name, :breed, :size, :rabies, :fixed, :tos_accept, :tos_name, :tos_date
  validates :size, numericality: { only_integers: true }

  mount_uploader :rabies_docs, RabiesDocsUploader
end
