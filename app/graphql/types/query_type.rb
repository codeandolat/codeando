module Types
  class QueryType < Types::BaseObject
    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    field :posts, [Types::PostType], null: false do
      argument :posts_type, String, required: true
    end

    def posts(posts_type:)
      get_posts(posts_type)
    end

    field :posts_connection, Types::PostType.connection_type, null: false do
      argument :posts_type, String, required: true
    end

    def posts_connection(posts_type:, **_args)
      get_posts(posts_type)
    end

    field :post, Types::PostType, null: false do
      argument :id, String, required: true
    end

    def post(id:)
      Post.find(id)
    end

    private

    def get_posts(posts_type)
      case posts_type
      when 'all'
        Post.eager_loading.last_published
      when 'blog'
        Post.eager_loading.without_videos
      when 'tutorials'
        Post.eager_loading.only_videos
      else
        Post.eager_loading.last_published
      end
    end
  end
end
