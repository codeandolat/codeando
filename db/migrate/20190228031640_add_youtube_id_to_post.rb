class AddYoutubeIdToPost < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :youtube_id, :string, null: true
  end
end
