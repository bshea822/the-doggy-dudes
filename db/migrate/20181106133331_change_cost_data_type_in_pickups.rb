class ChangeCostDataTypeInPickups < ActiveRecord::Migration[5.2]
  def up
    remove_column :pickups, :cost
    add_column :pickups, :cost, :decimal, precision: 6, scale: 2, null: false
  end

  def down
    remove_column :pickups, :cost
    add_column :pickups, :cost, :string, null: false
  end
end
