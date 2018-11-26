class AddStateToPost < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :state, :string
  end
end
