class Pickup < ApplicationRecord
  belongs_to :user
  belongs_to :dog
  belongs_to :service

  validates_presence_of :pickup_date
end
