class AddTosAcceptToDogs < ActiveRecord::Migration[5.2]
  def change
    add_column :dogs, :tos_accept, :boolean, null: false
  end
end
