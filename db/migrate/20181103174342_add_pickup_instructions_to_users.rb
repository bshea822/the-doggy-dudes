class AddPickupInstructionsToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :pickup_instructions, :text
  end
end
