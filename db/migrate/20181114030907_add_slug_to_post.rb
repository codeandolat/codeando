class AddSlugToPost < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :slug, :string, null: false, default: '', index: true
  end
end
