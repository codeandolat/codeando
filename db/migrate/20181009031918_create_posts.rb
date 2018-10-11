class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.references :user, foreign_key: true, on_delete: :cascade
      t.string :title, null: false, default: ''
      t.text :content

      t.timestamps
    end
  end
end
