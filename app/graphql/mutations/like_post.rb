module Mutations
  class LikePost < GraphQL::Schema::RelayClassicMutation
    # Example
    # mutation {
    #   likePost(input: {
    #     slug: "slug-blog"
    #   }) {
    #     post{
    #       id
    #       title
    #     }
    #   }
    # }

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
