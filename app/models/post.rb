class Post < ApplicationRecord
  acts_as_paranoid
  acts_as_taggable
  has_one_attached :image

  extend FriendlyId
  friendly_id :title, :use => [:slugged, :finders]

  validates :title, :subtitle, presence: true

  belongs_to :author, class_name: 'User', foreign_key: 'user_id', counter_cache: true

  private

  def should_generate_new_friendly_id?
    title_changed?
  end
end
