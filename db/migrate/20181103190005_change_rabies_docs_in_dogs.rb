class ChangeRabiesDocsInDogs < ActiveRecord::Migration[5.2]
  def change
    change_column_null :dogs, :rabies_docs, true
  end
end
