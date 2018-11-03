class AddTosNameToDogs < ActiveRecord::Migration[5.2]
  def change
    add_column :dogs, :tos_name, :string, null: false
  end
end
