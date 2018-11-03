class AddFixedToDogs < ActiveRecord::Migration[5.2]
  def change
    add_column :dogs, :fixed, :boolean, null: false
  end
end
