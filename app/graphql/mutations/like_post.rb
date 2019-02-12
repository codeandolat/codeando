module Mutations
  class LikePost < GraphQL::Schema::RelayClassicMutation
    # return type
    field :post, Types::PostType, null: false

    # arguments
    argument :slug, String, required: true

    # resolve method
    def resolve(slug: nil)
      post = Post.find(slug)
      post.liked_by(context[:current_user])
      {post: post}
    end
  end
end
