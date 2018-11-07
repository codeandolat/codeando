class ChangeSubtitleToBeText < ActiveRecord::Migration[5.2]
  def up
    change_column :posts, :subtitle, :text
  end

  def down
    change_column :posts, :subtitle, :string
  end
end
