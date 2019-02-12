module Types
  class MutationType < Types::BaseObject
    field :likePost, mutation: Mutations::LikePost
  end
end
