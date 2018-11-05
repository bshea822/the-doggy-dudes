class CreatePickup < ActiveRecord::Migration[5.2]
  def change
    create_table :pickups do |t|
      t.belongs_to :dog, null: false
      t.belongs_to :user, null: false
      t.belongs_to :service, null: false
      t.date :pickup_date, null: false
      t.text :instructions
      t.string :cost, null: false

      t.timestamps
    end
  end
end
