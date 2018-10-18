class Post < ApplicationRecord
  acts_as_paranoid
  has_one_attached :image

  belongs_to :user, counter_cache: true
end
