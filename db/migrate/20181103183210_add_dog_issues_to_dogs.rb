class AddDogIssuesToDogs < ActiveRecord::Migration[5.2]
  def change
    add_column :dogs, :dog_issues, :text
  end
end
