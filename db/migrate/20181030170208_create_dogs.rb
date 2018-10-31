class CreateDogs < ActiveRecord::Migration[5.2]
  def change
    create_table :dogs do |t|
      t.belongs_to :user, null: false
      t.string :name, null: false
      t.string :breed, null: false
      t.integer :size, null: false
      t.datetime :birthday
      t.boolean :rabies, null: false
      t.string :rabies_docs, null: false
      t.text :shots
      t.text :dog_handling
      t.text :voice_commands
      t.text :dog_aggression

      t.timestamps null: false
    end
  end
end
