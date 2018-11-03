class ChangeDogBirthdayToDate < ActiveRecord::Migration[5.2]
  def up
    change_column :dogs, :birthday, :date
  end

  def down
    change_column :dogs, :birthday, :datetime
  end
end
