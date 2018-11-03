class AddDogReturnToDogs < ActiveRecord::Migration[5.2]
  def change
    add_column :dogs, :dog_return, :text
  end
end
