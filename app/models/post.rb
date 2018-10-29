class Post < ApplicationRecord
  acts_as_paranoid
  has_one_attached :image

  validates :title, :subtitle, presence: true

  belongs_to :author, class_name: 'User', foreign_key: 'user_id', counter_cache: true
end
