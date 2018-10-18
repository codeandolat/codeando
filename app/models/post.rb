class Post < ApplicationRecord
  acts_as_paranoid
  has_one_attached :image

  validates :title, :subtitle, presence: true

  belongs_to :user, counter_cache: true
end
