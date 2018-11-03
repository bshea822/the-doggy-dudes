class AddTosDateToDogs < ActiveRecord::Migration[5.2]
  def change
    add_column :dogs, :tos_date, :date, null: false
  end
end
