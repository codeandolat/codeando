module Types
  class MutationType < Types::BaseObject
    field :create_post, Types::PostType, null: false do
      argument :title, String, required: true
      argument :subtitle, String, required: true
    end

    def create_post(title:, subtitle:)
      context[:current_user].posts.create(
        title: title,
        subtitle: subtitle
      )
    end
  end
end
