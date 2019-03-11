module Types
  class QueryType < Types::BaseObject
    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    field :posts, [Types::PostType], null: false do
      argument :posts_type, String, required: true
    end

    def posts(posts_type:)
      case posts_type
      when 'all'
        Post.last_published
      when 'blog'
        Post.without_videos
      when 'tutorials'
        Post.only_videos
      else
        Post.all.last_published
      end
    end

    field :post, Types::PostType, null: false do
      argument :id, String, required: true
    end

    def post(id:)
      Post.find(id)
    end
  end
end
