module Types
  class PostType < Types::BaseObject
    field :id, ID, null: false
    field :title, String, null: false
    field :subtitle, String, null: false
    field :content, String, null: false
    field :image_url, String, null: true
    field :created_at, String, null: false
    field :slug, String, null: false
    field :tag_list, [String], null: true
    field :author, Types::UserType, null: false

    def image_url
      attachment = Post.find(id)&.image_attachment
      return if attachment.nil?

      Rails.application.routes.url_helpers.rails_blob_url(attachment, only_path: true)
    end
  end
end
