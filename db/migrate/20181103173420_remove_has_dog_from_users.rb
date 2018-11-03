class RemoveHasDogFromUsers < ActiveRecord::Migration[5.2]
  def up
    remove_column :users, :has_dog
  end

  def down
    add_column :users, :has_dog, :boolean, null: false, default: false
  end
end
