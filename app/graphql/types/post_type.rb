module Types
  class PostType < Types::BaseObject
    field :id, ID, null: false
    field :title, String, null: false
    field :subtitle, String, null: false
    field :created_at, String, null: false
    field :tag_list, [String], null: true
    field :author, Types::UserType, null: false
  end
end
