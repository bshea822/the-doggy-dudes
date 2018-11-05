class Service < ApplicationRecord
  has_many :pickups

  validates_presence_of :service_name, :pickup_time, :dropoff_time
end
