class CreateServices < ActiveRecord::Migration[5.2]
  def change
    create_table :services do |t|
      t.string :service_name, null: false
      t.time :pickup_time, null: false
      t.time :dropoff_time, null: false

      t.timestamps null: false
    end
  end
end
